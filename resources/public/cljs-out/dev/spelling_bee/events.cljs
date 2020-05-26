(ns spelling-bee.events
    (:require
        [spelling-bee.db]
        [re-frame.core :as rf]))

;; event handlers
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