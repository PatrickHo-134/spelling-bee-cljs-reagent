(ns spelling-bee.db
  (:require 
    [re-frame.core :as rf]
    [clojure.string :as s]))

;; input
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
