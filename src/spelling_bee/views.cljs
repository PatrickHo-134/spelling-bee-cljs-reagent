(ns spelling-bee.views
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :as rf]
            [reagent-modals.modals :as reagent-modals]
            [clojure.string :as s]
            [goog.events :as gevents]))

;; utility functions
(defn too-short?
  "Returns predicate value if a word has equal or less than 3 letters"
  [word]
  (>= 3 (count word)))

(defn in-list?
  "Returns predicate value if a value is in a list"
  [val lst]
  (some #(= val %) lst))

(defn include-center-letter?
  "Returns predicate value if a word has center letter"
  [word c-letter]
  (some #(= c-letter (s/upper-case %)) (set (s/upper-case word))))

(defn pangram?
  "Returns predicate value if a word is a pangram"
  [word letters]
  (= (set (s/upper-case word)) (set letters)))

;; a function to check profanity maybe needed

;; event dispatch functions
(defn dispatch-new-word-list
  [word-list]
  (rf/dispatch [:new-list word-list]))

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

; helper functions
(defn- calculate-point
  "Returns point if a word is in word list"
  [word]
  (let [results @(rf/subscribe [:word-list])
        letters @(rf/subscribe [:letters])]
  (if (not (in-list? word results))
    0
    (let [point (if (= 4 (count word)) 
                  1
                  (count word))]
      (if (not (pangram? word letters))
        point
        (+ point 7))))))

(defn- get-max-point
  "Return maximum point of a game"
  []
  (->> @(rf/subscribe [:word-list])
       (map calculate-point)
       (reduce +)))

(defn- get-rank
  "Returns a rank corresponding to the current point"
  [points results]
  (let [curr-point (reduce + points)
        max-point (get-max-point)]
    (cond 
      (> (int (* 0.02 max-point)) curr-point)       "Beginner"
      
      (and (<= (int (* 0.02 max-point)) curr-point) 
           (> (int (* 0.05 max-point)) curr-point)) "Good Start"
           
      (and (<= (int (* 0.05 max-point)) curr-point) 
           (> (int (* 0.1 max-point)) curr-point))  "Moving Up"

      (and (<= (int (* 0.1 max-point)) curr-point) 
           (> (int (* 0.2 max-point)) curr-point))  "Good"

      (and (<= (int (* 0.2 max-point)) curr-point) 
           (> (int (* 0.3 max-point)) curr-point))  "Solid"

      (and (<= (int (* 0.3 max-point)) curr-point) 
           (> (int (* 0.4 max-point)) curr-point))  "Nice"

      (and (<= (int (* 0.4 max-point)) curr-point) 
           (> (int (* 0.5 max-point)) curr-point))  "Great"

      (and (<= (int (* 0.5 max-point)) curr-point) 
           (> (int (* 0.7 max-point)) curr-point))  "Amazing"

      (<= (int (* 0.7 max-point)) curr-point)       "Genius")))

(defn- check-answer
  "Displays result of the answer"
  [word]
  (let [letters     @(rf/subscribe [:letters])
        found-words @(rf/subscribe [:found-words])
        word-list   @(rf/subscribe [:word-list])]
    (cond 
      (= "" word)                                         ""

      (too-short? word)                                   "Too short!"

      (and (not (in-list? word found-words)) 
           (pangram? word letters))                       "Genius!" ; pangram!

      (and (not (in-list? word found-words)) 
           (not (pangram? word letters))
           (in-list? word word-list))                     "Very good!"

      (in-list? word found-words)                         "Repeated answer!"

      (not (include-center-letter? word (first letters))) "Missing center letter"

      :else                                               "Not in word list!")))

; handle event functions
(defn- handle-submit
  "Handles click on submit button"
  []
  (let [new-answer @(rf/subscribe [:answer])
        found-words @(rf/subscribe [:found-words])
        results @(rf/subscribe [:word-list])]
    (if (and (not (in-list? new-answer found-words)) ; not in word-list and not a found word
             (in-list? new-answer results))
      (let [new-found-words (conj found-words new-answer)
            new-points (conj @(rf/subscribe [:points]) (calculate-point new-answer))]
        (do (dispatch-new-found-words new-found-words)
            (dispatch-new-points new-points)
            (dispatch-new-rank (get-rank new-points results))
            (dispatch-user-input "")))
      (dispatch-user-input ""))))

(defn- handle-delete
  []
  (let [current-answer @(rf/subscribe [:answer])
        new-answer (subs current-answer 0 (- (count current-answer) 1))]
    (dispatch-user-input new-answer)))

(defn- handle-shuffle
  []
  (let [chars @(rf/subscribe [:letters])
        center-letter (first chars)
        other-letters (shuffle (rest chars))
        new-order (concat center-letter other-letters)]
    (dispatch-new-letter-order (vec new-order))))

(defn- listen-to-key-press!
  [DomElement]
  (gevents/listen DomElement goog.events.EventType.KEYDOWN
    (fn [evt]
    (.preventDefault evt)
    (cond
        (or (= 8 evt.keyCode) (= 46 evt.keyCode)) ; delete
        (handle-delete)

        (= 13 evt.keyCode) ; enter
        (handle-submit)

        (and (<= 65 evt.keyCode) (>= 90 evt.keyCode))
        (let [current-answer @(rf/subscribe [:answer])
              new-answer (str current-answer (s/upper-case evt.key))]
            (dispatch-user-input new-answer))

        :else (dispatch-user-input @(rf/subscribe [:answer]))))))

;; buttons
(defn shuffle-button
  []
  [:button 
    {:class "btn btn-light btn-sm" 
     :type "button"
     :style {:margin "5px 5px" :width "60px"}
     :on-click #(handle-shuffle)}
    "shuffle"])

(defn submit-button
  []
  [:button 
    {:class "btn btn-success btn-sm"
     :type "button"
     :style {:width "60px"}
     :on-click #(handle-submit)}
    "enter"])

(defn delete-button
  []
  [:button 
    {:class "btn btn-danger btn-sm"
     :type "button"
     :style {:width "60px"}
     :on-click #(handle-delete)}
    "delete"])

(defn letter-buttons
  "Creates a list of letter buttons"
  [chars]
  (for [letter chars]
        ^{:key letter} [:button {:class "btn btn-light btn-md border-warning"
                                 :type "button"
                                 :style {:font-weight :bold 
                                         :width "40px" 
                                         :height "40px"
                                         :margin "1px"}
                                 :value letter
                                 :on-click #(dispatch-user-input 
                                              (str @(rf/subscribe [:answer]) (-> % .-target .-value)))}
                                letter]))

(defn list-letters
  "Lists letters in buttons"
  [chars]
  [:div {:style {:margin "40px 50px 40px 50px"}}
    [:div (letter-buttons (subvec chars 1 4))]
    [:button {:class "btn btn-warning btn-md border-warning"
              :type "button"
              :value (first chars)
              :style {:font-weight :bold 
                      :width "40px" 
                      :height "40px"}
              :on-click #(dispatch-user-input (str @(rf/subscribe [:answer]) (-> % .-target .-value)))}
             (first chars)]
    [:div (letter-buttons (subvec chars 4 7))]])

(defn request-new-game
  []
  [:button 
    {:class "btn btn-warning"
     :type "button"
     :style {:width "110px"}
     :on-click  #(rf/dispatch [:request-data])}  ;; get data from the server !!
    "New Game"])

;; main components
(defn game-rules ; ranking points change depending on the game
  []
  [:div {:style {:margin "20px 20px 20px 20px" :text-align :left}}
    [:h2 "How to Play"]
    [:h5 "Create words using letters given from the boxes"]
    [:ul
      [:li "Words must contain at least 4 letters."]
      [:li "Words must include the center letter."]
      [:li "Our word list does not include words that are obscure, hyphenated, or proper nouns."]
      [:li "No cussing either, sorry."]
      [:li "Letters can be used more than once."]]
    [:h5 "Score points to increase your rating."]
    [:ul
      [:li "4-letter words are worth 1 point each."]
      [:li "Longer words earn 1 point per letter."]
      [:li "Each puzzle includes at least one “pangram” which uses every letter. These are worth 7 extra points!"]]])

(defn help-button
  []
  [:button 
    {:class "btn border-warning btn-sm"
     :type "button"
     :style {:width "60px"}
     :on-click  #(reagent-modals/modal! (game-rules))}
    "Help"])

(defn display-letters
  "Displays list of characters to browser"
  []
  [:div
    [:h3 "How many words can you make with these characters?"]
    [:div {:style {:margin-top "10px"}}
      [request-new-game]]
    [list-letters @(rf/subscribe [:letters])]
    [:div
      [submit-button]
      [shuffle-button]
      [delete-button]]
    [:div 
      [help-button]]])

(defn input-answer
  "Displays typed in text from user"
  []
  (let [answer @(rf/subscribe [:answer])]
    [:p
      {:style 
        {:font-weight :bold
         :font-size "30px"}}
      (for [letter (seq answer)]
        (cond 
          (in-list? letter (rest @(rf/subscribe [:letters])))
          [:span letter]

          (= letter (first @(rf/subscribe [:letters])))
          [:span {:style {:color :orange}}
                 letter]

          :else 
          [:span {:style {:opacity 0.3}}
                 letter]))
      [:span {:class "TextFadeInAndOut"} "|"]]))

(defn display-answer 
  []
  (fn []
    [:div {:style {:margin-top "50px"}}
      [:h4 "Enter your answer: "]
      [:div {:style {:margin-bottom "10px"}}
        [input-answer]]
      [:p {:class "TextFadeInAndOut"
           :style {:color :red
                   :margin "0 auto"
                   :font-weight "bold"}} 
          (check-answer @(rf/subscribe [:answer]))]]))

(defn ranking-information
  []
  (let [max-point (get-max-point)]
  [:div {:style {:margin "20px 20px 20px 20px"}}
    [:h2 "Rankings"]
    [:p "-------------------------------"]
    [:p "Ranks are based on a percentage of possible points in a puzzle. The minimum scores to reach each rank for today’s are:"]
    [:ul
      [:li "Beginner (0)"]
      [:li "Good Start (" (int (* 0.02 max-point)) ")"]
      [:li "Moving Up (" (int (* 0.05 max-point)) ")"]
      [:li "Good (" (int (* 0.1 max-point)) ")"]
      [:li "Solid (" (int (* 0.2 max-point)) ")"]
      [:li "Nice (" (int (* 0.3 max-point)) ")"]
      [:li "Great (" (int (* 0.4 max-point)) ")"]
      [:li "Amazing (" (int (* 0.5 max-point)) ")"]
      [:li "Genius (" (int (* 0.7 max-point)) ")"]]
    [:p "Have feedback? Email us at " 
      [:a {:href "phat.hovinh.13@gmail.com"} 
          "phat.hovinh.13@gmail.com"]]]))

(defn display-points
  []
  (let [points @(rf/subscribe [:points])]
    [:div
      [:h4 
        {:style {:font-weight "bold" :margin-top "20px"}}
        (get-rank points @(rf/subscribe [:word-list]))]
      [:div {:class "d-flex justify-content-center my-4"}
        [:div {:class "range-field w-75"}
          [:span {:style {:font-size "200%"}
                  :class "font-weight-bold text-warning mr-2 valueSpan2"}
            (reduce + points)]
          [reagent-modals/modal-window] ; need to add modal-window before bringing up modal window
          [:input {:class "custom-range"
                   :id "slider11"
                   :style {:width "80%"}
                   :type "range"  
                   :value (reduce + points)
                   :min 0
                   :max (get-max-point)
                   :disabled false
                   :on-click #(reagent-modals/modal! (ranking-information))}]]]]))

(defn list-found-words
  "Displays all items from a sequence to browser"
  []
  (let [words @(rf/subscribe [:found-words])]
    [:div
      [:h3 "Found words (" (count words) ")"]
      [:ol
        (for [item (apply sorted-set words)]
          ^{:key item} [:li item])]]))

(listen-to-key-press! js/document)

(defn main
  []
  [:<>
    [:div {:class "container"}
      [:h1 {:style {:color :warning :text-align :center}} "Welcome to Spelling Bee!"]
      [:div {:class "row"}
        [:div {:class "col-md-6 col-sm-12"}
          [display-letters @(rf/subscribe [:letters])]
          [display-answer]]
        [:div {:class "col-md-6 col-sm-12"}
          [display-points]
          [list-found-words]]]]])