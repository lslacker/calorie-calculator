goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17339 = (function (f,blockable,meta17340){
this.f = f;
this.blockable = blockable;
this.meta17340 = meta17340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17341,meta17340__$1){
var self__ = this;
var _17341__$1 = this;
return (new cljs.core.async.t_cljs$core$async17339(self__.f,self__.blockable,meta17340__$1));
}));

(cljs.core.async.t_cljs$core$async17339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17341){
var self__ = this;
var _17341__$1 = this;
return self__.meta17340;
}));

(cljs.core.async.t_cljs$core$async17339.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17340","meta17340",-34647113,null)], null);
}));

(cljs.core.async.t_cljs$core$async17339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17339");

(cljs.core.async.t_cljs$core$async17339.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17339.
 */
cljs.core.async.__GT_t_cljs$core$async17339 = (function cljs$core$async$__GT_t_cljs$core$async17339(f,blockable,meta17340){
return (new cljs.core.async.t_cljs$core$async17339(f,blockable,meta17340));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17338 = arguments.length;
switch (G__17338) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async17339(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17349 = arguments.length;
switch (G__17349) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17351 = arguments.length;
switch (G__17351) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17355 = arguments.length;
switch (G__17355) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19449 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19449) : fn1.call(null,val_19449));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19449) : fn1.call(null,val_19449));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17361 = arguments.length;
switch (G__17361) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19451 = n;
var x_19452 = (0);
while(true){
if((x_19452 < n__5636__auto___19451)){
(a[x_19452] = x_19452);

var G__19453 = (x_19452 + (1));
x_19452 = G__19453;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17368 = (function (flag,meta17369){
this.flag = flag;
this.meta17369 = meta17369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17370,meta17369__$1){
var self__ = this;
var _17370__$1 = this;
return (new cljs.core.async.t_cljs$core$async17368(self__.flag,meta17369__$1));
}));

(cljs.core.async.t_cljs$core$async17368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17370){
var self__ = this;
var _17370__$1 = this;
return self__.meta17369;
}));

(cljs.core.async.t_cljs$core$async17368.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17368.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17369","meta17369",-75849141,null)], null);
}));

(cljs.core.async.t_cljs$core$async17368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17368");

(cljs.core.async.t_cljs$core$async17368.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17368.
 */
cljs.core.async.__GT_t_cljs$core$async17368 = (function cljs$core$async$__GT_t_cljs$core$async17368(flag,meta17369){
return (new cljs.core.async.t_cljs$core$async17368(flag,meta17369));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17368(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17378 = (function (flag,cb,meta17379){
this.flag = flag;
this.cb = cb;
this.meta17379 = meta17379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17380,meta17379__$1){
var self__ = this;
var _17380__$1 = this;
return (new cljs.core.async.t_cljs$core$async17378(self__.flag,self__.cb,meta17379__$1));
}));

(cljs.core.async.t_cljs$core$async17378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17380){
var self__ = this;
var _17380__$1 = this;
return self__.meta17379;
}));

(cljs.core.async.t_cljs$core$async17378.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17378.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17379","meta17379",362634213,null)], null);
}));

(cljs.core.async.t_cljs$core$async17378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17378");

(cljs.core.async.t_cljs$core$async17378.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17378.
 */
cljs.core.async.__GT_t_cljs$core$async17378 = (function cljs$core$async$__GT_t_cljs$core$async17378(flag,cb,meta17379){
return (new cljs.core.async.t_cljs$core$async17378(flag,cb,meta17379));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17378(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17418_SHARP_){
var G__17423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17418_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17423) : fret.call(null,G__17423));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17420_SHARP_){
var G__17424 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17420_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17424) : fret.call(null,G__17424));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19460 = (i + (1));
i = G__19460;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19462 = arguments.length;
var i__5770__auto___19463 = (0);
while(true){
if((i__5770__auto___19463 < len__5769__auto___19462)){
args__5775__auto__.push((arguments[i__5770__auto___19463]));

var G__19464 = (i__5770__auto___19463 + (1));
i__5770__auto___19463 = G__19464;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17469){
var map__17470 = p__17469;
var map__17470__$1 = cljs.core.__destructure_map(map__17470);
var opts = map__17470__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17446){
var G__17447 = cljs.core.first(seq17446);
var seq17446__$1 = cljs.core.next(seq17446);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17447,seq17446__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17501 = arguments.length;
switch (G__17501) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17246__auto___19471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_17549){
var state_val_17550 = (state_17549[(1)]);
if((state_val_17550 === (7))){
var inst_17545 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
var statearr_17553_19472 = state_17549__$1;
(statearr_17553_19472[(2)] = inst_17545);

(statearr_17553_19472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (1))){
var state_17549__$1 = state_17549;
var statearr_17554_19474 = state_17549__$1;
(statearr_17554_19474[(2)] = null);

(statearr_17554_19474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (4))){
var inst_17520 = (state_17549[(7)]);
var inst_17520__$1 = (state_17549[(2)]);
var inst_17524 = (inst_17520__$1 == null);
var state_17549__$1 = (function (){var statearr_17555 = state_17549;
(statearr_17555[(7)] = inst_17520__$1);

return statearr_17555;
})();
if(cljs.core.truth_(inst_17524)){
var statearr_17558_19476 = state_17549__$1;
(statearr_17558_19476[(1)] = (5));

} else {
var statearr_17559_19477 = state_17549__$1;
(statearr_17559_19477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (13))){
var state_17549__$1 = state_17549;
var statearr_17560_19478 = state_17549__$1;
(statearr_17560_19478[(2)] = null);

(statearr_17560_19478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (6))){
var inst_17520 = (state_17549[(7)]);
var state_17549__$1 = state_17549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17549__$1,(11),to,inst_17520);
} else {
if((state_val_17550 === (3))){
var inst_17547 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17549__$1,inst_17547);
} else {
if((state_val_17550 === (12))){
var state_17549__$1 = state_17549;
var statearr_17565_19479 = state_17549__$1;
(statearr_17565_19479[(2)] = null);

(statearr_17565_19479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (2))){
var state_17549__$1 = state_17549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17549__$1,(4),from);
} else {
if((state_val_17550 === (11))){
var inst_17534 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
if(cljs.core.truth_(inst_17534)){
var statearr_17566_19480 = state_17549__$1;
(statearr_17566_19480[(1)] = (12));

} else {
var statearr_17567_19481 = state_17549__$1;
(statearr_17567_19481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (9))){
var state_17549__$1 = state_17549;
var statearr_17568_19482 = state_17549__$1;
(statearr_17568_19482[(2)] = null);

(statearr_17568_19482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (5))){
var state_17549__$1 = state_17549;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17569_19483 = state_17549__$1;
(statearr_17569_19483[(1)] = (8));

} else {
var statearr_17570_19484 = state_17549__$1;
(statearr_17570_19484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (14))){
var inst_17543 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
var statearr_17577_19485 = state_17549__$1;
(statearr_17577_19485[(2)] = inst_17543);

(statearr_17577_19485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (10))){
var inst_17530 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
var statearr_17579_19487 = state_17549__$1;
(statearr_17579_19487[(2)] = inst_17530);

(statearr_17579_19487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (8))){
var inst_17527 = cljs.core.async.close_BANG_(to);
var state_17549__$1 = state_17549;
var statearr_17580_19489 = state_17549__$1;
(statearr_17580_19489[(2)] = inst_17527);

(statearr_17580_19489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_17582 = [null,null,null,null,null,null,null,null];
(statearr_17582[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_17582[(1)] = (1));

return statearr_17582;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_17549){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_17549);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e17583){var ex__17107__auto__ = e17583;
var statearr_17584_19490 = state_17549;
(statearr_17584_19490[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_17549[(4)]))){
var statearr_17586_19491 = state_17549;
(statearr_17586_19491[(1)] = cljs.core.first((state_17549[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19492 = state_17549;
state_17549 = G__19492;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_17549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_17549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17587 = f__17247__auto__();
(statearr_17587[(6)] = c__17246__auto___19471);

return statearr_17587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17590){
var vec__17591 = p__17590;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17591,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17591,(1),null);
var job = vec__17591;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17246__auto___19493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_17599){
var state_val_17600 = (state_17599[(1)]);
if((state_val_17600 === (1))){
var state_17599__$1 = state_17599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17599__$1,(2),res,v);
} else {
if((state_val_17600 === (2))){
var inst_17596 = (state_17599[(2)]);
var inst_17597 = cljs.core.async.close_BANG_(res);
var state_17599__$1 = (function (){var statearr_17603 = state_17599;
(statearr_17603[(7)] = inst_17596);

return statearr_17603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17599__$1,inst_17597);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0 = (function (){
var statearr_17606 = [null,null,null,null,null,null,null,null];
(statearr_17606[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__);

(statearr_17606[(1)] = (1));

return statearr_17606;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1 = (function (state_17599){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_17599);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e17607){var ex__17107__auto__ = e17607;
var statearr_17608_19504 = state_17599;
(statearr_17608_19504[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_17599[(4)]))){
var statearr_17613_19511 = state_17599;
(statearr_17613_19511[(1)] = cljs.core.first((state_17599[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19512 = state_17599;
state_17599 = G__19512;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__ = function(state_17599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1.call(this,state_17599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17630 = f__17247__auto__();
(statearr_17630[(6)] = c__17246__auto___19493);

return statearr_17630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17652){
var vec__17653 = p__17652;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17653,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17653,(1),null);
var job = vec__17653;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19519 = n;
var __19520 = (0);
while(true){
if((__19520 < n__5636__auto___19519)){
var G__17656_19521 = type;
var G__17656_19522__$1 = (((G__17656_19521 instanceof cljs.core.Keyword))?G__17656_19521.fqn:null);
switch (G__17656_19522__$1) {
case "compute":
var c__17246__auto___19524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19520,c__17246__auto___19524,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async){
return (function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = ((function (__19520,c__17246__auto___19524,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async){
return (function (state_17669){
var state_val_17670 = (state_17669[(1)]);
if((state_val_17670 === (1))){
var state_17669__$1 = state_17669;
var statearr_17671_19525 = state_17669__$1;
(statearr_17671_19525[(2)] = null);

(statearr_17671_19525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (2))){
var state_17669__$1 = state_17669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17669__$1,(4),jobs);
} else {
if((state_val_17670 === (3))){
var inst_17667 = (state_17669[(2)]);
var state_17669__$1 = state_17669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17669__$1,inst_17667);
} else {
if((state_val_17670 === (4))){
var inst_17659 = (state_17669[(2)]);
var inst_17660 = process__$1(inst_17659);
var state_17669__$1 = state_17669;
if(cljs.core.truth_(inst_17660)){
var statearr_17672_19528 = state_17669__$1;
(statearr_17672_19528[(1)] = (5));

} else {
var statearr_17673_19537 = state_17669__$1;
(statearr_17673_19537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (5))){
var state_17669__$1 = state_17669;
var statearr_17674_19544 = state_17669__$1;
(statearr_17674_19544[(2)] = null);

(statearr_17674_19544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (6))){
var state_17669__$1 = state_17669;
var statearr_17675_19545 = state_17669__$1;
(statearr_17675_19545[(2)] = null);

(statearr_17675_19545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17670 === (7))){
var inst_17665 = (state_17669[(2)]);
var state_17669__$1 = state_17669;
var statearr_17676_19546 = state_17669__$1;
(statearr_17676_19546[(2)] = inst_17665);

(statearr_17676_19546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19520,c__17246__auto___19524,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async))
;
return ((function (__19520,switch__17103__auto__,c__17246__auto___19524,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0 = (function (){
var statearr_17677 = [null,null,null,null,null,null,null];
(statearr_17677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__);

(statearr_17677[(1)] = (1));

return statearr_17677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1 = (function (state_17669){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_17669);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e17678){var ex__17107__auto__ = e17678;
var statearr_17679_19553 = state_17669;
(statearr_17679_19553[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_17669[(4)]))){
var statearr_17680_19554 = state_17669;
(statearr_17680_19554[(1)] = cljs.core.first((state_17669[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19555 = state_17669;
state_17669 = G__19555;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__ = function(state_17669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1.call(this,state_17669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__;
})()
;})(__19520,switch__17103__auto__,c__17246__auto___19524,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async))
})();
var state__17248__auto__ = (function (){var statearr_17681 = f__17247__auto__();
(statearr_17681[(6)] = c__17246__auto___19524);

return statearr_17681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
});})(__19520,c__17246__auto___19524,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async))
);


break;
case "async":
var c__17246__auto___19556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19520,c__17246__auto___19556,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async){
return (function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = ((function (__19520,c__17246__auto___19556,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async){
return (function (state_17694){
var state_val_17695 = (state_17694[(1)]);
if((state_val_17695 === (1))){
var state_17694__$1 = state_17694;
var statearr_17696_19557 = state_17694__$1;
(statearr_17696_19557[(2)] = null);

(statearr_17696_19557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (2))){
var state_17694__$1 = state_17694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17694__$1,(4),jobs);
} else {
if((state_val_17695 === (3))){
var inst_17692 = (state_17694[(2)]);
var state_17694__$1 = state_17694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17694__$1,inst_17692);
} else {
if((state_val_17695 === (4))){
var inst_17684 = (state_17694[(2)]);
var inst_17685 = async(inst_17684);
var state_17694__$1 = state_17694;
if(cljs.core.truth_(inst_17685)){
var statearr_17697_19558 = state_17694__$1;
(statearr_17697_19558[(1)] = (5));

} else {
var statearr_17698_19559 = state_17694__$1;
(statearr_17698_19559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (5))){
var state_17694__$1 = state_17694;
var statearr_17699_19560 = state_17694__$1;
(statearr_17699_19560[(2)] = null);

(statearr_17699_19560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (6))){
var state_17694__$1 = state_17694;
var statearr_17700_19563 = state_17694__$1;
(statearr_17700_19563[(2)] = null);

(statearr_17700_19563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17695 === (7))){
var inst_17690 = (state_17694[(2)]);
var state_17694__$1 = state_17694;
var statearr_17701_19564 = state_17694__$1;
(statearr_17701_19564[(2)] = inst_17690);

(statearr_17701_19564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19520,c__17246__auto___19556,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async))
;
return ((function (__19520,switch__17103__auto__,c__17246__auto___19556,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0 = (function (){
var statearr_17702 = [null,null,null,null,null,null,null];
(statearr_17702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__);

(statearr_17702[(1)] = (1));

return statearr_17702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1 = (function (state_17694){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_17694);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e17703){var ex__17107__auto__ = e17703;
var statearr_17704_19566 = state_17694;
(statearr_17704_19566[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_17694[(4)]))){
var statearr_17705_19567 = state_17694;
(statearr_17705_19567[(1)] = cljs.core.first((state_17694[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19568 = state_17694;
state_17694 = G__19568;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__ = function(state_17694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1.call(this,state_17694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__;
})()
;})(__19520,switch__17103__auto__,c__17246__auto___19556,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async))
})();
var state__17248__auto__ = (function (){var statearr_17706 = f__17247__auto__();
(statearr_17706[(6)] = c__17246__auto___19556);

return statearr_17706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
});})(__19520,c__17246__auto___19556,G__17656_19521,G__17656_19522__$1,n__5636__auto___19519,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17656_19522__$1)].join('')));

}

var G__19570 = (__19520 + (1));
__19520 = G__19570;
continue;
} else {
}
break;
}

var c__17246__auto___19571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_17728){
var state_val_17729 = (state_17728[(1)]);
if((state_val_17729 === (7))){
var inst_17724 = (state_17728[(2)]);
var state_17728__$1 = state_17728;
var statearr_17730_19572 = state_17728__$1;
(statearr_17730_19572[(2)] = inst_17724);

(statearr_17730_19572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (1))){
var state_17728__$1 = state_17728;
var statearr_17731_19573 = state_17728__$1;
(statearr_17731_19573[(2)] = null);

(statearr_17731_19573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (4))){
var inst_17709 = (state_17728[(7)]);
var inst_17709__$1 = (state_17728[(2)]);
var inst_17710 = (inst_17709__$1 == null);
var state_17728__$1 = (function (){var statearr_17732 = state_17728;
(statearr_17732[(7)] = inst_17709__$1);

return statearr_17732;
})();
if(cljs.core.truth_(inst_17710)){
var statearr_17733_19574 = state_17728__$1;
(statearr_17733_19574[(1)] = (5));

} else {
var statearr_17734_19575 = state_17728__$1;
(statearr_17734_19575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (6))){
var inst_17709 = (state_17728[(7)]);
var inst_17714 = (state_17728[(8)]);
var inst_17714__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17716 = [inst_17709,inst_17714__$1];
var inst_17717 = (new cljs.core.PersistentVector(null,2,(5),inst_17715,inst_17716,null));
var state_17728__$1 = (function (){var statearr_17735 = state_17728;
(statearr_17735[(8)] = inst_17714__$1);

return statearr_17735;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17728__$1,(8),jobs,inst_17717);
} else {
if((state_val_17729 === (3))){
var inst_17726 = (state_17728[(2)]);
var state_17728__$1 = state_17728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17728__$1,inst_17726);
} else {
if((state_val_17729 === (2))){
var state_17728__$1 = state_17728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17728__$1,(4),from);
} else {
if((state_val_17729 === (9))){
var inst_17721 = (state_17728[(2)]);
var state_17728__$1 = (function (){var statearr_17736 = state_17728;
(statearr_17736[(9)] = inst_17721);

return statearr_17736;
})();
var statearr_17737_19580 = state_17728__$1;
(statearr_17737_19580[(2)] = null);

(statearr_17737_19580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (5))){
var inst_17712 = cljs.core.async.close_BANG_(jobs);
var state_17728__$1 = state_17728;
var statearr_17738_19581 = state_17728__$1;
(statearr_17738_19581[(2)] = inst_17712);

(statearr_17738_19581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (8))){
var inst_17714 = (state_17728[(8)]);
var inst_17719 = (state_17728[(2)]);
var state_17728__$1 = (function (){var statearr_17739 = state_17728;
(statearr_17739[(10)] = inst_17719);

return statearr_17739;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17728__$1,(9),results,inst_17714);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0 = (function (){
var statearr_17740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__);

(statearr_17740[(1)] = (1));

return statearr_17740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1 = (function (state_17728){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_17728);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e17741){var ex__17107__auto__ = e17741;
var statearr_17742_19585 = state_17728;
(statearr_17742_19585[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_17728[(4)]))){
var statearr_17743_19586 = state_17728;
(statearr_17743_19586[(1)] = cljs.core.first((state_17728[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19587 = state_17728;
state_17728 = G__19587;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__ = function(state_17728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1.call(this,state_17728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17744 = f__17247__auto__();
(statearr_17744[(6)] = c__17246__auto___19571);

return statearr_17744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


var c__17246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_17782){
var state_val_17783 = (state_17782[(1)]);
if((state_val_17783 === (7))){
var inst_17778 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17784_19588 = state_17782__$1;
(statearr_17784_19588[(2)] = inst_17778);

(statearr_17784_19588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (20))){
var state_17782__$1 = state_17782;
var statearr_17785_19589 = state_17782__$1;
(statearr_17785_19589[(2)] = null);

(statearr_17785_19589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (1))){
var state_17782__$1 = state_17782;
var statearr_17786_19590 = state_17782__$1;
(statearr_17786_19590[(2)] = null);

(statearr_17786_19590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (4))){
var inst_17747 = (state_17782[(7)]);
var inst_17747__$1 = (state_17782[(2)]);
var inst_17748 = (inst_17747__$1 == null);
var state_17782__$1 = (function (){var statearr_17787 = state_17782;
(statearr_17787[(7)] = inst_17747__$1);

return statearr_17787;
})();
if(cljs.core.truth_(inst_17748)){
var statearr_17788_19591 = state_17782__$1;
(statearr_17788_19591[(1)] = (5));

} else {
var statearr_17789_19592 = state_17782__$1;
(statearr_17789_19592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (15))){
var inst_17760 = (state_17782[(8)]);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17782__$1,(18),to,inst_17760);
} else {
if((state_val_17783 === (21))){
var inst_17773 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17790_19593 = state_17782__$1;
(statearr_17790_19593[(2)] = inst_17773);

(statearr_17790_19593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (13))){
var inst_17775 = (state_17782[(2)]);
var state_17782__$1 = (function (){var statearr_17791 = state_17782;
(statearr_17791[(9)] = inst_17775);

return statearr_17791;
})();
var statearr_17792_19594 = state_17782__$1;
(statearr_17792_19594[(2)] = null);

(statearr_17792_19594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (6))){
var inst_17747 = (state_17782[(7)]);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17782__$1,(11),inst_17747);
} else {
if((state_val_17783 === (17))){
var inst_17768 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
if(cljs.core.truth_(inst_17768)){
var statearr_17793_19595 = state_17782__$1;
(statearr_17793_19595[(1)] = (19));

} else {
var statearr_17794_19596 = state_17782__$1;
(statearr_17794_19596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (3))){
var inst_17780 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17782__$1,inst_17780);
} else {
if((state_val_17783 === (12))){
var inst_17757 = (state_17782[(10)]);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17782__$1,(14),inst_17757);
} else {
if((state_val_17783 === (2))){
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17782__$1,(4),results);
} else {
if((state_val_17783 === (19))){
var state_17782__$1 = state_17782;
var statearr_17795_19597 = state_17782__$1;
(statearr_17795_19597[(2)] = null);

(statearr_17795_19597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (11))){
var inst_17757 = (state_17782[(2)]);
var state_17782__$1 = (function (){var statearr_17796 = state_17782;
(statearr_17796[(10)] = inst_17757);

return statearr_17796;
})();
var statearr_17797_19598 = state_17782__$1;
(statearr_17797_19598[(2)] = null);

(statearr_17797_19598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (9))){
var state_17782__$1 = state_17782;
var statearr_17798_19599 = state_17782__$1;
(statearr_17798_19599[(2)] = null);

(statearr_17798_19599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (5))){
var state_17782__$1 = state_17782;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17799_19600 = state_17782__$1;
(statearr_17799_19600[(1)] = (8));

} else {
var statearr_17800_19601 = state_17782__$1;
(statearr_17800_19601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (14))){
var inst_17760 = (state_17782[(8)]);
var inst_17762 = (state_17782[(11)]);
var inst_17760__$1 = (state_17782[(2)]);
var inst_17761 = (inst_17760__$1 == null);
var inst_17762__$1 = cljs.core.not(inst_17761);
var state_17782__$1 = (function (){var statearr_17801 = state_17782;
(statearr_17801[(8)] = inst_17760__$1);

(statearr_17801[(11)] = inst_17762__$1);

return statearr_17801;
})();
if(inst_17762__$1){
var statearr_17802_19602 = state_17782__$1;
(statearr_17802_19602[(1)] = (15));

} else {
var statearr_17803_19603 = state_17782__$1;
(statearr_17803_19603[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (16))){
var inst_17762 = (state_17782[(11)]);
var state_17782__$1 = state_17782;
var statearr_17804_19605 = state_17782__$1;
(statearr_17804_19605[(2)] = inst_17762);

(statearr_17804_19605[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (10))){
var inst_17754 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17805_19607 = state_17782__$1;
(statearr_17805_19607[(2)] = inst_17754);

(statearr_17805_19607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (18))){
var inst_17765 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17806_19608 = state_17782__$1;
(statearr_17806_19608[(2)] = inst_17765);

(statearr_17806_19608[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (8))){
var inst_17751 = cljs.core.async.close_BANG_(to);
var state_17782__$1 = state_17782;
var statearr_17807_19609 = state_17782__$1;
(statearr_17807_19609[(2)] = inst_17751);

(statearr_17807_19609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0 = (function (){
var statearr_17808 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__);

(statearr_17808[(1)] = (1));

return statearr_17808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1 = (function (state_17782){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_17782);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e17809){var ex__17107__auto__ = e17809;
var statearr_17810_19610 = state_17782;
(statearr_17810_19610[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_17782[(4)]))){
var statearr_17811_19611 = state_17782;
(statearr_17811_19611[(1)] = cljs.core.first((state_17782[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19612 = state_17782;
state_17782 = G__19612;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__ = function(state_17782){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1.call(this,state_17782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17812 = f__17247__auto__();
(statearr_17812[(6)] = c__17246__auto__);

return statearr_17812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

return c__17246__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17814 = arguments.length;
switch (G__17814) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17816 = arguments.length;
switch (G__17816) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17818 = arguments.length;
switch (G__17818) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17246__auto___19623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_17844){
var state_val_17845 = (state_17844[(1)]);
if((state_val_17845 === (7))){
var inst_17840 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17846_19624 = state_17844__$1;
(statearr_17846_19624[(2)] = inst_17840);

(statearr_17846_19624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (1))){
var state_17844__$1 = state_17844;
var statearr_17847_19625 = state_17844__$1;
(statearr_17847_19625[(2)] = null);

(statearr_17847_19625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (4))){
var inst_17821 = (state_17844[(7)]);
var inst_17821__$1 = (state_17844[(2)]);
var inst_17822 = (inst_17821__$1 == null);
var state_17844__$1 = (function (){var statearr_17849 = state_17844;
(statearr_17849[(7)] = inst_17821__$1);

return statearr_17849;
})();
if(cljs.core.truth_(inst_17822)){
var statearr_17850_19626 = state_17844__$1;
(statearr_17850_19626[(1)] = (5));

} else {
var statearr_17851_19627 = state_17844__$1;
(statearr_17851_19627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (13))){
var state_17844__$1 = state_17844;
var statearr_17852_19628 = state_17844__$1;
(statearr_17852_19628[(2)] = null);

(statearr_17852_19628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (6))){
var inst_17821 = (state_17844[(7)]);
var inst_17827 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17821) : p.call(null,inst_17821));
var state_17844__$1 = state_17844;
if(cljs.core.truth_(inst_17827)){
var statearr_17853_19632 = state_17844__$1;
(statearr_17853_19632[(1)] = (9));

} else {
var statearr_17854_19633 = state_17844__$1;
(statearr_17854_19633[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (3))){
var inst_17842 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17844__$1,inst_17842);
} else {
if((state_val_17845 === (12))){
var state_17844__$1 = state_17844;
var statearr_17855_19634 = state_17844__$1;
(statearr_17855_19634[(2)] = null);

(statearr_17855_19634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (2))){
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17844__$1,(4),ch);
} else {
if((state_val_17845 === (11))){
var inst_17821 = (state_17844[(7)]);
var inst_17831 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17844__$1,(8),inst_17831,inst_17821);
} else {
if((state_val_17845 === (9))){
var state_17844__$1 = state_17844;
var statearr_17856_19638 = state_17844__$1;
(statearr_17856_19638[(2)] = tc);

(statearr_17856_19638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (5))){
var inst_17824 = cljs.core.async.close_BANG_(tc);
var inst_17825 = cljs.core.async.close_BANG_(fc);
var state_17844__$1 = (function (){var statearr_17857 = state_17844;
(statearr_17857[(8)] = inst_17824);

return statearr_17857;
})();
var statearr_17858_19639 = state_17844__$1;
(statearr_17858_19639[(2)] = inst_17825);

(statearr_17858_19639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (14))){
var inst_17838 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17859_19640 = state_17844__$1;
(statearr_17859_19640[(2)] = inst_17838);

(statearr_17859_19640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (10))){
var state_17844__$1 = state_17844;
var statearr_17860_19641 = state_17844__$1;
(statearr_17860_19641[(2)] = fc);

(statearr_17860_19641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (8))){
var inst_17833 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
if(cljs.core.truth_(inst_17833)){
var statearr_17861_19642 = state_17844__$1;
(statearr_17861_19642[(1)] = (12));

} else {
var statearr_17862_19646 = state_17844__$1;
(statearr_17862_19646[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_17863 = [null,null,null,null,null,null,null,null,null];
(statearr_17863[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_17863[(1)] = (1));

return statearr_17863;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_17844){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_17844);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e17864){var ex__17107__auto__ = e17864;
var statearr_17865_19649 = state_17844;
(statearr_17865_19649[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_17844[(4)]))){
var statearr_17866_19652 = state_17844;
(statearr_17866_19652[(1)] = cljs.core.first((state_17844[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19656 = state_17844;
state_17844 = G__19656;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_17844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_17844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17867 = f__17247__auto__();
(statearr_17867[(6)] = c__17246__auto___19623);

return statearr_17867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_17889){
var state_val_17890 = (state_17889[(1)]);
if((state_val_17890 === (7))){
var inst_17885 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17891_19657 = state_17889__$1;
(statearr_17891_19657[(2)] = inst_17885);

(statearr_17891_19657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (1))){
var inst_17868 = init;
var inst_17869 = inst_17868;
var state_17889__$1 = (function (){var statearr_17892 = state_17889;
(statearr_17892[(7)] = inst_17869);

return statearr_17892;
})();
var statearr_17893_19658 = state_17889__$1;
(statearr_17893_19658[(2)] = null);

(statearr_17893_19658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (4))){
var inst_17872 = (state_17889[(8)]);
var inst_17872__$1 = (state_17889[(2)]);
var inst_17873 = (inst_17872__$1 == null);
var state_17889__$1 = (function (){var statearr_17894 = state_17889;
(statearr_17894[(8)] = inst_17872__$1);

return statearr_17894;
})();
if(cljs.core.truth_(inst_17873)){
var statearr_17895_19662 = state_17889__$1;
(statearr_17895_19662[(1)] = (5));

} else {
var statearr_17896_19663 = state_17889__$1;
(statearr_17896_19663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (6))){
var inst_17876 = (state_17889[(9)]);
var inst_17872 = (state_17889[(8)]);
var inst_17869 = (state_17889[(7)]);
var inst_17876__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17869,inst_17872) : f.call(null,inst_17869,inst_17872));
var inst_17877 = cljs.core.reduced_QMARK_(inst_17876__$1);
var state_17889__$1 = (function (){var statearr_17897 = state_17889;
(statearr_17897[(9)] = inst_17876__$1);

return statearr_17897;
})();
if(inst_17877){
var statearr_17898_19664 = state_17889__$1;
(statearr_17898_19664[(1)] = (8));

} else {
var statearr_17899_19665 = state_17889__$1;
(statearr_17899_19665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (3))){
var inst_17887 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17889__$1,inst_17887);
} else {
if((state_val_17890 === (2))){
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17889__$1,(4),ch);
} else {
if((state_val_17890 === (9))){
var inst_17876 = (state_17889[(9)]);
var inst_17869 = inst_17876;
var state_17889__$1 = (function (){var statearr_17900 = state_17889;
(statearr_17900[(7)] = inst_17869);

return statearr_17900;
})();
var statearr_17901_19669 = state_17889__$1;
(statearr_17901_19669[(2)] = null);

(statearr_17901_19669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (5))){
var inst_17869 = (state_17889[(7)]);
var state_17889__$1 = state_17889;
var statearr_17902_19670 = state_17889__$1;
(statearr_17902_19670[(2)] = inst_17869);

(statearr_17902_19670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (10))){
var inst_17883 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17903_19671 = state_17889__$1;
(statearr_17903_19671[(2)] = inst_17883);

(statearr_17903_19671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (8))){
var inst_17876 = (state_17889[(9)]);
var inst_17879 = cljs.core.deref(inst_17876);
var state_17889__$1 = state_17889;
var statearr_17904_19672 = state_17889__$1;
(statearr_17904_19672[(2)] = inst_17879);

(statearr_17904_19672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17104__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17104__auto____0 = (function (){
var statearr_17905 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17905[(0)] = cljs$core$async$reduce_$_state_machine__17104__auto__);

(statearr_17905[(1)] = (1));

return statearr_17905;
});
var cljs$core$async$reduce_$_state_machine__17104__auto____1 = (function (state_17889){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_17889);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e17907){var ex__17107__auto__ = e17907;
var statearr_17908_19677 = state_17889;
(statearr_17908_19677[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_17889[(4)]))){
var statearr_17909_19679 = state_17889;
(statearr_17909_19679[(1)] = cljs.core.first((state_17889[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19681 = state_17889;
state_17889 = G__19681;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17104__auto__ = function(state_17889){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17104__auto____1.call(this,state_17889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17104__auto____0;
cljs$core$async$reduce_$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17104__auto____1;
return cljs$core$async$reduce_$_state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17910 = f__17247__auto__();
(statearr_17910[(6)] = c__17246__auto__);

return statearr_17910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

return c__17246__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_17916){
var state_val_17917 = (state_17916[(1)]);
if((state_val_17917 === (1))){
var inst_17911 = cljs.core.async.reduce(f__$1,init,ch);
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17916__$1,(2),inst_17911);
} else {
if((state_val_17917 === (2))){
var inst_17913 = (state_17916[(2)]);
var inst_17914 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17913) : f__$1.call(null,inst_17913));
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17916__$1,inst_17914);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17104__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17104__auto____0 = (function (){
var statearr_17918 = [null,null,null,null,null,null,null];
(statearr_17918[(0)] = cljs$core$async$transduce_$_state_machine__17104__auto__);

(statearr_17918[(1)] = (1));

return statearr_17918;
});
var cljs$core$async$transduce_$_state_machine__17104__auto____1 = (function (state_17916){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_17916);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e17919){var ex__17107__auto__ = e17919;
var statearr_17920_19691 = state_17916;
(statearr_17920_19691[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_17916[(4)]))){
var statearr_17921_19692 = state_17916;
(statearr_17921_19692[(1)] = cljs.core.first((state_17916[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19693 = state_17916;
state_17916 = G__19693;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17104__auto__ = function(state_17916){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17104__auto____1.call(this,state_17916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17104__auto____0;
cljs$core$async$transduce_$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17104__auto____1;
return cljs$core$async$transduce_$_state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17922 = f__17247__auto__();
(statearr_17922[(6)] = c__17246__auto__);

return statearr_17922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

return c__17246__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17924 = arguments.length;
switch (G__17924) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_17950){
var state_val_17951 = (state_17950[(1)]);
if((state_val_17951 === (7))){
var inst_17932 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17952_19695 = state_17950__$1;
(statearr_17952_19695[(2)] = inst_17932);

(statearr_17952_19695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (1))){
var inst_17926 = cljs.core.seq(coll);
var inst_17927 = inst_17926;
var state_17950__$1 = (function (){var statearr_17953 = state_17950;
(statearr_17953[(7)] = inst_17927);

return statearr_17953;
})();
var statearr_17954_19696 = state_17950__$1;
(statearr_17954_19696[(2)] = null);

(statearr_17954_19696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (4))){
var inst_17927 = (state_17950[(7)]);
var inst_17930 = cljs.core.first(inst_17927);
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17950__$1,(7),ch,inst_17930);
} else {
if((state_val_17951 === (13))){
var inst_17944 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17956_19697 = state_17950__$1;
(statearr_17956_19697[(2)] = inst_17944);

(statearr_17956_19697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (6))){
var inst_17935 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
if(cljs.core.truth_(inst_17935)){
var statearr_17957_19698 = state_17950__$1;
(statearr_17957_19698[(1)] = (8));

} else {
var statearr_17958_19699 = state_17950__$1;
(statearr_17958_19699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (3))){
var inst_17948 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17950__$1,inst_17948);
} else {
if((state_val_17951 === (12))){
var state_17950__$1 = state_17950;
var statearr_17959_19700 = state_17950__$1;
(statearr_17959_19700[(2)] = null);

(statearr_17959_19700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (2))){
var inst_17927 = (state_17950[(7)]);
var state_17950__$1 = state_17950;
if(cljs.core.truth_(inst_17927)){
var statearr_17960_19701 = state_17950__$1;
(statearr_17960_19701[(1)] = (4));

} else {
var statearr_17961_19702 = state_17950__$1;
(statearr_17961_19702[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (11))){
var inst_17941 = cljs.core.async.close_BANG_(ch);
var state_17950__$1 = state_17950;
var statearr_17962_19703 = state_17950__$1;
(statearr_17962_19703[(2)] = inst_17941);

(statearr_17962_19703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (9))){
var state_17950__$1 = state_17950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17963_19704 = state_17950__$1;
(statearr_17963_19704[(1)] = (11));

} else {
var statearr_17964_19705 = state_17950__$1;
(statearr_17964_19705[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (5))){
var inst_17927 = (state_17950[(7)]);
var state_17950__$1 = state_17950;
var statearr_17965_19706 = state_17950__$1;
(statearr_17965_19706[(2)] = inst_17927);

(statearr_17965_19706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (10))){
var inst_17946 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17966_19707 = state_17950__$1;
(statearr_17966_19707[(2)] = inst_17946);

(statearr_17966_19707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (8))){
var inst_17927 = (state_17950[(7)]);
var inst_17937 = cljs.core.next(inst_17927);
var inst_17927__$1 = inst_17937;
var state_17950__$1 = (function (){var statearr_17968 = state_17950;
(statearr_17968[(7)] = inst_17927__$1);

return statearr_17968;
})();
var statearr_17969_19708 = state_17950__$1;
(statearr_17969_19708[(2)] = null);

(statearr_17969_19708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_17971 = [null,null,null,null,null,null,null,null];
(statearr_17971[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_17971[(1)] = (1));

return statearr_17971;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_17950){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_17950);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e17973){var ex__17107__auto__ = e17973;
var statearr_17974_19709 = state_17950;
(statearr_17974_19709[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_17950[(4)]))){
var statearr_17975_19710 = state_17950;
(statearr_17975_19710[(1)] = cljs.core.first((state_17950[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19711 = state_17950;
state_17950 = G__19711;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_17950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_17950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_17977 = f__17247__auto__();
(statearr_17977[(6)] = c__17246__auto__);

return statearr_17977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

return c__17246__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17980 = arguments.length;
switch (G__17980) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19713 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19713(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19714 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19714(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19716 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19716(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19723 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19723(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17986 = (function (ch,cs,meta17987){
this.ch = ch;
this.cs = cs;
this.meta17987 = meta17987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17988,meta17987__$1){
var self__ = this;
var _17988__$1 = this;
return (new cljs.core.async.t_cljs$core$async17986(self__.ch,self__.cs,meta17987__$1));
}));

(cljs.core.async.t_cljs$core$async17986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17988){
var self__ = this;
var _17988__$1 = this;
return self__.meta17987;
}));

(cljs.core.async.t_cljs$core$async17986.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17986.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17986.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17986.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17986.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17986.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17987","meta17987",-465596439,null)], null);
}));

(cljs.core.async.t_cljs$core$async17986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17986");

(cljs.core.async.t_cljs$core$async17986.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17986.
 */
cljs.core.async.__GT_t_cljs$core$async17986 = (function cljs$core$async$__GT_t_cljs$core$async17986(ch,cs,meta17987){
return (new cljs.core.async.t_cljs$core$async17986(ch,cs,meta17987));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async17986(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17246__auto___19729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_18126){
var state_val_18127 = (state_18126[(1)]);
if((state_val_18127 === (7))){
var inst_18121 = (state_18126[(2)]);
var state_18126__$1 = state_18126;
var statearr_18128_19730 = state_18126__$1;
(statearr_18128_19730[(2)] = inst_18121);

(statearr_18128_19730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (20))){
var inst_18025 = (state_18126[(7)]);
var inst_18038 = cljs.core.first(inst_18025);
var inst_18039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18038,(0),null);
var inst_18040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18038,(1),null);
var state_18126__$1 = (function (){var statearr_18129 = state_18126;
(statearr_18129[(8)] = inst_18039);

return statearr_18129;
})();
if(cljs.core.truth_(inst_18040)){
var statearr_18130_19731 = state_18126__$1;
(statearr_18130_19731[(1)] = (22));

} else {
var statearr_18131_19732 = state_18126__$1;
(statearr_18131_19732[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (27))){
var inst_17994 = (state_18126[(9)]);
var inst_18068 = (state_18126[(10)]);
var inst_18075 = (state_18126[(11)]);
var inst_18070 = (state_18126[(12)]);
var inst_18075__$1 = cljs.core._nth(inst_18068,inst_18070);
var inst_18076 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18075__$1,inst_17994,done);
var state_18126__$1 = (function (){var statearr_18133 = state_18126;
(statearr_18133[(11)] = inst_18075__$1);

return statearr_18133;
})();
if(cljs.core.truth_(inst_18076)){
var statearr_18134_19734 = state_18126__$1;
(statearr_18134_19734[(1)] = (30));

} else {
var statearr_18135_19735 = state_18126__$1;
(statearr_18135_19735[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (1))){
var state_18126__$1 = state_18126;
var statearr_18137_19737 = state_18126__$1;
(statearr_18137_19737[(2)] = null);

(statearr_18137_19737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (24))){
var inst_18025 = (state_18126[(7)]);
var inst_18045 = (state_18126[(2)]);
var inst_18046 = cljs.core.next(inst_18025);
var inst_18003 = inst_18046;
var inst_18004 = null;
var inst_18005 = (0);
var inst_18006 = (0);
var state_18126__$1 = (function (){var statearr_18138 = state_18126;
(statearr_18138[(13)] = inst_18005);

(statearr_18138[(14)] = inst_18045);

(statearr_18138[(15)] = inst_18004);

(statearr_18138[(16)] = inst_18006);

(statearr_18138[(17)] = inst_18003);

return statearr_18138;
})();
var statearr_18139_19738 = state_18126__$1;
(statearr_18139_19738[(2)] = null);

(statearr_18139_19738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (39))){
var state_18126__$1 = state_18126;
var statearr_18144_19743 = state_18126__$1;
(statearr_18144_19743[(2)] = null);

(statearr_18144_19743[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (4))){
var inst_17994 = (state_18126[(9)]);
var inst_17994__$1 = (state_18126[(2)]);
var inst_17995 = (inst_17994__$1 == null);
var state_18126__$1 = (function (){var statearr_18145 = state_18126;
(statearr_18145[(9)] = inst_17994__$1);

return statearr_18145;
})();
if(cljs.core.truth_(inst_17995)){
var statearr_18146_19744 = state_18126__$1;
(statearr_18146_19744[(1)] = (5));

} else {
var statearr_18147_19745 = state_18126__$1;
(statearr_18147_19745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (15))){
var inst_18005 = (state_18126[(13)]);
var inst_18004 = (state_18126[(15)]);
var inst_18006 = (state_18126[(16)]);
var inst_18003 = (state_18126[(17)]);
var inst_18021 = (state_18126[(2)]);
var inst_18022 = (inst_18006 + (1));
var tmp18140 = inst_18005;
var tmp18141 = inst_18004;
var tmp18142 = inst_18003;
var inst_18003__$1 = tmp18142;
var inst_18004__$1 = tmp18141;
var inst_18005__$1 = tmp18140;
var inst_18006__$1 = inst_18022;
var state_18126__$1 = (function (){var statearr_18148 = state_18126;
(statearr_18148[(13)] = inst_18005__$1);

(statearr_18148[(15)] = inst_18004__$1);

(statearr_18148[(18)] = inst_18021);

(statearr_18148[(16)] = inst_18006__$1);

(statearr_18148[(17)] = inst_18003__$1);

return statearr_18148;
})();
var statearr_18149_19749 = state_18126__$1;
(statearr_18149_19749[(2)] = null);

(statearr_18149_19749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (21))){
var inst_18049 = (state_18126[(2)]);
var state_18126__$1 = state_18126;
var statearr_18153_19753 = state_18126__$1;
(statearr_18153_19753[(2)] = inst_18049);

(statearr_18153_19753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (31))){
var inst_18075 = (state_18126[(11)]);
var inst_18079 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18075);
var state_18126__$1 = state_18126;
var statearr_18155_19754 = state_18126__$1;
(statearr_18155_19754[(2)] = inst_18079);

(statearr_18155_19754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (32))){
var inst_18068 = (state_18126[(10)]);
var inst_18067 = (state_18126[(19)]);
var inst_18069 = (state_18126[(20)]);
var inst_18070 = (state_18126[(12)]);
var inst_18081 = (state_18126[(2)]);
var inst_18082 = (inst_18070 + (1));
var tmp18150 = inst_18068;
var tmp18151 = inst_18067;
var tmp18152 = inst_18069;
var inst_18067__$1 = tmp18151;
var inst_18068__$1 = tmp18150;
var inst_18069__$1 = tmp18152;
var inst_18070__$1 = inst_18082;
var state_18126__$1 = (function (){var statearr_18156 = state_18126;
(statearr_18156[(10)] = inst_18068__$1);

(statearr_18156[(19)] = inst_18067__$1);

(statearr_18156[(20)] = inst_18069__$1);

(statearr_18156[(21)] = inst_18081);

(statearr_18156[(12)] = inst_18070__$1);

return statearr_18156;
})();
var statearr_18157_19755 = state_18126__$1;
(statearr_18157_19755[(2)] = null);

(statearr_18157_19755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (40))){
var inst_18094 = (state_18126[(22)]);
var inst_18098 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18094);
var state_18126__$1 = state_18126;
var statearr_18158_19759 = state_18126__$1;
(statearr_18158_19759[(2)] = inst_18098);

(statearr_18158_19759[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (33))){
var inst_18085 = (state_18126[(23)]);
var inst_18087 = cljs.core.chunked_seq_QMARK_(inst_18085);
var state_18126__$1 = state_18126;
if(inst_18087){
var statearr_18159_19761 = state_18126__$1;
(statearr_18159_19761[(1)] = (36));

} else {
var statearr_18160_19765 = state_18126__$1;
(statearr_18160_19765[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (13))){
var inst_18015 = (state_18126[(24)]);
var inst_18018 = cljs.core.async.close_BANG_(inst_18015);
var state_18126__$1 = state_18126;
var statearr_18162_19766 = state_18126__$1;
(statearr_18162_19766[(2)] = inst_18018);

(statearr_18162_19766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (22))){
var inst_18039 = (state_18126[(8)]);
var inst_18042 = cljs.core.async.close_BANG_(inst_18039);
var state_18126__$1 = state_18126;
var statearr_18163_19767 = state_18126__$1;
(statearr_18163_19767[(2)] = inst_18042);

(statearr_18163_19767[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (36))){
var inst_18085 = (state_18126[(23)]);
var inst_18089 = cljs.core.chunk_first(inst_18085);
var inst_18090 = cljs.core.chunk_rest(inst_18085);
var inst_18091 = cljs.core.count(inst_18089);
var inst_18067 = inst_18090;
var inst_18068 = inst_18089;
var inst_18069 = inst_18091;
var inst_18070 = (0);
var state_18126__$1 = (function (){var statearr_18164 = state_18126;
(statearr_18164[(10)] = inst_18068);

(statearr_18164[(19)] = inst_18067);

(statearr_18164[(20)] = inst_18069);

(statearr_18164[(12)] = inst_18070);

return statearr_18164;
})();
var statearr_18165_19774 = state_18126__$1;
(statearr_18165_19774[(2)] = null);

(statearr_18165_19774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (41))){
var inst_18085 = (state_18126[(23)]);
var inst_18100 = (state_18126[(2)]);
var inst_18101 = cljs.core.next(inst_18085);
var inst_18067 = inst_18101;
var inst_18068 = null;
var inst_18069 = (0);
var inst_18070 = (0);
var state_18126__$1 = (function (){var statearr_18166 = state_18126;
(statearr_18166[(10)] = inst_18068);

(statearr_18166[(19)] = inst_18067);

(statearr_18166[(20)] = inst_18069);

(statearr_18166[(12)] = inst_18070);

(statearr_18166[(25)] = inst_18100);

return statearr_18166;
})();
var statearr_18167_19775 = state_18126__$1;
(statearr_18167_19775[(2)] = null);

(statearr_18167_19775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (43))){
var state_18126__$1 = state_18126;
var statearr_18169_19776 = state_18126__$1;
(statearr_18169_19776[(2)] = null);

(statearr_18169_19776[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (29))){
var inst_18109 = (state_18126[(2)]);
var state_18126__$1 = state_18126;
var statearr_18170_19777 = state_18126__$1;
(statearr_18170_19777[(2)] = inst_18109);

(statearr_18170_19777[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (44))){
var inst_18118 = (state_18126[(2)]);
var state_18126__$1 = (function (){var statearr_18171 = state_18126;
(statearr_18171[(26)] = inst_18118);

return statearr_18171;
})();
var statearr_18172_19778 = state_18126__$1;
(statearr_18172_19778[(2)] = null);

(statearr_18172_19778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (6))){
var inst_18059 = (state_18126[(27)]);
var inst_18058 = cljs.core.deref(cs);
var inst_18059__$1 = cljs.core.keys(inst_18058);
var inst_18060 = cljs.core.count(inst_18059__$1);
var inst_18061 = cljs.core.reset_BANG_(dctr,inst_18060);
var inst_18066 = cljs.core.seq(inst_18059__$1);
var inst_18067 = inst_18066;
var inst_18068 = null;
var inst_18069 = (0);
var inst_18070 = (0);
var state_18126__$1 = (function (){var statearr_18173 = state_18126;
(statearr_18173[(10)] = inst_18068);

(statearr_18173[(19)] = inst_18067);

(statearr_18173[(20)] = inst_18069);

(statearr_18173[(28)] = inst_18061);

(statearr_18173[(12)] = inst_18070);

(statearr_18173[(27)] = inst_18059__$1);

return statearr_18173;
})();
var statearr_18174_19779 = state_18126__$1;
(statearr_18174_19779[(2)] = null);

(statearr_18174_19779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (28))){
var inst_18067 = (state_18126[(19)]);
var inst_18085 = (state_18126[(23)]);
var inst_18085__$1 = cljs.core.seq(inst_18067);
var state_18126__$1 = (function (){var statearr_18176 = state_18126;
(statearr_18176[(23)] = inst_18085__$1);

return statearr_18176;
})();
if(inst_18085__$1){
var statearr_18177_19780 = state_18126__$1;
(statearr_18177_19780[(1)] = (33));

} else {
var statearr_18178_19781 = state_18126__$1;
(statearr_18178_19781[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (25))){
var inst_18069 = (state_18126[(20)]);
var inst_18070 = (state_18126[(12)]);
var inst_18072 = (inst_18070 < inst_18069);
var inst_18073 = inst_18072;
var state_18126__$1 = state_18126;
if(cljs.core.truth_(inst_18073)){
var statearr_18179_19782 = state_18126__$1;
(statearr_18179_19782[(1)] = (27));

} else {
var statearr_18180_19783 = state_18126__$1;
(statearr_18180_19783[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (34))){
var state_18126__$1 = state_18126;
var statearr_18181_19787 = state_18126__$1;
(statearr_18181_19787[(2)] = null);

(statearr_18181_19787[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (17))){
var state_18126__$1 = state_18126;
var statearr_18182_19788 = state_18126__$1;
(statearr_18182_19788[(2)] = null);

(statearr_18182_19788[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (3))){
var inst_18123 = (state_18126[(2)]);
var state_18126__$1 = state_18126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18126__$1,inst_18123);
} else {
if((state_val_18127 === (12))){
var inst_18054 = (state_18126[(2)]);
var state_18126__$1 = state_18126;
var statearr_18184_19789 = state_18126__$1;
(statearr_18184_19789[(2)] = inst_18054);

(statearr_18184_19789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (2))){
var state_18126__$1 = state_18126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18126__$1,(4),ch);
} else {
if((state_val_18127 === (23))){
var state_18126__$1 = state_18126;
var statearr_18185_19796 = state_18126__$1;
(statearr_18185_19796[(2)] = null);

(statearr_18185_19796[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (35))){
var inst_18107 = (state_18126[(2)]);
var state_18126__$1 = state_18126;
var statearr_18186_19797 = state_18126__$1;
(statearr_18186_19797[(2)] = inst_18107);

(statearr_18186_19797[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (19))){
var inst_18025 = (state_18126[(7)]);
var inst_18030 = cljs.core.chunk_first(inst_18025);
var inst_18031 = cljs.core.chunk_rest(inst_18025);
var inst_18032 = cljs.core.count(inst_18030);
var inst_18003 = inst_18031;
var inst_18004 = inst_18030;
var inst_18005 = inst_18032;
var inst_18006 = (0);
var state_18126__$1 = (function (){var statearr_18187 = state_18126;
(statearr_18187[(13)] = inst_18005);

(statearr_18187[(15)] = inst_18004);

(statearr_18187[(16)] = inst_18006);

(statearr_18187[(17)] = inst_18003);

return statearr_18187;
})();
var statearr_18188_19798 = state_18126__$1;
(statearr_18188_19798[(2)] = null);

(statearr_18188_19798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (11))){
var inst_18025 = (state_18126[(7)]);
var inst_18003 = (state_18126[(17)]);
var inst_18025__$1 = cljs.core.seq(inst_18003);
var state_18126__$1 = (function (){var statearr_18190 = state_18126;
(statearr_18190[(7)] = inst_18025__$1);

return statearr_18190;
})();
if(inst_18025__$1){
var statearr_18191_19799 = state_18126__$1;
(statearr_18191_19799[(1)] = (16));

} else {
var statearr_18192_19800 = state_18126__$1;
(statearr_18192_19800[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (9))){
var inst_18056 = (state_18126[(2)]);
var state_18126__$1 = state_18126;
var statearr_18193_19801 = state_18126__$1;
(statearr_18193_19801[(2)] = inst_18056);

(statearr_18193_19801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (5))){
var inst_18001 = cljs.core.deref(cs);
var inst_18002 = cljs.core.seq(inst_18001);
var inst_18003 = inst_18002;
var inst_18004 = null;
var inst_18005 = (0);
var inst_18006 = (0);
var state_18126__$1 = (function (){var statearr_18194 = state_18126;
(statearr_18194[(13)] = inst_18005);

(statearr_18194[(15)] = inst_18004);

(statearr_18194[(16)] = inst_18006);

(statearr_18194[(17)] = inst_18003);

return statearr_18194;
})();
var statearr_18195_19805 = state_18126__$1;
(statearr_18195_19805[(2)] = null);

(statearr_18195_19805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (14))){
var state_18126__$1 = state_18126;
var statearr_18196_19806 = state_18126__$1;
(statearr_18196_19806[(2)] = null);

(statearr_18196_19806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (45))){
var inst_18115 = (state_18126[(2)]);
var state_18126__$1 = state_18126;
var statearr_18197_19811 = state_18126__$1;
(statearr_18197_19811[(2)] = inst_18115);

(statearr_18197_19811[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (26))){
var inst_18059 = (state_18126[(27)]);
var inst_18111 = (state_18126[(2)]);
var inst_18112 = cljs.core.seq(inst_18059);
var state_18126__$1 = (function (){var statearr_18199 = state_18126;
(statearr_18199[(29)] = inst_18111);

return statearr_18199;
})();
if(inst_18112){
var statearr_18200_19815 = state_18126__$1;
(statearr_18200_19815[(1)] = (42));

} else {
var statearr_18201_19816 = state_18126__$1;
(statearr_18201_19816[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (16))){
var inst_18025 = (state_18126[(7)]);
var inst_18027 = cljs.core.chunked_seq_QMARK_(inst_18025);
var state_18126__$1 = state_18126;
if(inst_18027){
var statearr_18202_19820 = state_18126__$1;
(statearr_18202_19820[(1)] = (19));

} else {
var statearr_18203_19821 = state_18126__$1;
(statearr_18203_19821[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (38))){
var inst_18104 = (state_18126[(2)]);
var state_18126__$1 = state_18126;
var statearr_18204_19822 = state_18126__$1;
(statearr_18204_19822[(2)] = inst_18104);

(statearr_18204_19822[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (30))){
var state_18126__$1 = state_18126;
var statearr_18205_19829 = state_18126__$1;
(statearr_18205_19829[(2)] = null);

(statearr_18205_19829[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (10))){
var inst_18004 = (state_18126[(15)]);
var inst_18006 = (state_18126[(16)]);
var inst_18014 = cljs.core._nth(inst_18004,inst_18006);
var inst_18015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18014,(0),null);
var inst_18016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18014,(1),null);
var state_18126__$1 = (function (){var statearr_18206 = state_18126;
(statearr_18206[(24)] = inst_18015);

return statearr_18206;
})();
if(cljs.core.truth_(inst_18016)){
var statearr_18207_19834 = state_18126__$1;
(statearr_18207_19834[(1)] = (13));

} else {
var statearr_18208_19838 = state_18126__$1;
(statearr_18208_19838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (18))){
var inst_18052 = (state_18126[(2)]);
var state_18126__$1 = state_18126;
var statearr_18209_19839 = state_18126__$1;
(statearr_18209_19839[(2)] = inst_18052);

(statearr_18209_19839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (42))){
var state_18126__$1 = state_18126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18126__$1,(45),dchan);
} else {
if((state_val_18127 === (37))){
var inst_17994 = (state_18126[(9)]);
var inst_18094 = (state_18126[(22)]);
var inst_18085 = (state_18126[(23)]);
var inst_18094__$1 = cljs.core.first(inst_18085);
var inst_18095 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18094__$1,inst_17994,done);
var state_18126__$1 = (function (){var statearr_18211 = state_18126;
(statearr_18211[(22)] = inst_18094__$1);

return statearr_18211;
})();
if(cljs.core.truth_(inst_18095)){
var statearr_18212_19843 = state_18126__$1;
(statearr_18212_19843[(1)] = (39));

} else {
var statearr_18213_19844 = state_18126__$1;
(statearr_18213_19844[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18127 === (8))){
var inst_18005 = (state_18126[(13)]);
var inst_18006 = (state_18126[(16)]);
var inst_18008 = (inst_18006 < inst_18005);
var inst_18009 = inst_18008;
var state_18126__$1 = state_18126;
if(cljs.core.truth_(inst_18009)){
var statearr_18214_19845 = state_18126__$1;
(statearr_18214_19845[(1)] = (10));

} else {
var statearr_18215_19849 = state_18126__$1;
(statearr_18215_19849[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17104__auto__ = null;
var cljs$core$async$mult_$_state_machine__17104__auto____0 = (function (){
var statearr_18217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18217[(0)] = cljs$core$async$mult_$_state_machine__17104__auto__);

(statearr_18217[(1)] = (1));

return statearr_18217;
});
var cljs$core$async$mult_$_state_machine__17104__auto____1 = (function (state_18126){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_18126);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e18218){var ex__17107__auto__ = e18218;
var statearr_18219_19860 = state_18126;
(statearr_18219_19860[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_18126[(4)]))){
var statearr_18220_19861 = state_18126;
(statearr_18220_19861[(1)] = cljs.core.first((state_18126[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19866 = state_18126;
state_18126 = G__19866;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17104__auto__ = function(state_18126){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17104__auto____1.call(this,state_18126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17104__auto____0;
cljs$core$async$mult_$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17104__auto____1;
return cljs$core$async$mult_$_state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18221 = f__17247__auto__();
(statearr_18221[(6)] = c__17246__auto___19729);

return statearr_18221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18224 = arguments.length;
switch (G__18224) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19874 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19874(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19877 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19877(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19878 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19878(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19879 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19879(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19880 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19880(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19881 = arguments.length;
var i__5770__auto___19882 = (0);
while(true){
if((i__5770__auto___19882 < len__5769__auto___19881)){
args__5775__auto__.push((arguments[i__5770__auto___19882]));

var G__19883 = (i__5770__auto___19882 + (1));
i__5770__auto___19882 = G__19883;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18234){
var map__18235 = p__18234;
var map__18235__$1 = cljs.core.__destructure_map(map__18235);
var opts = map__18235__$1;
var statearr_18236_19884 = state;
(statearr_18236_19884[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18237_19885 = state;
(statearr_18237_19885[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18238_19886 = state;
(statearr_18238_19886[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18229){
var G__18230 = cljs.core.first(seq18229);
var seq18229__$1 = cljs.core.next(seq18229);
var G__18231 = cljs.core.first(seq18229__$1);
var seq18229__$2 = cljs.core.next(seq18229__$1);
var G__18232 = cljs.core.first(seq18229__$2);
var seq18229__$3 = cljs.core.next(seq18229__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18230,G__18231,G__18232,seq18229__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18241 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18242){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18242 = meta18242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18243,meta18242__$1){
var self__ = this;
var _18243__$1 = this;
return (new cljs.core.async.t_cljs$core$async18241(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18242__$1));
}));

(cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18243){
var self__ = this;
var _18243__$1 = this;
return self__.meta18242;
}));

(cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18241.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18242","meta18242",-1320258842,null)], null);
}));

(cljs.core.async.t_cljs$core$async18241.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18241");

(cljs.core.async.t_cljs$core$async18241.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18241");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18241.
 */
cljs.core.async.__GT_t_cljs$core$async18241 = (function cljs$core$async$__GT_t_cljs$core$async18241(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18242){
return (new cljs.core.async.t_cljs$core$async18241(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18242));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18241(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17246__auto___19892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_18315){
var state_val_18316 = (state_18315[(1)]);
if((state_val_18316 === (7))){
var inst_18274 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
if(cljs.core.truth_(inst_18274)){
var statearr_18317_19893 = state_18315__$1;
(statearr_18317_19893[(1)] = (8));

} else {
var statearr_18318_19894 = state_18315__$1;
(statearr_18318_19894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (20))){
var inst_18267 = (state_18315[(7)]);
var state_18315__$1 = state_18315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18315__$1,(23),out,inst_18267);
} else {
if((state_val_18316 === (1))){
var inst_18250 = calc_state();
var inst_18251 = cljs.core.__destructure_map(inst_18250);
var inst_18252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18251,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18251,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18251,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18255 = inst_18250;
var state_18315__$1 = (function (){var statearr_18319 = state_18315;
(statearr_18319[(8)] = inst_18252);

(statearr_18319[(9)] = inst_18253);

(statearr_18319[(10)] = inst_18255);

(statearr_18319[(11)] = inst_18254);

return statearr_18319;
})();
var statearr_18321_19895 = state_18315__$1;
(statearr_18321_19895[(2)] = null);

(statearr_18321_19895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (24))){
var inst_18258 = (state_18315[(12)]);
var inst_18255 = inst_18258;
var state_18315__$1 = (function (){var statearr_18322 = state_18315;
(statearr_18322[(10)] = inst_18255);

return statearr_18322;
})();
var statearr_18323_19896 = state_18315__$1;
(statearr_18323_19896[(2)] = null);

(statearr_18323_19896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (4))){
var inst_18269 = (state_18315[(13)]);
var inst_18267 = (state_18315[(7)]);
var inst_18266 = (state_18315[(2)]);
var inst_18267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18266,(0),null);
var inst_18268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18266,(1),null);
var inst_18269__$1 = (inst_18267__$1 == null);
var state_18315__$1 = (function (){var statearr_18324 = state_18315;
(statearr_18324[(13)] = inst_18269__$1);

(statearr_18324[(14)] = inst_18268);

(statearr_18324[(7)] = inst_18267__$1);

return statearr_18324;
})();
if(cljs.core.truth_(inst_18269__$1)){
var statearr_18325_19897 = state_18315__$1;
(statearr_18325_19897[(1)] = (5));

} else {
var statearr_18326_19898 = state_18315__$1;
(statearr_18326_19898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (15))){
var inst_18259 = (state_18315[(15)]);
var inst_18288 = (state_18315[(16)]);
var inst_18288__$1 = cljs.core.empty_QMARK_(inst_18259);
var state_18315__$1 = (function (){var statearr_18327 = state_18315;
(statearr_18327[(16)] = inst_18288__$1);

return statearr_18327;
})();
if(inst_18288__$1){
var statearr_18329_19900 = state_18315__$1;
(statearr_18329_19900[(1)] = (17));

} else {
var statearr_18330_19901 = state_18315__$1;
(statearr_18330_19901[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (21))){
var inst_18258 = (state_18315[(12)]);
var inst_18255 = inst_18258;
var state_18315__$1 = (function (){var statearr_18331 = state_18315;
(statearr_18331[(10)] = inst_18255);

return statearr_18331;
})();
var statearr_18332_19903 = state_18315__$1;
(statearr_18332_19903[(2)] = null);

(statearr_18332_19903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (13))){
var inst_18281 = (state_18315[(2)]);
var inst_18282 = calc_state();
var inst_18255 = inst_18282;
var state_18315__$1 = (function (){var statearr_18333 = state_18315;
(statearr_18333[(17)] = inst_18281);

(statearr_18333[(10)] = inst_18255);

return statearr_18333;
})();
var statearr_18334_19904 = state_18315__$1;
(statearr_18334_19904[(2)] = null);

(statearr_18334_19904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (22))){
var inst_18308 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
var statearr_18335_19905 = state_18315__$1;
(statearr_18335_19905[(2)] = inst_18308);

(statearr_18335_19905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (6))){
var inst_18268 = (state_18315[(14)]);
var inst_18272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18268,change);
var state_18315__$1 = state_18315;
var statearr_18336_19906 = state_18315__$1;
(statearr_18336_19906[(2)] = inst_18272);

(statearr_18336_19906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (25))){
var state_18315__$1 = state_18315;
var statearr_18338_19907 = state_18315__$1;
(statearr_18338_19907[(2)] = null);

(statearr_18338_19907[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (17))){
var inst_18260 = (state_18315[(18)]);
var inst_18268 = (state_18315[(14)]);
var inst_18290 = (inst_18260.cljs$core$IFn$_invoke$arity$1 ? inst_18260.cljs$core$IFn$_invoke$arity$1(inst_18268) : inst_18260.call(null,inst_18268));
var inst_18291 = cljs.core.not(inst_18290);
var state_18315__$1 = state_18315;
var statearr_18339_19909 = state_18315__$1;
(statearr_18339_19909[(2)] = inst_18291);

(statearr_18339_19909[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (3))){
var inst_18313 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18315__$1,inst_18313);
} else {
if((state_val_18316 === (12))){
var state_18315__$1 = state_18315;
var statearr_18340_19913 = state_18315__$1;
(statearr_18340_19913[(2)] = null);

(statearr_18340_19913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (2))){
var inst_18255 = (state_18315[(10)]);
var inst_18258 = (state_18315[(12)]);
var inst_18258__$1 = cljs.core.__destructure_map(inst_18255);
var inst_18259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18258__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18258__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18258__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18315__$1 = (function (){var statearr_18342 = state_18315;
(statearr_18342[(18)] = inst_18260);

(statearr_18342[(12)] = inst_18258__$1);

(statearr_18342[(15)] = inst_18259);

return statearr_18342;
})();
return cljs.core.async.ioc_alts_BANG_(state_18315__$1,(4),inst_18261);
} else {
if((state_val_18316 === (23))){
var inst_18299 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
if(cljs.core.truth_(inst_18299)){
var statearr_18343_19914 = state_18315__$1;
(statearr_18343_19914[(1)] = (24));

} else {
var statearr_18344_19915 = state_18315__$1;
(statearr_18344_19915[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (19))){
var inst_18294 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
var statearr_18345_19916 = state_18315__$1;
(statearr_18345_19916[(2)] = inst_18294);

(statearr_18345_19916[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (11))){
var inst_18268 = (state_18315[(14)]);
var inst_18278 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18268);
var state_18315__$1 = state_18315;
var statearr_18346_19917 = state_18315__$1;
(statearr_18346_19917[(2)] = inst_18278);

(statearr_18346_19917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (9))){
var inst_18285 = (state_18315[(19)]);
var inst_18268 = (state_18315[(14)]);
var inst_18259 = (state_18315[(15)]);
var inst_18285__$1 = (inst_18259.cljs$core$IFn$_invoke$arity$1 ? inst_18259.cljs$core$IFn$_invoke$arity$1(inst_18268) : inst_18259.call(null,inst_18268));
var state_18315__$1 = (function (){var statearr_18347 = state_18315;
(statearr_18347[(19)] = inst_18285__$1);

return statearr_18347;
})();
if(cljs.core.truth_(inst_18285__$1)){
var statearr_18348_19918 = state_18315__$1;
(statearr_18348_19918[(1)] = (14));

} else {
var statearr_18350_19919 = state_18315__$1;
(statearr_18350_19919[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (5))){
var inst_18269 = (state_18315[(13)]);
var state_18315__$1 = state_18315;
var statearr_18351_19920 = state_18315__$1;
(statearr_18351_19920[(2)] = inst_18269);

(statearr_18351_19920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (14))){
var inst_18285 = (state_18315[(19)]);
var state_18315__$1 = state_18315;
var statearr_18352_19921 = state_18315__$1;
(statearr_18352_19921[(2)] = inst_18285);

(statearr_18352_19921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (26))){
var inst_18304 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
var statearr_18353_19922 = state_18315__$1;
(statearr_18353_19922[(2)] = inst_18304);

(statearr_18353_19922[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (16))){
var inst_18296 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
if(cljs.core.truth_(inst_18296)){
var statearr_18354_19924 = state_18315__$1;
(statearr_18354_19924[(1)] = (20));

} else {
var statearr_18355_19925 = state_18315__$1;
(statearr_18355_19925[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (10))){
var inst_18310 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
var statearr_18356_19936 = state_18315__$1;
(statearr_18356_19936[(2)] = inst_18310);

(statearr_18356_19936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (18))){
var inst_18288 = (state_18315[(16)]);
var state_18315__$1 = state_18315;
var statearr_18358_19937 = state_18315__$1;
(statearr_18358_19937[(2)] = inst_18288);

(statearr_18358_19937[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (8))){
var inst_18267 = (state_18315[(7)]);
var inst_18276 = (inst_18267 == null);
var state_18315__$1 = state_18315;
if(cljs.core.truth_(inst_18276)){
var statearr_18359_19938 = state_18315__$1;
(statearr_18359_19938[(1)] = (11));

} else {
var statearr_18360_19939 = state_18315__$1;
(statearr_18360_19939[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17104__auto__ = null;
var cljs$core$async$mix_$_state_machine__17104__auto____0 = (function (){
var statearr_18361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18361[(0)] = cljs$core$async$mix_$_state_machine__17104__auto__);

(statearr_18361[(1)] = (1));

return statearr_18361;
});
var cljs$core$async$mix_$_state_machine__17104__auto____1 = (function (state_18315){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_18315);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e18362){var ex__17107__auto__ = e18362;
var statearr_18363_19942 = state_18315;
(statearr_18363_19942[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_18315[(4)]))){
var statearr_18365_19943 = state_18315;
(statearr_18365_19943[(1)] = cljs.core.first((state_18315[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19944 = state_18315;
state_18315 = G__19944;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17104__auto__ = function(state_18315){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17104__auto____1.call(this,state_18315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17104__auto____0;
cljs$core$async$mix_$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17104__auto____1;
return cljs$core$async$mix_$_state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18366 = f__17247__auto__();
(statearr_18366[(6)] = c__17246__auto___19892);

return statearr_18366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19946 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19946(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19948 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19948(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19949 = (function() {
var G__19950 = null;
var G__19950__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19950__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19950 = function(p,v){
switch(arguments.length){
case 1:
return G__19950__1.call(this,p);
case 2:
return G__19950__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19950.cljs$core$IFn$_invoke$arity$1 = G__19950__1;
G__19950.cljs$core$IFn$_invoke$arity$2 = G__19950__2;
return G__19950;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18372 = arguments.length;
switch (G__18372) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19949(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19949(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18378 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18379){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18379 = meta18379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18380,meta18379__$1){
var self__ = this;
var _18380__$1 = this;
return (new cljs.core.async.t_cljs$core$async18378(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18379__$1));
}));

(cljs.core.async.t_cljs$core$async18378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18380){
var self__ = this;
var _18380__$1 = this;
return self__.meta18379;
}));

(cljs.core.async.t_cljs$core$async18378.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18378.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18378.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18378.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18378.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18378.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18379","meta18379",-1759072461,null)], null);
}));

(cljs.core.async.t_cljs$core$async18378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18378");

(cljs.core.async.t_cljs$core$async18378.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18378.
 */
cljs.core.async.__GT_t_cljs$core$async18378 = (function cljs$core$async$__GT_t_cljs$core$async18378(ch,topic_fn,buf_fn,mults,ensure_mult,meta18379){
return (new cljs.core.async.t_cljs$core$async18378(ch,topic_fn,buf_fn,mults,ensure_mult,meta18379));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18377 = arguments.length;
switch (G__18377) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18373_SHARP_){
if(cljs.core.truth_((p1__18373_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18373_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18373_SHARP_.call(null,topic)))){
return p1__18373_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18373_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18378(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17246__auto___19958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_18477){
var state_val_18478 = (state_18477[(1)]);
if((state_val_18478 === (7))){
var inst_18470 = (state_18477[(2)]);
var state_18477__$1 = state_18477;
var statearr_18484_19959 = state_18477__$1;
(statearr_18484_19959[(2)] = inst_18470);

(statearr_18484_19959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (20))){
var state_18477__$1 = state_18477;
var statearr_18488_19962 = state_18477__$1;
(statearr_18488_19962[(2)] = null);

(statearr_18488_19962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (1))){
var state_18477__$1 = state_18477;
var statearr_18490_19963 = state_18477__$1;
(statearr_18490_19963[(2)] = null);

(statearr_18490_19963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (24))){
var inst_18453 = (state_18477[(7)]);
var inst_18462 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18453);
var state_18477__$1 = state_18477;
var statearr_18494_19964 = state_18477__$1;
(statearr_18494_19964[(2)] = inst_18462);

(statearr_18494_19964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (4))){
var inst_18396 = (state_18477[(8)]);
var inst_18396__$1 = (state_18477[(2)]);
var inst_18397 = (inst_18396__$1 == null);
var state_18477__$1 = (function (){var statearr_18498 = state_18477;
(statearr_18498[(8)] = inst_18396__$1);

return statearr_18498;
})();
if(cljs.core.truth_(inst_18397)){
var statearr_18500_19965 = state_18477__$1;
(statearr_18500_19965[(1)] = (5));

} else {
var statearr_18501_19967 = state_18477__$1;
(statearr_18501_19967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (15))){
var inst_18446 = (state_18477[(2)]);
var state_18477__$1 = state_18477;
var statearr_18503_19968 = state_18477__$1;
(statearr_18503_19968[(2)] = inst_18446);

(statearr_18503_19968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (21))){
var inst_18467 = (state_18477[(2)]);
var state_18477__$1 = (function (){var statearr_18505 = state_18477;
(statearr_18505[(9)] = inst_18467);

return statearr_18505;
})();
var statearr_18508_19973 = state_18477__$1;
(statearr_18508_19973[(2)] = null);

(statearr_18508_19973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (13))){
var inst_18425 = (state_18477[(10)]);
var inst_18427 = cljs.core.chunked_seq_QMARK_(inst_18425);
var state_18477__$1 = state_18477;
if(inst_18427){
var statearr_18510_19977 = state_18477__$1;
(statearr_18510_19977[(1)] = (16));

} else {
var statearr_18511_19978 = state_18477__$1;
(statearr_18511_19978[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (22))){
var inst_18459 = (state_18477[(2)]);
var state_18477__$1 = state_18477;
if(cljs.core.truth_(inst_18459)){
var statearr_18514_19979 = state_18477__$1;
(statearr_18514_19979[(1)] = (23));

} else {
var statearr_18516_19980 = state_18477__$1;
(statearr_18516_19980[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (6))){
var inst_18396 = (state_18477[(8)]);
var inst_18453 = (state_18477[(7)]);
var inst_18455 = (state_18477[(11)]);
var inst_18453__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18396) : topic_fn.call(null,inst_18396));
var inst_18454 = cljs.core.deref(mults);
var inst_18455__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18454,inst_18453__$1);
var state_18477__$1 = (function (){var statearr_18520 = state_18477;
(statearr_18520[(7)] = inst_18453__$1);

(statearr_18520[(11)] = inst_18455__$1);

return statearr_18520;
})();
if(cljs.core.truth_(inst_18455__$1)){
var statearr_18522_19984 = state_18477__$1;
(statearr_18522_19984[(1)] = (19));

} else {
var statearr_18523_19985 = state_18477__$1;
(statearr_18523_19985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (25))){
var inst_18464 = (state_18477[(2)]);
var state_18477__$1 = state_18477;
var statearr_18525_19986 = state_18477__$1;
(statearr_18525_19986[(2)] = inst_18464);

(statearr_18525_19986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (17))){
var inst_18425 = (state_18477[(10)]);
var inst_18437 = cljs.core.first(inst_18425);
var inst_18438 = cljs.core.async.muxch_STAR_(inst_18437);
var inst_18439 = cljs.core.async.close_BANG_(inst_18438);
var inst_18440 = cljs.core.next(inst_18425);
var inst_18407 = inst_18440;
var inst_18408 = null;
var inst_18409 = (0);
var inst_18410 = (0);
var state_18477__$1 = (function (){var statearr_18530 = state_18477;
(statearr_18530[(12)] = inst_18439);

(statearr_18530[(13)] = inst_18408);

(statearr_18530[(14)] = inst_18410);

(statearr_18530[(15)] = inst_18409);

(statearr_18530[(16)] = inst_18407);

return statearr_18530;
})();
var statearr_18534_19990 = state_18477__$1;
(statearr_18534_19990[(2)] = null);

(statearr_18534_19990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (3))){
var inst_18473 = (state_18477[(2)]);
var state_18477__$1 = state_18477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18477__$1,inst_18473);
} else {
if((state_val_18478 === (12))){
var inst_18448 = (state_18477[(2)]);
var state_18477__$1 = state_18477;
var statearr_18536_19994 = state_18477__$1;
(statearr_18536_19994[(2)] = inst_18448);

(statearr_18536_19994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (2))){
var state_18477__$1 = state_18477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18477__$1,(4),ch);
} else {
if((state_val_18478 === (23))){
var state_18477__$1 = state_18477;
var statearr_18541_20004 = state_18477__$1;
(statearr_18541_20004[(2)] = null);

(statearr_18541_20004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (19))){
var inst_18396 = (state_18477[(8)]);
var inst_18455 = (state_18477[(11)]);
var inst_18457 = cljs.core.async.muxch_STAR_(inst_18455);
var state_18477__$1 = state_18477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18477__$1,(22),inst_18457,inst_18396);
} else {
if((state_val_18478 === (11))){
var inst_18425 = (state_18477[(10)]);
var inst_18407 = (state_18477[(16)]);
var inst_18425__$1 = cljs.core.seq(inst_18407);
var state_18477__$1 = (function (){var statearr_18546 = state_18477;
(statearr_18546[(10)] = inst_18425__$1);

return statearr_18546;
})();
if(inst_18425__$1){
var statearr_18547_20009 = state_18477__$1;
(statearr_18547_20009[(1)] = (13));

} else {
var statearr_18551_20010 = state_18477__$1;
(statearr_18551_20010[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (9))){
var inst_18450 = (state_18477[(2)]);
var state_18477__$1 = state_18477;
var statearr_18553_20011 = state_18477__$1;
(statearr_18553_20011[(2)] = inst_18450);

(statearr_18553_20011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (5))){
var inst_18404 = cljs.core.deref(mults);
var inst_18405 = cljs.core.vals(inst_18404);
var inst_18406 = cljs.core.seq(inst_18405);
var inst_18407 = inst_18406;
var inst_18408 = null;
var inst_18409 = (0);
var inst_18410 = (0);
var state_18477__$1 = (function (){var statearr_18558 = state_18477;
(statearr_18558[(13)] = inst_18408);

(statearr_18558[(14)] = inst_18410);

(statearr_18558[(15)] = inst_18409);

(statearr_18558[(16)] = inst_18407);

return statearr_18558;
})();
var statearr_18559_20013 = state_18477__$1;
(statearr_18559_20013[(2)] = null);

(statearr_18559_20013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (14))){
var state_18477__$1 = state_18477;
var statearr_18564_20014 = state_18477__$1;
(statearr_18564_20014[(2)] = null);

(statearr_18564_20014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (16))){
var inst_18425 = (state_18477[(10)]);
var inst_18431 = cljs.core.chunk_first(inst_18425);
var inst_18433 = cljs.core.chunk_rest(inst_18425);
var inst_18434 = cljs.core.count(inst_18431);
var inst_18407 = inst_18433;
var inst_18408 = inst_18431;
var inst_18409 = inst_18434;
var inst_18410 = (0);
var state_18477__$1 = (function (){var statearr_18570 = state_18477;
(statearr_18570[(13)] = inst_18408);

(statearr_18570[(14)] = inst_18410);

(statearr_18570[(15)] = inst_18409);

(statearr_18570[(16)] = inst_18407);

return statearr_18570;
})();
var statearr_18571_20015 = state_18477__$1;
(statearr_18571_20015[(2)] = null);

(statearr_18571_20015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (10))){
var inst_18408 = (state_18477[(13)]);
var inst_18410 = (state_18477[(14)]);
var inst_18409 = (state_18477[(15)]);
var inst_18407 = (state_18477[(16)]);
var inst_18417 = cljs.core._nth(inst_18408,inst_18410);
var inst_18419 = cljs.core.async.muxch_STAR_(inst_18417);
var inst_18420 = cljs.core.async.close_BANG_(inst_18419);
var inst_18421 = (inst_18410 + (1));
var tmp18561 = inst_18408;
var tmp18562 = inst_18409;
var tmp18563 = inst_18407;
var inst_18407__$1 = tmp18563;
var inst_18408__$1 = tmp18561;
var inst_18409__$1 = tmp18562;
var inst_18410__$1 = inst_18421;
var state_18477__$1 = (function (){var statearr_18579 = state_18477;
(statearr_18579[(13)] = inst_18408__$1);

(statearr_18579[(14)] = inst_18410__$1);

(statearr_18579[(17)] = inst_18420);

(statearr_18579[(15)] = inst_18409__$1);

(statearr_18579[(16)] = inst_18407__$1);

return statearr_18579;
})();
var statearr_18581_20017 = state_18477__$1;
(statearr_18581_20017[(2)] = null);

(statearr_18581_20017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (18))){
var inst_18443 = (state_18477[(2)]);
var state_18477__$1 = state_18477;
var statearr_18583_20019 = state_18477__$1;
(statearr_18583_20019[(2)] = inst_18443);

(statearr_18583_20019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18478 === (8))){
var inst_18410 = (state_18477[(14)]);
var inst_18409 = (state_18477[(15)]);
var inst_18412 = (inst_18410 < inst_18409);
var inst_18413 = inst_18412;
var state_18477__$1 = state_18477;
if(cljs.core.truth_(inst_18413)){
var statearr_18587_20020 = state_18477__$1;
(statearr_18587_20020[(1)] = (10));

} else {
var statearr_18589_20021 = state_18477__$1;
(statearr_18589_20021[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_18594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18594[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_18594[(1)] = (1));

return statearr_18594;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_18477){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_18477);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e18597){var ex__17107__auto__ = e18597;
var statearr_18599_20022 = state_18477;
(statearr_18599_20022[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_18477[(4)]))){
var statearr_18600_20023 = state_18477;
(statearr_18600_20023[(1)] = cljs.core.first((state_18477[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20024 = state_18477;
state_18477 = G__20024;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_18477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_18477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18605 = f__17247__auto__();
(statearr_18605[(6)] = c__17246__auto___19958);

return statearr_18605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18612 = arguments.length;
switch (G__18612) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18623 = arguments.length;
switch (G__18623) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18647 = arguments.length;
switch (G__18647) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17246__auto___20030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_18713){
var state_val_18714 = (state_18713[(1)]);
if((state_val_18714 === (7))){
var state_18713__$1 = state_18713;
var statearr_18719_20031 = state_18713__$1;
(statearr_18719_20031[(2)] = null);

(statearr_18719_20031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (1))){
var state_18713__$1 = state_18713;
var statearr_18723_20032 = state_18713__$1;
(statearr_18723_20032[(2)] = null);

(statearr_18723_20032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (4))){
var inst_18667 = (state_18713[(7)]);
var inst_18669 = (state_18713[(8)]);
var inst_18671 = (inst_18669 < inst_18667);
var state_18713__$1 = state_18713;
if(cljs.core.truth_(inst_18671)){
var statearr_18725_20033 = state_18713__$1;
(statearr_18725_20033[(1)] = (6));

} else {
var statearr_18726_20034 = state_18713__$1;
(statearr_18726_20034[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (15))){
var inst_18698 = (state_18713[(9)]);
var inst_18703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18698);
var state_18713__$1 = state_18713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18713__$1,(17),out,inst_18703);
} else {
if((state_val_18714 === (13))){
var inst_18698 = (state_18713[(9)]);
var inst_18698__$1 = (state_18713[(2)]);
var inst_18699 = cljs.core.some(cljs.core.nil_QMARK_,inst_18698__$1);
var state_18713__$1 = (function (){var statearr_18731 = state_18713;
(statearr_18731[(9)] = inst_18698__$1);

return statearr_18731;
})();
if(cljs.core.truth_(inst_18699)){
var statearr_18734_20036 = state_18713__$1;
(statearr_18734_20036[(1)] = (14));

} else {
var statearr_18736_20037 = state_18713__$1;
(statearr_18736_20037[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (6))){
var state_18713__$1 = state_18713;
var statearr_18737_20039 = state_18713__$1;
(statearr_18737_20039[(2)] = null);

(statearr_18737_20039[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (17))){
var inst_18705 = (state_18713[(2)]);
var state_18713__$1 = (function (){var statearr_18744 = state_18713;
(statearr_18744[(10)] = inst_18705);

return statearr_18744;
})();
var statearr_18745_20044 = state_18713__$1;
(statearr_18745_20044[(2)] = null);

(statearr_18745_20044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (3))){
var inst_18711 = (state_18713[(2)]);
var state_18713__$1 = state_18713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18713__$1,inst_18711);
} else {
if((state_val_18714 === (12))){
var _ = (function (){var statearr_18746 = state_18713;
(statearr_18746[(4)] = cljs.core.rest((state_18713[(4)])));

return statearr_18746;
})();
var state_18713__$1 = state_18713;
var ex18741 = (state_18713__$1[(2)]);
var statearr_18747_20045 = state_18713__$1;
(statearr_18747_20045[(5)] = ex18741);


if((ex18741 instanceof Object)){
var statearr_18748_20046 = state_18713__$1;
(statearr_18748_20046[(1)] = (11));

(statearr_18748_20046[(5)] = null);

} else {
throw ex18741;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (2))){
var inst_18665 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18667 = cnt;
var inst_18669 = (0);
var state_18713__$1 = (function (){var statearr_18749 = state_18713;
(statearr_18749[(7)] = inst_18667);

(statearr_18749[(8)] = inst_18669);

(statearr_18749[(11)] = inst_18665);

return statearr_18749;
})();
var statearr_18750_20047 = state_18713__$1;
(statearr_18750_20047[(2)] = null);

(statearr_18750_20047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (11))){
var inst_18674 = (state_18713[(2)]);
var inst_18675 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18713__$1 = (function (){var statearr_18751 = state_18713;
(statearr_18751[(12)] = inst_18674);

return statearr_18751;
})();
var statearr_18752_20048 = state_18713__$1;
(statearr_18752_20048[(2)] = inst_18675);

(statearr_18752_20048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (9))){
var inst_18669 = (state_18713[(8)]);
var _ = (function (){var statearr_18753 = state_18713;
(statearr_18753[(4)] = cljs.core.cons((12),(state_18713[(4)])));

return statearr_18753;
})();
var inst_18683 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18669) : chs__$1.call(null,inst_18669));
var inst_18684 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18669) : done.call(null,inst_18669));
var inst_18685 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18683,inst_18684);
var ___$1 = (function (){var statearr_18754 = state_18713;
(statearr_18754[(4)] = cljs.core.rest((state_18713[(4)])));

return statearr_18754;
})();
var state_18713__$1 = state_18713;
var statearr_18755_20049 = state_18713__$1;
(statearr_18755_20049[(2)] = inst_18685);

(statearr_18755_20049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (5))){
var inst_18696 = (state_18713[(2)]);
var state_18713__$1 = (function (){var statearr_18756 = state_18713;
(statearr_18756[(13)] = inst_18696);

return statearr_18756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18713__$1,(13),dchan);
} else {
if((state_val_18714 === (14))){
var inst_18701 = cljs.core.async.close_BANG_(out);
var state_18713__$1 = state_18713;
var statearr_18757_20050 = state_18713__$1;
(statearr_18757_20050[(2)] = inst_18701);

(statearr_18757_20050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (16))){
var inst_18708 = (state_18713[(2)]);
var state_18713__$1 = state_18713;
var statearr_18758_20051 = state_18713__$1;
(statearr_18758_20051[(2)] = inst_18708);

(statearr_18758_20051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (10))){
var inst_18669 = (state_18713[(8)]);
var inst_18689 = (state_18713[(2)]);
var inst_18690 = (inst_18669 + (1));
var inst_18669__$1 = inst_18690;
var state_18713__$1 = (function (){var statearr_18759 = state_18713;
(statearr_18759[(14)] = inst_18689);

(statearr_18759[(8)] = inst_18669__$1);

return statearr_18759;
})();
var statearr_18760_20056 = state_18713__$1;
(statearr_18760_20056[(2)] = null);

(statearr_18760_20056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18714 === (8))){
var inst_18694 = (state_18713[(2)]);
var state_18713__$1 = state_18713;
var statearr_18761_20057 = state_18713__$1;
(statearr_18761_20057[(2)] = inst_18694);

(statearr_18761_20057[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_18762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18762[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_18762[(1)] = (1));

return statearr_18762;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_18713){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_18713);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e18763){var ex__17107__auto__ = e18763;
var statearr_18764_20059 = state_18713;
(statearr_18764_20059[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_18713[(4)]))){
var statearr_18765_20060 = state_18713;
(statearr_18765_20060[(1)] = cljs.core.first((state_18713[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20061 = state_18713;
state_18713 = G__20061;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_18713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_18713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18766 = f__17247__auto__();
(statearr_18766[(6)] = c__17246__auto___20030);

return statearr_18766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18769 = arguments.length;
switch (G__18769) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_18807){
var state_val_18808 = (state_18807[(1)]);
if((state_val_18808 === (7))){
var inst_18784 = (state_18807[(7)]);
var inst_18782 = (state_18807[(8)]);
var inst_18782__$1 = (state_18807[(2)]);
var inst_18784__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18782__$1,(0),null);
var inst_18788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18782__$1,(1),null);
var inst_18789 = (inst_18784__$1 == null);
var state_18807__$1 = (function (){var statearr_18814 = state_18807;
(statearr_18814[(9)] = inst_18788);

(statearr_18814[(7)] = inst_18784__$1);

(statearr_18814[(8)] = inst_18782__$1);

return statearr_18814;
})();
if(cljs.core.truth_(inst_18789)){
var statearr_18815_20073 = state_18807__$1;
(statearr_18815_20073[(1)] = (8));

} else {
var statearr_18816_20074 = state_18807__$1;
(statearr_18816_20074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (1))){
var inst_18772 = cljs.core.vec(chs);
var inst_18773 = inst_18772;
var state_18807__$1 = (function (){var statearr_18817 = state_18807;
(statearr_18817[(10)] = inst_18773);

return statearr_18817;
})();
var statearr_18818_20084 = state_18807__$1;
(statearr_18818_20084[(2)] = null);

(statearr_18818_20084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (4))){
var inst_18773 = (state_18807[(10)]);
var state_18807__$1 = state_18807;
return cljs.core.async.ioc_alts_BANG_(state_18807__$1,(7),inst_18773);
} else {
if((state_val_18808 === (6))){
var inst_18803 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18819_20089 = state_18807__$1;
(statearr_18819_20089[(2)] = inst_18803);

(statearr_18819_20089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (3))){
var inst_18805 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18807__$1,inst_18805);
} else {
if((state_val_18808 === (2))){
var inst_18773 = (state_18807[(10)]);
var inst_18775 = cljs.core.count(inst_18773);
var inst_18776 = (inst_18775 > (0));
var state_18807__$1 = state_18807;
if(cljs.core.truth_(inst_18776)){
var statearr_18825_20094 = state_18807__$1;
(statearr_18825_20094[(1)] = (4));

} else {
var statearr_18826_20095 = state_18807__$1;
(statearr_18826_20095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (11))){
var inst_18773 = (state_18807[(10)]);
var inst_18796 = (state_18807[(2)]);
var tmp18820 = inst_18773;
var inst_18773__$1 = tmp18820;
var state_18807__$1 = (function (){var statearr_18831 = state_18807;
(statearr_18831[(10)] = inst_18773__$1);

(statearr_18831[(11)] = inst_18796);

return statearr_18831;
})();
var statearr_18832_20096 = state_18807__$1;
(statearr_18832_20096[(2)] = null);

(statearr_18832_20096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (9))){
var inst_18784 = (state_18807[(7)]);
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18807__$1,(11),out,inst_18784);
} else {
if((state_val_18808 === (5))){
var inst_18801 = cljs.core.async.close_BANG_(out);
var state_18807__$1 = state_18807;
var statearr_18837_20104 = state_18807__$1;
(statearr_18837_20104[(2)] = inst_18801);

(statearr_18837_20104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (10))){
var inst_18799 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18838_20105 = state_18807__$1;
(statearr_18838_20105[(2)] = inst_18799);

(statearr_18838_20105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (8))){
var inst_18773 = (state_18807[(10)]);
var inst_18788 = (state_18807[(9)]);
var inst_18784 = (state_18807[(7)]);
var inst_18782 = (state_18807[(8)]);
var inst_18791 = (function (){var cs = inst_18773;
var vec__18778 = inst_18782;
var v = inst_18784;
var c = inst_18788;
return (function (p1__18767_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18767_SHARP_);
});
})();
var inst_18792 = cljs.core.filterv(inst_18791,inst_18773);
var inst_18773__$1 = inst_18792;
var state_18807__$1 = (function (){var statearr_18842 = state_18807;
(statearr_18842[(10)] = inst_18773__$1);

return statearr_18842;
})();
var statearr_18844_20107 = state_18807__$1;
(statearr_18844_20107[(2)] = null);

(statearr_18844_20107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_18845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18845[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_18845[(1)] = (1));

return statearr_18845;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_18807){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_18807);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e18846){var ex__17107__auto__ = e18846;
var statearr_18847_20108 = state_18807;
(statearr_18847_20108[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_18807[(4)]))){
var statearr_18848_20109 = state_18807;
(statearr_18848_20109[(1)] = cljs.core.first((state_18807[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20112 = state_18807;
state_18807 = G__20112;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_18807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_18807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18853 = f__17247__auto__();
(statearr_18853[(6)] = c__17246__auto___20070);

return statearr_18853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18856 = arguments.length;
switch (G__18856) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_18888){
var state_val_18889 = (state_18888[(1)]);
if((state_val_18889 === (7))){
var inst_18870 = (state_18888[(7)]);
var inst_18870__$1 = (state_18888[(2)]);
var inst_18871 = (inst_18870__$1 == null);
var inst_18872 = cljs.core.not(inst_18871);
var state_18888__$1 = (function (){var statearr_18890 = state_18888;
(statearr_18890[(7)] = inst_18870__$1);

return statearr_18890;
})();
if(inst_18872){
var statearr_18891_20129 = state_18888__$1;
(statearr_18891_20129[(1)] = (8));

} else {
var statearr_18892_20130 = state_18888__$1;
(statearr_18892_20130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (1))){
var inst_18864 = (0);
var state_18888__$1 = (function (){var statearr_18893 = state_18888;
(statearr_18893[(8)] = inst_18864);

return statearr_18893;
})();
var statearr_18897_20131 = state_18888__$1;
(statearr_18897_20131[(2)] = null);

(statearr_18897_20131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (4))){
var state_18888__$1 = state_18888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18888__$1,(7),ch);
} else {
if((state_val_18889 === (6))){
var inst_18883 = (state_18888[(2)]);
var state_18888__$1 = state_18888;
var statearr_18899_20132 = state_18888__$1;
(statearr_18899_20132[(2)] = inst_18883);

(statearr_18899_20132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (3))){
var inst_18885 = (state_18888[(2)]);
var inst_18886 = cljs.core.async.close_BANG_(out);
var state_18888__$1 = (function (){var statearr_18904 = state_18888;
(statearr_18904[(9)] = inst_18885);

return statearr_18904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18888__$1,inst_18886);
} else {
if((state_val_18889 === (2))){
var inst_18864 = (state_18888[(8)]);
var inst_18867 = (inst_18864 < n);
var state_18888__$1 = state_18888;
if(cljs.core.truth_(inst_18867)){
var statearr_18905_20133 = state_18888__$1;
(statearr_18905_20133[(1)] = (4));

} else {
var statearr_18906_20134 = state_18888__$1;
(statearr_18906_20134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (11))){
var inst_18864 = (state_18888[(8)]);
var inst_18875 = (state_18888[(2)]);
var inst_18876 = (inst_18864 + (1));
var inst_18864__$1 = inst_18876;
var state_18888__$1 = (function (){var statearr_18907 = state_18888;
(statearr_18907[(8)] = inst_18864__$1);

(statearr_18907[(10)] = inst_18875);

return statearr_18907;
})();
var statearr_18911_20135 = state_18888__$1;
(statearr_18911_20135[(2)] = null);

(statearr_18911_20135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (9))){
var state_18888__$1 = state_18888;
var statearr_18913_20136 = state_18888__$1;
(statearr_18913_20136[(2)] = null);

(statearr_18913_20136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (5))){
var state_18888__$1 = state_18888;
var statearr_18915_20138 = state_18888__$1;
(statearr_18915_20138[(2)] = null);

(statearr_18915_20138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (10))){
var inst_18880 = (state_18888[(2)]);
var state_18888__$1 = state_18888;
var statearr_18916_20139 = state_18888__$1;
(statearr_18916_20139[(2)] = inst_18880);

(statearr_18916_20139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (8))){
var inst_18870 = (state_18888[(7)]);
var state_18888__$1 = state_18888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18888__$1,(11),out,inst_18870);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_18925 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18925[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_18925[(1)] = (1));

return statearr_18925;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_18888){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_18888);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e18926){var ex__17107__auto__ = e18926;
var statearr_18927_20147 = state_18888;
(statearr_18927_20147[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_18888[(4)]))){
var statearr_18928_20149 = state_18888;
(statearr_18928_20149[(1)] = cljs.core.first((state_18888[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20150 = state_18888;
state_18888 = G__20150;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_18888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_18888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_18933 = f__17247__auto__();
(statearr_18933[(6)] = c__17246__auto___20121);

return statearr_18933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18946 = (function (f,ch,meta18940,_,fn1,meta18947){
this.f = f;
this.ch = ch;
this.meta18940 = meta18940;
this._ = _;
this.fn1 = fn1;
this.meta18947 = meta18947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18948,meta18947__$1){
var self__ = this;
var _18948__$1 = this;
return (new cljs.core.async.t_cljs$core$async18946(self__.f,self__.ch,self__.meta18940,self__._,self__.fn1,meta18947__$1));
}));

(cljs.core.async.t_cljs$core$async18946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18948){
var self__ = this;
var _18948__$1 = this;
return self__.meta18947;
}));

(cljs.core.async.t_cljs$core$async18946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18937_SHARP_){
var G__18950 = (((p1__18937_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18937_SHARP_) : self__.f.call(null,p1__18937_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18950) : f1.call(null,G__18950));
});
}));

(cljs.core.async.t_cljs$core$async18946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18940","meta18940",1136011167,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18939","cljs.core.async/t_cljs$core$async18939",-251321460,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18947","meta18947",283211930,null)], null);
}));

(cljs.core.async.t_cljs$core$async18946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18946");

(cljs.core.async.t_cljs$core$async18946.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18946.
 */
cljs.core.async.__GT_t_cljs$core$async18946 = (function cljs$core$async$__GT_t_cljs$core$async18946(f,ch,meta18940,_,fn1,meta18947){
return (new cljs.core.async.t_cljs$core$async18946(f,ch,meta18940,_,fn1,meta18947));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18939 = (function (f,ch,meta18940){
this.f = f;
this.ch = ch;
this.meta18940 = meta18940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18941,meta18940__$1){
var self__ = this;
var _18941__$1 = this;
return (new cljs.core.async.t_cljs$core$async18939(self__.f,self__.ch,meta18940__$1));
}));

(cljs.core.async.t_cljs$core$async18939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18941){
var self__ = this;
var _18941__$1 = this;
return self__.meta18940;
}));

(cljs.core.async.t_cljs$core$async18939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18946(self__.f,self__.ch,self__.meta18940,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18959 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18959) : self__.f.call(null,G__18959));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18940","meta18940",1136011167,null)], null);
}));

(cljs.core.async.t_cljs$core$async18939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18939");

(cljs.core.async.t_cljs$core$async18939.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18939.
 */
cljs.core.async.__GT_t_cljs$core$async18939 = (function cljs$core$async$__GT_t_cljs$core$async18939(f,ch,meta18940){
return (new cljs.core.async.t_cljs$core$async18939(f,ch,meta18940));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18939(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18972 = (function (f,ch,meta18973){
this.f = f;
this.ch = ch;
this.meta18973 = meta18973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18974,meta18973__$1){
var self__ = this;
var _18974__$1 = this;
return (new cljs.core.async.t_cljs$core$async18972(self__.f,self__.ch,meta18973__$1));
}));

(cljs.core.async.t_cljs$core$async18972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18974){
var self__ = this;
var _18974__$1 = this;
return self__.meta18973;
}));

(cljs.core.async.t_cljs$core$async18972.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18972.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18972.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18973","meta18973",-1863518891,null)], null);
}));

(cljs.core.async.t_cljs$core$async18972.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18972");

(cljs.core.async.t_cljs$core$async18972.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18972");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18972.
 */
cljs.core.async.__GT_t_cljs$core$async18972 = (function cljs$core$async$__GT_t_cljs$core$async18972(f,ch,meta18973){
return (new cljs.core.async.t_cljs$core$async18972(f,ch,meta18973));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18972(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18980 = (function (p,ch,meta18981){
this.p = p;
this.ch = ch;
this.meta18981 = meta18981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18982,meta18981__$1){
var self__ = this;
var _18982__$1 = this;
return (new cljs.core.async.t_cljs$core$async18980(self__.p,self__.ch,meta18981__$1));
}));

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18982){
var self__ = this;
var _18982__$1 = this;
return self__.meta18981;
}));

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18981","meta18981",-1448114367,null)], null);
}));

(cljs.core.async.t_cljs$core$async18980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18980");

(cljs.core.async.t_cljs$core$async18980.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18980.
 */
cljs.core.async.__GT_t_cljs$core$async18980 = (function cljs$core$async$__GT_t_cljs$core$async18980(p,ch,meta18981){
return (new cljs.core.async.t_cljs$core$async18980(p,ch,meta18981));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18980(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18986 = arguments.length;
switch (G__18986) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_19007){
var state_val_19008 = (state_19007[(1)]);
if((state_val_19008 === (7))){
var inst_19003 = (state_19007[(2)]);
var state_19007__$1 = state_19007;
var statearr_19009_20170 = state_19007__$1;
(statearr_19009_20170[(2)] = inst_19003);

(statearr_19009_20170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (1))){
var state_19007__$1 = state_19007;
var statearr_19010_20171 = state_19007__$1;
(statearr_19010_20171[(2)] = null);

(statearr_19010_20171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (4))){
var inst_18989 = (state_19007[(7)]);
var inst_18989__$1 = (state_19007[(2)]);
var inst_18990 = (inst_18989__$1 == null);
var state_19007__$1 = (function (){var statearr_19011 = state_19007;
(statearr_19011[(7)] = inst_18989__$1);

return statearr_19011;
})();
if(cljs.core.truth_(inst_18990)){
var statearr_19012_20172 = state_19007__$1;
(statearr_19012_20172[(1)] = (5));

} else {
var statearr_19013_20173 = state_19007__$1;
(statearr_19013_20173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (6))){
var inst_18989 = (state_19007[(7)]);
var inst_18994 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18989) : p.call(null,inst_18989));
var state_19007__$1 = state_19007;
if(cljs.core.truth_(inst_18994)){
var statearr_19014_20174 = state_19007__$1;
(statearr_19014_20174[(1)] = (8));

} else {
var statearr_19015_20175 = state_19007__$1;
(statearr_19015_20175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (3))){
var inst_19005 = (state_19007[(2)]);
var state_19007__$1 = state_19007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19007__$1,inst_19005);
} else {
if((state_val_19008 === (2))){
var state_19007__$1 = state_19007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19007__$1,(4),ch);
} else {
if((state_val_19008 === (11))){
var inst_18997 = (state_19007[(2)]);
var state_19007__$1 = state_19007;
var statearr_19016_20176 = state_19007__$1;
(statearr_19016_20176[(2)] = inst_18997);

(statearr_19016_20176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (9))){
var state_19007__$1 = state_19007;
var statearr_19017_20177 = state_19007__$1;
(statearr_19017_20177[(2)] = null);

(statearr_19017_20177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (5))){
var inst_18992 = cljs.core.async.close_BANG_(out);
var state_19007__$1 = state_19007;
var statearr_19020_20178 = state_19007__$1;
(statearr_19020_20178[(2)] = inst_18992);

(statearr_19020_20178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (10))){
var inst_19000 = (state_19007[(2)]);
var state_19007__$1 = (function (){var statearr_19021 = state_19007;
(statearr_19021[(8)] = inst_19000);

return statearr_19021;
})();
var statearr_19022_20179 = state_19007__$1;
(statearr_19022_20179[(2)] = null);

(statearr_19022_20179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19008 === (8))){
var inst_18989 = (state_19007[(7)]);
var state_19007__$1 = state_19007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19007__$1,(11),out,inst_18989);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_19023 = [null,null,null,null,null,null,null,null,null];
(statearr_19023[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_19023[(1)] = (1));

return statearr_19023;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_19007){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_19007);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e19024){var ex__17107__auto__ = e19024;
var statearr_19025_20180 = state_19007;
(statearr_19025_20180[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_19007[(4)]))){
var statearr_19026_20181 = state_19007;
(statearr_19026_20181[(1)] = cljs.core.first((state_19007[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20182 = state_19007;
state_19007 = G__20182;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_19007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_19007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19028 = f__17247__auto__();
(statearr_19028[(6)] = c__17246__auto___20169);

return statearr_19028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19031 = arguments.length;
switch (G__19031) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_19095){
var state_val_19096 = (state_19095[(1)]);
if((state_val_19096 === (7))){
var inst_19091 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19097_20185 = state_19095__$1;
(statearr_19097_20185[(2)] = inst_19091);

(statearr_19097_20185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (20))){
var inst_19061 = (state_19095[(7)]);
var inst_19072 = (state_19095[(2)]);
var inst_19073 = cljs.core.next(inst_19061);
var inst_19047 = inst_19073;
var inst_19048 = null;
var inst_19049 = (0);
var inst_19050 = (0);
var state_19095__$1 = (function (){var statearr_19098 = state_19095;
(statearr_19098[(8)] = inst_19047);

(statearr_19098[(9)] = inst_19050);

(statearr_19098[(10)] = inst_19072);

(statearr_19098[(11)] = inst_19048);

(statearr_19098[(12)] = inst_19049);

return statearr_19098;
})();
var statearr_19099_20186 = state_19095__$1;
(statearr_19099_20186[(2)] = null);

(statearr_19099_20186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (1))){
var state_19095__$1 = state_19095;
var statearr_19100_20194 = state_19095__$1;
(statearr_19100_20194[(2)] = null);

(statearr_19100_20194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (4))){
var inst_19036 = (state_19095[(13)]);
var inst_19036__$1 = (state_19095[(2)]);
var inst_19037 = (inst_19036__$1 == null);
var state_19095__$1 = (function (){var statearr_19101 = state_19095;
(statearr_19101[(13)] = inst_19036__$1);

return statearr_19101;
})();
if(cljs.core.truth_(inst_19037)){
var statearr_19102_20195 = state_19095__$1;
(statearr_19102_20195[(1)] = (5));

} else {
var statearr_19103_20196 = state_19095__$1;
(statearr_19103_20196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (15))){
var state_19095__$1 = state_19095;
var statearr_19107_20197 = state_19095__$1;
(statearr_19107_20197[(2)] = null);

(statearr_19107_20197[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (21))){
var state_19095__$1 = state_19095;
var statearr_19109_20198 = state_19095__$1;
(statearr_19109_20198[(2)] = null);

(statearr_19109_20198[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (13))){
var inst_19047 = (state_19095[(8)]);
var inst_19050 = (state_19095[(9)]);
var inst_19048 = (state_19095[(11)]);
var inst_19049 = (state_19095[(12)]);
var inst_19057 = (state_19095[(2)]);
var inst_19058 = (inst_19050 + (1));
var tmp19104 = inst_19047;
var tmp19105 = inst_19048;
var tmp19106 = inst_19049;
var inst_19047__$1 = tmp19104;
var inst_19048__$1 = tmp19105;
var inst_19049__$1 = tmp19106;
var inst_19050__$1 = inst_19058;
var state_19095__$1 = (function (){var statearr_19111 = state_19095;
(statearr_19111[(8)] = inst_19047__$1);

(statearr_19111[(14)] = inst_19057);

(statearr_19111[(9)] = inst_19050__$1);

(statearr_19111[(11)] = inst_19048__$1);

(statearr_19111[(12)] = inst_19049__$1);

return statearr_19111;
})();
var statearr_19112_20200 = state_19095__$1;
(statearr_19112_20200[(2)] = null);

(statearr_19112_20200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (22))){
var state_19095__$1 = state_19095;
var statearr_19113_20201 = state_19095__$1;
(statearr_19113_20201[(2)] = null);

(statearr_19113_20201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (6))){
var inst_19036 = (state_19095[(13)]);
var inst_19045 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19036) : f.call(null,inst_19036));
var inst_19046 = cljs.core.seq(inst_19045);
var inst_19047 = inst_19046;
var inst_19048 = null;
var inst_19049 = (0);
var inst_19050 = (0);
var state_19095__$1 = (function (){var statearr_19114 = state_19095;
(statearr_19114[(8)] = inst_19047);

(statearr_19114[(9)] = inst_19050);

(statearr_19114[(11)] = inst_19048);

(statearr_19114[(12)] = inst_19049);

return statearr_19114;
})();
var statearr_19115_20202 = state_19095__$1;
(statearr_19115_20202[(2)] = null);

(statearr_19115_20202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (17))){
var inst_19061 = (state_19095[(7)]);
var inst_19065 = cljs.core.chunk_first(inst_19061);
var inst_19066 = cljs.core.chunk_rest(inst_19061);
var inst_19067 = cljs.core.count(inst_19065);
var inst_19047 = inst_19066;
var inst_19048 = inst_19065;
var inst_19049 = inst_19067;
var inst_19050 = (0);
var state_19095__$1 = (function (){var statearr_19120 = state_19095;
(statearr_19120[(8)] = inst_19047);

(statearr_19120[(9)] = inst_19050);

(statearr_19120[(11)] = inst_19048);

(statearr_19120[(12)] = inst_19049);

return statearr_19120;
})();
var statearr_19121_20209 = state_19095__$1;
(statearr_19121_20209[(2)] = null);

(statearr_19121_20209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (3))){
var inst_19093 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19095__$1,inst_19093);
} else {
if((state_val_19096 === (12))){
var inst_19081 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19123_20210 = state_19095__$1;
(statearr_19123_20210[(2)] = inst_19081);

(statearr_19123_20210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (2))){
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19095__$1,(4),in$);
} else {
if((state_val_19096 === (23))){
var inst_19089 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19126_20215 = state_19095__$1;
(statearr_19126_20215[(2)] = inst_19089);

(statearr_19126_20215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (19))){
var inst_19076 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19129_20216 = state_19095__$1;
(statearr_19129_20216[(2)] = inst_19076);

(statearr_19129_20216[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (11))){
var inst_19047 = (state_19095[(8)]);
var inst_19061 = (state_19095[(7)]);
var inst_19061__$1 = cljs.core.seq(inst_19047);
var state_19095__$1 = (function (){var statearr_19130 = state_19095;
(statearr_19130[(7)] = inst_19061__$1);

return statearr_19130;
})();
if(inst_19061__$1){
var statearr_19134_20217 = state_19095__$1;
(statearr_19134_20217[(1)] = (14));

} else {
var statearr_19135_20218 = state_19095__$1;
(statearr_19135_20218[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (9))){
var inst_19083 = (state_19095[(2)]);
var inst_19084 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19095__$1 = (function (){var statearr_19136 = state_19095;
(statearr_19136[(15)] = inst_19083);

return statearr_19136;
})();
if(cljs.core.truth_(inst_19084)){
var statearr_19137_20219 = state_19095__$1;
(statearr_19137_20219[(1)] = (21));

} else {
var statearr_19138_20220 = state_19095__$1;
(statearr_19138_20220[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (5))){
var inst_19039 = cljs.core.async.close_BANG_(out);
var state_19095__$1 = state_19095;
var statearr_19139_20225 = state_19095__$1;
(statearr_19139_20225[(2)] = inst_19039);

(statearr_19139_20225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (14))){
var inst_19061 = (state_19095[(7)]);
var inst_19063 = cljs.core.chunked_seq_QMARK_(inst_19061);
var state_19095__$1 = state_19095;
if(inst_19063){
var statearr_19140_20226 = state_19095__$1;
(statearr_19140_20226[(1)] = (17));

} else {
var statearr_19141_20227 = state_19095__$1;
(statearr_19141_20227[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (16))){
var inst_19079 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19142_20228 = state_19095__$1;
(statearr_19142_20228[(2)] = inst_19079);

(statearr_19142_20228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (10))){
var inst_19050 = (state_19095[(9)]);
var inst_19048 = (state_19095[(11)]);
var inst_19055 = cljs.core._nth(inst_19048,inst_19050);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19095__$1,(13),out,inst_19055);
} else {
if((state_val_19096 === (18))){
var inst_19061 = (state_19095[(7)]);
var inst_19070 = cljs.core.first(inst_19061);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19095__$1,(20),out,inst_19070);
} else {
if((state_val_19096 === (8))){
var inst_19050 = (state_19095[(9)]);
var inst_19049 = (state_19095[(12)]);
var inst_19052 = (inst_19050 < inst_19049);
var inst_19053 = inst_19052;
var state_19095__$1 = state_19095;
if(cljs.core.truth_(inst_19053)){
var statearr_19156_20229 = state_19095__$1;
(statearr_19156_20229[(1)] = (10));

} else {
var statearr_19157_20230 = state_19095__$1;
(statearr_19157_20230[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17104__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17104__auto____0 = (function (){
var statearr_19164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19164[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17104__auto__);

(statearr_19164[(1)] = (1));

return statearr_19164;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17104__auto____1 = (function (state_19095){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_19095);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e19165){var ex__17107__auto__ = e19165;
var statearr_19166_20231 = state_19095;
(statearr_19166_20231[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_19095[(4)]))){
var statearr_19167_20232 = state_19095;
(statearr_19167_20232[(1)] = cljs.core.first((state_19095[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20239 = state_19095;
state_19095 = G__20239;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17104__auto__ = function(state_19095){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17104__auto____1.call(this,state_19095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17104__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17104__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19172 = f__17247__auto__();
(statearr_19172[(6)] = c__17246__auto__);

return statearr_19172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));

return c__17246__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19180 = arguments.length;
switch (G__19180) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19185 = arguments.length;
switch (G__19185) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19191 = arguments.length;
switch (G__19191) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_19215){
var state_val_19216 = (state_19215[(1)]);
if((state_val_19216 === (7))){
var inst_19210 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19221_20254 = state_19215__$1;
(statearr_19221_20254[(2)] = inst_19210);

(statearr_19221_20254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (1))){
var inst_19192 = null;
var state_19215__$1 = (function (){var statearr_19222 = state_19215;
(statearr_19222[(7)] = inst_19192);

return statearr_19222;
})();
var statearr_19223_20260 = state_19215__$1;
(statearr_19223_20260[(2)] = null);

(statearr_19223_20260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (4))){
var inst_19195 = (state_19215[(8)]);
var inst_19195__$1 = (state_19215[(2)]);
var inst_19196 = (inst_19195__$1 == null);
var inst_19197 = cljs.core.not(inst_19196);
var state_19215__$1 = (function (){var statearr_19226 = state_19215;
(statearr_19226[(8)] = inst_19195__$1);

return statearr_19226;
})();
if(inst_19197){
var statearr_19227_20261 = state_19215__$1;
(statearr_19227_20261[(1)] = (5));

} else {
var statearr_19228_20262 = state_19215__$1;
(statearr_19228_20262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (6))){
var state_19215__$1 = state_19215;
var statearr_19230_20264 = state_19215__$1;
(statearr_19230_20264[(2)] = null);

(statearr_19230_20264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (3))){
var inst_19212 = (state_19215[(2)]);
var inst_19213 = cljs.core.async.close_BANG_(out);
var state_19215__$1 = (function (){var statearr_19231 = state_19215;
(statearr_19231[(9)] = inst_19212);

return statearr_19231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19215__$1,inst_19213);
} else {
if((state_val_19216 === (2))){
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19215__$1,(4),ch);
} else {
if((state_val_19216 === (11))){
var inst_19195 = (state_19215[(8)]);
var inst_19204 = (state_19215[(2)]);
var inst_19192 = inst_19195;
var state_19215__$1 = (function (){var statearr_19233 = state_19215;
(statearr_19233[(10)] = inst_19204);

(statearr_19233[(7)] = inst_19192);

return statearr_19233;
})();
var statearr_19234_20267 = state_19215__$1;
(statearr_19234_20267[(2)] = null);

(statearr_19234_20267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (9))){
var inst_19195 = (state_19215[(8)]);
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19215__$1,(11),out,inst_19195);
} else {
if((state_val_19216 === (5))){
var inst_19195 = (state_19215[(8)]);
var inst_19192 = (state_19215[(7)]);
var inst_19199 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19195,inst_19192);
var state_19215__$1 = state_19215;
if(inst_19199){
var statearr_19236_20268 = state_19215__$1;
(statearr_19236_20268[(1)] = (8));

} else {
var statearr_19237_20269 = state_19215__$1;
(statearr_19237_20269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (10))){
var inst_19207 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19238_20270 = state_19215__$1;
(statearr_19238_20270[(2)] = inst_19207);

(statearr_19238_20270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (8))){
var inst_19192 = (state_19215[(7)]);
var tmp19235 = inst_19192;
var inst_19192__$1 = tmp19235;
var state_19215__$1 = (function (){var statearr_19239 = state_19215;
(statearr_19239[(7)] = inst_19192__$1);

return statearr_19239;
})();
var statearr_19240_20271 = state_19215__$1;
(statearr_19240_20271[(2)] = null);

(statearr_19240_20271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_19241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19241[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_19241[(1)] = (1));

return statearr_19241;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_19215){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_19215);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e19242){var ex__17107__auto__ = e19242;
var statearr_19243_20272 = state_19215;
(statearr_19243_20272[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_19215[(4)]))){
var statearr_19244_20273 = state_19215;
(statearr_19244_20273[(1)] = cljs.core.first((state_19215[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20274 = state_19215;
state_19215 = G__20274;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_19215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_19215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19245 = f__17247__auto__();
(statearr_19245[(6)] = c__17246__auto___20253);

return statearr_19245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19249 = arguments.length;
switch (G__19249) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_19292){
var state_val_19293 = (state_19292[(1)]);
if((state_val_19293 === (7))){
var inst_19288 = (state_19292[(2)]);
var state_19292__$1 = state_19292;
var statearr_19294_20288 = state_19292__$1;
(statearr_19294_20288[(2)] = inst_19288);

(statearr_19294_20288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19293 === (1))){
var inst_19252 = (new Array(n));
var inst_19256 = inst_19252;
var inst_19257 = (0);
var state_19292__$1 = (function (){var statearr_19295 = state_19292;
(statearr_19295[(7)] = inst_19256);

(statearr_19295[(8)] = inst_19257);

return statearr_19295;
})();
var statearr_19296_20290 = state_19292__$1;
(statearr_19296_20290[(2)] = null);

(statearr_19296_20290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19293 === (4))){
var inst_19260 = (state_19292[(9)]);
var inst_19260__$1 = (state_19292[(2)]);
var inst_19261 = (inst_19260__$1 == null);
var inst_19262 = cljs.core.not(inst_19261);
var state_19292__$1 = (function (){var statearr_19297 = state_19292;
(statearr_19297[(9)] = inst_19260__$1);

return statearr_19297;
})();
if(inst_19262){
var statearr_19298_20291 = state_19292__$1;
(statearr_19298_20291[(1)] = (5));

} else {
var statearr_19299_20292 = state_19292__$1;
(statearr_19299_20292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19293 === (15))){
var inst_19282 = (state_19292[(2)]);
var state_19292__$1 = state_19292;
var statearr_19300_20298 = state_19292__$1;
(statearr_19300_20298[(2)] = inst_19282);

(statearr_19300_20298[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19293 === (13))){
var state_19292__$1 = state_19292;
var statearr_19301_20299 = state_19292__$1;
(statearr_19301_20299[(2)] = null);

(statearr_19301_20299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19293 === (6))){
var inst_19257 = (state_19292[(8)]);
var inst_19278 = (inst_19257 > (0));
var state_19292__$1 = state_19292;
if(cljs.core.truth_(inst_19278)){
var statearr_19302_20300 = state_19292__$1;
(statearr_19302_20300[(1)] = (12));

} else {
var statearr_19303_20301 = state_19292__$1;
(statearr_19303_20301[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19293 === (3))){
var inst_19290 = (state_19292[(2)]);
var state_19292__$1 = state_19292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19292__$1,inst_19290);
} else {
if((state_val_19293 === (12))){
var inst_19256 = (state_19292[(7)]);
var inst_19280 = cljs.core.vec(inst_19256);
var state_19292__$1 = state_19292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19292__$1,(15),out,inst_19280);
} else {
if((state_val_19293 === (2))){
var state_19292__$1 = state_19292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19292__$1,(4),ch);
} else {
if((state_val_19293 === (11))){
var inst_19272 = (state_19292[(2)]);
var inst_19273 = (new Array(n));
var inst_19256 = inst_19273;
var inst_19257 = (0);
var state_19292__$1 = (function (){var statearr_19304 = state_19292;
(statearr_19304[(7)] = inst_19256);

(statearr_19304[(8)] = inst_19257);

(statearr_19304[(10)] = inst_19272);

return statearr_19304;
})();
var statearr_19305_20302 = state_19292__$1;
(statearr_19305_20302[(2)] = null);

(statearr_19305_20302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19293 === (9))){
var inst_19256 = (state_19292[(7)]);
var inst_19270 = cljs.core.vec(inst_19256);
var state_19292__$1 = state_19292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19292__$1,(11),out,inst_19270);
} else {
if((state_val_19293 === (5))){
var inst_19256 = (state_19292[(7)]);
var inst_19257 = (state_19292[(8)]);
var inst_19260 = (state_19292[(9)]);
var inst_19265 = (state_19292[(11)]);
var inst_19264 = (inst_19256[inst_19257] = inst_19260);
var inst_19265__$1 = (inst_19257 + (1));
var inst_19266 = (inst_19265__$1 < n);
var state_19292__$1 = (function (){var statearr_19310 = state_19292;
(statearr_19310[(12)] = inst_19264);

(statearr_19310[(11)] = inst_19265__$1);

return statearr_19310;
})();
if(cljs.core.truth_(inst_19266)){
var statearr_19311_20303 = state_19292__$1;
(statearr_19311_20303[(1)] = (8));

} else {
var statearr_19312_20304 = state_19292__$1;
(statearr_19312_20304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19293 === (14))){
var inst_19285 = (state_19292[(2)]);
var inst_19286 = cljs.core.async.close_BANG_(out);
var state_19292__$1 = (function (){var statearr_19315 = state_19292;
(statearr_19315[(13)] = inst_19285);

return statearr_19315;
})();
var statearr_19316_20309 = state_19292__$1;
(statearr_19316_20309[(2)] = inst_19286);

(statearr_19316_20309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19293 === (10))){
var inst_19276 = (state_19292[(2)]);
var state_19292__$1 = state_19292;
var statearr_19317_20310 = state_19292__$1;
(statearr_19317_20310[(2)] = inst_19276);

(statearr_19317_20310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19293 === (8))){
var inst_19256 = (state_19292[(7)]);
var inst_19265 = (state_19292[(11)]);
var tmp19314 = inst_19256;
var inst_19256__$1 = tmp19314;
var inst_19257 = inst_19265;
var state_19292__$1 = (function (){var statearr_19319 = state_19292;
(statearr_19319[(7)] = inst_19256__$1);

(statearr_19319[(8)] = inst_19257);

return statearr_19319;
})();
var statearr_19320_20311 = state_19292__$1;
(statearr_19320_20311[(2)] = null);

(statearr_19320_20311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_19322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19322[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_19322[(1)] = (1));

return statearr_19322;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_19292){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_19292);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e19323){var ex__17107__auto__ = e19323;
var statearr_19324_20312 = state_19292;
(statearr_19324_20312[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_19292[(4)]))){
var statearr_19325_20313 = state_19292;
(statearr_19325_20313[(1)] = cljs.core.first((state_19292[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20318 = state_19292;
state_19292 = G__20318;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_19292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_19292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19326 = f__17247__auto__();
(statearr_19326[(6)] = c__17246__auto___20287);

return statearr_19326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19333 = arguments.length;
switch (G__19333) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17246__auto___20329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17247__auto__ = (function (){var switch__17103__auto__ = (function (state_19378){
var state_val_19379 = (state_19378[(1)]);
if((state_val_19379 === (7))){
var inst_19374 = (state_19378[(2)]);
var state_19378__$1 = state_19378;
var statearr_19380_20334 = state_19378__$1;
(statearr_19380_20334[(2)] = inst_19374);

(statearr_19380_20334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (1))){
var inst_19334 = [];
var inst_19335 = inst_19334;
var inst_19336 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19378__$1 = (function (){var statearr_19381 = state_19378;
(statearr_19381[(7)] = inst_19336);

(statearr_19381[(8)] = inst_19335);

return statearr_19381;
})();
var statearr_19382_20338 = state_19378__$1;
(statearr_19382_20338[(2)] = null);

(statearr_19382_20338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (4))){
var inst_19339 = (state_19378[(9)]);
var inst_19339__$1 = (state_19378[(2)]);
var inst_19340 = (inst_19339__$1 == null);
var inst_19341 = cljs.core.not(inst_19340);
var state_19378__$1 = (function (){var statearr_19383 = state_19378;
(statearr_19383[(9)] = inst_19339__$1);

return statearr_19383;
})();
if(inst_19341){
var statearr_19384_20339 = state_19378__$1;
(statearr_19384_20339[(1)] = (5));

} else {
var statearr_19385_20340 = state_19378__$1;
(statearr_19385_20340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (15))){
var inst_19335 = (state_19378[(8)]);
var inst_19366 = cljs.core.vec(inst_19335);
var state_19378__$1 = state_19378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19378__$1,(18),out,inst_19366);
} else {
if((state_val_19379 === (13))){
var inst_19361 = (state_19378[(2)]);
var state_19378__$1 = state_19378;
var statearr_19390_20344 = state_19378__$1;
(statearr_19390_20344[(2)] = inst_19361);

(statearr_19390_20344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (6))){
var inst_19335 = (state_19378[(8)]);
var inst_19363 = inst_19335.length;
var inst_19364 = (inst_19363 > (0));
var state_19378__$1 = state_19378;
if(cljs.core.truth_(inst_19364)){
var statearr_19391_20345 = state_19378__$1;
(statearr_19391_20345[(1)] = (15));

} else {
var statearr_19392_20346 = state_19378__$1;
(statearr_19392_20346[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (17))){
var inst_19371 = (state_19378[(2)]);
var inst_19372 = cljs.core.async.close_BANG_(out);
var state_19378__$1 = (function (){var statearr_19393 = state_19378;
(statearr_19393[(10)] = inst_19371);

return statearr_19393;
})();
var statearr_19394_20350 = state_19378__$1;
(statearr_19394_20350[(2)] = inst_19372);

(statearr_19394_20350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (3))){
var inst_19376 = (state_19378[(2)]);
var state_19378__$1 = state_19378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19378__$1,inst_19376);
} else {
if((state_val_19379 === (12))){
var inst_19335 = (state_19378[(8)]);
var inst_19354 = cljs.core.vec(inst_19335);
var state_19378__$1 = state_19378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19378__$1,(14),out,inst_19354);
} else {
if((state_val_19379 === (2))){
var state_19378__$1 = state_19378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19378__$1,(4),ch);
} else {
if((state_val_19379 === (11))){
var inst_19343 = (state_19378[(11)]);
var inst_19335 = (state_19378[(8)]);
var inst_19339 = (state_19378[(9)]);
var inst_19351 = inst_19335.push(inst_19339);
var tmp19399 = inst_19335;
var inst_19335__$1 = tmp19399;
var inst_19336 = inst_19343;
var state_19378__$1 = (function (){var statearr_19400 = state_19378;
(statearr_19400[(7)] = inst_19336);

(statearr_19400[(12)] = inst_19351);

(statearr_19400[(8)] = inst_19335__$1);

return statearr_19400;
})();
var statearr_19401_20351 = state_19378__$1;
(statearr_19401_20351[(2)] = null);

(statearr_19401_20351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (9))){
var inst_19336 = (state_19378[(7)]);
var inst_19347 = cljs.core.keyword_identical_QMARK_(inst_19336,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19378__$1 = state_19378;
var statearr_19402_20358 = state_19378__$1;
(statearr_19402_20358[(2)] = inst_19347);

(statearr_19402_20358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (5))){
var inst_19336 = (state_19378[(7)]);
var inst_19344 = (state_19378[(13)]);
var inst_19343 = (state_19378[(11)]);
var inst_19339 = (state_19378[(9)]);
var inst_19343__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19339) : f.call(null,inst_19339));
var inst_19344__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19343__$1,inst_19336);
var state_19378__$1 = (function (){var statearr_19403 = state_19378;
(statearr_19403[(13)] = inst_19344__$1);

(statearr_19403[(11)] = inst_19343__$1);

return statearr_19403;
})();
if(inst_19344__$1){
var statearr_19404_20359 = state_19378__$1;
(statearr_19404_20359[(1)] = (8));

} else {
var statearr_19405_20360 = state_19378__$1;
(statearr_19405_20360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (14))){
var inst_19343 = (state_19378[(11)]);
var inst_19339 = (state_19378[(9)]);
var inst_19356 = (state_19378[(2)]);
var inst_19357 = [];
var inst_19358 = inst_19357.push(inst_19339);
var inst_19335 = inst_19357;
var inst_19336 = inst_19343;
var state_19378__$1 = (function (){var statearr_19406 = state_19378;
(statearr_19406[(7)] = inst_19336);

(statearr_19406[(14)] = inst_19356);

(statearr_19406[(15)] = inst_19358);

(statearr_19406[(8)] = inst_19335);

return statearr_19406;
})();
var statearr_19407_20361 = state_19378__$1;
(statearr_19407_20361[(2)] = null);

(statearr_19407_20361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (16))){
var state_19378__$1 = state_19378;
var statearr_19408_20362 = state_19378__$1;
(statearr_19408_20362[(2)] = null);

(statearr_19408_20362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (10))){
var inst_19349 = (state_19378[(2)]);
var state_19378__$1 = state_19378;
if(cljs.core.truth_(inst_19349)){
var statearr_19409_20363 = state_19378__$1;
(statearr_19409_20363[(1)] = (11));

} else {
var statearr_19410_20364 = state_19378__$1;
(statearr_19410_20364[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (18))){
var inst_19368 = (state_19378[(2)]);
var state_19378__$1 = state_19378;
var statearr_19411_20365 = state_19378__$1;
(statearr_19411_20365[(2)] = inst_19368);

(statearr_19411_20365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (8))){
var inst_19344 = (state_19378[(13)]);
var state_19378__$1 = state_19378;
var statearr_19412_20366 = state_19378__$1;
(statearr_19412_20366[(2)] = inst_19344);

(statearr_19412_20366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17104__auto__ = null;
var cljs$core$async$state_machine__17104__auto____0 = (function (){
var statearr_19414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19414[(0)] = cljs$core$async$state_machine__17104__auto__);

(statearr_19414[(1)] = (1));

return statearr_19414;
});
var cljs$core$async$state_machine__17104__auto____1 = (function (state_19378){
while(true){
var ret_value__17105__auto__ = (function (){try{while(true){
var result__17106__auto__ = switch__17103__auto__(state_19378);
if(cljs.core.keyword_identical_QMARK_(result__17106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17106__auto__;
}
break;
}
}catch (e19416){var ex__17107__auto__ = e19416;
var statearr_19417_20368 = state_19378;
(statearr_19417_20368[(2)] = ex__17107__auto__);


if(cljs.core.seq((state_19378[(4)]))){
var statearr_19418_20369 = state_19378;
(statearr_19418_20369[(1)] = cljs.core.first((state_19378[(4)])));

} else {
throw ex__17107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20370 = state_19378;
state_19378 = G__20370;
continue;
} else {
return ret_value__17105__auto__;
}
break;
}
});
cljs$core$async$state_machine__17104__auto__ = function(state_19378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17104__auto____1.call(this,state_19378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17104__auto____0;
cljs$core$async$state_machine__17104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17104__auto____1;
return cljs$core$async$state_machine__17104__auto__;
})()
})();
var state__17248__auto__ = (function (){var statearr_19419 = f__17247__auto__();
(statearr_19419[(6)] = c__17246__auto___20329);

return statearr_19419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17248__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
