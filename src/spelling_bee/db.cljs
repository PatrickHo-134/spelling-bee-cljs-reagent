(ns spelling-bee.db
  (:require 
    [re-frame.core :as rf]
    [ajax.core :as ajax :refer [GET]]
    [day8.re-frame.http-fx]
    ; [cljs.pprint]
    ; [clojure.data.json :as json]
    [clojure.string :as s]))

(def myurl "https://raw.githubusercontent.com/PatrickHo-134/spelling-bee-cljs-reagent/master/src/spelling_bee/games.json")

;; backup input if request fails
(def results #{"apian" "cancan" "candid" "canid" "canna" "chain" "chin" "china" "cinch" "hand" "handicap" "hind" "inch" "indicia" "naan" "nada" "naiad" "nana" "niacin" "pain" "panda" "panic" "panini" "picnic" "pinch"})
(def word-list (map s/upper-case results))
(def letters [\N \A \C \D \I \H \P]) ;; always put center-letter at the beginning of the list

(rf/reg-event-db ; initialize db
  :initialize
  (fn [_ _]
    {:word-list word-list
     :letters letters
     :answer ""
     :found-words #{}
     :points [0]
     :rank "Beginner"}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(rf/reg-event-db
  :request-it             ;; <-- the button dispatched this id
  (fn
    [db _]
   
    ;; kick off the GET, making sure to supply a callback for success and failure
    (GET
      myurl
      {:handler       #(rf/dispatch [:process-response %])   ;; further dispatch !!
       :error-handler #(rf/dispatch [:bad-response %])})     ;; further dispatch !!
      
     ;; update a flag in `app-db` ... presumably to trigger UI changes
     (assoc db :loading? true)))    ;; pure handlers must return a db

; (rf/reg-event-fx        ;; <-- note the `-fx` extension
;   :request-it        ;; <-- the event id
;   (fn                ;; <-- the handler function
;     [{db :db} _]     ;; <-- 1st argument is coeffect, from which we extract db 

;     ;; we return a map of (side) effects
;     {:http-xhrio {:method          :get
;                   :uri             myurl
;                   :format          (ajax/json-request-format)
;                   :response-format (ajax/json-response-format {:keywords? true}) 
;                   :on-success      [:process-response]
;                   :on-failure      [:bad-response]}
;      :db  (assoc db :loading? true)}))

(rf/reg-event-db               ;; when the GET succeeds 
  :process-response             ;; the GET callback dispatched this event  
  (fn
    [db [_ response]]           ;; extract the response from the dispatch event vector
    
    (-> db
        (assoc :loading? false) ;; take away that modal 
        (assoc :data (js->clj response :keywordize-keys true)))))  ;; fairly lame processing

(rf/reg-sub ; subscribe player rank
  :data
  (fn [db _]
    (:data db)))

(let [data (.parse js/JSON @(rf/subscribe [:data]))]
  (println (->> data .-games (rand-nth) .-id))
)
