(ns ^:figwheel-hooks spelling-bee.core
  (:require
   [goog.dom :as gdom]
   [goog.string :as gstring]
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as rdom]
   [reagent-modals.modals :as reagent-modals]
   [re-frame.core :as rf]
   [clojure.string :as s]))

;; rules
; Words must contain at least 4 letters.
; Words must include the center letter.
; Our word list does not include words that are obscure, hyphenated, or proper nouns.
; No cussing either, sorry.
; Letters can be used more than once.

;; scores
; 4-letter words are worth 1 point each.
; Longer words earn 1 point per letter.
; Each puzzle includes at least one “pangram” which uses every letter. 
; These are worth 7 extra points!

;; input
(def results #{"babyproof" "afar" "affray" "afro" "arbor" "array" "arroyo" "barb" "barf" 
               "boar" "boor" "bray" "farro" "fora" "foray" "fray" "parry" 
               "poor" "pray" "proof" "prop" "pyro" "roar" "roof" "ropy"})
(def word-list (map s/upper-case results)) ; should I put it in re-frame database?
(def letters [\R \A \B \F \O \P \Y]) ;; always put center-letter at the beginning of the list

;; event dispatch
(defn dispatch-user-input
  [input]
  (rf/dispatch [:answer-input input]))

(defn dispatch-new-points
  [new-points]
  (rf/dispatch [:new-points new-points]))

(defn dispatch-new-found-words
  [new-words]
  (rf/dispatch [:new-found-words new-words]))

(defn dispatch-new-letter-order
  [new-order]
  (rf/dispatch [:new-letter-order new-order]))

(defn dispatch-new-rank
  [upper-rank]
  (rf/dispatch [:new-rank upper-rank]))

;; event handlers
(rf/reg-event-db ; initialize db
  :initialize
  (fn [_ _]
    {:letters letters
     :answer ""
     :found-words #{}
     :points [0]
     :display-message true
     :rank "Beginner"}))

; ignore this part i'm working on it
(rf/reg-sub ; subscribe display-message
  :display-message
  (fn [db _]
    (:display-message db)))
(rf/reg-event-db ; dispatch when the user changes the answer
  :new-message
  (fn [db [_ new-mess]]
    (assoc db :display-message new-mess)))
(defn dispatch-message
  [mess]
  (rf/dispatch [:new-message mess]))
; (println @(rf/subscribe [:display-message]))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(rf/reg-event-db ; dispatch when the user changes the answer
  :answer-input
  (fn [db [_ new-answer]]
    (assoc db :answer new-answer)))

(rf/reg-event-db ; dispatch when a new point is given
  :new-points
  (fn [db [_ new-points]]
    (assoc db :points new-points)))

(rf/reg-event-db ; dispatch when a new word is found
  :new-found-words
  (fn [db [_ new-words]]
    (assoc db :found-words new-words)))

(rf/reg-event-db ; dispatch when shuffle letter
  :new-letter-order
  (fn [db [_ new-order]]
    (assoc db :letters new-order)))

(rf/reg-event-db ; dispatch when going upper rank
  :new-rank
  (fn [db [_ upper-rank]]
    (assoc db :rank upper-rank)))

;; query
(rf/reg-sub ; subscribe answer
  :answer
  (fn [db _]
    (:answer db)))

(rf/reg-sub ; subscribe points
  :points
  (fn [db _]
    (:points db)))

(rf/reg-sub ; subscribe found-words
  :found-words
  (fn [db _]
    (:found-words db)))

(rf/reg-sub ; subscribe letters
  :letters
  (fn [db _]
    (:letters db)))

(rf/reg-sub ; subscribe player rank
  :rank
  (fn [db _]
    (:rank db)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utility functions
(defn too-short?
  "Returns predicate value if a word has equal or less than 3 letters"
  [word]
  (>= 3 (count word)))

(defn in-word-list?
  "Returns predicate value if a word is in word list"
  [word]
  (some #(= (s/upper-case word) %) word-list))

(defn include-center-letter?
  "Returns predicate value if a word has center letter"
  [word]
  (some #(= (first @(rf/subscribe [:letters])) (s/upper-case %)) (set word)))

;; should fix this function
(defn pangram?
  "Returns predicate value if a word is a pangram"
  [word]
  (and (in-word-list? word)
       (= (set (s/upper-case word)) (set @(rf/subscribe [:letters])))))

(defn give-point
  "Returns point if a word is in word list"
  [word]
  (if (not (in-word-list? word))
    0
    (let [point (- (count word) 3)]
      (if (not (pangram? word))
        point
        (+ point 7)))))

(defn found-word?
  "Returns predicate value if a word is already found"
  [word]
  (some #(= (s/upper-case word) %) @(rf/subscribe [:found-words])))

(defn get-rank
  [points]
  (let [total-point (reduce + points)]
    (cond 
      (> 2 total-point)                            "Beginner"
      (and (<= 2 total-point) (> 5 total-point))   "Good Start"
      (and (<= 5 total-point) (> 7 total-point))   "Moving Up"
      (and (<= 7 total-point) (> 14 total-point))  "Good"
      (and (<= 14 total-point) (> 23 total-point)) "Solid"
      (and (<= 23 total-point) (> 37 total-point)) "Nice"
      (and (<= 37 total-point) (> 47 total-point)) "Great"
      (and (<= 47 total-point) (> 65 total-point)) "Amazing"
      (<= 65 total-point)                          "Genius")))

(defn check-answer
  "Displays result of the answer"
  [word]
  (cond 
    (= "" word)                         ""
    (too-short? word)                   "Too short!"
    (and (not (found-word? word)) 
         (pangram? word))               "Genius!"
    (and (not (found-word? word)) 
         (not (pangram? word))
         (in-word-list? word))          "Very good!"
    (found-word? word)                  "Repeated answer!"
    (not (include-center-letter? word)) "Missing center letter"
    :else                               "Not in word list!"))
;; a function to check profanity maybe needed
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; helper functions
(defn handle-submit
  "Handles click on submit button"
  []
  (let [new-answer (s/upper-case @(rf/subscribe [:answer]))]
    (if (and (not (found-word? new-answer))
            (in-word-list? new-answer))
      (let [words @(rf/subscribe [:found-words])
            new-found-words (conj words new-answer)
            new-points (conj @(rf/subscribe [:points]) (give-point new-answer))]
        (do (dispatch-new-found-words new-found-words)
            (dispatch-new-points new-points)
            (dispatch-new-rank (get-rank new-points))
            (dispatch-user-input "")))
      (dispatch-user-input ""))))

(defn handle-key-press
  "Submits answer if user press Enter"
  [e]
  (if (= 13 (.-charCode e))
    (handle-submit)))

(defn handle-delete
  []
  (let [current-answer @(rf/subscribe [:answer])
        new-answer (subs current-answer 0 (- (count current-answer) 1))]
    (dispatch-user-input new-answer)))

(defn handle-shuffle
  []
  (let [chars @(rf/subscribe [:letters])
        center-letter (first chars)
        other-letters (shuffle (rest chars))
        new-order (concat center-letter other-letters)]
    (dispatch-new-letter-order (vec new-order))))

;; components
;; buttons
(defn shuffle-button
  []
  [:input {:type "button"
           :value "Shuffle"
           :on-click #(handle-shuffle)}])

(defn submit-button
  []
  [:input {:type "button"
           :value "Enter"
           :on-click #(handle-submit)}])

(defn delete-button
  []
  [:input {:type "button"
           :value "Delete"
           :on-click #(handle-delete)}])

(defn letter-buttons
  "Creates a list of letter buttons"
  [chars]
  (for [letter chars]
        ^{:key letter} [:input {:class "LetterButton"
                                :type "button"
                                :value letter
                                :on-click #(dispatch-user-input 
                                            (str @(rf/subscribe [:answer]) (-> % .-target .-value)))}]))

(defn list-letters
  "Lists letters in buttons"
  [chars]
  [:div {:style {:margin "20px 50px 20px 50px"}}
    [:div (letter-buttons (subvec chars 1 4))]
    [:input {:class "LetterButton"
             :style {:background-color :orange} ; center letter button
             :type "button"
             :value (first chars)
             :on-click #(dispatch-user-input (str @(rf/subscribe [:answer]) (-> % .-target .-value)))}]
    [:div (letter-buttons (subvec chars 4 7))]])

;; rendering components
(defn display-letters
  "Displays list of characters to browser"
  []
  [:div
    [:h3 "How many words can you make with these characters?"]
    [:p "Words must include center letter"]
    [list-letters @(rf/subscribe [:letters])]
    [submit-button]
    [shuffle-button]
    [delete-button]])

(defn get-answer 
  []
  (fn []
    [:div {:style {:margin-top "50px"}}
      [:h3 "Enter your answer: "]
      [:div {:style {:margin-bottom "10px"}} ;; get input from user
        [:input {:type "text"
                :value @(rf/subscribe [:answer])
                :on-change #(dispatch-user-input (-> % .-target .-value))
                :on-key-press #(handle-key-press %)}]]
      [:p "Your answer is: " (s/upper-case @(rf/subscribe [:answer]))]
      (if @(rf/subscribe [:display-message])
        [:p {:class "TextFadeInAndOut"
            :style {:color :red
                    :margin "0 auto"
                    :font-weight "bold"}} 
            (check-answer @(rf/subscribe [:answer]))])]))

(defn ranking-information ; ranking points change depending on the game
  []
  [:div
    [:h2 "Rankings"]
    [:p "Ranks are based on a percentage of possible points in a puzzle. The minimum scores to reach each rank for today’s are:"]
    [:ul
      [:li "Beginner (0)"]
      [:li "Good Start (2)"]
      [:li "Moving Up (5)"]
      [:li "Good (7)"]
      [:li "Solid (14)"]
      [:li "Nice (23)"]
      [:li "Great (37)"]
      [:li "Amazing (47)"]
      [:li "Genius (65)"]]
    [:p "Have feedback? Email us at " [:a {:href "phat.hovinh.13@gmail.com"} "phat.hovinh.13@gmail.com"]]])

(defn display-points
  []
  (let [points @(rf/subscribe [:points])]
    [:div
      [:h3 
        {:style {:color :orange}} 
        "Total Point: " (reduce + points)]
      [:h4 {:style {:font-weight "bold" :margin-top "20px"}}
        (get-rank points)
        [reagent-modals/modal-window] ; need to add modal-window before bringing up modal window
        [:input {:class "slider"
                :style {:width "70%" :margin "0 auto"}
                :type "range"  ; slider or range??
                :value (reduce + points)
                :min 0
                :max 100   ;; need to change this for the input
                :disabled false
                :on-click #(reagent-modals/modal! (ranking-information))}]]]))

(defn list-found-words
  "Displays all items from a sequence to browser"
  []
  (let [words @(rf/subscribe [:found-words])]
    [:div
      [:h3 "Found words (" (count words) ")"]
      [:ol
        (for [item (apply sorted-set words)]
          ^{:key item} [:li item])]]))

(defn main
  []
  [:<>
    [:h1 {:style {:color :orange :text-align :center}} "Welcome to Spelling Bee!!"]
    [:div {:class "col-6 col-md-6"}
      [display-letters @(rf/subscribe [:letters])]
      [get-answer]]
    [:div {:style {:margin-top "50px"}
           :class "col-6 col-md-6"}
      [display-points]
      [list-found-words]]])

;; display components to the dom
(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (r/render-component [main] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (rf/dispatch-sync [:initialize])
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

; modify letters displaying function => done
; adding delete button => done
; adding shuffle button => done
; point slider => done
; add player ranking => done
; pop-up on click from point slider => done
; filter out bad characters
; different colors for input letters
; pop-up appears after submitting answer

