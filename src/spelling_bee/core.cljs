(ns ^:figwheel-hooks spelling-bee.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r :refer [atom]]
   [re-frame.core :as rf]
   [spelling-bee.events]
   [spelling-bee.subs]
   [spelling-bee.views :refer [main]]))

;; render the UI 
(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (r/render-component [main] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (rf/dispatch-sync [:request-data])
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))
