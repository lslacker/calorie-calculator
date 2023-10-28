goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__23068 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23069 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23069);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__23071 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23072 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23072);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23071);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23068);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__23074 = arguments.length;
switch (G__23074) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__23075 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23075,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23075,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__23078_23095 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__23079_23096 = null;
var count__23080_23097 = (0);
var i__23081_23098 = (0);
while(true){
if((i__23081_23098 < count__23080_23097)){
var vec__23088_23099 = chunk__23079_23096.cljs$core$IIndexed$_nth$arity$2(null,i__23081_23098);
var container_23100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23088_23099,(0),null);
var comp_23101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23088_23099,(1),null);
reagent.dom.re_render_component(comp_23101,container_23100);


var G__23102 = seq__23078_23095;
var G__23103 = chunk__23079_23096;
var G__23104 = count__23080_23097;
var G__23105 = (i__23081_23098 + (1));
seq__23078_23095 = G__23102;
chunk__23079_23096 = G__23103;
count__23080_23097 = G__23104;
i__23081_23098 = G__23105;
continue;
} else {
var temp__5804__auto___23106 = cljs.core.seq(seq__23078_23095);
if(temp__5804__auto___23106){
var seq__23078_23107__$1 = temp__5804__auto___23106;
if(cljs.core.chunked_seq_QMARK_(seq__23078_23107__$1)){
var c__5568__auto___23108 = cljs.core.chunk_first(seq__23078_23107__$1);
var G__23109 = cljs.core.chunk_rest(seq__23078_23107__$1);
var G__23110 = c__5568__auto___23108;
var G__23111 = cljs.core.count(c__5568__auto___23108);
var G__23112 = (0);
seq__23078_23095 = G__23109;
chunk__23079_23096 = G__23110;
count__23080_23097 = G__23111;
i__23081_23098 = G__23112;
continue;
} else {
var vec__23091_23113 = cljs.core.first(seq__23078_23107__$1);
var container_23114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23091_23113,(0),null);
var comp_23115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23091_23113,(1),null);
reagent.dom.re_render_component(comp_23115,container_23114);


var G__23116 = cljs.core.next(seq__23078_23107__$1);
var G__23117 = null;
var G__23118 = (0);
var G__23119 = (0);
seq__23078_23095 = G__23116;
chunk__23079_23096 = G__23117;
count__23080_23097 = G__23118;
i__23081_23098 = G__23119;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
