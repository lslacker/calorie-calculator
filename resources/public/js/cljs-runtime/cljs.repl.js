goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20691){
var map__20692 = p__20691;
var map__20692__$1 = cljs.core.__destructure_map(map__20692);
var m = map__20692__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20692__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20692__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20694_21087 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20695_21088 = null;
var count__20696_21089 = (0);
var i__20697_21090 = (0);
while(true){
if((i__20697_21090 < count__20696_21089)){
var f_21091 = chunk__20695_21088.cljs$core$IIndexed$_nth$arity$2(null,i__20697_21090);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21091], 0));


var G__21092 = seq__20694_21087;
var G__21093 = chunk__20695_21088;
var G__21094 = count__20696_21089;
var G__21095 = (i__20697_21090 + (1));
seq__20694_21087 = G__21092;
chunk__20695_21088 = G__21093;
count__20696_21089 = G__21094;
i__20697_21090 = G__21095;
continue;
} else {
var temp__5804__auto___21096 = cljs.core.seq(seq__20694_21087);
if(temp__5804__auto___21096){
var seq__20694_21097__$1 = temp__5804__auto___21096;
if(cljs.core.chunked_seq_QMARK_(seq__20694_21097__$1)){
var c__5568__auto___21098 = cljs.core.chunk_first(seq__20694_21097__$1);
var G__21099 = cljs.core.chunk_rest(seq__20694_21097__$1);
var G__21100 = c__5568__auto___21098;
var G__21101 = cljs.core.count(c__5568__auto___21098);
var G__21102 = (0);
seq__20694_21087 = G__21099;
chunk__20695_21088 = G__21100;
count__20696_21089 = G__21101;
i__20697_21090 = G__21102;
continue;
} else {
var f_21103 = cljs.core.first(seq__20694_21097__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21103], 0));


var G__21104 = cljs.core.next(seq__20694_21097__$1);
var G__21105 = null;
var G__21106 = (0);
var G__21107 = (0);
seq__20694_21087 = G__21104;
chunk__20695_21088 = G__21105;
count__20696_21089 = G__21106;
i__20697_21090 = G__21107;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21108 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21108], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21108)))?cljs.core.second(arglists_21108):arglists_21108)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20717_21110 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20718_21111 = null;
var count__20719_21112 = (0);
var i__20720_21113 = (0);
while(true){
if((i__20720_21113 < count__20719_21112)){
var vec__20740_21114 = chunk__20718_21111.cljs$core$IIndexed$_nth$arity$2(null,i__20720_21113);
var name_21115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20740_21114,(0),null);
var map__20743_21116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20740_21114,(1),null);
var map__20743_21117__$1 = cljs.core.__destructure_map(map__20743_21116);
var doc_21118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20743_21117__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20743_21117__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21115], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21119], 0));

if(cljs.core.truth_(doc_21118)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21118], 0));
} else {
}


var G__21124 = seq__20717_21110;
var G__21125 = chunk__20718_21111;
var G__21126 = count__20719_21112;
var G__21127 = (i__20720_21113 + (1));
seq__20717_21110 = G__21124;
chunk__20718_21111 = G__21125;
count__20719_21112 = G__21126;
i__20720_21113 = G__21127;
continue;
} else {
var temp__5804__auto___21128 = cljs.core.seq(seq__20717_21110);
if(temp__5804__auto___21128){
var seq__20717_21129__$1 = temp__5804__auto___21128;
if(cljs.core.chunked_seq_QMARK_(seq__20717_21129__$1)){
var c__5568__auto___21130 = cljs.core.chunk_first(seq__20717_21129__$1);
var G__21131 = cljs.core.chunk_rest(seq__20717_21129__$1);
var G__21132 = c__5568__auto___21130;
var G__21133 = cljs.core.count(c__5568__auto___21130);
var G__21134 = (0);
seq__20717_21110 = G__21131;
chunk__20718_21111 = G__21132;
count__20719_21112 = G__21133;
i__20720_21113 = G__21134;
continue;
} else {
var vec__20749_21135 = cljs.core.first(seq__20717_21129__$1);
var name_21136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20749_21135,(0),null);
var map__20752_21137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20749_21135,(1),null);
var map__20752_21138__$1 = cljs.core.__destructure_map(map__20752_21137);
var doc_21139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20752_21138__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20752_21138__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21136], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21140], 0));

if(cljs.core.truth_(doc_21139)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21139], 0));
} else {
}


var G__21141 = cljs.core.next(seq__20717_21129__$1);
var G__21142 = null;
var G__21143 = (0);
var G__21144 = (0);
seq__20717_21110 = G__21141;
chunk__20718_21111 = G__21142;
count__20719_21112 = G__21143;
i__20720_21113 = G__21144;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20757 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20758 = null;
var count__20759 = (0);
var i__20760 = (0);
while(true){
if((i__20760 < count__20759)){
var role = chunk__20758.cljs$core$IIndexed$_nth$arity$2(null,i__20760);
var temp__5804__auto___21149__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21149__$1)){
var spec_21150 = temp__5804__auto___21149__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21150)], 0));
} else {
}


var G__21151 = seq__20757;
var G__21152 = chunk__20758;
var G__21153 = count__20759;
var G__21154 = (i__20760 + (1));
seq__20757 = G__21151;
chunk__20758 = G__21152;
count__20759 = G__21153;
i__20760 = G__21154;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20757);
if(temp__5804__auto____$1){
var seq__20757__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20757__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20757__$1);
var G__21155 = cljs.core.chunk_rest(seq__20757__$1);
var G__21156 = c__5568__auto__;
var G__21157 = cljs.core.count(c__5568__auto__);
var G__21158 = (0);
seq__20757 = G__21155;
chunk__20758 = G__21156;
count__20759 = G__21157;
i__20760 = G__21158;
continue;
} else {
var role = cljs.core.first(seq__20757__$1);
var temp__5804__auto___21159__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21159__$2)){
var spec_21160 = temp__5804__auto___21159__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21160)], 0));
} else {
}


var G__21161 = cljs.core.next(seq__20757__$1);
var G__21162 = null;
var G__21163 = (0);
var G__21164 = (0);
seq__20757 = G__21161;
chunk__20758 = G__21162;
count__20759 = G__21163;
i__20760 = G__21164;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21182 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__21183 = cljs.core.ex_cause(t);
via = G__21182;
t = G__21183;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20784 = datafied_throwable;
var map__20784__$1 = cljs.core.__destructure_map(map__20784);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20784__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20785 = cljs.core.last(via);
var map__20785__$1 = cljs.core.__destructure_map(map__20785);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20786 = data;
var map__20786__$1 = cljs.core.__destructure_map(map__20786);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20787 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20787__$1 = cljs.core.__destructure_map(map__20787);
var top_data = map__20787__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20817 = phase;
var G__20817__$1 = (((G__20817 instanceof cljs.core.Keyword))?G__20817.fqn:null);
switch (G__20817__$1) {
case "read-source":
var map__20827 = data;
var map__20827__$1 = cljs.core.__destructure_map(map__20827);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20828 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20828__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20828,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20828);
var G__20828__$2 = (cljs.core.truth_((function (){var fexpr__20833 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20833.cljs$core$IFn$_invoke$arity$1 ? fexpr__20833.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20833.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20828__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20828__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20828__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20828__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20838 = top_data;
var G__20838__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20838,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20838);
var G__20838__$2 = (cljs.core.truth_((function (){var fexpr__20846 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20846.cljs$core$IFn$_invoke$arity$1 ? fexpr__20846.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20846.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20838__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20838__$1);
var G__20838__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20838__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20838__$2);
var G__20838__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20838__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20838__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20838__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20838__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20856 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(3),null);
var G__20873 = top_data;
var G__20873__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20873,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20873);
var G__20873__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20873__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20873__$1);
var G__20873__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20873__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20873__$2);
var G__20873__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20873__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20873__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20873__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20873__$4;
}

break;
case "execution":
var vec__20923 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20923,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20923,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20923,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20923,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20782_SHARP_){
var or__5045__auto__ = (p1__20782_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20950 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20950.cljs$core$IFn$_invoke$arity$1 ? fexpr__20950.cljs$core$IFn$_invoke$arity$1(p1__20782_SHARP_) : fexpr__20950.call(null,p1__20782_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20962 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20962__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20962,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20962);
var G__20962__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20962__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20962__$1);
var G__20962__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20962__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20962__$2);
var G__20962__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20962__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20962__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20962__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20962__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20817__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21021){
var map__21030 = p__21021;
var map__21030__$1 = cljs.core.__destructure_map(map__21030);
var triage_data = map__21030__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21030__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21030__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21030__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21030__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21030__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21030__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21030__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21030__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21036 = phase;
var G__21036__$1 = (((G__21036 instanceof cljs.core.Keyword))?G__21036.fqn:null);
switch (G__21036__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21037 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21038 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21039 = loc;
var G__21040 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21044_21202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21045_21203 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21046_21204 = true;
var _STAR_print_fn_STAR__temp_val__21047_21205 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21046_21204);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21047_21205);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21004_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21004_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21045_21203);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21044_21202);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21037,G__21038,G__21039,G__21040) : format.call(null,G__21037,G__21038,G__21039,G__21040));

break;
case "macroexpansion":
var G__21050 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21051 = cause_type;
var G__21052 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21053 = loc;
var G__21054 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21050,G__21051,G__21052,G__21053,G__21054) : format.call(null,G__21050,G__21051,G__21052,G__21053,G__21054));

break;
case "compile-syntax-check":
var G__21055 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21056 = cause_type;
var G__21057 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21058 = loc;
var G__21059 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21055,G__21056,G__21057,G__21058,G__21059) : format.call(null,G__21055,G__21056,G__21057,G__21058,G__21059));

break;
case "compilation":
var G__21060 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21061 = cause_type;
var G__21062 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21063 = loc;
var G__21064 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21060,G__21061,G__21062,G__21063,G__21064) : format.call(null,G__21060,G__21061,G__21062,G__21063,G__21064));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21065 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21066 = symbol;
var G__21067 = loc;
var G__21068 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21069_21209 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21070_21210 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21071_21211 = true;
var _STAR_print_fn_STAR__temp_val__21072_21212 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21071_21211);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21072_21212);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21015_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21015_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21070_21210);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21069_21209);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21065,G__21066,G__21067,G__21068) : format.call(null,G__21065,G__21066,G__21067,G__21068));
} else {
var G__21075 = "Execution error%s at %s(%s).\n%s\n";
var G__21076 = cause_type;
var G__21077 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21078 = loc;
var G__21079 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21075,G__21076,G__21077,G__21078,G__21079) : format.call(null,G__21075,G__21076,G__21077,G__21078,G__21079));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21036__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
