(ns spelling-bee.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub ; subscribe word-list
  :word-list
  (fn [db _]
    (:word-list db)))

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