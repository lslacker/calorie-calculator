goog.provide('app.app');
if((typeof app !== 'undefined') && (typeof app.app !== 'undefined') && (typeof app.app.state !== 'undefined')){
} else {
app.app.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"imperial","imperial",-1065360839),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY], null));
}
app.app.app = (function app$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sm:bg-gray-200 min-h-screen flex justify-center items-center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full sm:w-2/3 bg-white mx-auto p-4 sm:rounded"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.calculator_form,app.app.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.result_card,app.app.state], null)], null)], null);
});

//# sourceMappingURL=app.app.js.map
