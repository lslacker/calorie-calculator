(ns app.core
  (:require
    [app.app :refer [app]]
    [reagent.dom :as rdom]))


(defn ^:dev/after-load reload
  []
  (rdom/render [app]
               (.getElementById js/document "app"))
  (js/console.log "reloaded"))


(defn ^:export init
  []
  (js/console.log "application starting")
  (reload))
