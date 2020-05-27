(ns spelling-bee.db
  (:require 
    [re-frame.core :as rf]
    [ajax.core :as ajax :refer [GET]]
    [day8.re-frame.http-fx]
    [clojure.string :as s]))

(defonce myurl "https://raw.githubusercontent.com/PatrickHo-134/spelling-bee-cljs-reagent/master/src/spelling_bee/games.json")

;; backup input if request fails
(defonce results #{"apian" "cancan" "candid" "canid" "canna" "chain" "chin" "china" "cinch" "hand" "handicap" "hind" "inch" "indicia" "naan" "nada" "naiad" "nana" "niacin" "pain" "panda" "panic" "panini" "picnic" "pinch"})
(defonce word-list (map s/upper-case results))
(defonce letters [\N \A \C \D \I \H \P]) ;; always put center-letter at the beginning of the list

; old function to initialize db
; (rf/reg-event-db ; initialize db
;   :initialize-db
;   (fn [_ _]
;     {:word-list word-list
;      :letters letters
;      :answer ""
;      :found-words #{}
;      :points [0]
;      :rank "Beginner"}))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; subscribe to external data
; first version
(rf/reg-event-db
  :initialize-db             ;; <-- the button dispatched this id
  (fn
    [db _]
   
    ;; kick off the GET, making sure to supply a callback for success and failure
    (GET
      myurl
      {:handler       #(rf/dispatch [:process-response %])   ;; further dispatch !!
       :error-handler #(rf/dispatch [:bad-response])})     ;; further dispatch !!
      
     ;; update a flag in `app-db` ... presumably to trigger UI changes
     (assoc db :loading? true)))    ;; pure handlers must return a db

; second version
; (rf/reg-event-fx        ;; <-- note the `-fx` extension
;   :initialize-db        ;; <-- the event id
;   (fn                ;; <-- the handler function
;     [{db :db} _]     ;; <-- 1st argument is coeffect, from which we extract db 

;     ;; we return a map of (side) effects
;     {:http-xhrio {:method          :get
;                   :uri             myurl
;                   :format          (ajax/json-request-format)
;                   :response-format (ajax/json-response-format) ; {:keywords? true} 
;                   :on-success      [:process-response]
;                   :on-failure      [:bad-response]}
;      :db  (assoc db :loading? true)}))

(rf/reg-event-db               ;; when the GET succeeds 
  :process-response             ;; the GET callback dispatched this event  
  (fn
    [db [_ response]]           ;; extract the response from the dispatch event vector
    (let [data (.parse js/JSON (js->clj response :keywordize-keys true))
          game      (->> data 
                         .-games 
                         (rand-nth)) ; get a random game
          letters   (->> game 
                         .-letters 
                         (map s/upper-case) 
                         vec)
          wordlist  (->> game 
                         .-wordlist 
                         (map s/upper-case) 
                         set)]
      (-> db
          (assoc :loading? false) ;; take away that modal 
          (assoc :letters letters 
                 :word-list wordlist
                 :answer ""
                 :found-words #{}
                 :points [0]
                 :rank "Beginner")))))  ;; fairly lame processing

(rf/reg-event-db               ;; when the GET succeeds 
  :bad-response             ;; the GET callback dispatched this event  
  (fn
    [db [_ _]]           ;; extract the response from the dispatch event vector
      (-> db
          (assoc :loading? false) ;; take away that modal 
          (assoc :letters letters 
                 :word-list word-list
                 :answer ""
                 :found-words #{}
                 :points [0]
                 :rank "Beginner"))))  ;; fairly lame processing
