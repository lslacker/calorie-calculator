goog.provide('app.conversion');
app.conversion.in__GT_cm = (function app$conversion$in__GT_cm(n){
return (n * 2.54);
});
app.conversion.ft__GT_in = (function app$conversion$ft__GT_in(n){
return (n * (12));
});
app.conversion.lbs__GT_kg = (function app$conversion$lbs__GT_kg(n){
return (n * 0.45359237);
});
app.conversion.male_mbr = (function app$conversion$male_mbr(w,h,a){
return ((((66) + (13.7 * w)) + ((5) * h)) + (-6.8 * a));
});
app.conversion.female_mbr = (function app$conversion$female_mbr(w,h,a){
return ((((655) + (9.6 * w)) + (1.8 * h)) + (-4.7 * a));
});
app.conversion.calculate_result = (function app$conversion$calculate_result(form,units){
var map__11903 = form;
var map__11903__$1 = cljs.core.__destructure_map(map__11903);
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11903__$1,new cljs.core.Keyword(null,"age","age",-604307804));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11903__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var gender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11903__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var weight__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(units,new cljs.core.Keyword(null,"imperial","imperial",-1065360839)))?app.conversion.lbs__GT_kg(weight):weight);
var height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(units,new cljs.core.Keyword(null,"imperial","imperial",-1065360839)))?app.conversion.in__GT_cm((app.conversion.ft__GT_in((new cljs.core.Keyword(null,"ft","ft",-1338480042).cljs$core$IFn$_invoke$arity$1(form) | (0))) + (new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(form) | (0)))):new cljs.core.Keyword(null,"cm","cm",540591536).cljs$core$IFn$_invoke$arity$1(form));
var bmr = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,new cljs.core.Keyword(null,"male","male",-560253338)))?app.conversion.male_mbr:app.conversion.female_mbr);
return (bmr.cljs$core$IFn$_invoke$arity$3 ? bmr.cljs$core$IFn$_invoke$arity$3(weight__$1,height,age) : bmr.call(null,weight__$1,height,age));
});
app.conversion.activity_factor = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sedentary","sedentary",-1777630022),1.2,new cljs.core.Keyword(null,"light","light",1918998747),1.375,new cljs.core.Keyword(null,"moderate","moderate",-1039163165),1.55,new cljs.core.Keyword(null,"very","very",-204131296),1.725,new cljs.core.Keyword(null,"extreme","extreme",-253354207),1.9], null);

//# sourceMappingURL=app.conversion.js.map
