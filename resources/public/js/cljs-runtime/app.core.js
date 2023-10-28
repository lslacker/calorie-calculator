goog.provide('app.core');
app.core.reload = (function app$core$reload(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.app], null),document.getElementById("app"));

return console.log("reloaded");
});
app.core.init = (function app$core$init(){
console.log("application starting");

return app.core.reload();
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
