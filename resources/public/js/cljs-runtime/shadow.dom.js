goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20438 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20438(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20443 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20443(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19444 = coll;
var G__19445 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19444,G__19445) : shadow.dom.lazy_native_coll_seq.call(null,G__19444,G__19445));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19459 = arguments.length;
switch (G__19459) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19469 = arguments.length;
switch (G__19469) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19475 = arguments.length;
switch (G__19475) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19488 = arguments.length;
switch (G__19488) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19495 = arguments.length;
switch (G__19495) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19527 = arguments.length;
switch (G__19527) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19565){if((e19565 instanceof Object)){
var e = e19565;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19565;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19576 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19577 = null;
var count__19578 = (0);
var i__19579 = (0);
while(true){
if((i__19579 < count__19578)){
var el = chunk__19577.cljs$core$IIndexed$_nth$arity$2(null,i__19579);
var handler_20463__$1 = ((function (seq__19576,chunk__19577,count__19578,i__19579,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19576,chunk__19577,count__19578,i__19579,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20463__$1);


var G__20464 = seq__19576;
var G__20465 = chunk__19577;
var G__20466 = count__19578;
var G__20467 = (i__19579 + (1));
seq__19576 = G__20464;
chunk__19577 = G__20465;
count__19578 = G__20466;
i__19579 = G__20467;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19576);
if(temp__5804__auto__){
var seq__19576__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19576__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19576__$1);
var G__20468 = cljs.core.chunk_rest(seq__19576__$1);
var G__20469 = c__5568__auto__;
var G__20470 = cljs.core.count(c__5568__auto__);
var G__20471 = (0);
seq__19576 = G__20468;
chunk__19577 = G__20469;
count__19578 = G__20470;
i__19579 = G__20471;
continue;
} else {
var el = cljs.core.first(seq__19576__$1);
var handler_20472__$1 = ((function (seq__19576,chunk__19577,count__19578,i__19579,el,seq__19576__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19576,chunk__19577,count__19578,i__19579,el,seq__19576__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20472__$1);


var G__20473 = cljs.core.next(seq__19576__$1);
var G__20474 = null;
var G__20475 = (0);
var G__20476 = (0);
seq__19576 = G__20473;
chunk__19577 = G__20474;
count__19578 = G__20475;
i__19579 = G__20476;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19606 = arguments.length;
switch (G__19606) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19615 = cljs.core.seq(events);
var chunk__19616 = null;
var count__19617 = (0);
var i__19618 = (0);
while(true){
if((i__19618 < count__19617)){
var vec__19635 = chunk__19616.cljs$core$IIndexed$_nth$arity$2(null,i__19618);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19635,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19635,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20480 = seq__19615;
var G__20481 = chunk__19616;
var G__20482 = count__19617;
var G__20483 = (i__19618 + (1));
seq__19615 = G__20480;
chunk__19616 = G__20481;
count__19617 = G__20482;
i__19618 = G__20483;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19615);
if(temp__5804__auto__){
var seq__19615__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19615__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19615__$1);
var G__20484 = cljs.core.chunk_rest(seq__19615__$1);
var G__20485 = c__5568__auto__;
var G__20486 = cljs.core.count(c__5568__auto__);
var G__20487 = (0);
seq__19615 = G__20484;
chunk__19616 = G__20485;
count__19617 = G__20486;
i__19618 = G__20487;
continue;
} else {
var vec__19643 = cljs.core.first(seq__19615__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19643,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19643,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20489 = cljs.core.next(seq__19615__$1);
var G__20490 = null;
var G__20491 = (0);
var G__20492 = (0);
seq__19615 = G__20489;
chunk__19616 = G__20490;
count__19617 = G__20491;
i__19618 = G__20492;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19647 = cljs.core.seq(styles);
var chunk__19648 = null;
var count__19650 = (0);
var i__19651 = (0);
while(true){
if((i__19651 < count__19650)){
var vec__19666 = chunk__19648.cljs$core$IIndexed$_nth$arity$2(null,i__19651);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20493 = seq__19647;
var G__20494 = chunk__19648;
var G__20495 = count__19650;
var G__20496 = (i__19651 + (1));
seq__19647 = G__20493;
chunk__19648 = G__20494;
count__19650 = G__20495;
i__19651 = G__20496;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19647);
if(temp__5804__auto__){
var seq__19647__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19647__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19647__$1);
var G__20497 = cljs.core.chunk_rest(seq__19647__$1);
var G__20498 = c__5568__auto__;
var G__20499 = cljs.core.count(c__5568__auto__);
var G__20500 = (0);
seq__19647 = G__20497;
chunk__19648 = G__20498;
count__19650 = G__20499;
i__19651 = G__20500;
continue;
} else {
var vec__19674 = cljs.core.first(seq__19647__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19674,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19674,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20501 = cljs.core.next(seq__19647__$1);
var G__20502 = null;
var G__20503 = (0);
var G__20504 = (0);
seq__19647 = G__20501;
chunk__19648 = G__20502;
count__19650 = G__20503;
i__19651 = G__20504;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19690_20507 = key;
var G__19690_20508__$1 = (((G__19690_20507 instanceof cljs.core.Keyword))?G__19690_20507.fqn:null);
switch (G__19690_20508__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20516 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20516,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20516,"aria-");
}
})())){
el.setAttribute(ks_20516,value);
} else {
(el[ks_20516] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19717){
var map__19719 = p__19717;
var map__19719__$1 = cljs.core.__destructure_map(map__19719);
var props = map__19719__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19719__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19720 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19720,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19720,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19720,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19724 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19724,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19724;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19726 = arguments.length;
switch (G__19726) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19739){
var vec__19740 = p__19739;
var seq__19741 = cljs.core.seq(vec__19740);
var first__19742 = cljs.core.first(seq__19741);
var seq__19741__$1 = cljs.core.next(seq__19741);
var nn = first__19742;
var first__19742__$1 = cljs.core.first(seq__19741__$1);
var seq__19741__$2 = cljs.core.next(seq__19741__$1);
var np = first__19742__$1;
var nc = seq__19741__$2;
var node = vec__19740;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19746 = nn;
var G__19747 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19746,G__19747) : create_fn.call(null,G__19746,G__19747));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19751 = nn;
var G__19752 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19751,G__19752) : create_fn.call(null,G__19751,G__19752));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19756 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19756,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19756,(1),null);
var seq__19760_20525 = cljs.core.seq(node_children);
var chunk__19762_20526 = null;
var count__19763_20527 = (0);
var i__19764_20528 = (0);
while(true){
if((i__19764_20528 < count__19763_20527)){
var child_struct_20529 = chunk__19762_20526.cljs$core$IIndexed$_nth$arity$2(null,i__19764_20528);
var children_20530 = shadow.dom.dom_node(child_struct_20529);
if(cljs.core.seq_QMARK_(children_20530)){
var seq__19823_20531 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20530));
var chunk__19825_20532 = null;
var count__19826_20533 = (0);
var i__19827_20534 = (0);
while(true){
if((i__19827_20534 < count__19826_20533)){
var child_20535 = chunk__19825_20532.cljs$core$IIndexed$_nth$arity$2(null,i__19827_20534);
if(cljs.core.truth_(child_20535)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20535);


var G__20536 = seq__19823_20531;
var G__20537 = chunk__19825_20532;
var G__20538 = count__19826_20533;
var G__20539 = (i__19827_20534 + (1));
seq__19823_20531 = G__20536;
chunk__19825_20532 = G__20537;
count__19826_20533 = G__20538;
i__19827_20534 = G__20539;
continue;
} else {
var G__20540 = seq__19823_20531;
var G__20541 = chunk__19825_20532;
var G__20542 = count__19826_20533;
var G__20543 = (i__19827_20534 + (1));
seq__19823_20531 = G__20540;
chunk__19825_20532 = G__20541;
count__19826_20533 = G__20542;
i__19827_20534 = G__20543;
continue;
}
} else {
var temp__5804__auto___20544 = cljs.core.seq(seq__19823_20531);
if(temp__5804__auto___20544){
var seq__19823_20545__$1 = temp__5804__auto___20544;
if(cljs.core.chunked_seq_QMARK_(seq__19823_20545__$1)){
var c__5568__auto___20546 = cljs.core.chunk_first(seq__19823_20545__$1);
var G__20547 = cljs.core.chunk_rest(seq__19823_20545__$1);
var G__20548 = c__5568__auto___20546;
var G__20549 = cljs.core.count(c__5568__auto___20546);
var G__20550 = (0);
seq__19823_20531 = G__20547;
chunk__19825_20532 = G__20548;
count__19826_20533 = G__20549;
i__19827_20534 = G__20550;
continue;
} else {
var child_20555 = cljs.core.first(seq__19823_20545__$1);
if(cljs.core.truth_(child_20555)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20555);


var G__20556 = cljs.core.next(seq__19823_20545__$1);
var G__20557 = null;
var G__20558 = (0);
var G__20559 = (0);
seq__19823_20531 = G__20556;
chunk__19825_20532 = G__20557;
count__19826_20533 = G__20558;
i__19827_20534 = G__20559;
continue;
} else {
var G__20564 = cljs.core.next(seq__19823_20545__$1);
var G__20565 = null;
var G__20566 = (0);
var G__20567 = (0);
seq__19823_20531 = G__20564;
chunk__19825_20532 = G__20565;
count__19826_20533 = G__20566;
i__19827_20534 = G__20567;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20530);
}


var G__20568 = seq__19760_20525;
var G__20569 = chunk__19762_20526;
var G__20570 = count__19763_20527;
var G__20571 = (i__19764_20528 + (1));
seq__19760_20525 = G__20568;
chunk__19762_20526 = G__20569;
count__19763_20527 = G__20570;
i__19764_20528 = G__20571;
continue;
} else {
var temp__5804__auto___20572 = cljs.core.seq(seq__19760_20525);
if(temp__5804__auto___20572){
var seq__19760_20573__$1 = temp__5804__auto___20572;
if(cljs.core.chunked_seq_QMARK_(seq__19760_20573__$1)){
var c__5568__auto___20574 = cljs.core.chunk_first(seq__19760_20573__$1);
var G__20575 = cljs.core.chunk_rest(seq__19760_20573__$1);
var G__20576 = c__5568__auto___20574;
var G__20577 = cljs.core.count(c__5568__auto___20574);
var G__20578 = (0);
seq__19760_20525 = G__20575;
chunk__19762_20526 = G__20576;
count__19763_20527 = G__20577;
i__19764_20528 = G__20578;
continue;
} else {
var child_struct_20579 = cljs.core.first(seq__19760_20573__$1);
var children_20580 = shadow.dom.dom_node(child_struct_20579);
if(cljs.core.seq_QMARK_(children_20580)){
var seq__19867_20581 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20580));
var chunk__19869_20582 = null;
var count__19870_20583 = (0);
var i__19871_20584 = (0);
while(true){
if((i__19871_20584 < count__19870_20583)){
var child_20589 = chunk__19869_20582.cljs$core$IIndexed$_nth$arity$2(null,i__19871_20584);
if(cljs.core.truth_(child_20589)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20589);


var G__20590 = seq__19867_20581;
var G__20591 = chunk__19869_20582;
var G__20592 = count__19870_20583;
var G__20593 = (i__19871_20584 + (1));
seq__19867_20581 = G__20590;
chunk__19869_20582 = G__20591;
count__19870_20583 = G__20592;
i__19871_20584 = G__20593;
continue;
} else {
var G__20594 = seq__19867_20581;
var G__20595 = chunk__19869_20582;
var G__20596 = count__19870_20583;
var G__20597 = (i__19871_20584 + (1));
seq__19867_20581 = G__20594;
chunk__19869_20582 = G__20595;
count__19870_20583 = G__20596;
i__19871_20584 = G__20597;
continue;
}
} else {
var temp__5804__auto___20598__$1 = cljs.core.seq(seq__19867_20581);
if(temp__5804__auto___20598__$1){
var seq__19867_20599__$1 = temp__5804__auto___20598__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19867_20599__$1)){
var c__5568__auto___20600 = cljs.core.chunk_first(seq__19867_20599__$1);
var G__20601 = cljs.core.chunk_rest(seq__19867_20599__$1);
var G__20602 = c__5568__auto___20600;
var G__20603 = cljs.core.count(c__5568__auto___20600);
var G__20604 = (0);
seq__19867_20581 = G__20601;
chunk__19869_20582 = G__20602;
count__19870_20583 = G__20603;
i__19871_20584 = G__20604;
continue;
} else {
var child_20605 = cljs.core.first(seq__19867_20599__$1);
if(cljs.core.truth_(child_20605)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20605);


var G__20606 = cljs.core.next(seq__19867_20599__$1);
var G__20607 = null;
var G__20608 = (0);
var G__20609 = (0);
seq__19867_20581 = G__20606;
chunk__19869_20582 = G__20607;
count__19870_20583 = G__20608;
i__19871_20584 = G__20609;
continue;
} else {
var G__20610 = cljs.core.next(seq__19867_20599__$1);
var G__20611 = null;
var G__20612 = (0);
var G__20613 = (0);
seq__19867_20581 = G__20610;
chunk__19869_20582 = G__20611;
count__19870_20583 = G__20612;
i__19871_20584 = G__20613;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20580);
}


var G__20614 = cljs.core.next(seq__19760_20573__$1);
var G__20615 = null;
var G__20616 = (0);
var G__20617 = (0);
seq__19760_20525 = G__20614;
chunk__19762_20526 = G__20615;
count__19763_20527 = G__20616;
i__19764_20528 = G__20617;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__19888 = cljs.core.seq(node);
var chunk__19889 = null;
var count__19890 = (0);
var i__19891 = (0);
while(true){
if((i__19891 < count__19890)){
var n = chunk__19889.cljs$core$IIndexed$_nth$arity$2(null,i__19891);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20621 = seq__19888;
var G__20622 = chunk__19889;
var G__20623 = count__19890;
var G__20624 = (i__19891 + (1));
seq__19888 = G__20621;
chunk__19889 = G__20622;
count__19890 = G__20623;
i__19891 = G__20624;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19888);
if(temp__5804__auto__){
var seq__19888__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19888__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19888__$1);
var G__20625 = cljs.core.chunk_rest(seq__19888__$1);
var G__20626 = c__5568__auto__;
var G__20627 = cljs.core.count(c__5568__auto__);
var G__20628 = (0);
seq__19888 = G__20625;
chunk__19889 = G__20626;
count__19890 = G__20627;
i__19891 = G__20628;
continue;
} else {
var n = cljs.core.first(seq__19888__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20629 = cljs.core.next(seq__19888__$1);
var G__20630 = null;
var G__20631 = (0);
var G__20632 = (0);
seq__19888 = G__20629;
chunk__19889 = G__20630;
count__19890 = G__20631;
i__19891 = G__20632;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__19902 = arguments.length;
switch (G__19902) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__19911 = arguments.length;
switch (G__19911) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__19941 = arguments.length;
switch (G__19941) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20639 = arguments.length;
var i__5770__auto___20640 = (0);
while(true){
if((i__5770__auto___20640 < len__5769__auto___20639)){
args__5775__auto__.push((arguments[i__5770__auto___20640]));

var G__20641 = (i__5770__auto___20640 + (1));
i__5770__auto___20640 = G__20641;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__19953_20642 = cljs.core.seq(nodes);
var chunk__19954_20643 = null;
var count__19955_20644 = (0);
var i__19956_20645 = (0);
while(true){
if((i__19956_20645 < count__19955_20644)){
var node_20646 = chunk__19954_20643.cljs$core$IIndexed$_nth$arity$2(null,i__19956_20645);
fragment.appendChild(shadow.dom._to_dom(node_20646));


var G__20647 = seq__19953_20642;
var G__20648 = chunk__19954_20643;
var G__20649 = count__19955_20644;
var G__20650 = (i__19956_20645 + (1));
seq__19953_20642 = G__20647;
chunk__19954_20643 = G__20648;
count__19955_20644 = G__20649;
i__19956_20645 = G__20650;
continue;
} else {
var temp__5804__auto___20651 = cljs.core.seq(seq__19953_20642);
if(temp__5804__auto___20651){
var seq__19953_20652__$1 = temp__5804__auto___20651;
if(cljs.core.chunked_seq_QMARK_(seq__19953_20652__$1)){
var c__5568__auto___20653 = cljs.core.chunk_first(seq__19953_20652__$1);
var G__20654 = cljs.core.chunk_rest(seq__19953_20652__$1);
var G__20655 = c__5568__auto___20653;
var G__20656 = cljs.core.count(c__5568__auto___20653);
var G__20657 = (0);
seq__19953_20642 = G__20654;
chunk__19954_20643 = G__20655;
count__19955_20644 = G__20656;
i__19956_20645 = G__20657;
continue;
} else {
var node_20658 = cljs.core.first(seq__19953_20652__$1);
fragment.appendChild(shadow.dom._to_dom(node_20658));


var G__20659 = cljs.core.next(seq__19953_20652__$1);
var G__20660 = null;
var G__20661 = (0);
var G__20662 = (0);
seq__19953_20642 = G__20659;
chunk__19954_20643 = G__20660;
count__19955_20644 = G__20661;
i__19956_20645 = G__20662;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq19952){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19952));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19969_20666 = cljs.core.seq(scripts);
var chunk__19970_20667 = null;
var count__19971_20668 = (0);
var i__19972_20669 = (0);
while(true){
if((i__19972_20669 < count__19971_20668)){
var vec__19987_20670 = chunk__19970_20667.cljs$core$IIndexed$_nth$arity$2(null,i__19972_20669);
var script_tag_20671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19987_20670,(0),null);
var script_body_20672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19987_20670,(1),null);
eval(script_body_20672);


var G__20673 = seq__19969_20666;
var G__20674 = chunk__19970_20667;
var G__20675 = count__19971_20668;
var G__20676 = (i__19972_20669 + (1));
seq__19969_20666 = G__20673;
chunk__19970_20667 = G__20674;
count__19971_20668 = G__20675;
i__19972_20669 = G__20676;
continue;
} else {
var temp__5804__auto___20677 = cljs.core.seq(seq__19969_20666);
if(temp__5804__auto___20677){
var seq__19969_20678__$1 = temp__5804__auto___20677;
if(cljs.core.chunked_seq_QMARK_(seq__19969_20678__$1)){
var c__5568__auto___20679 = cljs.core.chunk_first(seq__19969_20678__$1);
var G__20680 = cljs.core.chunk_rest(seq__19969_20678__$1);
var G__20681 = c__5568__auto___20679;
var G__20682 = cljs.core.count(c__5568__auto___20679);
var G__20683 = (0);
seq__19969_20666 = G__20680;
chunk__19970_20667 = G__20681;
count__19971_20668 = G__20682;
i__19972_20669 = G__20683;
continue;
} else {
var vec__19991_20684 = cljs.core.first(seq__19969_20678__$1);
var script_tag_20685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19991_20684,(0),null);
var script_body_20686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19991_20684,(1),null);
eval(script_body_20686);


var G__20687 = cljs.core.next(seq__19969_20678__$1);
var G__20688 = null;
var G__20689 = (0);
var G__20690 = (0);
seq__19969_20666 = G__20687;
chunk__19970_20667 = G__20688;
count__19971_20668 = G__20689;
i__19972_20669 = G__20690;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20005){
var vec__20006 = p__20005;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20006,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20006,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20018 = arguments.length;
switch (G__20018) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20040 = cljs.core.seq(style_keys);
var chunk__20041 = null;
var count__20042 = (0);
var i__20043 = (0);
while(true){
if((i__20043 < count__20042)){
var it = chunk__20041.cljs$core$IIndexed$_nth$arity$2(null,i__20043);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20698 = seq__20040;
var G__20699 = chunk__20041;
var G__20700 = count__20042;
var G__20701 = (i__20043 + (1));
seq__20040 = G__20698;
chunk__20041 = G__20699;
count__20042 = G__20700;
i__20043 = G__20701;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20040);
if(temp__5804__auto__){
var seq__20040__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20040__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20040__$1);
var G__20702 = cljs.core.chunk_rest(seq__20040__$1);
var G__20703 = c__5568__auto__;
var G__20704 = cljs.core.count(c__5568__auto__);
var G__20705 = (0);
seq__20040 = G__20702;
chunk__20041 = G__20703;
count__20042 = G__20704;
i__20043 = G__20705;
continue;
} else {
var it = cljs.core.first(seq__20040__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20706 = cljs.core.next(seq__20040__$1);
var G__20707 = null;
var G__20708 = (0);
var G__20709 = (0);
seq__20040 = G__20706;
chunk__20041 = G__20707;
count__20042 = G__20708;
i__20043 = G__20709;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20053,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20072 = k20053;
var G__20072__$1 = (((G__20072 instanceof cljs.core.Keyword))?G__20072.fqn:null);
switch (G__20072__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20053,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20085){
var vec__20086 = p__20085;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20086,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20086,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20052){
var self__ = this;
var G__20052__$1 = this;
return (new cljs.core.RecordIter((0),G__20052__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20054,other20055){
var self__ = this;
var this20054__$1 = this;
return (((!((other20055 == null)))) && ((((this20054__$1.constructor === other20055.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20054__$1.x,other20055.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20054__$1.y,other20055.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20054__$1.__extmap,other20055.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20053){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20120 = k20053;
var G__20120__$1 = (((G__20120 instanceof cljs.core.Keyword))?G__20120.fqn:null);
switch (G__20120__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20053);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20052){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20125 = cljs.core.keyword_identical_QMARK_;
var expr__20126 = k__5352__auto__;
if(cljs.core.truth_((pred__20125.cljs$core$IFn$_invoke$arity$2 ? pred__20125.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20126) : pred__20125.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20126)))){
return (new shadow.dom.Coordinate(G__20052,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20125.cljs$core$IFn$_invoke$arity$2 ? pred__20125.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20126) : pred__20125.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20126)))){
return (new shadow.dom.Coordinate(self__.x,G__20052,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20052),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20052){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20052,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20058){
var extmap__5385__auto__ = (function (){var G__20148 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20058,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20058)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20148);
} else {
return G__20148;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20058),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20058),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20153,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20161 = k20153;
var G__20161__$1 = (((G__20161 instanceof cljs.core.Keyword))?G__20161.fqn:null);
switch (G__20161__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20153,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20163){
var vec__20164 = p__20163;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20164,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20164,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20152){
var self__ = this;
var G__20152__$1 = this;
return (new cljs.core.RecordIter((0),G__20152__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20154,other20155){
var self__ = this;
var this20154__$1 = this;
return (((!((other20155 == null)))) && ((((this20154__$1.constructor === other20155.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20154__$1.w,other20155.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20154__$1.h,other20155.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20154__$1.__extmap,other20155.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20153){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20184 = k20153;
var G__20184__$1 = (((G__20184 instanceof cljs.core.Keyword))?G__20184.fqn:null);
switch (G__20184__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20153);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20152){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20187 = cljs.core.keyword_identical_QMARK_;
var expr__20188 = k__5352__auto__;
if(cljs.core.truth_((pred__20187.cljs$core$IFn$_invoke$arity$2 ? pred__20187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20188) : pred__20187.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20188)))){
return (new shadow.dom.Size(G__20152,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20187.cljs$core$IFn$_invoke$arity$2 ? pred__20187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20188) : pred__20187.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20188)))){
return (new shadow.dom.Size(self__.w,G__20152,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20152),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20152){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20152,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20158){
var extmap__5385__auto__ = (function (){var G__20211 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20158,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20158)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20211);
} else {
return G__20211;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20158),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20158),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__20773 = (i + (1));
var G__20774 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20773;
ret = G__20774;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20255){
var vec__20257 = p__20255;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20257,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20257,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20266 = arguments.length;
switch (G__20266) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__20779 = ps;
var G__20780 = (i + (1));
el__$1 = G__20779;
i = G__20780;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20322 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20322,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20322,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20322,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20330_20788 = cljs.core.seq(props);
var chunk__20331_20789 = null;
var count__20332_20790 = (0);
var i__20333_20791 = (0);
while(true){
if((i__20333_20791 < count__20332_20790)){
var vec__20347_20792 = chunk__20331_20789.cljs$core$IIndexed$_nth$arity$2(null,i__20333_20791);
var k_20793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20347_20792,(0),null);
var v_20794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20347_20792,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20793);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20793),v_20794);


var G__20803 = seq__20330_20788;
var G__20804 = chunk__20331_20789;
var G__20805 = count__20332_20790;
var G__20806 = (i__20333_20791 + (1));
seq__20330_20788 = G__20803;
chunk__20331_20789 = G__20804;
count__20332_20790 = G__20805;
i__20333_20791 = G__20806;
continue;
} else {
var temp__5804__auto___20810 = cljs.core.seq(seq__20330_20788);
if(temp__5804__auto___20810){
var seq__20330_20818__$1 = temp__5804__auto___20810;
if(cljs.core.chunked_seq_QMARK_(seq__20330_20818__$1)){
var c__5568__auto___20819 = cljs.core.chunk_first(seq__20330_20818__$1);
var G__20820 = cljs.core.chunk_rest(seq__20330_20818__$1);
var G__20821 = c__5568__auto___20819;
var G__20822 = cljs.core.count(c__5568__auto___20819);
var G__20823 = (0);
seq__20330_20788 = G__20820;
chunk__20331_20789 = G__20821;
count__20332_20790 = G__20822;
i__20333_20791 = G__20823;
continue;
} else {
var vec__20355_20824 = cljs.core.first(seq__20330_20818__$1);
var k_20825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20355_20824,(0),null);
var v_20826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20355_20824,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20825);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20825),v_20826);


var G__20829 = cljs.core.next(seq__20330_20818__$1);
var G__20830 = null;
var G__20831 = (0);
var G__20832 = (0);
seq__20330_20788 = G__20829;
chunk__20331_20789 = G__20830;
count__20332_20790 = G__20831;
i__20333_20791 = G__20832;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20371 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20371,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20371,(1),null);
var seq__20374_20842 = cljs.core.seq(node_children);
var chunk__20376_20843 = null;
var count__20377_20844 = (0);
var i__20378_20845 = (0);
while(true){
if((i__20378_20845 < count__20377_20844)){
var child_struct_20847 = chunk__20376_20843.cljs$core$IIndexed$_nth$arity$2(null,i__20378_20845);
if((!((child_struct_20847 == null)))){
if(typeof child_struct_20847 === 'string'){
var text_20848 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20848),child_struct_20847].join(''));
} else {
var children_20849 = shadow.dom.svg_node(child_struct_20847);
if(cljs.core.seq_QMARK_(children_20849)){
var seq__20396_20850 = cljs.core.seq(children_20849);
var chunk__20398_20851 = null;
var count__20399_20852 = (0);
var i__20400_20853 = (0);
while(true){
if((i__20400_20853 < count__20399_20852)){
var child_20854 = chunk__20398_20851.cljs$core$IIndexed$_nth$arity$2(null,i__20400_20853);
if(cljs.core.truth_(child_20854)){
node.appendChild(child_20854);


var G__20859 = seq__20396_20850;
var G__20860 = chunk__20398_20851;
var G__20861 = count__20399_20852;
var G__20862 = (i__20400_20853 + (1));
seq__20396_20850 = G__20859;
chunk__20398_20851 = G__20860;
count__20399_20852 = G__20861;
i__20400_20853 = G__20862;
continue;
} else {
var G__20863 = seq__20396_20850;
var G__20864 = chunk__20398_20851;
var G__20865 = count__20399_20852;
var G__20866 = (i__20400_20853 + (1));
seq__20396_20850 = G__20863;
chunk__20398_20851 = G__20864;
count__20399_20852 = G__20865;
i__20400_20853 = G__20866;
continue;
}
} else {
var temp__5804__auto___20868 = cljs.core.seq(seq__20396_20850);
if(temp__5804__auto___20868){
var seq__20396_20874__$1 = temp__5804__auto___20868;
if(cljs.core.chunked_seq_QMARK_(seq__20396_20874__$1)){
var c__5568__auto___20876 = cljs.core.chunk_first(seq__20396_20874__$1);
var G__20878 = cljs.core.chunk_rest(seq__20396_20874__$1);
var G__20879 = c__5568__auto___20876;
var G__20880 = cljs.core.count(c__5568__auto___20876);
var G__20881 = (0);
seq__20396_20850 = G__20878;
chunk__20398_20851 = G__20879;
count__20399_20852 = G__20880;
i__20400_20853 = G__20881;
continue;
} else {
var child_20883 = cljs.core.first(seq__20396_20874__$1);
if(cljs.core.truth_(child_20883)){
node.appendChild(child_20883);


var G__20888 = cljs.core.next(seq__20396_20874__$1);
var G__20889 = null;
var G__20890 = (0);
var G__20891 = (0);
seq__20396_20850 = G__20888;
chunk__20398_20851 = G__20889;
count__20399_20852 = G__20890;
i__20400_20853 = G__20891;
continue;
} else {
var G__20895 = cljs.core.next(seq__20396_20874__$1);
var G__20896 = null;
var G__20897 = (0);
var G__20898 = (0);
seq__20396_20850 = G__20895;
chunk__20398_20851 = G__20896;
count__20399_20852 = G__20897;
i__20400_20853 = G__20898;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20849);
}
}


var G__20899 = seq__20374_20842;
var G__20900 = chunk__20376_20843;
var G__20901 = count__20377_20844;
var G__20902 = (i__20378_20845 + (1));
seq__20374_20842 = G__20899;
chunk__20376_20843 = G__20900;
count__20377_20844 = G__20901;
i__20378_20845 = G__20902;
continue;
} else {
var G__20903 = seq__20374_20842;
var G__20904 = chunk__20376_20843;
var G__20905 = count__20377_20844;
var G__20906 = (i__20378_20845 + (1));
seq__20374_20842 = G__20903;
chunk__20376_20843 = G__20904;
count__20377_20844 = G__20905;
i__20378_20845 = G__20906;
continue;
}
} else {
var temp__5804__auto___20907 = cljs.core.seq(seq__20374_20842);
if(temp__5804__auto___20907){
var seq__20374_20908__$1 = temp__5804__auto___20907;
if(cljs.core.chunked_seq_QMARK_(seq__20374_20908__$1)){
var c__5568__auto___20909 = cljs.core.chunk_first(seq__20374_20908__$1);
var G__20914 = cljs.core.chunk_rest(seq__20374_20908__$1);
var G__20915 = c__5568__auto___20909;
var G__20916 = cljs.core.count(c__5568__auto___20909);
var G__20917 = (0);
seq__20374_20842 = G__20914;
chunk__20376_20843 = G__20915;
count__20377_20844 = G__20916;
i__20378_20845 = G__20917;
continue;
} else {
var child_struct_20922 = cljs.core.first(seq__20374_20908__$1);
if((!((child_struct_20922 == null)))){
if(typeof child_struct_20922 === 'string'){
var text_20927 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20927),child_struct_20922].join(''));
} else {
var children_20930 = shadow.dom.svg_node(child_struct_20922);
if(cljs.core.seq_QMARK_(children_20930)){
var seq__20405_20936 = cljs.core.seq(children_20930);
var chunk__20407_20937 = null;
var count__20408_20938 = (0);
var i__20409_20939 = (0);
while(true){
if((i__20409_20939 < count__20408_20938)){
var child_20949 = chunk__20407_20937.cljs$core$IIndexed$_nth$arity$2(null,i__20409_20939);
if(cljs.core.truth_(child_20949)){
node.appendChild(child_20949);


var G__20951 = seq__20405_20936;
var G__20952 = chunk__20407_20937;
var G__20953 = count__20408_20938;
var G__20954 = (i__20409_20939 + (1));
seq__20405_20936 = G__20951;
chunk__20407_20937 = G__20952;
count__20408_20938 = G__20953;
i__20409_20939 = G__20954;
continue;
} else {
var G__20955 = seq__20405_20936;
var G__20956 = chunk__20407_20937;
var G__20957 = count__20408_20938;
var G__20958 = (i__20409_20939 + (1));
seq__20405_20936 = G__20955;
chunk__20407_20937 = G__20956;
count__20408_20938 = G__20957;
i__20409_20939 = G__20958;
continue;
}
} else {
var temp__5804__auto___20959__$1 = cljs.core.seq(seq__20405_20936);
if(temp__5804__auto___20959__$1){
var seq__20405_20960__$1 = temp__5804__auto___20959__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20405_20960__$1)){
var c__5568__auto___20961 = cljs.core.chunk_first(seq__20405_20960__$1);
var G__20963 = cljs.core.chunk_rest(seq__20405_20960__$1);
var G__20964 = c__5568__auto___20961;
var G__20965 = cljs.core.count(c__5568__auto___20961);
var G__20966 = (0);
seq__20405_20936 = G__20963;
chunk__20407_20937 = G__20964;
count__20408_20938 = G__20965;
i__20409_20939 = G__20966;
continue;
} else {
var child_20967 = cljs.core.first(seq__20405_20960__$1);
if(cljs.core.truth_(child_20967)){
node.appendChild(child_20967);


var G__20972 = cljs.core.next(seq__20405_20960__$1);
var G__20973 = null;
var G__20974 = (0);
var G__20975 = (0);
seq__20405_20936 = G__20972;
chunk__20407_20937 = G__20973;
count__20408_20938 = G__20974;
i__20409_20939 = G__20975;
continue;
} else {
var G__20976 = cljs.core.next(seq__20405_20960__$1);
var G__20977 = null;
var G__20978 = (0);
var G__20979 = (0);
seq__20405_20936 = G__20976;
chunk__20407_20937 = G__20977;
count__20408_20938 = G__20978;
i__20409_20939 = G__20979;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20930);
}
}


var G__20980 = cljs.core.next(seq__20374_20908__$1);
var G__20981 = null;
var G__20982 = (0);
var G__20983 = (0);
seq__20374_20842 = G__20980;
chunk__20376_20843 = G__20981;
count__20377_20844 = G__20982;
i__20378_20845 = G__20983;
continue;
} else {
var G__20988 = cljs.core.next(seq__20374_20908__$1);
var G__20989 = null;
var G__20990 = (0);
var G__20991 = (0);
seq__20374_20842 = G__20988;
chunk__20376_20843 = G__20989;
count__20377_20844 = G__20990;
i__20378_20845 = G__20991;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21001 = arguments.length;
var i__5770__auto___21003 = (0);
while(true){
if((i__5770__auto___21003 < len__5769__auto___21001)){
args__5775__auto__.push((arguments[i__5770__auto___21003]));

var G__21010 = (i__5770__auto___21003 + (1));
i__5770__auto___21003 = G__21010;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20420){
var G__20421 = cljs.core.first(seq20420);
var seq20420__$1 = cljs.core.next(seq20420);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20421,seq20420__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20425 = arguments.length;
switch (G__20425) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17246__auto___21035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_20430){
var state_val_20431 = (state_20430[(1)]);
if((state_val_20431 === (1))){
var state_20430__$1 = state_20430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20430__$1,(2),once_or_cleanup);
} else {
if((state_val_20431 === (2))){
var inst_20427 = (state_20430[(2)]);
var inst_20428 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20430__$1 = (function (){var statearr_20432 = state_20430;
(statearr_20432[(7)] = inst_20427);

return statearr_20432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20430__$1,inst_20428);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17104__auto__ = null;
var shadow$dom$state_machine__17104__auto____0 = (function (){
var statearr_20433 = [null,null,null,null,null,null,null,null];
(statearr_20433[(0)] = shadow$dom$state_machine__17104__auto__);

(statearr_20433[(1)] = (1));

return statearr_20433;
});
var shadow$dom$state_machine__17104__auto____1 = (function (state_20430){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_20430);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e20434){var ex__17107__auto__ = e20434;
var statearr_20435_21042 = state_20430;
(statearr_20435_21042[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_20430[(4)]))){
var statearr_20436_21043 = state_20430;
(statearr_20436_21043[(1)] = cljs.core.first((state_20430[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21048 = state_20430;
state_20430 = G__21048;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
shadow$dom$state_machine__17104__auto__ = function(state_20430){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17104__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17104__auto____1.call(this,state_20430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17104__auto____0;
shadow$dom$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17104__auto____1;
return shadow$dom$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_20437 = f__17247__auto__();
(statearr_20437[(6)] = c__17246__auto___21035);

return statearr_20437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
