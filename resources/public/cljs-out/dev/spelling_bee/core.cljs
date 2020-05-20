(ns ^:figwheel-hooks spelling-bee.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as rdom]
   [goog.object :as gobj]
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

(def word-list #{"AGAR"	"ALGA" "ALGAL" "ANAL"	"ANGULAR"	"ANNAL" 
                "ANNUAL" "ANNUL"	"ANNULAR"	"ARUGULA" "AUGUR" "AUGURAL" 
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

(defonce answer (r/atom ""))
(defonce found-words (r/atom #{}))
(defonce points (r/atom [0]))
;(defonce message (r/atom "")) ;; informs the result of the answer

;; utilities functions
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
  (some #(= (str/upper-case word) %) @found-words))
;; a function to check profanity maybe needed


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
  [word]
  (if (and (not (found-word? @answer)) 
           (in-word-list? (str/upper-case @answer)))
    (do (swap! found-words conj (str/upper-case @answer))
        (swap! points conj (give-point @answer))
        (reset! answer ""))
    (reset! answer "")))

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
  [value]
  [:div
    [:input {:type "text"
            :value @answer
            :on-change #(reset! answer (-> % .-target .-value))}]
    [:input {:type "button"
            :value "Submit"
            :on-click #(handle-submit @answer)}]])

(defn list-found-words
  "Displays all items from a sequence to browser"
  []
  [:div
    [:h3 "Found words (" (count @found-words) ")"]
    [:ul
      (for [item (apply sorted-set @found-words)]
        ^{:key item} [:li item])]])

(defn get-answer 
  []
  (fn []
    [:div
      [:h3 "Enter your answer: " [set-input answer]]
      [:p "Your answer is: " (str/upper-case @answer)]
      [:p {:style {:color :red}} (display-message @answer)]]))

(defn display-points
  []
  [:div
    [:h2 {:style {:color :orange}} "Total Point: " (reduce + @points)]])

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
