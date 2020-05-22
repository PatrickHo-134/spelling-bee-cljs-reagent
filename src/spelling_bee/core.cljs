(ns ^:figwheel-hooks spelling-bee.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as rdom]
   [re-frame.core :as rf]
   [clojure.string :as str]))

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
(def letters [\L \R \G \A \D \N \U])
(def center-letter \A)

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

;; event handlers
(rf/reg-event-db ; initialize db
  :initialize
  (fn [_ _]
    {:answer ""
     :found-words #{}
     :points [0]}))

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utility functions
(defn too-short?
  "Returns predicate value if a word has equal or less than 3 letters"
  [word]
  (>= 3 (count word)))

(defn in-word-list?
  "Returns predicate value if a word is in word list"
  [word]
  (some #(= (str/upper-case word) %) word-list))

(defn include-center-letter?
  "Returns predicate value if a word has center letter"
  [word]
  (some #(= center-letter (str/upper-case %)) (set word)))

(defn pangram?
  "Returns predicate value if a word is a pangram"
  [word]
  (and (in-word-list? word)
       (= (set (str/upper-case word)) (set letters))))

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
  (some #(= (str/upper-case word) %) @(rf/subscribe [:found-words])))
;; a function to check profanity maybe needed
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; (println @(rf/subscribe [:points]) 
;          @(rf/subscribe [:answer]) 
;          @(rf/subscribe [:found-words]))

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
  (let [new-answer (str/upper-case @(rf/subscribe [:answer]))]
    (if (and (not (found-word? new-answer))
            (in-word-list? new-answer))
      (let [words @(rf/subscribe [:found-words])
            new-found-words (conj words new-answer)
            new-points (conj @(rf/subscribe [:points]) (give-point new-answer))]
        (do (println new-answer new-found-words new-points)
            (dispatch-new-found-words new-found-words)
            (dispatch-new-points new-points)
            (dispatch-user-input "")))
      (dispatch-user-input ""))))

(defn handle-key-press
  "Submits answer if user press Enter"
  [e]
  (if (= 13 (.-charCode e))
    (handle-submit)))

(defn handle-delete
  []
  (dispatch-user-input ""))

;; components
(defn display-letters
  "Displays list of characters to browser"
  [chars]
  [:div
    [:h2 "How many words can you make with these characters?"]
    [:h3 {:style {:text-align :center}} (interpose " -- " chars)]
    [:p "Words must include letter A (center letter)"]])

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
    [:ul
      (for [item (apply sorted-set @(rf/subscribe [:found-words]))]
        ^{:key item} [:li item])]])

(defn get-answer 
  []
  (fn []
    [:div
      [:h3 "Enter your answer: "]
      [set-input]
      [:p "Your answer is: " (str/upper-case @(rf/subscribe [:answer]))]
      [:p {:style {:color :red}} (display-message @(rf/subscribe [:answer]))]]))

(defn display-points
  []
  [:div
    [:h2 {:style {:color :orange}} "Total Point: " (reduce + @(rf/subscribe [:points]))]])

(defn main
  []
  [:<>
    [:h1 {:style {:color :orange :text-align :center}} "Welcome to Spelling Bee!!"]
    [display-letters letters]
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



; Ranks are based on a percentage of possible points in a puzzle. The minimum scores to reach each rank for today’s are:

; Beginner (0)
; Good Start (3)
; Moving Up (7)
; Good (11)
; Solid (20)
; Nice (34)
; Great (54)
; Amazing (67)
; Genius (94)

; modify letters displaying function
; adding delete button
; adding shuffle button
; point slider
; faded irrelevant letters
; pop-up appears with a message