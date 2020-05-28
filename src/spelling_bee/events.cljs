(ns spelling-bee.events
  (:require
    [ajax.core :as ajax :refer [GET]]
    [spelling-bee.db :refer [myurl backup-db]]
    [clojure.string :as s]
    [re-frame.core :as rf]))

;; event handlers

; old method to initialize db
; (rf/reg-event-db ; initialize db
;   :initialize-db
;   (fn [_ _]
;     backup-db))

(rf/reg-event-db
  :new-list
  (fn [db [_ new-list]]
    (assoc db :word-list new-list)))

(rf/reg-event-db ; dispatch when the user changes the answer
  :answer-input
  (fn [db [_ new-answer]]
    (assoc db :answer new-answer)))

; (rf/reg-event-db ; dispatch when a new point is given
;   :new-points
;   (fn [db [_ new-points]]
;     (assoc db :points new-points)))

(rf/reg-event-fx ; rewrite the previous function with reg-event-fx / for learning purpose
  :new-points
  (fn [cofx [_ new-points]]
    {:db (assoc (:db cofx) :points new-points)}))

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; subscribe to external data

; first version -- bad version
; (rf/reg-event-db
;   :request-data             ;; <-- the button dispatched this id
;   (fn
;     [db _]
   
;     ;; kick off the GET, making sure to supply a callback for success and failure
;     (GET
;       myurl
;       {:handler       #(rf/dispatch [:process-response %])   ;; further dispatch !!
;        :error-handler #(rf/dispatch [:bad-response])})     ;; further dispatch !!
      
;      ;; update a flag in `app-db` ... presumably to trigger UI changes
;      (assoc db :loading? true)))    ;; pure handlers must return a db

; second version
(rf/reg-event-fx        ;; <-- note the `-fx` extension
  :request-data        ;; <-- the event id
  (fn                ;; <-- the handler function
    [{db :db} _]     ;; <-- 1st argument is coeffect, from which we extract db 

    (println "request data...")
    ;; we return a map of (side) effects
    {:db backup-db
     :http-xhrio {:method          :get
                  :uri             myurl
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true}) ; {:keywords? true} 
                  :on-success      [:success-response]
                  :on-failure      [:bad-response]}
    ;  :db  (do-some-thing) ; this will cause trouble on loading the app
    }))

(rf/reg-event-db               ;; when the GET succeeds 
  :success-response             ;; the GET callback dispatched this event  
  (fn
    [db [_ response]]           ;; extract the response from the dispatch event vector
    (let [game      (rand-nth (:games response)) ; get a random game
          letters   (->> (:letters game)
                         (map s/upper-case)
                         vec)
          wordlist  (->> (:wordlist game)
                         (map s/upper-case)
                         set)]
      (-> db
          (assoc :letters letters 
                 :word-list wordlist
                 :answer ""
                 :found-words #{}
                 :points [0]
                 :rank "Beginner")))))

(rf/reg-event-db               
  :bad-response 
  (fn
    [db [_ _]]
    backup-db)) ; use back-up db if GET request fails 

; event handler for first version of request-data
; (rf/reg-event-db               ;; when the GET succeeds 
;   :process-response             ;; the GET callback dispatched this event  
;   (fn
;     [db [_ response]]           ;; extract the response from the dispatch event vector
;     (println response)
;     (let [data (.parse js/JSON (js->clj response :keywordize-keys true))
;           game      (->> data 
;                          .-games 
;                          (rand-nth)) ; get a random game
;           letters   (->> game 
;                          .-letters 
;                          (map s/upper-case) 
;                          vec)
;           wordlist  (->> game 
;                          .-wordlist 
;                          (map s/upper-case) 
;                          set)]
;       (-> db
;           (assoc :loading? false) ;; take away that modal 
;           (assoc :letters letters 
;                  :word-list wordlist
;                  :answer ""
;                  :found-words #{}
;                  :points [0]
;                  :rank "Beginner")))))  ;; fairly lame processing
