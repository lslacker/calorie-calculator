goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22554 = arguments.length;
var i__5770__auto___22555 = (0);
while(true){
if((i__5770__auto___22555 < len__5769__auto___22554)){
args__5775__auto__.push((arguments[i__5770__auto___22555]));

var G__22556 = (i__5770__auto___22555 + (1));
i__5770__auto___22555 = G__22556;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22165){
var G__22166 = cljs.core.first(seq22165);
var seq22165__$1 = cljs.core.next(seq22165);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22166,seq22165__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22169 = cljs.core.seq(sources);
var chunk__22170 = null;
var count__22171 = (0);
var i__22172 = (0);
while(true){
if((i__22172 < count__22171)){
var map__22177 = chunk__22170.cljs$core$IIndexed$_nth$arity$2(null,i__22172);
var map__22177__$1 = cljs.core.__destructure_map(map__22177);
var src = map__22177__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22177__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22177__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22177__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22179){var e_22557 = e22179;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22557);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22557.message)].join('')));
}

var G__22558 = seq__22169;
var G__22559 = chunk__22170;
var G__22560 = count__22171;
var G__22561 = (i__22172 + (1));
seq__22169 = G__22558;
chunk__22170 = G__22559;
count__22171 = G__22560;
i__22172 = G__22561;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22169);
if(temp__5804__auto__){
var seq__22169__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22169__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22169__$1);
var G__22562 = cljs.core.chunk_rest(seq__22169__$1);
var G__22563 = c__5568__auto__;
var G__22564 = cljs.core.count(c__5568__auto__);
var G__22565 = (0);
seq__22169 = G__22562;
chunk__22170 = G__22563;
count__22171 = G__22564;
i__22172 = G__22565;
continue;
} else {
var map__22181 = cljs.core.first(seq__22169__$1);
var map__22181__$1 = cljs.core.__destructure_map(map__22181);
var src = map__22181__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22181__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22181__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22181__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22181__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22182){var e_22566 = e22182;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22566);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22566.message)].join('')));
}

var G__22567 = cljs.core.next(seq__22169__$1);
var G__22568 = null;
var G__22569 = (0);
var G__22570 = (0);
seq__22169 = G__22567;
chunk__22170 = G__22568;
count__22171 = G__22569;
i__22172 = G__22570;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22183 = cljs.core.seq(js_requires);
var chunk__22184 = null;
var count__22185 = (0);
var i__22186 = (0);
while(true){
if((i__22186 < count__22185)){
var js_ns = chunk__22184.cljs$core$IIndexed$_nth$arity$2(null,i__22186);
var require_str_22571 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22571);


var G__22572 = seq__22183;
var G__22573 = chunk__22184;
var G__22574 = count__22185;
var G__22575 = (i__22186 + (1));
seq__22183 = G__22572;
chunk__22184 = G__22573;
count__22185 = G__22574;
i__22186 = G__22575;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22183);
if(temp__5804__auto__){
var seq__22183__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22183__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22183__$1);
var G__22576 = cljs.core.chunk_rest(seq__22183__$1);
var G__22577 = c__5568__auto__;
var G__22578 = cljs.core.count(c__5568__auto__);
var G__22579 = (0);
seq__22183 = G__22576;
chunk__22184 = G__22577;
count__22185 = G__22578;
i__22186 = G__22579;
continue;
} else {
var js_ns = cljs.core.first(seq__22183__$1);
var require_str_22580 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22580);


var G__22581 = cljs.core.next(seq__22183__$1);
var G__22582 = null;
var G__22583 = (0);
var G__22584 = (0);
seq__22183 = G__22581;
chunk__22184 = G__22582;
count__22185 = G__22583;
i__22186 = G__22584;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22188){
var map__22189 = p__22188;
var map__22189__$1 = cljs.core.__destructure_map(map__22189);
var msg = map__22189__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22189__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22189__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22190(s__22191){
return (new cljs.core.LazySeq(null,(function (){
var s__22191__$1 = s__22191;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22191__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22196 = cljs.core.first(xs__6360__auto__);
var map__22196__$1 = cljs.core.__destructure_map(map__22196);
var src = map__22196__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22196__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22196__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22191__$1,map__22196,map__22196__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22189,map__22189__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22190_$_iter__22192(s__22193){
return (new cljs.core.LazySeq(null,((function (s__22191__$1,map__22196,map__22196__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22189,map__22189__$1,msg,info,reload_info){
return (function (){
var s__22193__$1 = s__22193;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22193__$1);
if(temp__5804__auto____$1){
var s__22193__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22193__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22193__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22195 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22194 = (0);
while(true){
if((i__22194 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22194);
cljs.core.chunk_append(b__22195,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22585 = (i__22194 + (1));
i__22194 = G__22585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22195),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22190_$_iter__22192(cljs.core.chunk_rest(s__22193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22195),null);
}
} else {
var warning = cljs.core.first(s__22193__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22190_$_iter__22192(cljs.core.rest(s__22193__$2)));
}
} else {
return null;
}
break;
}
});})(s__22191__$1,map__22196,map__22196__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22189,map__22189__$1,msg,info,reload_info))
,null,null));
});})(s__22191__$1,map__22196,map__22196__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22189,map__22189__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22190(cljs.core.rest(s__22191__$1)));
} else {
var G__22586 = cljs.core.rest(s__22191__$1);
s__22191__$1 = G__22586;
continue;
}
} else {
var G__22587 = cljs.core.rest(s__22191__$1);
s__22191__$1 = G__22587;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22197_22588 = cljs.core.seq(warnings);
var chunk__22198_22589 = null;
var count__22199_22590 = (0);
var i__22200_22591 = (0);
while(true){
if((i__22200_22591 < count__22199_22590)){
var map__22203_22592 = chunk__22198_22589.cljs$core$IIndexed$_nth$arity$2(null,i__22200_22591);
var map__22203_22593__$1 = cljs.core.__destructure_map(map__22203_22592);
var w_22594 = map__22203_22593__$1;
var msg_22595__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22203_22593__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22203_22593__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22203_22593__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22203_22593__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22598)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22596),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22597),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22595__$1)].join(''));


var G__22599 = seq__22197_22588;
var G__22600 = chunk__22198_22589;
var G__22601 = count__22199_22590;
var G__22602 = (i__22200_22591 + (1));
seq__22197_22588 = G__22599;
chunk__22198_22589 = G__22600;
count__22199_22590 = G__22601;
i__22200_22591 = G__22602;
continue;
} else {
var temp__5804__auto___22603 = cljs.core.seq(seq__22197_22588);
if(temp__5804__auto___22603){
var seq__22197_22604__$1 = temp__5804__auto___22603;
if(cljs.core.chunked_seq_QMARK_(seq__22197_22604__$1)){
var c__5568__auto___22605 = cljs.core.chunk_first(seq__22197_22604__$1);
var G__22606 = cljs.core.chunk_rest(seq__22197_22604__$1);
var G__22607 = c__5568__auto___22605;
var G__22608 = cljs.core.count(c__5568__auto___22605);
var G__22609 = (0);
seq__22197_22588 = G__22606;
chunk__22198_22589 = G__22607;
count__22199_22590 = G__22608;
i__22200_22591 = G__22609;
continue;
} else {
var map__22204_22610 = cljs.core.first(seq__22197_22604__$1);
var map__22204_22611__$1 = cljs.core.__destructure_map(map__22204_22610);
var w_22612 = map__22204_22611__$1;
var msg_22613__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204_22611__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204_22611__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204_22611__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22204_22611__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22616)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22614),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22615),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22613__$1)].join(''));


var G__22617 = cljs.core.next(seq__22197_22604__$1);
var G__22618 = null;
var G__22619 = (0);
var G__22620 = (0);
seq__22197_22588 = G__22617;
chunk__22198_22589 = G__22618;
count__22199_22590 = G__22619;
i__22200_22591 = G__22620;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22187_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22187_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22205){
var map__22206 = p__22205;
var map__22206__$1 = cljs.core.__destructure_map(map__22206);
var msg = map__22206__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22206__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22206__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22207 = cljs.core.seq(updates);
var chunk__22209 = null;
var count__22210 = (0);
var i__22211 = (0);
while(true){
if((i__22211 < count__22210)){
var path = chunk__22209.cljs$core$IIndexed$_nth$arity$2(null,i__22211);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22341_22625 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22345_22626 = null;
var count__22346_22627 = (0);
var i__22347_22628 = (0);
while(true){
if((i__22347_22628 < count__22346_22627)){
var node_22629 = chunk__22345_22626.cljs$core$IIndexed$_nth$arity$2(null,i__22347_22628);
if(cljs.core.not(node_22629.shadow$old)){
var path_match_22630 = shadow.cljs.devtools.client.browser.match_paths(node_22629.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22630)){
var new_link_22631 = (function (){var G__22377 = node_22629.cloneNode(true);
G__22377.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22630),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22377;
})();
(node_22629.shadow$old = true);

(new_link_22631.onload = ((function (seq__22341_22625,chunk__22345_22626,count__22346_22627,i__22347_22628,seq__22207,chunk__22209,count__22210,i__22211,new_link_22631,path_match_22630,node_22629,path,map__22206,map__22206__$1,msg,updates,reload_info){
return (function (e){
var seq__22378_22632 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22380_22633 = null;
var count__22381_22634 = (0);
var i__22382_22635 = (0);
while(true){
if((i__22382_22635 < count__22381_22634)){
var map__22386_22636 = chunk__22380_22633.cljs$core$IIndexed$_nth$arity$2(null,i__22382_22635);
var map__22386_22637__$1 = cljs.core.__destructure_map(map__22386_22636);
var task_22638 = map__22386_22637__$1;
var fn_str_22639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22386_22637__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22386_22637__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22643 = goog.getObjectByName(fn_str_22639,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22640)].join(''));

(fn_obj_22643.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22643.cljs$core$IFn$_invoke$arity$2(path,new_link_22631) : fn_obj_22643.call(null,path,new_link_22631));


var G__22644 = seq__22378_22632;
var G__22645 = chunk__22380_22633;
var G__22646 = count__22381_22634;
var G__22647 = (i__22382_22635 + (1));
seq__22378_22632 = G__22644;
chunk__22380_22633 = G__22645;
count__22381_22634 = G__22646;
i__22382_22635 = G__22647;
continue;
} else {
var temp__5804__auto___22648 = cljs.core.seq(seq__22378_22632);
if(temp__5804__auto___22648){
var seq__22378_22649__$1 = temp__5804__auto___22648;
if(cljs.core.chunked_seq_QMARK_(seq__22378_22649__$1)){
var c__5568__auto___22650 = cljs.core.chunk_first(seq__22378_22649__$1);
var G__22651 = cljs.core.chunk_rest(seq__22378_22649__$1);
var G__22652 = c__5568__auto___22650;
var G__22653 = cljs.core.count(c__5568__auto___22650);
var G__22654 = (0);
seq__22378_22632 = G__22651;
chunk__22380_22633 = G__22652;
count__22381_22634 = G__22653;
i__22382_22635 = G__22654;
continue;
} else {
var map__22387_22655 = cljs.core.first(seq__22378_22649__$1);
var map__22387_22656__$1 = cljs.core.__destructure_map(map__22387_22655);
var task_22657 = map__22387_22656__$1;
var fn_str_22658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22387_22656__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22387_22656__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22660 = goog.getObjectByName(fn_str_22658,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22659)].join(''));

(fn_obj_22660.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22660.cljs$core$IFn$_invoke$arity$2(path,new_link_22631) : fn_obj_22660.call(null,path,new_link_22631));


var G__22661 = cljs.core.next(seq__22378_22649__$1);
var G__22662 = null;
var G__22663 = (0);
var G__22664 = (0);
seq__22378_22632 = G__22661;
chunk__22380_22633 = G__22662;
count__22381_22634 = G__22663;
i__22382_22635 = G__22664;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22629);
});})(seq__22341_22625,chunk__22345_22626,count__22346_22627,i__22347_22628,seq__22207,chunk__22209,count__22210,i__22211,new_link_22631,path_match_22630,node_22629,path,map__22206,map__22206__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22630], 0));

goog.dom.insertSiblingAfter(new_link_22631,node_22629);


var G__22665 = seq__22341_22625;
var G__22666 = chunk__22345_22626;
var G__22667 = count__22346_22627;
var G__22668 = (i__22347_22628 + (1));
seq__22341_22625 = G__22665;
chunk__22345_22626 = G__22666;
count__22346_22627 = G__22667;
i__22347_22628 = G__22668;
continue;
} else {
var G__22669 = seq__22341_22625;
var G__22670 = chunk__22345_22626;
var G__22671 = count__22346_22627;
var G__22672 = (i__22347_22628 + (1));
seq__22341_22625 = G__22669;
chunk__22345_22626 = G__22670;
count__22346_22627 = G__22671;
i__22347_22628 = G__22672;
continue;
}
} else {
var G__22673 = seq__22341_22625;
var G__22674 = chunk__22345_22626;
var G__22675 = count__22346_22627;
var G__22676 = (i__22347_22628 + (1));
seq__22341_22625 = G__22673;
chunk__22345_22626 = G__22674;
count__22346_22627 = G__22675;
i__22347_22628 = G__22676;
continue;
}
} else {
var temp__5804__auto___22677 = cljs.core.seq(seq__22341_22625);
if(temp__5804__auto___22677){
var seq__22341_22678__$1 = temp__5804__auto___22677;
if(cljs.core.chunked_seq_QMARK_(seq__22341_22678__$1)){
var c__5568__auto___22679 = cljs.core.chunk_first(seq__22341_22678__$1);
var G__22680 = cljs.core.chunk_rest(seq__22341_22678__$1);
var G__22681 = c__5568__auto___22679;
var G__22682 = cljs.core.count(c__5568__auto___22679);
var G__22683 = (0);
seq__22341_22625 = G__22680;
chunk__22345_22626 = G__22681;
count__22346_22627 = G__22682;
i__22347_22628 = G__22683;
continue;
} else {
var node_22684 = cljs.core.first(seq__22341_22678__$1);
if(cljs.core.not(node_22684.shadow$old)){
var path_match_22685 = shadow.cljs.devtools.client.browser.match_paths(node_22684.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22685)){
var new_link_22686 = (function (){var G__22388 = node_22684.cloneNode(true);
G__22388.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22685),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22388;
})();
(node_22684.shadow$old = true);

(new_link_22686.onload = ((function (seq__22341_22625,chunk__22345_22626,count__22346_22627,i__22347_22628,seq__22207,chunk__22209,count__22210,i__22211,new_link_22686,path_match_22685,node_22684,seq__22341_22678__$1,temp__5804__auto___22677,path,map__22206,map__22206__$1,msg,updates,reload_info){
return (function (e){
var seq__22389_22687 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22391_22688 = null;
var count__22392_22689 = (0);
var i__22393_22690 = (0);
while(true){
if((i__22393_22690 < count__22392_22689)){
var map__22398_22691 = chunk__22391_22688.cljs$core$IIndexed$_nth$arity$2(null,i__22393_22690);
var map__22398_22692__$1 = cljs.core.__destructure_map(map__22398_22691);
var task_22693 = map__22398_22692__$1;
var fn_str_22694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22398_22692__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22398_22692__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22696 = goog.getObjectByName(fn_str_22694,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22695)].join(''));

(fn_obj_22696.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22696.cljs$core$IFn$_invoke$arity$2(path,new_link_22686) : fn_obj_22696.call(null,path,new_link_22686));


var G__22697 = seq__22389_22687;
var G__22698 = chunk__22391_22688;
var G__22699 = count__22392_22689;
var G__22700 = (i__22393_22690 + (1));
seq__22389_22687 = G__22697;
chunk__22391_22688 = G__22698;
count__22392_22689 = G__22699;
i__22393_22690 = G__22700;
continue;
} else {
var temp__5804__auto___22701__$1 = cljs.core.seq(seq__22389_22687);
if(temp__5804__auto___22701__$1){
var seq__22389_22702__$1 = temp__5804__auto___22701__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22389_22702__$1)){
var c__5568__auto___22703 = cljs.core.chunk_first(seq__22389_22702__$1);
var G__22704 = cljs.core.chunk_rest(seq__22389_22702__$1);
var G__22705 = c__5568__auto___22703;
var G__22706 = cljs.core.count(c__5568__auto___22703);
var G__22707 = (0);
seq__22389_22687 = G__22704;
chunk__22391_22688 = G__22705;
count__22392_22689 = G__22706;
i__22393_22690 = G__22707;
continue;
} else {
var map__22400_22708 = cljs.core.first(seq__22389_22702__$1);
var map__22400_22709__$1 = cljs.core.__destructure_map(map__22400_22708);
var task_22710 = map__22400_22709__$1;
var fn_str_22711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22400_22709__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22400_22709__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22713 = goog.getObjectByName(fn_str_22711,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22712)].join(''));

(fn_obj_22713.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22713.cljs$core$IFn$_invoke$arity$2(path,new_link_22686) : fn_obj_22713.call(null,path,new_link_22686));


var G__22714 = cljs.core.next(seq__22389_22702__$1);
var G__22715 = null;
var G__22716 = (0);
var G__22717 = (0);
seq__22389_22687 = G__22714;
chunk__22391_22688 = G__22715;
count__22392_22689 = G__22716;
i__22393_22690 = G__22717;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22684);
});})(seq__22341_22625,chunk__22345_22626,count__22346_22627,i__22347_22628,seq__22207,chunk__22209,count__22210,i__22211,new_link_22686,path_match_22685,node_22684,seq__22341_22678__$1,temp__5804__auto___22677,path,map__22206,map__22206__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22685], 0));

goog.dom.insertSiblingAfter(new_link_22686,node_22684);


var G__22718 = cljs.core.next(seq__22341_22678__$1);
var G__22719 = null;
var G__22720 = (0);
var G__22721 = (0);
seq__22341_22625 = G__22718;
chunk__22345_22626 = G__22719;
count__22346_22627 = G__22720;
i__22347_22628 = G__22721;
continue;
} else {
var G__22722 = cljs.core.next(seq__22341_22678__$1);
var G__22723 = null;
var G__22724 = (0);
var G__22725 = (0);
seq__22341_22625 = G__22722;
chunk__22345_22626 = G__22723;
count__22346_22627 = G__22724;
i__22347_22628 = G__22725;
continue;
}
} else {
var G__22726 = cljs.core.next(seq__22341_22678__$1);
var G__22727 = null;
var G__22728 = (0);
var G__22729 = (0);
seq__22341_22625 = G__22726;
chunk__22345_22626 = G__22727;
count__22346_22627 = G__22728;
i__22347_22628 = G__22729;
continue;
}
}
} else {
}
}
break;
}


var G__22730 = seq__22207;
var G__22731 = chunk__22209;
var G__22732 = count__22210;
var G__22733 = (i__22211 + (1));
seq__22207 = G__22730;
chunk__22209 = G__22731;
count__22210 = G__22732;
i__22211 = G__22733;
continue;
} else {
var G__22734 = seq__22207;
var G__22735 = chunk__22209;
var G__22736 = count__22210;
var G__22737 = (i__22211 + (1));
seq__22207 = G__22734;
chunk__22209 = G__22735;
count__22210 = G__22736;
i__22211 = G__22737;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22207);
if(temp__5804__auto__){
var seq__22207__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22207__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22207__$1);
var G__22738 = cljs.core.chunk_rest(seq__22207__$1);
var G__22739 = c__5568__auto__;
var G__22740 = cljs.core.count(c__5568__auto__);
var G__22741 = (0);
seq__22207 = G__22738;
chunk__22209 = G__22739;
count__22210 = G__22740;
i__22211 = G__22741;
continue;
} else {
var path = cljs.core.first(seq__22207__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22401_22742 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22405_22743 = null;
var count__22406_22744 = (0);
var i__22407_22745 = (0);
while(true){
if((i__22407_22745 < count__22406_22744)){
var node_22746 = chunk__22405_22743.cljs$core$IIndexed$_nth$arity$2(null,i__22407_22745);
if(cljs.core.not(node_22746.shadow$old)){
var path_match_22747 = shadow.cljs.devtools.client.browser.match_paths(node_22746.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22747)){
var new_link_22748 = (function (){var G__22434 = node_22746.cloneNode(true);
G__22434.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22747),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22434;
})();
(node_22746.shadow$old = true);

(new_link_22748.onload = ((function (seq__22401_22742,chunk__22405_22743,count__22406_22744,i__22407_22745,seq__22207,chunk__22209,count__22210,i__22211,new_link_22748,path_match_22747,node_22746,path,seq__22207__$1,temp__5804__auto__,map__22206,map__22206__$1,msg,updates,reload_info){
return (function (e){
var seq__22436_22749 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22438_22750 = null;
var count__22439_22751 = (0);
var i__22440_22752 = (0);
while(true){
if((i__22440_22752 < count__22439_22751)){
var map__22456_22753 = chunk__22438_22750.cljs$core$IIndexed$_nth$arity$2(null,i__22440_22752);
var map__22456_22754__$1 = cljs.core.__destructure_map(map__22456_22753);
var task_22755 = map__22456_22754__$1;
var fn_str_22756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22456_22754__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22456_22754__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22761 = goog.getObjectByName(fn_str_22756,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22757)].join(''));

(fn_obj_22761.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22761.cljs$core$IFn$_invoke$arity$2(path,new_link_22748) : fn_obj_22761.call(null,path,new_link_22748));


var G__22762 = seq__22436_22749;
var G__22763 = chunk__22438_22750;
var G__22764 = count__22439_22751;
var G__22765 = (i__22440_22752 + (1));
seq__22436_22749 = G__22762;
chunk__22438_22750 = G__22763;
count__22439_22751 = G__22764;
i__22440_22752 = G__22765;
continue;
} else {
var temp__5804__auto___22766__$1 = cljs.core.seq(seq__22436_22749);
if(temp__5804__auto___22766__$1){
var seq__22436_22767__$1 = temp__5804__auto___22766__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22436_22767__$1)){
var c__5568__auto___22768 = cljs.core.chunk_first(seq__22436_22767__$1);
var G__22769 = cljs.core.chunk_rest(seq__22436_22767__$1);
var G__22770 = c__5568__auto___22768;
var G__22771 = cljs.core.count(c__5568__auto___22768);
var G__22772 = (0);
seq__22436_22749 = G__22769;
chunk__22438_22750 = G__22770;
count__22439_22751 = G__22771;
i__22440_22752 = G__22772;
continue;
} else {
var map__22458_22773 = cljs.core.first(seq__22436_22767__$1);
var map__22458_22774__$1 = cljs.core.__destructure_map(map__22458_22773);
var task_22775 = map__22458_22774__$1;
var fn_str_22776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22458_22774__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22458_22774__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22778 = goog.getObjectByName(fn_str_22776,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22777)].join(''));

(fn_obj_22778.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22778.cljs$core$IFn$_invoke$arity$2(path,new_link_22748) : fn_obj_22778.call(null,path,new_link_22748));


var G__22779 = cljs.core.next(seq__22436_22767__$1);
var G__22780 = null;
var G__22781 = (0);
var G__22782 = (0);
seq__22436_22749 = G__22779;
chunk__22438_22750 = G__22780;
count__22439_22751 = G__22781;
i__22440_22752 = G__22782;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22746);
});})(seq__22401_22742,chunk__22405_22743,count__22406_22744,i__22407_22745,seq__22207,chunk__22209,count__22210,i__22211,new_link_22748,path_match_22747,node_22746,path,seq__22207__$1,temp__5804__auto__,map__22206,map__22206__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22747], 0));

goog.dom.insertSiblingAfter(new_link_22748,node_22746);


var G__22783 = seq__22401_22742;
var G__22784 = chunk__22405_22743;
var G__22785 = count__22406_22744;
var G__22786 = (i__22407_22745 + (1));
seq__22401_22742 = G__22783;
chunk__22405_22743 = G__22784;
count__22406_22744 = G__22785;
i__22407_22745 = G__22786;
continue;
} else {
var G__22787 = seq__22401_22742;
var G__22788 = chunk__22405_22743;
var G__22789 = count__22406_22744;
var G__22790 = (i__22407_22745 + (1));
seq__22401_22742 = G__22787;
chunk__22405_22743 = G__22788;
count__22406_22744 = G__22789;
i__22407_22745 = G__22790;
continue;
}
} else {
var G__22791 = seq__22401_22742;
var G__22792 = chunk__22405_22743;
var G__22793 = count__22406_22744;
var G__22794 = (i__22407_22745 + (1));
seq__22401_22742 = G__22791;
chunk__22405_22743 = G__22792;
count__22406_22744 = G__22793;
i__22407_22745 = G__22794;
continue;
}
} else {
var temp__5804__auto___22795__$1 = cljs.core.seq(seq__22401_22742);
if(temp__5804__auto___22795__$1){
var seq__22401_22796__$1 = temp__5804__auto___22795__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22401_22796__$1)){
var c__5568__auto___22797 = cljs.core.chunk_first(seq__22401_22796__$1);
var G__22798 = cljs.core.chunk_rest(seq__22401_22796__$1);
var G__22799 = c__5568__auto___22797;
var G__22800 = cljs.core.count(c__5568__auto___22797);
var G__22801 = (0);
seq__22401_22742 = G__22798;
chunk__22405_22743 = G__22799;
count__22406_22744 = G__22800;
i__22407_22745 = G__22801;
continue;
} else {
var node_22802 = cljs.core.first(seq__22401_22796__$1);
if(cljs.core.not(node_22802.shadow$old)){
var path_match_22803 = shadow.cljs.devtools.client.browser.match_paths(node_22802.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22803)){
var new_link_22804 = (function (){var G__22469 = node_22802.cloneNode(true);
G__22469.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22803),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22469;
})();
(node_22802.shadow$old = true);

(new_link_22804.onload = ((function (seq__22401_22742,chunk__22405_22743,count__22406_22744,i__22407_22745,seq__22207,chunk__22209,count__22210,i__22211,new_link_22804,path_match_22803,node_22802,seq__22401_22796__$1,temp__5804__auto___22795__$1,path,seq__22207__$1,temp__5804__auto__,map__22206,map__22206__$1,msg,updates,reload_info){
return (function (e){
var seq__22473_22805 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22475_22806 = null;
var count__22476_22807 = (0);
var i__22477_22808 = (0);
while(true){
if((i__22477_22808 < count__22476_22807)){
var map__22493_22809 = chunk__22475_22806.cljs$core$IIndexed$_nth$arity$2(null,i__22477_22808);
var map__22493_22810__$1 = cljs.core.__destructure_map(map__22493_22809);
var task_22811 = map__22493_22810__$1;
var fn_str_22812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493_22810__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493_22810__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22814 = goog.getObjectByName(fn_str_22812,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22813)].join(''));

(fn_obj_22814.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22814.cljs$core$IFn$_invoke$arity$2(path,new_link_22804) : fn_obj_22814.call(null,path,new_link_22804));


var G__22815 = seq__22473_22805;
var G__22816 = chunk__22475_22806;
var G__22817 = count__22476_22807;
var G__22818 = (i__22477_22808 + (1));
seq__22473_22805 = G__22815;
chunk__22475_22806 = G__22816;
count__22476_22807 = G__22817;
i__22477_22808 = G__22818;
continue;
} else {
var temp__5804__auto___22819__$2 = cljs.core.seq(seq__22473_22805);
if(temp__5804__auto___22819__$2){
var seq__22473_22820__$1 = temp__5804__auto___22819__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22473_22820__$1)){
var c__5568__auto___22821 = cljs.core.chunk_first(seq__22473_22820__$1);
var G__22822 = cljs.core.chunk_rest(seq__22473_22820__$1);
var G__22823 = c__5568__auto___22821;
var G__22824 = cljs.core.count(c__5568__auto___22821);
var G__22825 = (0);
seq__22473_22805 = G__22822;
chunk__22475_22806 = G__22823;
count__22476_22807 = G__22824;
i__22477_22808 = G__22825;
continue;
} else {
var map__22499_22826 = cljs.core.first(seq__22473_22820__$1);
var map__22499_22827__$1 = cljs.core.__destructure_map(map__22499_22826);
var task_22828 = map__22499_22827__$1;
var fn_str_22829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22499_22827__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22499_22827__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22831 = goog.getObjectByName(fn_str_22829,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22830)].join(''));

(fn_obj_22831.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22831.cljs$core$IFn$_invoke$arity$2(path,new_link_22804) : fn_obj_22831.call(null,path,new_link_22804));


var G__22832 = cljs.core.next(seq__22473_22820__$1);
var G__22833 = null;
var G__22834 = (0);
var G__22835 = (0);
seq__22473_22805 = G__22832;
chunk__22475_22806 = G__22833;
count__22476_22807 = G__22834;
i__22477_22808 = G__22835;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22802);
});})(seq__22401_22742,chunk__22405_22743,count__22406_22744,i__22407_22745,seq__22207,chunk__22209,count__22210,i__22211,new_link_22804,path_match_22803,node_22802,seq__22401_22796__$1,temp__5804__auto___22795__$1,path,seq__22207__$1,temp__5804__auto__,map__22206,map__22206__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22803], 0));

goog.dom.insertSiblingAfter(new_link_22804,node_22802);


var G__22836 = cljs.core.next(seq__22401_22796__$1);
var G__22837 = null;
var G__22838 = (0);
var G__22839 = (0);
seq__22401_22742 = G__22836;
chunk__22405_22743 = G__22837;
count__22406_22744 = G__22838;
i__22407_22745 = G__22839;
continue;
} else {
var G__22840 = cljs.core.next(seq__22401_22796__$1);
var G__22841 = null;
var G__22842 = (0);
var G__22843 = (0);
seq__22401_22742 = G__22840;
chunk__22405_22743 = G__22841;
count__22406_22744 = G__22842;
i__22407_22745 = G__22843;
continue;
}
} else {
var G__22844 = cljs.core.next(seq__22401_22796__$1);
var G__22845 = null;
var G__22846 = (0);
var G__22847 = (0);
seq__22401_22742 = G__22844;
chunk__22405_22743 = G__22845;
count__22406_22744 = G__22846;
i__22407_22745 = G__22847;
continue;
}
}
} else {
}
}
break;
}


var G__22848 = cljs.core.next(seq__22207__$1);
var G__22849 = null;
var G__22850 = (0);
var G__22851 = (0);
seq__22207 = G__22848;
chunk__22209 = G__22849;
count__22210 = G__22850;
i__22211 = G__22851;
continue;
} else {
var G__22852 = cljs.core.next(seq__22207__$1);
var G__22853 = null;
var G__22854 = (0);
var G__22855 = (0);
seq__22207 = G__22852;
chunk__22209 = G__22853;
count__22210 = G__22854;
i__22211 = G__22855;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22528){
var map__22529 = p__22528;
var map__22529__$1 = cljs.core.__destructure_map(map__22529);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22529__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22530,done,error){
var map__22531 = p__22530;
var map__22531__$1 = cljs.core.__destructure_map(map__22531);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22531__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22532,done,error){
var map__22533 = p__22532;
var map__22533__$1 = cljs.core.__destructure_map(map__22533);
var msg = map__22533__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22533__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22533__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22533__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22534){
var map__22535 = p__22534;
var map__22535__$1 = cljs.core.__destructure_map(map__22535);
var src = map__22535__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22535__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22536 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22536) : done.call(null,G__22536));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22537){
var map__22538 = p__22537;
var map__22538__$1 = cljs.core.__destructure_map(map__22538);
var msg__$1 = map__22538__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22538__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22541){var ex = e22541;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22542){
var map__22543 = p__22542;
var map__22543__$1 = cljs.core.__destructure_map(map__22543);
var env = map__22543__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22543__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22545){
var map__22548 = p__22545;
var map__22548__$1 = cljs.core.__destructure_map(map__22548);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22548__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22548__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22552){
var map__22553 = p__22552;
var map__22553__$1 = cljs.core.__destructure_map(map__22553);
var svc = map__22553__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22553__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
