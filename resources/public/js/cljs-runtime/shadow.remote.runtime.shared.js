goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17363){
var map__17364 = p__17363;
var map__17364__$1 = cljs.core.__destructure_map(map__17364);
var runtime = map__17364__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17364__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_17589 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_17589)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17366 = runtime;
var G__17367 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_17589);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17366,G__17367) : shadow.remote.runtime.shared.process.call(null,G__17366,G__17367));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17371,res){
var map__17373 = p__17371;
var map__17373__$1 = cljs.core.__destructure_map(map__17373);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17373__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17373__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17374 = res;
var G__17374__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17374,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17374);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17374__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17374__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17376 = arguments.length;
switch (G__17376) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17377,msg,handlers,timeout_after_ms){
var map__17381 = p__17377;
var map__17381__$1 = cljs.core.__destructure_map(map__17381);
var runtime = map__17381__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17381__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17601 = arguments.length;
var i__5770__auto___17602 = (0);
while(true){
if((i__5770__auto___17602 < len__5769__auto___17601)){
args__5775__auto__.push((arguments[i__5770__auto___17602]));

var G__17604 = (i__5770__auto___17602 + (1));
i__5770__auto___17602 = G__17604;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17408,ev,args){
var map__17409 = p__17408;
var map__17409__$1 = cljs.core.__destructure_map(map__17409);
var runtime = map__17409__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17409__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17410 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17413 = null;
var count__17414 = (0);
var i__17415 = (0);
while(true){
if((i__17415 < count__17414)){
var ext = chunk__17413.cljs$core$IIndexed$_nth$arity$2(null,i__17415);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17609 = seq__17410;
var G__17610 = chunk__17413;
var G__17611 = count__17414;
var G__17612 = (i__17415 + (1));
seq__17410 = G__17609;
chunk__17413 = G__17610;
count__17414 = G__17611;
i__17415 = G__17612;
continue;
} else {
var G__17614 = seq__17410;
var G__17615 = chunk__17413;
var G__17616 = count__17414;
var G__17617 = (i__17415 + (1));
seq__17410 = G__17614;
chunk__17413 = G__17615;
count__17414 = G__17616;
i__17415 = G__17617;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17410);
if(temp__5804__auto__){
var seq__17410__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17410__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17410__$1);
var G__17618 = cljs.core.chunk_rest(seq__17410__$1);
var G__17619 = c__5568__auto__;
var G__17620 = cljs.core.count(c__5568__auto__);
var G__17621 = (0);
seq__17410 = G__17618;
chunk__17413 = G__17619;
count__17414 = G__17620;
i__17415 = G__17621;
continue;
} else {
var ext = cljs.core.first(seq__17410__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17622 = cljs.core.next(seq__17410__$1);
var G__17623 = null;
var G__17624 = (0);
var G__17625 = (0);
seq__17410 = G__17622;
chunk__17413 = G__17623;
count__17414 = G__17624;
i__17415 = G__17625;
continue;
} else {
var G__17626 = cljs.core.next(seq__17410__$1);
var G__17627 = null;
var G__17628 = (0);
var G__17629 = (0);
seq__17410 = G__17626;
chunk__17413 = G__17627;
count__17414 = G__17628;
i__17415 = G__17629;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17388){
var G__17389 = cljs.core.first(seq17388);
var seq17388__$1 = cljs.core.next(seq17388);
var G__17390 = cljs.core.first(seq17388__$1);
var seq17388__$2 = cljs.core.next(seq17388__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17389,G__17390,seq17388__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17480,p__17481){
var map__17485 = p__17480;
var map__17485__$1 = cljs.core.__destructure_map(map__17485);
var runtime = map__17485__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17486 = p__17481;
var map__17486__$1 = cljs.core.__destructure_map(map__17486);
var msg = map__17486__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17496 = cljs.core.deref(state_ref);
var map__17496__$1 = cljs.core.__destructure_map(map__17496);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17496__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17496__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17498,msg){
var map__17500 = p__17498;
var map__17500__$1 = cljs.core.__destructure_map(map__17500);
var runtime = map__17500__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17500__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17510,key,p__17511){
var map__17516 = p__17510;
var map__17516__$1 = cljs.core.__destructure_map(map__17516);
var state = map__17516__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17516__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17517 = p__17511;
var map__17517__$1 = cljs.core.__destructure_map(map__17517);
var spec = map__17517__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17521,key,spec){
var map__17522 = p__17521;
var map__17522__$1 = cljs.core.__destructure_map(map__17522);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17532_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17532_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17535_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17535_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17537_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17537_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17538_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17538_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17539_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17539_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17551,key){
var map__17552 = p__17551;
var map__17552__$1 = cljs.core.__destructure_map(map__17552);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17552__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17556,msg){
var map__17557 = p__17556;
var map__17557__$1 = cljs.core.__destructure_map(map__17557);
var runtime = map__17557__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17557__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17561,p__17562){
var map__17563 = p__17561;
var map__17563__$1 = cljs.core.__destructure_map(map__17563);
var runtime = map__17563__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17564 = p__17562;
var map__17564__$1 = cljs.core.__destructure_map(map__17564);
var msg = map__17564__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17564__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17564__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17571 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17573 = null;
var count__17574 = (0);
var i__17575 = (0);
while(true){
if((i__17575 < count__17574)){
var map__17585 = chunk__17573.cljs$core$IIndexed$_nth$arity$2(null,i__17575);
var map__17585__$1 = cljs.core.__destructure_map(map__17585);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17585__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17632 = seq__17571;
var G__17633 = chunk__17573;
var G__17634 = count__17574;
var G__17635 = (i__17575 + (1));
seq__17571 = G__17632;
chunk__17573 = G__17633;
count__17574 = G__17634;
i__17575 = G__17635;
continue;
} else {
var G__17636 = seq__17571;
var G__17637 = chunk__17573;
var G__17638 = count__17574;
var G__17639 = (i__17575 + (1));
seq__17571 = G__17636;
chunk__17573 = G__17637;
count__17574 = G__17638;
i__17575 = G__17639;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17571);
if(temp__5804__auto__){
var seq__17571__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17571__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17571__$1);
var G__17640 = cljs.core.chunk_rest(seq__17571__$1);
var G__17641 = c__5568__auto__;
var G__17642 = cljs.core.count(c__5568__auto__);
var G__17643 = (0);
seq__17571 = G__17640;
chunk__17573 = G__17641;
count__17574 = G__17642;
i__17575 = G__17643;
continue;
} else {
var map__17588 = cljs.core.first(seq__17571__$1);
var map__17588__$1 = cljs.core.__destructure_map(map__17588);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17588__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17644 = cljs.core.next(seq__17571__$1);
var G__17645 = null;
var G__17646 = (0);
var G__17647 = (0);
seq__17571 = G__17644;
chunk__17573 = G__17645;
count__17574 = G__17646;
i__17575 = G__17647;
continue;
} else {
var G__17648 = cljs.core.next(seq__17571__$1);
var G__17649 = null;
var G__17650 = (0);
var G__17651 = (0);
seq__17571 = G__17648;
chunk__17573 = G__17649;
count__17574 = G__17650;
i__17575 = G__17651;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
