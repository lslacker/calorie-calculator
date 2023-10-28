goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__22052__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22053__i = 0, G__22053__a = new Array(arguments.length -  0);
while (G__22053__i < G__22053__a.length) {G__22053__a[G__22053__i] = arguments[G__22053__i + 0]; ++G__22053__i;}
  args = new cljs.core.IndexedSeq(G__22053__a,0,null);
} 
return G__22052__delegate.call(this,args);};
G__22052.cljs$lang$maxFixedArity = 0;
G__22052.cljs$lang$applyTo = (function (arglist__22054){
var args = cljs.core.seq(arglist__22054);
return G__22052__delegate(args);
});
G__22052.cljs$core$IFn$_invoke$arity$variadic = G__22052__delegate;
return G__22052;
})()
);

(o.error = (function() { 
var G__22055__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22056__i = 0, G__22056__a = new Array(arguments.length -  0);
while (G__22056__i < G__22056__a.length) {G__22056__a[G__22056__i] = arguments[G__22056__i + 0]; ++G__22056__i;}
  args = new cljs.core.IndexedSeq(G__22056__a,0,null);
} 
return G__22055__delegate.call(this,args);};
G__22055.cljs$lang$maxFixedArity = 0;
G__22055.cljs$lang$applyTo = (function (arglist__22057){
var args = cljs.core.seq(arglist__22057);
return G__22055__delegate(args);
});
G__22055.cljs$core$IFn$_invoke$arity$variadic = G__22055__delegate;
return G__22055;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
