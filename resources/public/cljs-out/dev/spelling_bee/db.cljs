(ns spelling-bee.db
  (:require 
    [re-frame.core :as rf]
    ; [ajax.core :as ajax :refer [GET]]
    [day8.re-frame.http-fx]
    [clojure.string :as s]))

(defonce myurl "https://raw.githubusercontent.com/PatrickHo-134/spelling-bee-cljs-reagent/master/src/spelling_bee/games.json")

;; backup input if request fails
(defonce results #{"apian" "cancan" "candid" "canid" "canna" "chain" "chin" "china" "cinch" "hand" "handicap" "hind" "inch" "indicia" "naan" "nada" "naiad" "nana" "niacin" "pain" "panda" "panic" "panini" "picnic" "pinch"})
(defonce word-list (map s/upper-case results))
(defonce letters [\N \A \C \D \I \H \P]) ;; always put center-letter at the beginning of the list
(defonce backup-db {:word-list word-list
                    :letters letters
                    :answer ""
                    :found-words #{}
                    :points [0]
                    :rank "Beginner"})
