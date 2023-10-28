(ns app.app
  (:require
    [app.components :refer [calculator-form result-card]]
    [reagent.core :as r]))


(defonce state
  (r/atom {:units :imperial :form {}}))


(defn app
  []
  [:main {:class "sm:bg-gray-200 min-h-screen flex justify-center items-center"}
   [:div {:class "w-full sm:w-2/3 bg-white mx-auto p-4 sm:rounded"}
    [calculator-form state]
    [result-card state]]])
