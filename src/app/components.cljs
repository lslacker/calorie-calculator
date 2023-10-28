(ns app.components
  (:require
    [app.conversion :refer [calculate-result activity-factor]]))


(def text-input-class
  "shadow border rounded w-full py-2 px-3 mb-2 outline-indigo-500")


(def radio-input-class
  "accent-indigo-500 w-full h-4 border-none mr-2")


(defn imperial-height-input
  [state]
  (let [{:keys [form]} @state]
    [:div {:class "justify-between flex"}
     [:input {:class text-input-class
              :type "number"
              :placeholder "feet"
              :value (:ft form)
              :on-change #(swap! state assoc-in [:form :ft] (-> % .-target .-value))}]
     [:input {:class (str text-input-class " ml-4")
              :type "number"
              :placeholder "inches"
              :value (:in form)
              :on-change #(swap! state assoc-in [:form :in] (-> % .-target .-value))}]]))


(defn metric-height-input
  [state]
  (let [{:keys [form]} @state]
    [:div
     [:input {:class text-input-class
              :type "number"
              :placeholder "cm"
              :value (:cm form)
              :on-change #(swap! state assoc-in [:form :cm] (-> % .-target .-value))}]]))


(defn calculator-form
  [state]
  (let [{:keys [units form]} @state]
    [:form {:on-submit #(do
                          (.preventDefault %)
                          (js/console.log form)
                          (swap! state assoc :result (calculate-result form units)))}
     [:div
      [:label "Units"]
      [:div {:class "flex justify-around"}
       [:div {:class "flex items-center"}
        [:input {:class radio-input-class
                 :type "radio"
                 :checked (= units :imperial)
                 :on-change #(do
                               (swap! state assoc form {})
                               (swap! state assoc :units :imperial))}]
        [:label "Imperial"]]
       [:div {:class "flex items-center"}
        [:input {:class radio-input-class
                 :type "radio"
                 :checked (= units :metric)
                 :on-change #(do
                               (swap! state assoc form {})
                               (swap! state assoc :units :metric))}]
        [:label "Metric"]]]]
     [:div
      [:label "Gender"]
      [:div {:class "flex justify-around"}
       [:div {:class "flex items-center"}
        [:input {:class radio-input-class
                 :type "radio"
                 :value :male
                 :checked (= (:gender form) :male)
                 :on-change #(swap! state assoc-in [:form :gender] :male)}]
        [:label "Male"]]
       [:div {:class "flex items-center"}
        [:input {:class radio-input-class
                 :type "radio"
                 :value :female
                 :checked (= (:gender form) :female)
                 :on-change #(swap! state assoc-in [:form :gender] :female)}]
        [:label "Female"]]]]
     [:div
      [:label "Age"]
      [:input {:class text-input-class
               :type "number"
               :value (:age form)
               :on-change #(swap! state assoc-in [:form :age] (-> % .-target .-value))}]]
     [:div
      [:label "Weight"]
      [:input {:class text-input-class
               :type "number"
               :value (:weight form)
               :on-change #(swap! state assoc-in [:form :weight] (-> % .-target .-value))}]]

     [:div
      [:label "Height"]
      (if (= units :imperial)
        [imperial-height-input state]
        [metric-height-input state])]

     [:button {:class "w-full py-2 px-4 rounded shadow bg-indigo-500 hover:bg-indigo-700 text-white font-bold"
               :type "submit"} "Submit"]]))


(defn result-card
  [state]
  (let [{:keys [result]} @state]
    (when result
      [:div
       [:h2 {:class "font-bold text-indigo-500 text-lg text-center"}
        (str "BMR: " (Math/floor result) " Calories/Day")]
       [:p {:class "font-bold text-md mb-2 text-center"}
        "Daily calorie intake based on your activity level"]
       [:div {:class "flex justify-between"}
        [:p
         "Sedentary (little or no exercise)"]
        [:p (Math/floor (* result (:sedentary activity-factor)))]]
       [:div {:class "flex justify-between"}
        [:p
         "Exercise 1-3 times/week"]
        [:p (Math/floor (* result (:light activity-factor)))]]
       [:div {:class "flex justify-between"}
        [:p
         "Exercise 4-5 times/week"]
        [:p (Math/floor (* result (:moderate activity-factor)))]]
       [:div {:class "flex justify-between"}
        [:p
         "Daily or intense exercise 3-4 times/week"]
        [:p (Math/floor (* result (:very activity-factor)))]]
       [:div {:class "flex justify-between"}
        [:p
         "Intense exercise daily"]
        [:p (Math/floor (* result (:extreme activity-factor)))]]])))
