(ns ^:figwheel-hooks spelling-bee.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as rdom]
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
(def word-list #{"AGAR" "ALGA" "ALGAL" "ANAL" "ANGULAR" "ANNAL" 
                "ANNUAL" "ANNUL" "ANNULAR" "ARUGULA" "AUGUR" "AUGURAL" 
                "AURA" "AURAL" "DANG" "DARN" "DRAG" "DRUG" "DUAD" "DUAL" 
                "DULL" "DULLARD" "DUNG" "GAGA" "GALA" "GALL" "GANG" 
                "GANGLAND" "GARLAND" "GLAD" "GLAND" "GLANDULAR" "GLUG" 
                "GNARL" "GRAD" "GRADUAL" "GRAN" "GRAND" "GRANDAD" 
                "GRANDDAD" "GRANULAR" "GUAR" "GUARD" "GULAG" "GULL" 
                "GURU" "LAGGARD" "LAND" "LANDAU" "LARD" "LAUD" "LUAU" 
                "LULL" "LULU" "LUNA" "LUNAR" "LUNG" "LUNULA" "NAAN" 
                "NADA" "NANA" "NULL" "RADAR" "RAGA" "RAGLAN" "RAND" 
                "RANG" "RUNG" "RURAL" "ULNA" "ULNAR" "UNGAG"})
(def letters [\A \L \R \G \D \N \U]) ;; always put center-letter at the beginning of the list

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
     :rank "Beginner"})) ; should we store rank since it can be derived from points

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
(rf/reg-sub ; subscribe points
  :points
  (fn [db _]
    (:points db)))

(rf/reg-sub ; subscribe found-words
  :found-words
  (fn [db _]
    (:found-words db)))

(rf/reg-sub ; subscribe answer
  :answer
  (fn [db _]
    (:answer db)))

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
      (and (<= 5 total-point) (> 8 total-point))   "Moving Up"
      (and (<= 8 total-point) (> 16 total-point))  "Good"
      (and (<= 16 total-point) (> 27 total-point)) "Solid"
      (and (<= 27 total-point) (> 42 total-point)) "Nice"
      (and (<= 42 total-point) (> 53 total-point)) "Great"
      (and (<= 53 total-point) (> 74 total-point)) "Amazing"
      (<= 74 total-point) "Genius")))

;; a function to check profanity maybe needed
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; (println @(rf/subscribe [:points]) 
;          @(rf/subscribe [:answer]) 
;          @(rf/subscribe [:found-words])
;          @(rf/subscribe [:letters]))

(defn display-message
  "Displays result of the answer"
  [word]
  (cond 
    (= "" word)                   ""
    (too-short? word)             "Too-short!"
    (and (not (found-word? word)) 
         (pangram? word))         "Genius!"
    (and (not (found-word? word)) 
         (not (pangram? word))
         (in-word-list? word))    "Very good!"
    (found-word? word)            "Repeated answer!"
    :else                         "Not in word list!"))

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
            (dispatch-user-input "")
        )
      )
      (dispatch-user-input ""))))

(defn handle-key-press
  "Submits answer if user press Enter"
  [e]
  (if (= 13 (.-charCode e))
    (handle-submit)))

(defn handle-delete
  []
  (dispatch-user-input ""))

(defn handle-shuffle
  []
  (let [chars @(rf/subscribe [:letters])
        center-letter (first chars)
        other-letters (shuffle (rest chars))
        new-order (concat center-letter other-letters)]
    (dispatch-new-letter-order (vec new-order))))

;; components
(defn list-letters
  "Lists letters in buttons"
  [chars]
  [:div {:style {:margin "50px 50px 20px 50px"}}
    [:div
      (for [letter (subvec chars 1 4)]
        ^{:key letter} [:input {:type "button"
                                :value letter}])]
    [:input {:style {:background-color :orange} ; center letter button
             :type "button"
             :value (first chars)}]
    [:div
      (for [letter (subvec chars 4 7)]
        ^{:key letter} [:input {:type "button"
                                :value letter}])]])

(defn display-letters
  "Displays list of characters to browser"
  []
  [:div
    [:h2 "How many words can you make with these characters?"]
    [:p "Words must include center letter"]
    [list-letters @(rf/subscribe [:letters])]
    [:input {:type "button"
             :value "Shuffle"
             :on-click #(handle-shuffle)}]])

(defn set-input
  "Set input value to answer"
  []
  [:div {:style {:margin-bottom "10px"}}
    [:input {:type "text"
             :value @(rf/subscribe [:answer])
             :on-change #(dispatch-user-input (-> % .-target .-value))
             :on-key-press #(handle-key-press %)}]
    [:input {:type "button"
             :value "Submit"
             :on-click #(handle-submit)}]
    [:input {:type "button"
             :value "Delete"
             :on-click #(handle-delete)}]])

(defn list-found-words
  "Displays all items from a sequence to browser"
  []
  [:div
    [:h3 "Found words (" (count @(rf/subscribe [:found-words])) ")"]
    [:ol
      (for [item (apply sorted-set @(rf/subscribe [:found-words]))]
        ^{:key item} [:li item])]])

(defn get-answer 
  []
  (fn []
    [:div
      [:h3 "Enter your answer: "]
      [set-input]
      [:p "Your answer is: " (s/upper-case @(rf/subscribe [:answer]))]
      [:p {:style {:color :red}} (display-message @(rf/subscribe [:answer]))]]))

(defn display-points
  []
  [:div
    [:h2 
      {:style {:color :orange}} 
      "Total Point: " (reduce + @(rf/subscribe [:points]))]
    [:h3 (get-rank @(rf/subscribe [:points]))
      [:input {:style {:background-color :orange :width "50%" :border-radius "10%"}
               :type "range"  ; slider or range??
               :value (reduce + @(rf/subscribe [:points]))
               :min 0
               :max 100
               :disabled false}]]])

(defn main
  []
  [:<>
    [:h1 {:style {:color :orange :text-align :center}} "Welcome to Spelling Bee!!"]
    [display-letters @(rf/subscribe [:letters])]
    [get-answer]
    [display-points]
    [list-found-words]])

;; display components to browser
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
; pop-up on click from point slider 
; faded irrelevant letters / different color for input
; pop-up appears with a message

