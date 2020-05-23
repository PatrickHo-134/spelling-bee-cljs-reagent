// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10789 = arguments.length;
switch (G__10789) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10790 = (function (f,blockable,meta10791){
this.f = f;
this.blockable = blockable;
this.meta10791 = meta10791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10792,meta10791__$1){
var self__ = this;
var _10792__$1 = this;
return (new cljs.core.async.t_cljs$core$async10790(self__.f,self__.blockable,meta10791__$1));
});

cljs.core.async.t_cljs$core$async10790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10792){
var self__ = this;
var _10792__$1 = this;
return self__.meta10791;
});

cljs.core.async.t_cljs$core$async10790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10791","meta10791",377513837,null)], null);
});

cljs.core.async.t_cljs$core$async10790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10790";

cljs.core.async.t_cljs$core$async10790.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async10790");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10790.
 */
cljs.core.async.__GT_t_cljs$core$async10790 = (function cljs$core$async$__GT_t_cljs$core$async10790(f__$1,blockable__$1,meta10791){
return (new cljs.core.async.t_cljs$core$async10790(f__$1,blockable__$1,meta10791));
});

}

return (new cljs.core.async.t_cljs$core$async10790(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__10796 = arguments.length;
switch (G__10796) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__10799 = arguments.length;
switch (G__10799) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__10802 = arguments.length;
switch (G__10802) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10804 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10804);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10804,ret){
return (function (){
return fn1.call(null,val_10804);
});})(val_10804,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__10806 = arguments.length;
switch (G__10806) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___10808 = n;
var x_10809 = (0);
while(true){
if((x_10809 < n__4607__auto___10808)){
(a[x_10809] = (0));

var G__10810 = (x_10809 + (1));
x_10809 = G__10810;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10811 = (i + (1));
i = G__10811;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10812 = (function (flag,meta10813){
this.flag = flag;
this.meta10813 = meta10813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10814,meta10813__$1){
var self__ = this;
var _10814__$1 = this;
return (new cljs.core.async.t_cljs$core$async10812(self__.flag,meta10813__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10814){
var self__ = this;
var _10814__$1 = this;
return self__.meta10813;
});})(flag))
;

cljs.core.async.t_cljs$core$async10812.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10812.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10812.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10813","meta10813",556646206,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10812";

cljs.core.async.t_cljs$core$async10812.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async10812");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10812.
 */
cljs.core.async.__GT_t_cljs$core$async10812 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10812(flag__$1,meta10813){
return (new cljs.core.async.t_cljs$core$async10812(flag__$1,meta10813));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10812(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10815 = (function (flag,cb,meta10816){
this.flag = flag;
this.cb = cb;
this.meta10816 = meta10816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10817,meta10816__$1){
var self__ = this;
var _10817__$1 = this;
return (new cljs.core.async.t_cljs$core$async10815(self__.flag,self__.cb,meta10816__$1));
});

cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10817){
var self__ = this;
var _10817__$1 = this;
return self__.meta10816;
});

cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10816","meta10816",2076296862,null)], null);
});

cljs.core.async.t_cljs$core$async10815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10815";

cljs.core.async.t_cljs$core$async10815.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async10815");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10815.
 */
cljs.core.async.__GT_t_cljs$core$async10815 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10815(flag__$1,cb__$1,meta10816){
return (new cljs.core.async.t_cljs$core$async10815(flag__$1,cb__$1,meta10816));
});

}

return (new cljs.core.async.t_cljs$core$async10815(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10818_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10818_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10819_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10819_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10820 = (i + (1));
i = G__10820;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4736__auto__ = [];
var len__4730__auto___10826 = arguments.length;
var i__4731__auto___10827 = (0);
while(true){
if((i__4731__auto___10827 < len__4730__auto___10826)){
args__4736__auto__.push((arguments[i__4731__auto___10827]));

var G__10828 = (i__4731__auto___10827 + (1));
i__4731__auto___10827 = G__10828;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10823){
var map__10824 = p__10823;
var map__10824__$1 = (((((!((map__10824 == null))))?(((((map__10824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10824):map__10824);
var opts = map__10824__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10821){
var G__10822 = cljs.core.first.call(null,seq10821);
var seq10821__$1 = cljs.core.next.call(null,seq10821);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10822,seq10821__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__10830 = arguments.length;
switch (G__10830) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10729__auto___10876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___10876){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___10876){
return (function (state_10854){
var state_val_10855 = (state_10854[(1)]);
if((state_val_10855 === (7))){
var inst_10850 = (state_10854[(2)]);
var state_10854__$1 = state_10854;
var statearr_10856_10877 = state_10854__$1;
(statearr_10856_10877[(2)] = inst_10850);

(statearr_10856_10877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (1))){
var state_10854__$1 = state_10854;
var statearr_10857_10878 = state_10854__$1;
(statearr_10857_10878[(2)] = null);

(statearr_10857_10878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (4))){
var inst_10833 = (state_10854[(7)]);
var inst_10833__$1 = (state_10854[(2)]);
var inst_10834 = (inst_10833__$1 == null);
var state_10854__$1 = (function (){var statearr_10858 = state_10854;
(statearr_10858[(7)] = inst_10833__$1);

return statearr_10858;
})();
if(cljs.core.truth_(inst_10834)){
var statearr_10859_10879 = state_10854__$1;
(statearr_10859_10879[(1)] = (5));

} else {
var statearr_10860_10880 = state_10854__$1;
(statearr_10860_10880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (13))){
var state_10854__$1 = state_10854;
var statearr_10861_10881 = state_10854__$1;
(statearr_10861_10881[(2)] = null);

(statearr_10861_10881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (6))){
var inst_10833 = (state_10854[(7)]);
var state_10854__$1 = state_10854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10854__$1,(11),to,inst_10833);
} else {
if((state_val_10855 === (3))){
var inst_10852 = (state_10854[(2)]);
var state_10854__$1 = state_10854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10854__$1,inst_10852);
} else {
if((state_val_10855 === (12))){
var state_10854__$1 = state_10854;
var statearr_10862_10882 = state_10854__$1;
(statearr_10862_10882[(2)] = null);

(statearr_10862_10882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (2))){
var state_10854__$1 = state_10854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10854__$1,(4),from);
} else {
if((state_val_10855 === (11))){
var inst_10843 = (state_10854[(2)]);
var state_10854__$1 = state_10854;
if(cljs.core.truth_(inst_10843)){
var statearr_10863_10883 = state_10854__$1;
(statearr_10863_10883[(1)] = (12));

} else {
var statearr_10864_10884 = state_10854__$1;
(statearr_10864_10884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (9))){
var state_10854__$1 = state_10854;
var statearr_10865_10885 = state_10854__$1;
(statearr_10865_10885[(2)] = null);

(statearr_10865_10885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (5))){
var state_10854__$1 = state_10854;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10866_10886 = state_10854__$1;
(statearr_10866_10886[(1)] = (8));

} else {
var statearr_10867_10887 = state_10854__$1;
(statearr_10867_10887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (14))){
var inst_10848 = (state_10854[(2)]);
var state_10854__$1 = state_10854;
var statearr_10868_10888 = state_10854__$1;
(statearr_10868_10888[(2)] = inst_10848);

(statearr_10868_10888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (10))){
var inst_10840 = (state_10854[(2)]);
var state_10854__$1 = state_10854;
var statearr_10869_10889 = state_10854__$1;
(statearr_10869_10889[(2)] = inst_10840);

(statearr_10869_10889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10855 === (8))){
var inst_10837 = cljs.core.async.close_BANG_.call(null,to);
var state_10854__$1 = state_10854;
var statearr_10870_10890 = state_10854__$1;
(statearr_10870_10890[(2)] = inst_10837);

(statearr_10870_10890[(1)] = (10));


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
});})(c__10729__auto___10876))
;
return ((function (switch__10634__auto__,c__10729__auto___10876){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_10871 = [null,null,null,null,null,null,null,null];
(statearr_10871[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_10871[(1)] = (1));

return statearr_10871;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_10854){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_10854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e10872){if((e10872 instanceof Object)){
var ex__10638__auto__ = e10872;
var statearr_10873_10891 = state_10854;
(statearr_10873_10891[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10892 = state_10854;
state_10854 = G__10892;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_10854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_10854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___10876))
})();
var state__10731__auto__ = (function (){var statearr_10874 = f__10730__auto__.call(null);
(statearr_10874[(6)] = c__10729__auto___10876);

return statearr_10874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___10876))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10893){
var vec__10894 = p__10893;
var v = cljs.core.nth.call(null,vec__10894,(0),null);
var p = cljs.core.nth.call(null,vec__10894,(1),null);
var job = vec__10894;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10729__auto___11065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___11065,res,vec__10894,v,p,job,jobs,results){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___11065,res,vec__10894,v,p,job,jobs,results){
return (function (state_10901){
var state_val_10902 = (state_10901[(1)]);
if((state_val_10902 === (1))){
var state_10901__$1 = state_10901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10901__$1,(2),res,v);
} else {
if((state_val_10902 === (2))){
var inst_10898 = (state_10901[(2)]);
var inst_10899 = cljs.core.async.close_BANG_.call(null,res);
var state_10901__$1 = (function (){var statearr_10903 = state_10901;
(statearr_10903[(7)] = inst_10898);

return statearr_10903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10901__$1,inst_10899);
} else {
return null;
}
}
});})(c__10729__auto___11065,res,vec__10894,v,p,job,jobs,results))
;
return ((function (switch__10634__auto__,c__10729__auto___11065,res,vec__10894,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0 = (function (){
var statearr_10904 = [null,null,null,null,null,null,null,null];
(statearr_10904[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__);

(statearr_10904[(1)] = (1));

return statearr_10904;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1 = (function (state_10901){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_10901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e10905){if((e10905 instanceof Object)){
var ex__10638__auto__ = e10905;
var statearr_10906_11066 = state_10901;
(statearr_10906_11066[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11067 = state_10901;
state_10901 = G__11067;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__ = function(state_10901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1.call(this,state_10901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___11065,res,vec__10894,v,p,job,jobs,results))
})();
var state__10731__auto__ = (function (){var statearr_10907 = f__10730__auto__.call(null);
(statearr_10907[(6)] = c__10729__auto___11065);

return statearr_10907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___11065,res,vec__10894,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10908){
var vec__10909 = p__10908;
var v = cljs.core.nth.call(null,vec__10909,(0),null);
var p = cljs.core.nth.call(null,vec__10909,(1),null);
var job = vec__10909;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___11068 = n;
var __11069 = (0);
while(true){
if((__11069 < n__4607__auto___11068)){
var G__10912_11070 = type;
var G__10912_11071__$1 = (((G__10912_11070 instanceof cljs.core.Keyword))?G__10912_11070.fqn:null);
switch (G__10912_11071__$1) {
case "compute":
var c__10729__auto___11073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11069,c__10729__auto___11073,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (__11069,c__10729__auto___11073,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async){
return (function (state_10925){
var state_val_10926 = (state_10925[(1)]);
if((state_val_10926 === (1))){
var state_10925__$1 = state_10925;
var statearr_10927_11074 = state_10925__$1;
(statearr_10927_11074[(2)] = null);

(statearr_10927_11074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10926 === (2))){
var state_10925__$1 = state_10925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10925__$1,(4),jobs);
} else {
if((state_val_10926 === (3))){
var inst_10923 = (state_10925[(2)]);
var state_10925__$1 = state_10925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10925__$1,inst_10923);
} else {
if((state_val_10926 === (4))){
var inst_10915 = (state_10925[(2)]);
var inst_10916 = process.call(null,inst_10915);
var state_10925__$1 = state_10925;
if(cljs.core.truth_(inst_10916)){
var statearr_10928_11075 = state_10925__$1;
(statearr_10928_11075[(1)] = (5));

} else {
var statearr_10929_11076 = state_10925__$1;
(statearr_10929_11076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10926 === (5))){
var state_10925__$1 = state_10925;
var statearr_10930_11077 = state_10925__$1;
(statearr_10930_11077[(2)] = null);

(statearr_10930_11077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10926 === (6))){
var state_10925__$1 = state_10925;
var statearr_10931_11078 = state_10925__$1;
(statearr_10931_11078[(2)] = null);

(statearr_10931_11078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10926 === (7))){
var inst_10921 = (state_10925[(2)]);
var state_10925__$1 = state_10925;
var statearr_10932_11079 = state_10925__$1;
(statearr_10932_11079[(2)] = inst_10921);

(statearr_10932_11079[(1)] = (3));


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
});})(__11069,c__10729__auto___11073,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async))
;
return ((function (__11069,switch__10634__auto__,c__10729__auto___11073,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0 = (function (){
var statearr_10933 = [null,null,null,null,null,null,null];
(statearr_10933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__);

(statearr_10933[(1)] = (1));

return statearr_10933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1 = (function (state_10925){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_10925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e10934){if((e10934 instanceof Object)){
var ex__10638__auto__ = e10934;
var statearr_10935_11080 = state_10925;
(statearr_10935_11080[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11081 = state_10925;
state_10925 = G__11081;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__ = function(state_10925){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1.call(this,state_10925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__;
})()
;})(__11069,switch__10634__auto__,c__10729__auto___11073,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async))
})();
var state__10731__auto__ = (function (){var statearr_10936 = f__10730__auto__.call(null);
(statearr_10936[(6)] = c__10729__auto___11073);

return statearr_10936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(__11069,c__10729__auto___11073,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async))
);


break;
case "async":
var c__10729__auto___11082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11069,c__10729__auto___11082,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (__11069,c__10729__auto___11082,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async){
return (function (state_10949){
var state_val_10950 = (state_10949[(1)]);
if((state_val_10950 === (1))){
var state_10949__$1 = state_10949;
var statearr_10951_11083 = state_10949__$1;
(statearr_10951_11083[(2)] = null);

(statearr_10951_11083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10950 === (2))){
var state_10949__$1 = state_10949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10949__$1,(4),jobs);
} else {
if((state_val_10950 === (3))){
var inst_10947 = (state_10949[(2)]);
var state_10949__$1 = state_10949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10949__$1,inst_10947);
} else {
if((state_val_10950 === (4))){
var inst_10939 = (state_10949[(2)]);
var inst_10940 = async.call(null,inst_10939);
var state_10949__$1 = state_10949;
if(cljs.core.truth_(inst_10940)){
var statearr_10952_11084 = state_10949__$1;
(statearr_10952_11084[(1)] = (5));

} else {
var statearr_10953_11085 = state_10949__$1;
(statearr_10953_11085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10950 === (5))){
var state_10949__$1 = state_10949;
var statearr_10954_11086 = state_10949__$1;
(statearr_10954_11086[(2)] = null);

(statearr_10954_11086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10950 === (6))){
var state_10949__$1 = state_10949;
var statearr_10955_11087 = state_10949__$1;
(statearr_10955_11087[(2)] = null);

(statearr_10955_11087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10950 === (7))){
var inst_10945 = (state_10949[(2)]);
var state_10949__$1 = state_10949;
var statearr_10956_11088 = state_10949__$1;
(statearr_10956_11088[(2)] = inst_10945);

(statearr_10956_11088[(1)] = (3));


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
});})(__11069,c__10729__auto___11082,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async))
;
return ((function (__11069,switch__10634__auto__,c__10729__auto___11082,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0 = (function (){
var statearr_10957 = [null,null,null,null,null,null,null];
(statearr_10957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__);

(statearr_10957[(1)] = (1));

return statearr_10957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1 = (function (state_10949){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_10949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e10958){if((e10958 instanceof Object)){
var ex__10638__auto__ = e10958;
var statearr_10959_11089 = state_10949;
(statearr_10959_11089[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11090 = state_10949;
state_10949 = G__11090;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__ = function(state_10949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1.call(this,state_10949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__;
})()
;})(__11069,switch__10634__auto__,c__10729__auto___11082,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async))
})();
var state__10731__auto__ = (function (){var statearr_10960 = f__10730__auto__.call(null);
(statearr_10960[(6)] = c__10729__auto___11082);

return statearr_10960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(__11069,c__10729__auto___11082,G__10912_11070,G__10912_11071__$1,n__4607__auto___11068,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10912_11071__$1)].join('')));

}

var G__11091 = (__11069 + (1));
__11069 = G__11091;
continue;
} else {
}
break;
}

var c__10729__auto___11092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___11092,jobs,results,process,async){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___11092,jobs,results,process,async){
return (function (state_10982){
var state_val_10983 = (state_10982[(1)]);
if((state_val_10983 === (1))){
var state_10982__$1 = state_10982;
var statearr_10984_11093 = state_10982__$1;
(statearr_10984_11093[(2)] = null);

(statearr_10984_11093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (2))){
var state_10982__$1 = state_10982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10982__$1,(4),from);
} else {
if((state_val_10983 === (3))){
var inst_10980 = (state_10982[(2)]);
var state_10982__$1 = state_10982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10982__$1,inst_10980);
} else {
if((state_val_10983 === (4))){
var inst_10963 = (state_10982[(7)]);
var inst_10963__$1 = (state_10982[(2)]);
var inst_10964 = (inst_10963__$1 == null);
var state_10982__$1 = (function (){var statearr_10985 = state_10982;
(statearr_10985[(7)] = inst_10963__$1);

return statearr_10985;
})();
if(cljs.core.truth_(inst_10964)){
var statearr_10986_11094 = state_10982__$1;
(statearr_10986_11094[(1)] = (5));

} else {
var statearr_10987_11095 = state_10982__$1;
(statearr_10987_11095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (5))){
var inst_10966 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10982__$1 = state_10982;
var statearr_10988_11096 = state_10982__$1;
(statearr_10988_11096[(2)] = inst_10966);

(statearr_10988_11096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (6))){
var inst_10968 = (state_10982[(8)]);
var inst_10963 = (state_10982[(7)]);
var inst_10968__$1 = cljs.core.async.chan.call(null,(1));
var inst_10969 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10970 = [inst_10963,inst_10968__$1];
var inst_10971 = (new cljs.core.PersistentVector(null,2,(5),inst_10969,inst_10970,null));
var state_10982__$1 = (function (){var statearr_10989 = state_10982;
(statearr_10989[(8)] = inst_10968__$1);

return statearr_10989;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10982__$1,(8),jobs,inst_10971);
} else {
if((state_val_10983 === (7))){
var inst_10978 = (state_10982[(2)]);
var state_10982__$1 = state_10982;
var statearr_10990_11097 = state_10982__$1;
(statearr_10990_11097[(2)] = inst_10978);

(statearr_10990_11097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (8))){
var inst_10968 = (state_10982[(8)]);
var inst_10973 = (state_10982[(2)]);
var state_10982__$1 = (function (){var statearr_10991 = state_10982;
(statearr_10991[(9)] = inst_10973);

return statearr_10991;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10982__$1,(9),results,inst_10968);
} else {
if((state_val_10983 === (9))){
var inst_10975 = (state_10982[(2)]);
var state_10982__$1 = (function (){var statearr_10992 = state_10982;
(statearr_10992[(10)] = inst_10975);

return statearr_10992;
})();
var statearr_10993_11098 = state_10982__$1;
(statearr_10993_11098[(2)] = null);

(statearr_10993_11098[(1)] = (2));


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
});})(c__10729__auto___11092,jobs,results,process,async))
;
return ((function (switch__10634__auto__,c__10729__auto___11092,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0 = (function (){
var statearr_10994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__);

(statearr_10994[(1)] = (1));

return statearr_10994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1 = (function (state_10982){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_10982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e10995){if((e10995 instanceof Object)){
var ex__10638__auto__ = e10995;
var statearr_10996_11099 = state_10982;
(statearr_10996_11099[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11100 = state_10982;
state_10982 = G__11100;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__ = function(state_10982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1.call(this,state_10982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___11092,jobs,results,process,async))
})();
var state__10731__auto__ = (function (){var statearr_10997 = f__10730__auto__.call(null);
(statearr_10997[(6)] = c__10729__auto___11092);

return statearr_10997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___11092,jobs,results,process,async))
);


var c__10729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto__,jobs,results,process,async){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto__,jobs,results,process,async){
return (function (state_11035){
var state_val_11036 = (state_11035[(1)]);
if((state_val_11036 === (7))){
var inst_11031 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
var statearr_11037_11101 = state_11035__$1;
(statearr_11037_11101[(2)] = inst_11031);

(statearr_11037_11101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (20))){
var state_11035__$1 = state_11035;
var statearr_11038_11102 = state_11035__$1;
(statearr_11038_11102[(2)] = null);

(statearr_11038_11102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (1))){
var state_11035__$1 = state_11035;
var statearr_11039_11103 = state_11035__$1;
(statearr_11039_11103[(2)] = null);

(statearr_11039_11103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (4))){
var inst_11000 = (state_11035[(7)]);
var inst_11000__$1 = (state_11035[(2)]);
var inst_11001 = (inst_11000__$1 == null);
var state_11035__$1 = (function (){var statearr_11040 = state_11035;
(statearr_11040[(7)] = inst_11000__$1);

return statearr_11040;
})();
if(cljs.core.truth_(inst_11001)){
var statearr_11041_11104 = state_11035__$1;
(statearr_11041_11104[(1)] = (5));

} else {
var statearr_11042_11105 = state_11035__$1;
(statearr_11042_11105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (15))){
var inst_11013 = (state_11035[(8)]);
var state_11035__$1 = state_11035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11035__$1,(18),to,inst_11013);
} else {
if((state_val_11036 === (21))){
var inst_11026 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
var statearr_11043_11106 = state_11035__$1;
(statearr_11043_11106[(2)] = inst_11026);

(statearr_11043_11106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (13))){
var inst_11028 = (state_11035[(2)]);
var state_11035__$1 = (function (){var statearr_11044 = state_11035;
(statearr_11044[(9)] = inst_11028);

return statearr_11044;
})();
var statearr_11045_11107 = state_11035__$1;
(statearr_11045_11107[(2)] = null);

(statearr_11045_11107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (6))){
var inst_11000 = (state_11035[(7)]);
var state_11035__$1 = state_11035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11035__$1,(11),inst_11000);
} else {
if((state_val_11036 === (17))){
var inst_11021 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
if(cljs.core.truth_(inst_11021)){
var statearr_11046_11108 = state_11035__$1;
(statearr_11046_11108[(1)] = (19));

} else {
var statearr_11047_11109 = state_11035__$1;
(statearr_11047_11109[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (3))){
var inst_11033 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11035__$1,inst_11033);
} else {
if((state_val_11036 === (12))){
var inst_11010 = (state_11035[(10)]);
var state_11035__$1 = state_11035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11035__$1,(14),inst_11010);
} else {
if((state_val_11036 === (2))){
var state_11035__$1 = state_11035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11035__$1,(4),results);
} else {
if((state_val_11036 === (19))){
var state_11035__$1 = state_11035;
var statearr_11048_11110 = state_11035__$1;
(statearr_11048_11110[(2)] = null);

(statearr_11048_11110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (11))){
var inst_11010 = (state_11035[(2)]);
var state_11035__$1 = (function (){var statearr_11049 = state_11035;
(statearr_11049[(10)] = inst_11010);

return statearr_11049;
})();
var statearr_11050_11111 = state_11035__$1;
(statearr_11050_11111[(2)] = null);

(statearr_11050_11111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (9))){
var state_11035__$1 = state_11035;
var statearr_11051_11112 = state_11035__$1;
(statearr_11051_11112[(2)] = null);

(statearr_11051_11112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (5))){
var state_11035__$1 = state_11035;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11052_11113 = state_11035__$1;
(statearr_11052_11113[(1)] = (8));

} else {
var statearr_11053_11114 = state_11035__$1;
(statearr_11053_11114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (14))){
var inst_11013 = (state_11035[(8)]);
var inst_11015 = (state_11035[(11)]);
var inst_11013__$1 = (state_11035[(2)]);
var inst_11014 = (inst_11013__$1 == null);
var inst_11015__$1 = cljs.core.not.call(null,inst_11014);
var state_11035__$1 = (function (){var statearr_11054 = state_11035;
(statearr_11054[(8)] = inst_11013__$1);

(statearr_11054[(11)] = inst_11015__$1);

return statearr_11054;
})();
if(inst_11015__$1){
var statearr_11055_11115 = state_11035__$1;
(statearr_11055_11115[(1)] = (15));

} else {
var statearr_11056_11116 = state_11035__$1;
(statearr_11056_11116[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (16))){
var inst_11015 = (state_11035[(11)]);
var state_11035__$1 = state_11035;
var statearr_11057_11117 = state_11035__$1;
(statearr_11057_11117[(2)] = inst_11015);

(statearr_11057_11117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (10))){
var inst_11007 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
var statearr_11058_11118 = state_11035__$1;
(statearr_11058_11118[(2)] = inst_11007);

(statearr_11058_11118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (18))){
var inst_11018 = (state_11035[(2)]);
var state_11035__$1 = state_11035;
var statearr_11059_11119 = state_11035__$1;
(statearr_11059_11119[(2)] = inst_11018);

(statearr_11059_11119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11036 === (8))){
var inst_11004 = cljs.core.async.close_BANG_.call(null,to);
var state_11035__$1 = state_11035;
var statearr_11060_11120 = state_11035__$1;
(statearr_11060_11120[(2)] = inst_11004);

(statearr_11060_11120[(1)] = (10));


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
});})(c__10729__auto__,jobs,results,process,async))
;
return ((function (switch__10634__auto__,c__10729__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0 = (function (){
var statearr_11061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__);

(statearr_11061[(1)] = (1));

return statearr_11061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1 = (function (state_11035){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_11035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e11062){if((e11062 instanceof Object)){
var ex__10638__auto__ = e11062;
var statearr_11063_11121 = state_11035;
(statearr_11063_11121[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11122 = state_11035;
state_11035 = G__11122;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__ = function(state_11035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1.call(this,state_11035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10635__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto__,jobs,results,process,async))
})();
var state__10731__auto__ = (function (){var statearr_11064 = f__10730__auto__.call(null);
(statearr_11064[(6)] = c__10729__auto__);

return statearr_11064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto__,jobs,results,process,async))
);

return c__10729__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__11124 = arguments.length;
switch (G__11124) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__11127 = arguments.length;
switch (G__11127) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__11130 = arguments.length;
switch (G__11130) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10729__auto___11179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___11179,tc,fc){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___11179,tc,fc){
return (function (state_11156){
var state_val_11157 = (state_11156[(1)]);
if((state_val_11157 === (7))){
var inst_11152 = (state_11156[(2)]);
var state_11156__$1 = state_11156;
var statearr_11158_11180 = state_11156__$1;
(statearr_11158_11180[(2)] = inst_11152);

(statearr_11158_11180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11157 === (1))){
var state_11156__$1 = state_11156;
var statearr_11159_11181 = state_11156__$1;
(statearr_11159_11181[(2)] = null);

(statearr_11159_11181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11157 === (4))){
var inst_11133 = (state_11156[(7)]);
var inst_11133__$1 = (state_11156[(2)]);
var inst_11134 = (inst_11133__$1 == null);
var state_11156__$1 = (function (){var statearr_11160 = state_11156;
(statearr_11160[(7)] = inst_11133__$1);

return statearr_11160;
})();
if(cljs.core.truth_(inst_11134)){
var statearr_11161_11182 = state_11156__$1;
(statearr_11161_11182[(1)] = (5));

} else {
var statearr_11162_11183 = state_11156__$1;
(statearr_11162_11183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11157 === (13))){
var state_11156__$1 = state_11156;
var statearr_11163_11184 = state_11156__$1;
(statearr_11163_11184[(2)] = null);

(statearr_11163_11184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11157 === (6))){
var inst_11133 = (state_11156[(7)]);
var inst_11139 = p.call(null,inst_11133);
var state_11156__$1 = state_11156;
if(cljs.core.truth_(inst_11139)){
var statearr_11164_11185 = state_11156__$1;
(statearr_11164_11185[(1)] = (9));

} else {
var statearr_11165_11186 = state_11156__$1;
(statearr_11165_11186[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11157 === (3))){
var inst_11154 = (state_11156[(2)]);
var state_11156__$1 = state_11156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11156__$1,inst_11154);
} else {
if((state_val_11157 === (12))){
var state_11156__$1 = state_11156;
var statearr_11166_11187 = state_11156__$1;
(statearr_11166_11187[(2)] = null);

(statearr_11166_11187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11157 === (2))){
var state_11156__$1 = state_11156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11156__$1,(4),ch);
} else {
if((state_val_11157 === (11))){
var inst_11133 = (state_11156[(7)]);
var inst_11143 = (state_11156[(2)]);
var state_11156__$1 = state_11156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11156__$1,(8),inst_11143,inst_11133);
} else {
if((state_val_11157 === (9))){
var state_11156__$1 = state_11156;
var statearr_11167_11188 = state_11156__$1;
(statearr_11167_11188[(2)] = tc);

(statearr_11167_11188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11157 === (5))){
var inst_11136 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11137 = cljs.core.async.close_BANG_.call(null,fc);
var state_11156__$1 = (function (){var statearr_11168 = state_11156;
(statearr_11168[(8)] = inst_11136);

return statearr_11168;
})();
var statearr_11169_11189 = state_11156__$1;
(statearr_11169_11189[(2)] = inst_11137);

(statearr_11169_11189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11157 === (14))){
var inst_11150 = (state_11156[(2)]);
var state_11156__$1 = state_11156;
var statearr_11170_11190 = state_11156__$1;
(statearr_11170_11190[(2)] = inst_11150);

(statearr_11170_11190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11157 === (10))){
var state_11156__$1 = state_11156;
var statearr_11171_11191 = state_11156__$1;
(statearr_11171_11191[(2)] = fc);

(statearr_11171_11191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11157 === (8))){
var inst_11145 = (state_11156[(2)]);
var state_11156__$1 = state_11156;
if(cljs.core.truth_(inst_11145)){
var statearr_11172_11192 = state_11156__$1;
(statearr_11172_11192[(1)] = (12));

} else {
var statearr_11173_11193 = state_11156__$1;
(statearr_11173_11193[(1)] = (13));

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
});})(c__10729__auto___11179,tc,fc))
;
return ((function (switch__10634__auto__,c__10729__auto___11179,tc,fc){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_11174 = [null,null,null,null,null,null,null,null,null];
(statearr_11174[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_11174[(1)] = (1));

return statearr_11174;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_11156){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_11156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e11175){if((e11175 instanceof Object)){
var ex__10638__auto__ = e11175;
var statearr_11176_11194 = state_11156;
(statearr_11176_11194[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11195 = state_11156;
state_11156 = G__11195;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_11156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_11156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___11179,tc,fc))
})();
var state__10731__auto__ = (function (){var statearr_11177 = f__10730__auto__.call(null);
(statearr_11177[(6)] = c__10729__auto___11179);

return statearr_11177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___11179,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto__){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto__){
return (function (state_11216){
var state_val_11217 = (state_11216[(1)]);
if((state_val_11217 === (7))){
var inst_11212 = (state_11216[(2)]);
var state_11216__$1 = state_11216;
var statearr_11218_11236 = state_11216__$1;
(statearr_11218_11236[(2)] = inst_11212);

(statearr_11218_11236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11217 === (1))){
var inst_11196 = init;
var state_11216__$1 = (function (){var statearr_11219 = state_11216;
(statearr_11219[(7)] = inst_11196);

return statearr_11219;
})();
var statearr_11220_11237 = state_11216__$1;
(statearr_11220_11237[(2)] = null);

(statearr_11220_11237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11217 === (4))){
var inst_11199 = (state_11216[(8)]);
var inst_11199__$1 = (state_11216[(2)]);
var inst_11200 = (inst_11199__$1 == null);
var state_11216__$1 = (function (){var statearr_11221 = state_11216;
(statearr_11221[(8)] = inst_11199__$1);

return statearr_11221;
})();
if(cljs.core.truth_(inst_11200)){
var statearr_11222_11238 = state_11216__$1;
(statearr_11222_11238[(1)] = (5));

} else {
var statearr_11223_11239 = state_11216__$1;
(statearr_11223_11239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11217 === (6))){
var inst_11203 = (state_11216[(9)]);
var inst_11196 = (state_11216[(7)]);
var inst_11199 = (state_11216[(8)]);
var inst_11203__$1 = f.call(null,inst_11196,inst_11199);
var inst_11204 = cljs.core.reduced_QMARK_.call(null,inst_11203__$1);
var state_11216__$1 = (function (){var statearr_11224 = state_11216;
(statearr_11224[(9)] = inst_11203__$1);

return statearr_11224;
})();
if(inst_11204){
var statearr_11225_11240 = state_11216__$1;
(statearr_11225_11240[(1)] = (8));

} else {
var statearr_11226_11241 = state_11216__$1;
(statearr_11226_11241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11217 === (3))){
var inst_11214 = (state_11216[(2)]);
var state_11216__$1 = state_11216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11216__$1,inst_11214);
} else {
if((state_val_11217 === (2))){
var state_11216__$1 = state_11216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11216__$1,(4),ch);
} else {
if((state_val_11217 === (9))){
var inst_11203 = (state_11216[(9)]);
var inst_11196 = inst_11203;
var state_11216__$1 = (function (){var statearr_11227 = state_11216;
(statearr_11227[(7)] = inst_11196);

return statearr_11227;
})();
var statearr_11228_11242 = state_11216__$1;
(statearr_11228_11242[(2)] = null);

(statearr_11228_11242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11217 === (5))){
var inst_11196 = (state_11216[(7)]);
var state_11216__$1 = state_11216;
var statearr_11229_11243 = state_11216__$1;
(statearr_11229_11243[(2)] = inst_11196);

(statearr_11229_11243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11217 === (10))){
var inst_11210 = (state_11216[(2)]);
var state_11216__$1 = state_11216;
var statearr_11230_11244 = state_11216__$1;
(statearr_11230_11244[(2)] = inst_11210);

(statearr_11230_11244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11217 === (8))){
var inst_11203 = (state_11216[(9)]);
var inst_11206 = cljs.core.deref.call(null,inst_11203);
var state_11216__$1 = state_11216;
var statearr_11231_11245 = state_11216__$1;
(statearr_11231_11245[(2)] = inst_11206);

(statearr_11231_11245[(1)] = (10));


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
});})(c__10729__auto__))
;
return ((function (switch__10634__auto__,c__10729__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10635__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10635__auto____0 = (function (){
var statearr_11232 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11232[(0)] = cljs$core$async$reduce_$_state_machine__10635__auto__);

(statearr_11232[(1)] = (1));

return statearr_11232;
});
var cljs$core$async$reduce_$_state_machine__10635__auto____1 = (function (state_11216){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_11216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e11233){if((e11233 instanceof Object)){
var ex__10638__auto__ = e11233;
var statearr_11234_11246 = state_11216;
(statearr_11234_11246[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11247 = state_11216;
state_11216 = G__11247;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10635__auto__ = function(state_11216){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10635__auto____1.call(this,state_11216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10635__auto____0;
cljs$core$async$reduce_$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10635__auto____1;
return cljs$core$async$reduce_$_state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto__))
})();
var state__10731__auto__ = (function (){var statearr_11235 = f__10730__auto__.call(null);
(statearr_11235[(6)] = c__10729__auto__);

return statearr_11235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto__))
);

return c__10729__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto__,f__$1){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto__,f__$1){
return (function (state_11253){
var state_val_11254 = (state_11253[(1)]);
if((state_val_11254 === (1))){
var inst_11248 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11253__$1 = state_11253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11253__$1,(2),inst_11248);
} else {
if((state_val_11254 === (2))){
var inst_11250 = (state_11253[(2)]);
var inst_11251 = f__$1.call(null,inst_11250);
var state_11253__$1 = state_11253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11253__$1,inst_11251);
} else {
return null;
}
}
});})(c__10729__auto__,f__$1))
;
return ((function (switch__10634__auto__,c__10729__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10635__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10635__auto____0 = (function (){
var statearr_11255 = [null,null,null,null,null,null,null];
(statearr_11255[(0)] = cljs$core$async$transduce_$_state_machine__10635__auto__);

(statearr_11255[(1)] = (1));

return statearr_11255;
});
var cljs$core$async$transduce_$_state_machine__10635__auto____1 = (function (state_11253){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_11253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e11256){if((e11256 instanceof Object)){
var ex__10638__auto__ = e11256;
var statearr_11257_11259 = state_11253;
(statearr_11257_11259[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11260 = state_11253;
state_11253 = G__11260;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10635__auto__ = function(state_11253){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10635__auto____1.call(this,state_11253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10635__auto____0;
cljs$core$async$transduce_$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10635__auto____1;
return cljs$core$async$transduce_$_state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto__,f__$1))
})();
var state__10731__auto__ = (function (){var statearr_11258 = f__10730__auto__.call(null);
(statearr_11258[(6)] = c__10729__auto__);

return statearr_11258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto__,f__$1))
);

return c__10729__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__11262 = arguments.length;
switch (G__11262) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto__){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto__){
return (function (state_11287){
var state_val_11288 = (state_11287[(1)]);
if((state_val_11288 === (7))){
var inst_11269 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
var statearr_11289_11310 = state_11287__$1;
(statearr_11289_11310[(2)] = inst_11269);

(statearr_11289_11310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (1))){
var inst_11263 = cljs.core.seq.call(null,coll);
var inst_11264 = inst_11263;
var state_11287__$1 = (function (){var statearr_11290 = state_11287;
(statearr_11290[(7)] = inst_11264);

return statearr_11290;
})();
var statearr_11291_11311 = state_11287__$1;
(statearr_11291_11311[(2)] = null);

(statearr_11291_11311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (4))){
var inst_11264 = (state_11287[(7)]);
var inst_11267 = cljs.core.first.call(null,inst_11264);
var state_11287__$1 = state_11287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11287__$1,(7),ch,inst_11267);
} else {
if((state_val_11288 === (13))){
var inst_11281 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
var statearr_11292_11312 = state_11287__$1;
(statearr_11292_11312[(2)] = inst_11281);

(statearr_11292_11312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (6))){
var inst_11272 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
if(cljs.core.truth_(inst_11272)){
var statearr_11293_11313 = state_11287__$1;
(statearr_11293_11313[(1)] = (8));

} else {
var statearr_11294_11314 = state_11287__$1;
(statearr_11294_11314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (3))){
var inst_11285 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11287__$1,inst_11285);
} else {
if((state_val_11288 === (12))){
var state_11287__$1 = state_11287;
var statearr_11295_11315 = state_11287__$1;
(statearr_11295_11315[(2)] = null);

(statearr_11295_11315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (2))){
var inst_11264 = (state_11287[(7)]);
var state_11287__$1 = state_11287;
if(cljs.core.truth_(inst_11264)){
var statearr_11296_11316 = state_11287__$1;
(statearr_11296_11316[(1)] = (4));

} else {
var statearr_11297_11317 = state_11287__$1;
(statearr_11297_11317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (11))){
var inst_11278 = cljs.core.async.close_BANG_.call(null,ch);
var state_11287__$1 = state_11287;
var statearr_11298_11318 = state_11287__$1;
(statearr_11298_11318[(2)] = inst_11278);

(statearr_11298_11318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (9))){
var state_11287__$1 = state_11287;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11299_11319 = state_11287__$1;
(statearr_11299_11319[(1)] = (11));

} else {
var statearr_11300_11320 = state_11287__$1;
(statearr_11300_11320[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (5))){
var inst_11264 = (state_11287[(7)]);
var state_11287__$1 = state_11287;
var statearr_11301_11321 = state_11287__$1;
(statearr_11301_11321[(2)] = inst_11264);

(statearr_11301_11321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (10))){
var inst_11283 = (state_11287[(2)]);
var state_11287__$1 = state_11287;
var statearr_11302_11322 = state_11287__$1;
(statearr_11302_11322[(2)] = inst_11283);

(statearr_11302_11322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11288 === (8))){
var inst_11264 = (state_11287[(7)]);
var inst_11274 = cljs.core.next.call(null,inst_11264);
var inst_11264__$1 = inst_11274;
var state_11287__$1 = (function (){var statearr_11303 = state_11287;
(statearr_11303[(7)] = inst_11264__$1);

return statearr_11303;
})();
var statearr_11304_11323 = state_11287__$1;
(statearr_11304_11323[(2)] = null);

(statearr_11304_11323[(1)] = (2));


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
});})(c__10729__auto__))
;
return ((function (switch__10634__auto__,c__10729__auto__){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_11305 = [null,null,null,null,null,null,null,null];
(statearr_11305[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_11305[(1)] = (1));

return statearr_11305;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_11287){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_11287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e11306){if((e11306 instanceof Object)){
var ex__10638__auto__ = e11306;
var statearr_11307_11324 = state_11287;
(statearr_11307_11324[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11325 = state_11287;
state_11287 = G__11325;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_11287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_11287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto__))
})();
var state__10731__auto__ = (function (){var statearr_11308 = f__10730__auto__.call(null);
(statearr_11308[(6)] = c__10729__auto__);

return statearr_11308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto__))
);

return c__10729__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11326 = (function (ch,cs,meta11327){
this.ch = ch;
this.cs = cs;
this.meta11327 = meta11327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11328,meta11327__$1){
var self__ = this;
var _11328__$1 = this;
return (new cljs.core.async.t_cljs$core$async11326(self__.ch,self__.cs,meta11327__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11328){
var self__ = this;
var _11328__$1 = this;
return self__.meta11327;
});})(cs))
;

cljs.core.async.t_cljs$core$async11326.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11326.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11326.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11326.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11326.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11326.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11327","meta11327",1246970141,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11326";

cljs.core.async.t_cljs$core$async11326.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11326");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11326.
 */
cljs.core.async.__GT_t_cljs$core$async11326 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11326(ch__$1,cs__$1,meta11327){
return (new cljs.core.async.t_cljs$core$async11326(ch__$1,cs__$1,meta11327));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11326(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10729__auto___11548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___11548,cs,m,dchan,dctr,done){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___11548,cs,m,dchan,dctr,done){
return (function (state_11463){
var state_val_11464 = (state_11463[(1)]);
if((state_val_11464 === (7))){
var inst_11459 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11465_11549 = state_11463__$1;
(statearr_11465_11549[(2)] = inst_11459);

(statearr_11465_11549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (20))){
var inst_11362 = (state_11463[(7)]);
var inst_11374 = cljs.core.first.call(null,inst_11362);
var inst_11375 = cljs.core.nth.call(null,inst_11374,(0),null);
var inst_11376 = cljs.core.nth.call(null,inst_11374,(1),null);
var state_11463__$1 = (function (){var statearr_11466 = state_11463;
(statearr_11466[(8)] = inst_11375);

return statearr_11466;
})();
if(cljs.core.truth_(inst_11376)){
var statearr_11467_11550 = state_11463__$1;
(statearr_11467_11550[(1)] = (22));

} else {
var statearr_11468_11551 = state_11463__$1;
(statearr_11468_11551[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (27))){
var inst_11331 = (state_11463[(9)]);
var inst_11406 = (state_11463[(10)]);
var inst_11411 = (state_11463[(11)]);
var inst_11404 = (state_11463[(12)]);
var inst_11411__$1 = cljs.core._nth.call(null,inst_11404,inst_11406);
var inst_11412 = cljs.core.async.put_BANG_.call(null,inst_11411__$1,inst_11331,done);
var state_11463__$1 = (function (){var statearr_11469 = state_11463;
(statearr_11469[(11)] = inst_11411__$1);

return statearr_11469;
})();
if(cljs.core.truth_(inst_11412)){
var statearr_11470_11552 = state_11463__$1;
(statearr_11470_11552[(1)] = (30));

} else {
var statearr_11471_11553 = state_11463__$1;
(statearr_11471_11553[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (1))){
var state_11463__$1 = state_11463;
var statearr_11472_11554 = state_11463__$1;
(statearr_11472_11554[(2)] = null);

(statearr_11472_11554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (24))){
var inst_11362 = (state_11463[(7)]);
var inst_11381 = (state_11463[(2)]);
var inst_11382 = cljs.core.next.call(null,inst_11362);
var inst_11340 = inst_11382;
var inst_11341 = null;
var inst_11342 = (0);
var inst_11343 = (0);
var state_11463__$1 = (function (){var statearr_11473 = state_11463;
(statearr_11473[(13)] = inst_11342);

(statearr_11473[(14)] = inst_11343);

(statearr_11473[(15)] = inst_11340);

(statearr_11473[(16)] = inst_11381);

(statearr_11473[(17)] = inst_11341);

return statearr_11473;
})();
var statearr_11474_11555 = state_11463__$1;
(statearr_11474_11555[(2)] = null);

(statearr_11474_11555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (39))){
var state_11463__$1 = state_11463;
var statearr_11478_11556 = state_11463__$1;
(statearr_11478_11556[(2)] = null);

(statearr_11478_11556[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (4))){
var inst_11331 = (state_11463[(9)]);
var inst_11331__$1 = (state_11463[(2)]);
var inst_11332 = (inst_11331__$1 == null);
var state_11463__$1 = (function (){var statearr_11479 = state_11463;
(statearr_11479[(9)] = inst_11331__$1);

return statearr_11479;
})();
if(cljs.core.truth_(inst_11332)){
var statearr_11480_11557 = state_11463__$1;
(statearr_11480_11557[(1)] = (5));

} else {
var statearr_11481_11558 = state_11463__$1;
(statearr_11481_11558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (15))){
var inst_11342 = (state_11463[(13)]);
var inst_11343 = (state_11463[(14)]);
var inst_11340 = (state_11463[(15)]);
var inst_11341 = (state_11463[(17)]);
var inst_11358 = (state_11463[(2)]);
var inst_11359 = (inst_11343 + (1));
var tmp11475 = inst_11342;
var tmp11476 = inst_11340;
var tmp11477 = inst_11341;
var inst_11340__$1 = tmp11476;
var inst_11341__$1 = tmp11477;
var inst_11342__$1 = tmp11475;
var inst_11343__$1 = inst_11359;
var state_11463__$1 = (function (){var statearr_11482 = state_11463;
(statearr_11482[(13)] = inst_11342__$1);

(statearr_11482[(14)] = inst_11343__$1);

(statearr_11482[(15)] = inst_11340__$1);

(statearr_11482[(18)] = inst_11358);

(statearr_11482[(17)] = inst_11341__$1);

return statearr_11482;
})();
var statearr_11483_11559 = state_11463__$1;
(statearr_11483_11559[(2)] = null);

(statearr_11483_11559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (21))){
var inst_11385 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11487_11560 = state_11463__$1;
(statearr_11487_11560[(2)] = inst_11385);

(statearr_11487_11560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (31))){
var inst_11411 = (state_11463[(11)]);
var inst_11415 = done.call(null,null);
var inst_11416 = cljs.core.async.untap_STAR_.call(null,m,inst_11411);
var state_11463__$1 = (function (){var statearr_11488 = state_11463;
(statearr_11488[(19)] = inst_11415);

return statearr_11488;
})();
var statearr_11489_11561 = state_11463__$1;
(statearr_11489_11561[(2)] = inst_11416);

(statearr_11489_11561[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (32))){
var inst_11406 = (state_11463[(10)]);
var inst_11403 = (state_11463[(20)]);
var inst_11404 = (state_11463[(12)]);
var inst_11405 = (state_11463[(21)]);
var inst_11418 = (state_11463[(2)]);
var inst_11419 = (inst_11406 + (1));
var tmp11484 = inst_11403;
var tmp11485 = inst_11404;
var tmp11486 = inst_11405;
var inst_11403__$1 = tmp11484;
var inst_11404__$1 = tmp11485;
var inst_11405__$1 = tmp11486;
var inst_11406__$1 = inst_11419;
var state_11463__$1 = (function (){var statearr_11490 = state_11463;
(statearr_11490[(22)] = inst_11418);

(statearr_11490[(10)] = inst_11406__$1);

(statearr_11490[(20)] = inst_11403__$1);

(statearr_11490[(12)] = inst_11404__$1);

(statearr_11490[(21)] = inst_11405__$1);

return statearr_11490;
})();
var statearr_11491_11562 = state_11463__$1;
(statearr_11491_11562[(2)] = null);

(statearr_11491_11562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (40))){
var inst_11431 = (state_11463[(23)]);
var inst_11435 = done.call(null,null);
var inst_11436 = cljs.core.async.untap_STAR_.call(null,m,inst_11431);
var state_11463__$1 = (function (){var statearr_11492 = state_11463;
(statearr_11492[(24)] = inst_11435);

return statearr_11492;
})();
var statearr_11493_11563 = state_11463__$1;
(statearr_11493_11563[(2)] = inst_11436);

(statearr_11493_11563[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (33))){
var inst_11422 = (state_11463[(25)]);
var inst_11424 = cljs.core.chunked_seq_QMARK_.call(null,inst_11422);
var state_11463__$1 = state_11463;
if(inst_11424){
var statearr_11494_11564 = state_11463__$1;
(statearr_11494_11564[(1)] = (36));

} else {
var statearr_11495_11565 = state_11463__$1;
(statearr_11495_11565[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (13))){
var inst_11352 = (state_11463[(26)]);
var inst_11355 = cljs.core.async.close_BANG_.call(null,inst_11352);
var state_11463__$1 = state_11463;
var statearr_11496_11566 = state_11463__$1;
(statearr_11496_11566[(2)] = inst_11355);

(statearr_11496_11566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (22))){
var inst_11375 = (state_11463[(8)]);
var inst_11378 = cljs.core.async.close_BANG_.call(null,inst_11375);
var state_11463__$1 = state_11463;
var statearr_11497_11567 = state_11463__$1;
(statearr_11497_11567[(2)] = inst_11378);

(statearr_11497_11567[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (36))){
var inst_11422 = (state_11463[(25)]);
var inst_11426 = cljs.core.chunk_first.call(null,inst_11422);
var inst_11427 = cljs.core.chunk_rest.call(null,inst_11422);
var inst_11428 = cljs.core.count.call(null,inst_11426);
var inst_11403 = inst_11427;
var inst_11404 = inst_11426;
var inst_11405 = inst_11428;
var inst_11406 = (0);
var state_11463__$1 = (function (){var statearr_11498 = state_11463;
(statearr_11498[(10)] = inst_11406);

(statearr_11498[(20)] = inst_11403);

(statearr_11498[(12)] = inst_11404);

(statearr_11498[(21)] = inst_11405);

return statearr_11498;
})();
var statearr_11499_11568 = state_11463__$1;
(statearr_11499_11568[(2)] = null);

(statearr_11499_11568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (41))){
var inst_11422 = (state_11463[(25)]);
var inst_11438 = (state_11463[(2)]);
var inst_11439 = cljs.core.next.call(null,inst_11422);
var inst_11403 = inst_11439;
var inst_11404 = null;
var inst_11405 = (0);
var inst_11406 = (0);
var state_11463__$1 = (function (){var statearr_11500 = state_11463;
(statearr_11500[(27)] = inst_11438);

(statearr_11500[(10)] = inst_11406);

(statearr_11500[(20)] = inst_11403);

(statearr_11500[(12)] = inst_11404);

(statearr_11500[(21)] = inst_11405);

return statearr_11500;
})();
var statearr_11501_11569 = state_11463__$1;
(statearr_11501_11569[(2)] = null);

(statearr_11501_11569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (43))){
var state_11463__$1 = state_11463;
var statearr_11502_11570 = state_11463__$1;
(statearr_11502_11570[(2)] = null);

(statearr_11502_11570[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (29))){
var inst_11447 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11503_11571 = state_11463__$1;
(statearr_11503_11571[(2)] = inst_11447);

(statearr_11503_11571[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (44))){
var inst_11456 = (state_11463[(2)]);
var state_11463__$1 = (function (){var statearr_11504 = state_11463;
(statearr_11504[(28)] = inst_11456);

return statearr_11504;
})();
var statearr_11505_11572 = state_11463__$1;
(statearr_11505_11572[(2)] = null);

(statearr_11505_11572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (6))){
var inst_11395 = (state_11463[(29)]);
var inst_11394 = cljs.core.deref.call(null,cs);
var inst_11395__$1 = cljs.core.keys.call(null,inst_11394);
var inst_11396 = cljs.core.count.call(null,inst_11395__$1);
var inst_11397 = cljs.core.reset_BANG_.call(null,dctr,inst_11396);
var inst_11402 = cljs.core.seq.call(null,inst_11395__$1);
var inst_11403 = inst_11402;
var inst_11404 = null;
var inst_11405 = (0);
var inst_11406 = (0);
var state_11463__$1 = (function (){var statearr_11506 = state_11463;
(statearr_11506[(10)] = inst_11406);

(statearr_11506[(20)] = inst_11403);

(statearr_11506[(12)] = inst_11404);

(statearr_11506[(30)] = inst_11397);

(statearr_11506[(21)] = inst_11405);

(statearr_11506[(29)] = inst_11395__$1);

return statearr_11506;
})();
var statearr_11507_11573 = state_11463__$1;
(statearr_11507_11573[(2)] = null);

(statearr_11507_11573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (28))){
var inst_11422 = (state_11463[(25)]);
var inst_11403 = (state_11463[(20)]);
var inst_11422__$1 = cljs.core.seq.call(null,inst_11403);
var state_11463__$1 = (function (){var statearr_11508 = state_11463;
(statearr_11508[(25)] = inst_11422__$1);

return statearr_11508;
})();
if(inst_11422__$1){
var statearr_11509_11574 = state_11463__$1;
(statearr_11509_11574[(1)] = (33));

} else {
var statearr_11510_11575 = state_11463__$1;
(statearr_11510_11575[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (25))){
var inst_11406 = (state_11463[(10)]);
var inst_11405 = (state_11463[(21)]);
var inst_11408 = (inst_11406 < inst_11405);
var inst_11409 = inst_11408;
var state_11463__$1 = state_11463;
if(cljs.core.truth_(inst_11409)){
var statearr_11511_11576 = state_11463__$1;
(statearr_11511_11576[(1)] = (27));

} else {
var statearr_11512_11577 = state_11463__$1;
(statearr_11512_11577[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (34))){
var state_11463__$1 = state_11463;
var statearr_11513_11578 = state_11463__$1;
(statearr_11513_11578[(2)] = null);

(statearr_11513_11578[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (17))){
var state_11463__$1 = state_11463;
var statearr_11514_11579 = state_11463__$1;
(statearr_11514_11579[(2)] = null);

(statearr_11514_11579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (3))){
var inst_11461 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11463__$1,inst_11461);
} else {
if((state_val_11464 === (12))){
var inst_11390 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11515_11580 = state_11463__$1;
(statearr_11515_11580[(2)] = inst_11390);

(statearr_11515_11580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (2))){
var state_11463__$1 = state_11463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11463__$1,(4),ch);
} else {
if((state_val_11464 === (23))){
var state_11463__$1 = state_11463;
var statearr_11516_11581 = state_11463__$1;
(statearr_11516_11581[(2)] = null);

(statearr_11516_11581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (35))){
var inst_11445 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11517_11582 = state_11463__$1;
(statearr_11517_11582[(2)] = inst_11445);

(statearr_11517_11582[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (19))){
var inst_11362 = (state_11463[(7)]);
var inst_11366 = cljs.core.chunk_first.call(null,inst_11362);
var inst_11367 = cljs.core.chunk_rest.call(null,inst_11362);
var inst_11368 = cljs.core.count.call(null,inst_11366);
var inst_11340 = inst_11367;
var inst_11341 = inst_11366;
var inst_11342 = inst_11368;
var inst_11343 = (0);
var state_11463__$1 = (function (){var statearr_11518 = state_11463;
(statearr_11518[(13)] = inst_11342);

(statearr_11518[(14)] = inst_11343);

(statearr_11518[(15)] = inst_11340);

(statearr_11518[(17)] = inst_11341);

return statearr_11518;
})();
var statearr_11519_11583 = state_11463__$1;
(statearr_11519_11583[(2)] = null);

(statearr_11519_11583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (11))){
var inst_11340 = (state_11463[(15)]);
var inst_11362 = (state_11463[(7)]);
var inst_11362__$1 = cljs.core.seq.call(null,inst_11340);
var state_11463__$1 = (function (){var statearr_11520 = state_11463;
(statearr_11520[(7)] = inst_11362__$1);

return statearr_11520;
})();
if(inst_11362__$1){
var statearr_11521_11584 = state_11463__$1;
(statearr_11521_11584[(1)] = (16));

} else {
var statearr_11522_11585 = state_11463__$1;
(statearr_11522_11585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (9))){
var inst_11392 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11523_11586 = state_11463__$1;
(statearr_11523_11586[(2)] = inst_11392);

(statearr_11523_11586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (5))){
var inst_11338 = cljs.core.deref.call(null,cs);
var inst_11339 = cljs.core.seq.call(null,inst_11338);
var inst_11340 = inst_11339;
var inst_11341 = null;
var inst_11342 = (0);
var inst_11343 = (0);
var state_11463__$1 = (function (){var statearr_11524 = state_11463;
(statearr_11524[(13)] = inst_11342);

(statearr_11524[(14)] = inst_11343);

(statearr_11524[(15)] = inst_11340);

(statearr_11524[(17)] = inst_11341);

return statearr_11524;
})();
var statearr_11525_11587 = state_11463__$1;
(statearr_11525_11587[(2)] = null);

(statearr_11525_11587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (14))){
var state_11463__$1 = state_11463;
var statearr_11526_11588 = state_11463__$1;
(statearr_11526_11588[(2)] = null);

(statearr_11526_11588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (45))){
var inst_11453 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11527_11589 = state_11463__$1;
(statearr_11527_11589[(2)] = inst_11453);

(statearr_11527_11589[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (26))){
var inst_11395 = (state_11463[(29)]);
var inst_11449 = (state_11463[(2)]);
var inst_11450 = cljs.core.seq.call(null,inst_11395);
var state_11463__$1 = (function (){var statearr_11528 = state_11463;
(statearr_11528[(31)] = inst_11449);

return statearr_11528;
})();
if(inst_11450){
var statearr_11529_11590 = state_11463__$1;
(statearr_11529_11590[(1)] = (42));

} else {
var statearr_11530_11591 = state_11463__$1;
(statearr_11530_11591[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (16))){
var inst_11362 = (state_11463[(7)]);
var inst_11364 = cljs.core.chunked_seq_QMARK_.call(null,inst_11362);
var state_11463__$1 = state_11463;
if(inst_11364){
var statearr_11531_11592 = state_11463__$1;
(statearr_11531_11592[(1)] = (19));

} else {
var statearr_11532_11593 = state_11463__$1;
(statearr_11532_11593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (38))){
var inst_11442 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11533_11594 = state_11463__$1;
(statearr_11533_11594[(2)] = inst_11442);

(statearr_11533_11594[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (30))){
var state_11463__$1 = state_11463;
var statearr_11534_11595 = state_11463__$1;
(statearr_11534_11595[(2)] = null);

(statearr_11534_11595[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (10))){
var inst_11343 = (state_11463[(14)]);
var inst_11341 = (state_11463[(17)]);
var inst_11351 = cljs.core._nth.call(null,inst_11341,inst_11343);
var inst_11352 = cljs.core.nth.call(null,inst_11351,(0),null);
var inst_11353 = cljs.core.nth.call(null,inst_11351,(1),null);
var state_11463__$1 = (function (){var statearr_11535 = state_11463;
(statearr_11535[(26)] = inst_11352);

return statearr_11535;
})();
if(cljs.core.truth_(inst_11353)){
var statearr_11536_11596 = state_11463__$1;
(statearr_11536_11596[(1)] = (13));

} else {
var statearr_11537_11597 = state_11463__$1;
(statearr_11537_11597[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (18))){
var inst_11388 = (state_11463[(2)]);
var state_11463__$1 = state_11463;
var statearr_11538_11598 = state_11463__$1;
(statearr_11538_11598[(2)] = inst_11388);

(statearr_11538_11598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (42))){
var state_11463__$1 = state_11463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11463__$1,(45),dchan);
} else {
if((state_val_11464 === (37))){
var inst_11331 = (state_11463[(9)]);
var inst_11431 = (state_11463[(23)]);
var inst_11422 = (state_11463[(25)]);
var inst_11431__$1 = cljs.core.first.call(null,inst_11422);
var inst_11432 = cljs.core.async.put_BANG_.call(null,inst_11431__$1,inst_11331,done);
var state_11463__$1 = (function (){var statearr_11539 = state_11463;
(statearr_11539[(23)] = inst_11431__$1);

return statearr_11539;
})();
if(cljs.core.truth_(inst_11432)){
var statearr_11540_11599 = state_11463__$1;
(statearr_11540_11599[(1)] = (39));

} else {
var statearr_11541_11600 = state_11463__$1;
(statearr_11541_11600[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11464 === (8))){
var inst_11342 = (state_11463[(13)]);
var inst_11343 = (state_11463[(14)]);
var inst_11345 = (inst_11343 < inst_11342);
var inst_11346 = inst_11345;
var state_11463__$1 = state_11463;
if(cljs.core.truth_(inst_11346)){
var statearr_11542_11601 = state_11463__$1;
(statearr_11542_11601[(1)] = (10));

} else {
var statearr_11543_11602 = state_11463__$1;
(statearr_11543_11602[(1)] = (11));

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
});})(c__10729__auto___11548,cs,m,dchan,dctr,done))
;
return ((function (switch__10634__auto__,c__10729__auto___11548,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10635__auto__ = null;
var cljs$core$async$mult_$_state_machine__10635__auto____0 = (function (){
var statearr_11544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11544[(0)] = cljs$core$async$mult_$_state_machine__10635__auto__);

(statearr_11544[(1)] = (1));

return statearr_11544;
});
var cljs$core$async$mult_$_state_machine__10635__auto____1 = (function (state_11463){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_11463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e11545){if((e11545 instanceof Object)){
var ex__10638__auto__ = e11545;
var statearr_11546_11603 = state_11463;
(statearr_11546_11603[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11604 = state_11463;
state_11463 = G__11604;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10635__auto__ = function(state_11463){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10635__auto____1.call(this,state_11463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10635__auto____0;
cljs$core$async$mult_$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10635__auto____1;
return cljs$core$async$mult_$_state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___11548,cs,m,dchan,dctr,done))
})();
var state__10731__auto__ = (function (){var statearr_11547 = f__10730__auto__.call(null);
(statearr_11547[(6)] = c__10729__auto___11548);

return statearr_11547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___11548,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__11606 = arguments.length;
switch (G__11606) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11618 = arguments.length;
var i__4731__auto___11619 = (0);
while(true){
if((i__4731__auto___11619 < len__4730__auto___11618)){
args__4736__auto__.push((arguments[i__4731__auto___11619]));

var G__11620 = (i__4731__auto___11619 + (1));
i__4731__auto___11619 = G__11620;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11612){
var map__11613 = p__11612;
var map__11613__$1 = (((((!((map__11613 == null))))?(((((map__11613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11613):map__11613);
var opts = map__11613__$1;
var statearr_11615_11621 = state;
(statearr_11615_11621[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__11613,map__11613__$1,opts){
return (function (val){
var statearr_11616_11622 = state;
(statearr_11616_11622[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11613,map__11613__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_11617_11623 = state;
(statearr_11617_11623[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11608){
var G__11609 = cljs.core.first.call(null,seq11608);
var seq11608__$1 = cljs.core.next.call(null,seq11608);
var G__11610 = cljs.core.first.call(null,seq11608__$1);
var seq11608__$2 = cljs.core.next.call(null,seq11608__$1);
var G__11611 = cljs.core.first.call(null,seq11608__$2);
var seq11608__$3 = cljs.core.next.call(null,seq11608__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11609,G__11610,G__11611,seq11608__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11624 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11625){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11625 = meta11625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11626,meta11625__$1){
var self__ = this;
var _11626__$1 = this;
return (new cljs.core.async.t_cljs$core$async11624(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11625__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11624.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11626){
var self__ = this;
var _11626__$1 = this;
return self__.meta11625;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11624.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11624.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11624.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11624.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11624.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11624.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11624.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11624.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11625","meta11625",-921011741,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11624";

cljs.core.async.t_cljs$core$async11624.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11624");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11624.
 */
cljs.core.async.__GT_t_cljs$core$async11624 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11624(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11625){
return (new cljs.core.async.t_cljs$core$async11624(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11625));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11624(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10729__auto___11788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___11788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___11788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11728){
var state_val_11729 = (state_11728[(1)]);
if((state_val_11729 === (7))){
var inst_11643 = (state_11728[(2)]);
var state_11728__$1 = state_11728;
var statearr_11730_11789 = state_11728__$1;
(statearr_11730_11789[(2)] = inst_11643);

(statearr_11730_11789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (20))){
var inst_11655 = (state_11728[(7)]);
var state_11728__$1 = state_11728;
var statearr_11731_11790 = state_11728__$1;
(statearr_11731_11790[(2)] = inst_11655);

(statearr_11731_11790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (27))){
var state_11728__$1 = state_11728;
var statearr_11732_11791 = state_11728__$1;
(statearr_11732_11791[(2)] = null);

(statearr_11732_11791[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (1))){
var inst_11630 = (state_11728[(8)]);
var inst_11630__$1 = calc_state.call(null);
var inst_11632 = (inst_11630__$1 == null);
var inst_11633 = cljs.core.not.call(null,inst_11632);
var state_11728__$1 = (function (){var statearr_11733 = state_11728;
(statearr_11733[(8)] = inst_11630__$1);

return statearr_11733;
})();
if(inst_11633){
var statearr_11734_11792 = state_11728__$1;
(statearr_11734_11792[(1)] = (2));

} else {
var statearr_11735_11793 = state_11728__$1;
(statearr_11735_11793[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (24))){
var inst_11688 = (state_11728[(9)]);
var inst_11702 = (state_11728[(10)]);
var inst_11679 = (state_11728[(11)]);
var inst_11702__$1 = inst_11679.call(null,inst_11688);
var state_11728__$1 = (function (){var statearr_11736 = state_11728;
(statearr_11736[(10)] = inst_11702__$1);

return statearr_11736;
})();
if(cljs.core.truth_(inst_11702__$1)){
var statearr_11737_11794 = state_11728__$1;
(statearr_11737_11794[(1)] = (29));

} else {
var statearr_11738_11795 = state_11728__$1;
(statearr_11738_11795[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (4))){
var inst_11646 = (state_11728[(2)]);
var state_11728__$1 = state_11728;
if(cljs.core.truth_(inst_11646)){
var statearr_11739_11796 = state_11728__$1;
(statearr_11739_11796[(1)] = (8));

} else {
var statearr_11740_11797 = state_11728__$1;
(statearr_11740_11797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (15))){
var inst_11673 = (state_11728[(2)]);
var state_11728__$1 = state_11728;
if(cljs.core.truth_(inst_11673)){
var statearr_11741_11798 = state_11728__$1;
(statearr_11741_11798[(1)] = (19));

} else {
var statearr_11742_11799 = state_11728__$1;
(statearr_11742_11799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (21))){
var inst_11678 = (state_11728[(12)]);
var inst_11678__$1 = (state_11728[(2)]);
var inst_11679 = cljs.core.get.call(null,inst_11678__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11680 = cljs.core.get.call(null,inst_11678__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11681 = cljs.core.get.call(null,inst_11678__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11728__$1 = (function (){var statearr_11743 = state_11728;
(statearr_11743[(13)] = inst_11680);

(statearr_11743[(12)] = inst_11678__$1);

(statearr_11743[(11)] = inst_11679);

return statearr_11743;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11728__$1,(22),inst_11681);
} else {
if((state_val_11729 === (31))){
var inst_11710 = (state_11728[(2)]);
var state_11728__$1 = state_11728;
if(cljs.core.truth_(inst_11710)){
var statearr_11744_11800 = state_11728__$1;
(statearr_11744_11800[(1)] = (32));

} else {
var statearr_11745_11801 = state_11728__$1;
(statearr_11745_11801[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (32))){
var inst_11687 = (state_11728[(14)]);
var state_11728__$1 = state_11728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11728__$1,(35),out,inst_11687);
} else {
if((state_val_11729 === (33))){
var inst_11678 = (state_11728[(12)]);
var inst_11655 = inst_11678;
var state_11728__$1 = (function (){var statearr_11746 = state_11728;
(statearr_11746[(7)] = inst_11655);

return statearr_11746;
})();
var statearr_11747_11802 = state_11728__$1;
(statearr_11747_11802[(2)] = null);

(statearr_11747_11802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (13))){
var inst_11655 = (state_11728[(7)]);
var inst_11662 = inst_11655.cljs$lang$protocol_mask$partition0$;
var inst_11663 = (inst_11662 & (64));
var inst_11664 = inst_11655.cljs$core$ISeq$;
var inst_11665 = (cljs.core.PROTOCOL_SENTINEL === inst_11664);
var inst_11666 = ((inst_11663) || (inst_11665));
var state_11728__$1 = state_11728;
if(cljs.core.truth_(inst_11666)){
var statearr_11748_11803 = state_11728__$1;
(statearr_11748_11803[(1)] = (16));

} else {
var statearr_11749_11804 = state_11728__$1;
(statearr_11749_11804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (22))){
var inst_11688 = (state_11728[(9)]);
var inst_11687 = (state_11728[(14)]);
var inst_11686 = (state_11728[(2)]);
var inst_11687__$1 = cljs.core.nth.call(null,inst_11686,(0),null);
var inst_11688__$1 = cljs.core.nth.call(null,inst_11686,(1),null);
var inst_11689 = (inst_11687__$1 == null);
var inst_11690 = cljs.core._EQ_.call(null,inst_11688__$1,change);
var inst_11691 = ((inst_11689) || (inst_11690));
var state_11728__$1 = (function (){var statearr_11750 = state_11728;
(statearr_11750[(9)] = inst_11688__$1);

(statearr_11750[(14)] = inst_11687__$1);

return statearr_11750;
})();
if(cljs.core.truth_(inst_11691)){
var statearr_11751_11805 = state_11728__$1;
(statearr_11751_11805[(1)] = (23));

} else {
var statearr_11752_11806 = state_11728__$1;
(statearr_11752_11806[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (36))){
var inst_11678 = (state_11728[(12)]);
var inst_11655 = inst_11678;
var state_11728__$1 = (function (){var statearr_11753 = state_11728;
(statearr_11753[(7)] = inst_11655);

return statearr_11753;
})();
var statearr_11754_11807 = state_11728__$1;
(statearr_11754_11807[(2)] = null);

(statearr_11754_11807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (29))){
var inst_11702 = (state_11728[(10)]);
var state_11728__$1 = state_11728;
var statearr_11755_11808 = state_11728__$1;
(statearr_11755_11808[(2)] = inst_11702);

(statearr_11755_11808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (6))){
var state_11728__$1 = state_11728;
var statearr_11756_11809 = state_11728__$1;
(statearr_11756_11809[(2)] = false);

(statearr_11756_11809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (28))){
var inst_11698 = (state_11728[(2)]);
var inst_11699 = calc_state.call(null);
var inst_11655 = inst_11699;
var state_11728__$1 = (function (){var statearr_11757 = state_11728;
(statearr_11757[(15)] = inst_11698);

(statearr_11757[(7)] = inst_11655);

return statearr_11757;
})();
var statearr_11758_11810 = state_11728__$1;
(statearr_11758_11810[(2)] = null);

(statearr_11758_11810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (25))){
var inst_11724 = (state_11728[(2)]);
var state_11728__$1 = state_11728;
var statearr_11759_11811 = state_11728__$1;
(statearr_11759_11811[(2)] = inst_11724);

(statearr_11759_11811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (34))){
var inst_11722 = (state_11728[(2)]);
var state_11728__$1 = state_11728;
var statearr_11760_11812 = state_11728__$1;
(statearr_11760_11812[(2)] = inst_11722);

(statearr_11760_11812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (17))){
var state_11728__$1 = state_11728;
var statearr_11761_11813 = state_11728__$1;
(statearr_11761_11813[(2)] = false);

(statearr_11761_11813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (3))){
var state_11728__$1 = state_11728;
var statearr_11762_11814 = state_11728__$1;
(statearr_11762_11814[(2)] = false);

(statearr_11762_11814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (12))){
var inst_11726 = (state_11728[(2)]);
var state_11728__$1 = state_11728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11728__$1,inst_11726);
} else {
if((state_val_11729 === (2))){
var inst_11630 = (state_11728[(8)]);
var inst_11635 = inst_11630.cljs$lang$protocol_mask$partition0$;
var inst_11636 = (inst_11635 & (64));
var inst_11637 = inst_11630.cljs$core$ISeq$;
var inst_11638 = (cljs.core.PROTOCOL_SENTINEL === inst_11637);
var inst_11639 = ((inst_11636) || (inst_11638));
var state_11728__$1 = state_11728;
if(cljs.core.truth_(inst_11639)){
var statearr_11763_11815 = state_11728__$1;
(statearr_11763_11815[(1)] = (5));

} else {
var statearr_11764_11816 = state_11728__$1;
(statearr_11764_11816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (23))){
var inst_11687 = (state_11728[(14)]);
var inst_11693 = (inst_11687 == null);
var state_11728__$1 = state_11728;
if(cljs.core.truth_(inst_11693)){
var statearr_11765_11817 = state_11728__$1;
(statearr_11765_11817[(1)] = (26));

} else {
var statearr_11766_11818 = state_11728__$1;
(statearr_11766_11818[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (35))){
var inst_11713 = (state_11728[(2)]);
var state_11728__$1 = state_11728;
if(cljs.core.truth_(inst_11713)){
var statearr_11767_11819 = state_11728__$1;
(statearr_11767_11819[(1)] = (36));

} else {
var statearr_11768_11820 = state_11728__$1;
(statearr_11768_11820[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (19))){
var inst_11655 = (state_11728[(7)]);
var inst_11675 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11655);
var state_11728__$1 = state_11728;
var statearr_11769_11821 = state_11728__$1;
(statearr_11769_11821[(2)] = inst_11675);

(statearr_11769_11821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (11))){
var inst_11655 = (state_11728[(7)]);
var inst_11659 = (inst_11655 == null);
var inst_11660 = cljs.core.not.call(null,inst_11659);
var state_11728__$1 = state_11728;
if(inst_11660){
var statearr_11770_11822 = state_11728__$1;
(statearr_11770_11822[(1)] = (13));

} else {
var statearr_11771_11823 = state_11728__$1;
(statearr_11771_11823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (9))){
var inst_11630 = (state_11728[(8)]);
var state_11728__$1 = state_11728;
var statearr_11772_11824 = state_11728__$1;
(statearr_11772_11824[(2)] = inst_11630);

(statearr_11772_11824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (5))){
var state_11728__$1 = state_11728;
var statearr_11773_11825 = state_11728__$1;
(statearr_11773_11825[(2)] = true);

(statearr_11773_11825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (14))){
var state_11728__$1 = state_11728;
var statearr_11774_11826 = state_11728__$1;
(statearr_11774_11826[(2)] = false);

(statearr_11774_11826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (26))){
var inst_11688 = (state_11728[(9)]);
var inst_11695 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11688);
var state_11728__$1 = state_11728;
var statearr_11775_11827 = state_11728__$1;
(statearr_11775_11827[(2)] = inst_11695);

(statearr_11775_11827[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (16))){
var state_11728__$1 = state_11728;
var statearr_11776_11828 = state_11728__$1;
(statearr_11776_11828[(2)] = true);

(statearr_11776_11828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (38))){
var inst_11718 = (state_11728[(2)]);
var state_11728__$1 = state_11728;
var statearr_11777_11829 = state_11728__$1;
(statearr_11777_11829[(2)] = inst_11718);

(statearr_11777_11829[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (30))){
var inst_11688 = (state_11728[(9)]);
var inst_11680 = (state_11728[(13)]);
var inst_11679 = (state_11728[(11)]);
var inst_11705 = cljs.core.empty_QMARK_.call(null,inst_11679);
var inst_11706 = inst_11680.call(null,inst_11688);
var inst_11707 = cljs.core.not.call(null,inst_11706);
var inst_11708 = ((inst_11705) && (inst_11707));
var state_11728__$1 = state_11728;
var statearr_11778_11830 = state_11728__$1;
(statearr_11778_11830[(2)] = inst_11708);

(statearr_11778_11830[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (10))){
var inst_11630 = (state_11728[(8)]);
var inst_11651 = (state_11728[(2)]);
var inst_11652 = cljs.core.get.call(null,inst_11651,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11653 = cljs.core.get.call(null,inst_11651,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11654 = cljs.core.get.call(null,inst_11651,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11655 = inst_11630;
var state_11728__$1 = (function (){var statearr_11779 = state_11728;
(statearr_11779[(16)] = inst_11652);

(statearr_11779[(17)] = inst_11654);

(statearr_11779[(7)] = inst_11655);

(statearr_11779[(18)] = inst_11653);

return statearr_11779;
})();
var statearr_11780_11831 = state_11728__$1;
(statearr_11780_11831[(2)] = null);

(statearr_11780_11831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (18))){
var inst_11670 = (state_11728[(2)]);
var state_11728__$1 = state_11728;
var statearr_11781_11832 = state_11728__$1;
(statearr_11781_11832[(2)] = inst_11670);

(statearr_11781_11832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (37))){
var state_11728__$1 = state_11728;
var statearr_11782_11833 = state_11728__$1;
(statearr_11782_11833[(2)] = null);

(statearr_11782_11833[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11729 === (8))){
var inst_11630 = (state_11728[(8)]);
var inst_11648 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11630);
var state_11728__$1 = state_11728;
var statearr_11783_11834 = state_11728__$1;
(statearr_11783_11834[(2)] = inst_11648);

(statearr_11783_11834[(1)] = (10));


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
});})(c__10729__auto___11788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10634__auto__,c__10729__auto___11788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10635__auto__ = null;
var cljs$core$async$mix_$_state_machine__10635__auto____0 = (function (){
var statearr_11784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11784[(0)] = cljs$core$async$mix_$_state_machine__10635__auto__);

(statearr_11784[(1)] = (1));

return statearr_11784;
});
var cljs$core$async$mix_$_state_machine__10635__auto____1 = (function (state_11728){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_11728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e11785){if((e11785 instanceof Object)){
var ex__10638__auto__ = e11785;
var statearr_11786_11835 = state_11728;
(statearr_11786_11835[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11836 = state_11728;
state_11728 = G__11836;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10635__auto__ = function(state_11728){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10635__auto____1.call(this,state_11728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10635__auto____0;
cljs$core$async$mix_$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10635__auto____1;
return cljs$core$async$mix_$_state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___11788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10731__auto__ = (function (){var statearr_11787 = f__10730__auto__.call(null);
(statearr_11787[(6)] = c__10729__auto___11788);

return statearr_11787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___11788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11838 = arguments.length;
switch (G__11838) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__11842 = arguments.length;
switch (G__11842) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__11840_SHARP_){
if(cljs.core.truth_(p1__11840_SHARP_.call(null,topic))){
return p1__11840_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11840_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11843 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11844){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11844 = meta11844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11845,meta11844__$1){
var self__ = this;
var _11845__$1 = this;
return (new cljs.core.async.t_cljs$core$async11843(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11844__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11845){
var self__ = this;
var _11845__$1 = this;
return self__.meta11844;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11843.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11843.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11843.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11843.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11843.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11843.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11844","meta11844",96938477,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11843";

cljs.core.async.t_cljs$core$async11843.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async11843");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11843.
 */
cljs.core.async.__GT_t_cljs$core$async11843 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11844){
return (new cljs.core.async.t_cljs$core$async11843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11844));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11843(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10729__auto___11963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___11963,mults,ensure_mult,p){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___11963,mults,ensure_mult,p){
return (function (state_11917){
var state_val_11918 = (state_11917[(1)]);
if((state_val_11918 === (7))){
var inst_11913 = (state_11917[(2)]);
var state_11917__$1 = state_11917;
var statearr_11919_11964 = state_11917__$1;
(statearr_11919_11964[(2)] = inst_11913);

(statearr_11919_11964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (20))){
var state_11917__$1 = state_11917;
var statearr_11920_11965 = state_11917__$1;
(statearr_11920_11965[(2)] = null);

(statearr_11920_11965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (1))){
var state_11917__$1 = state_11917;
var statearr_11921_11966 = state_11917__$1;
(statearr_11921_11966[(2)] = null);

(statearr_11921_11966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (24))){
var inst_11896 = (state_11917[(7)]);
var inst_11905 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11896);
var state_11917__$1 = state_11917;
var statearr_11922_11967 = state_11917__$1;
(statearr_11922_11967[(2)] = inst_11905);

(statearr_11922_11967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (4))){
var inst_11848 = (state_11917[(8)]);
var inst_11848__$1 = (state_11917[(2)]);
var inst_11849 = (inst_11848__$1 == null);
var state_11917__$1 = (function (){var statearr_11923 = state_11917;
(statearr_11923[(8)] = inst_11848__$1);

return statearr_11923;
})();
if(cljs.core.truth_(inst_11849)){
var statearr_11924_11968 = state_11917__$1;
(statearr_11924_11968[(1)] = (5));

} else {
var statearr_11925_11969 = state_11917__$1;
(statearr_11925_11969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (15))){
var inst_11890 = (state_11917[(2)]);
var state_11917__$1 = state_11917;
var statearr_11926_11970 = state_11917__$1;
(statearr_11926_11970[(2)] = inst_11890);

(statearr_11926_11970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (21))){
var inst_11910 = (state_11917[(2)]);
var state_11917__$1 = (function (){var statearr_11927 = state_11917;
(statearr_11927[(9)] = inst_11910);

return statearr_11927;
})();
var statearr_11928_11971 = state_11917__$1;
(statearr_11928_11971[(2)] = null);

(statearr_11928_11971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (13))){
var inst_11872 = (state_11917[(10)]);
var inst_11874 = cljs.core.chunked_seq_QMARK_.call(null,inst_11872);
var state_11917__$1 = state_11917;
if(inst_11874){
var statearr_11929_11972 = state_11917__$1;
(statearr_11929_11972[(1)] = (16));

} else {
var statearr_11930_11973 = state_11917__$1;
(statearr_11930_11973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (22))){
var inst_11902 = (state_11917[(2)]);
var state_11917__$1 = state_11917;
if(cljs.core.truth_(inst_11902)){
var statearr_11931_11974 = state_11917__$1;
(statearr_11931_11974[(1)] = (23));

} else {
var statearr_11932_11975 = state_11917__$1;
(statearr_11932_11975[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (6))){
var inst_11898 = (state_11917[(11)]);
var inst_11896 = (state_11917[(7)]);
var inst_11848 = (state_11917[(8)]);
var inst_11896__$1 = topic_fn.call(null,inst_11848);
var inst_11897 = cljs.core.deref.call(null,mults);
var inst_11898__$1 = cljs.core.get.call(null,inst_11897,inst_11896__$1);
var state_11917__$1 = (function (){var statearr_11933 = state_11917;
(statearr_11933[(11)] = inst_11898__$1);

(statearr_11933[(7)] = inst_11896__$1);

return statearr_11933;
})();
if(cljs.core.truth_(inst_11898__$1)){
var statearr_11934_11976 = state_11917__$1;
(statearr_11934_11976[(1)] = (19));

} else {
var statearr_11935_11977 = state_11917__$1;
(statearr_11935_11977[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (25))){
var inst_11907 = (state_11917[(2)]);
var state_11917__$1 = state_11917;
var statearr_11936_11978 = state_11917__$1;
(statearr_11936_11978[(2)] = inst_11907);

(statearr_11936_11978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (17))){
var inst_11872 = (state_11917[(10)]);
var inst_11881 = cljs.core.first.call(null,inst_11872);
var inst_11882 = cljs.core.async.muxch_STAR_.call(null,inst_11881);
var inst_11883 = cljs.core.async.close_BANG_.call(null,inst_11882);
var inst_11884 = cljs.core.next.call(null,inst_11872);
var inst_11858 = inst_11884;
var inst_11859 = null;
var inst_11860 = (0);
var inst_11861 = (0);
var state_11917__$1 = (function (){var statearr_11937 = state_11917;
(statearr_11937[(12)] = inst_11858);

(statearr_11937[(13)] = inst_11860);

(statearr_11937[(14)] = inst_11861);

(statearr_11937[(15)] = inst_11859);

(statearr_11937[(16)] = inst_11883);

return statearr_11937;
})();
var statearr_11938_11979 = state_11917__$1;
(statearr_11938_11979[(2)] = null);

(statearr_11938_11979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (3))){
var inst_11915 = (state_11917[(2)]);
var state_11917__$1 = state_11917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11917__$1,inst_11915);
} else {
if((state_val_11918 === (12))){
var inst_11892 = (state_11917[(2)]);
var state_11917__$1 = state_11917;
var statearr_11939_11980 = state_11917__$1;
(statearr_11939_11980[(2)] = inst_11892);

(statearr_11939_11980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (2))){
var state_11917__$1 = state_11917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11917__$1,(4),ch);
} else {
if((state_val_11918 === (23))){
var state_11917__$1 = state_11917;
var statearr_11940_11981 = state_11917__$1;
(statearr_11940_11981[(2)] = null);

(statearr_11940_11981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (19))){
var inst_11898 = (state_11917[(11)]);
var inst_11848 = (state_11917[(8)]);
var inst_11900 = cljs.core.async.muxch_STAR_.call(null,inst_11898);
var state_11917__$1 = state_11917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11917__$1,(22),inst_11900,inst_11848);
} else {
if((state_val_11918 === (11))){
var inst_11858 = (state_11917[(12)]);
var inst_11872 = (state_11917[(10)]);
var inst_11872__$1 = cljs.core.seq.call(null,inst_11858);
var state_11917__$1 = (function (){var statearr_11941 = state_11917;
(statearr_11941[(10)] = inst_11872__$1);

return statearr_11941;
})();
if(inst_11872__$1){
var statearr_11942_11982 = state_11917__$1;
(statearr_11942_11982[(1)] = (13));

} else {
var statearr_11943_11983 = state_11917__$1;
(statearr_11943_11983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (9))){
var inst_11894 = (state_11917[(2)]);
var state_11917__$1 = state_11917;
var statearr_11944_11984 = state_11917__$1;
(statearr_11944_11984[(2)] = inst_11894);

(statearr_11944_11984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (5))){
var inst_11855 = cljs.core.deref.call(null,mults);
var inst_11856 = cljs.core.vals.call(null,inst_11855);
var inst_11857 = cljs.core.seq.call(null,inst_11856);
var inst_11858 = inst_11857;
var inst_11859 = null;
var inst_11860 = (0);
var inst_11861 = (0);
var state_11917__$1 = (function (){var statearr_11945 = state_11917;
(statearr_11945[(12)] = inst_11858);

(statearr_11945[(13)] = inst_11860);

(statearr_11945[(14)] = inst_11861);

(statearr_11945[(15)] = inst_11859);

return statearr_11945;
})();
var statearr_11946_11985 = state_11917__$1;
(statearr_11946_11985[(2)] = null);

(statearr_11946_11985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (14))){
var state_11917__$1 = state_11917;
var statearr_11950_11986 = state_11917__$1;
(statearr_11950_11986[(2)] = null);

(statearr_11950_11986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (16))){
var inst_11872 = (state_11917[(10)]);
var inst_11876 = cljs.core.chunk_first.call(null,inst_11872);
var inst_11877 = cljs.core.chunk_rest.call(null,inst_11872);
var inst_11878 = cljs.core.count.call(null,inst_11876);
var inst_11858 = inst_11877;
var inst_11859 = inst_11876;
var inst_11860 = inst_11878;
var inst_11861 = (0);
var state_11917__$1 = (function (){var statearr_11951 = state_11917;
(statearr_11951[(12)] = inst_11858);

(statearr_11951[(13)] = inst_11860);

(statearr_11951[(14)] = inst_11861);

(statearr_11951[(15)] = inst_11859);

return statearr_11951;
})();
var statearr_11952_11987 = state_11917__$1;
(statearr_11952_11987[(2)] = null);

(statearr_11952_11987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (10))){
var inst_11858 = (state_11917[(12)]);
var inst_11860 = (state_11917[(13)]);
var inst_11861 = (state_11917[(14)]);
var inst_11859 = (state_11917[(15)]);
var inst_11866 = cljs.core._nth.call(null,inst_11859,inst_11861);
var inst_11867 = cljs.core.async.muxch_STAR_.call(null,inst_11866);
var inst_11868 = cljs.core.async.close_BANG_.call(null,inst_11867);
var inst_11869 = (inst_11861 + (1));
var tmp11947 = inst_11858;
var tmp11948 = inst_11860;
var tmp11949 = inst_11859;
var inst_11858__$1 = tmp11947;
var inst_11859__$1 = tmp11949;
var inst_11860__$1 = tmp11948;
var inst_11861__$1 = inst_11869;
var state_11917__$1 = (function (){var statearr_11953 = state_11917;
(statearr_11953[(12)] = inst_11858__$1);

(statearr_11953[(13)] = inst_11860__$1);

(statearr_11953[(17)] = inst_11868);

(statearr_11953[(14)] = inst_11861__$1);

(statearr_11953[(15)] = inst_11859__$1);

return statearr_11953;
})();
var statearr_11954_11988 = state_11917__$1;
(statearr_11954_11988[(2)] = null);

(statearr_11954_11988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (18))){
var inst_11887 = (state_11917[(2)]);
var state_11917__$1 = state_11917;
var statearr_11955_11989 = state_11917__$1;
(statearr_11955_11989[(2)] = inst_11887);

(statearr_11955_11989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11918 === (8))){
var inst_11860 = (state_11917[(13)]);
var inst_11861 = (state_11917[(14)]);
var inst_11863 = (inst_11861 < inst_11860);
var inst_11864 = inst_11863;
var state_11917__$1 = state_11917;
if(cljs.core.truth_(inst_11864)){
var statearr_11956_11990 = state_11917__$1;
(statearr_11956_11990[(1)] = (10));

} else {
var statearr_11957_11991 = state_11917__$1;
(statearr_11957_11991[(1)] = (11));

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
});})(c__10729__auto___11963,mults,ensure_mult,p))
;
return ((function (switch__10634__auto__,c__10729__auto___11963,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_11958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11958[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_11958[(1)] = (1));

return statearr_11958;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_11917){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_11917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e11959){if((e11959 instanceof Object)){
var ex__10638__auto__ = e11959;
var statearr_11960_11992 = state_11917;
(statearr_11960_11992[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11993 = state_11917;
state_11917 = G__11993;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_11917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_11917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___11963,mults,ensure_mult,p))
})();
var state__10731__auto__ = (function (){var statearr_11961 = f__10730__auto__.call(null);
(statearr_11961[(6)] = c__10729__auto___11963);

return statearr_11961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___11963,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__11995 = arguments.length;
switch (G__11995) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11998 = arguments.length;
switch (G__11998) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__12001 = arguments.length;
switch (G__12001) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10729__auto___12068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___12068,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___12068,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12040){
var state_val_12041 = (state_12040[(1)]);
if((state_val_12041 === (7))){
var state_12040__$1 = state_12040;
var statearr_12042_12069 = state_12040__$1;
(statearr_12042_12069[(2)] = null);

(statearr_12042_12069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (1))){
var state_12040__$1 = state_12040;
var statearr_12043_12070 = state_12040__$1;
(statearr_12043_12070[(2)] = null);

(statearr_12043_12070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (4))){
var inst_12004 = (state_12040[(7)]);
var inst_12006 = (inst_12004 < cnt);
var state_12040__$1 = state_12040;
if(cljs.core.truth_(inst_12006)){
var statearr_12044_12071 = state_12040__$1;
(statearr_12044_12071[(1)] = (6));

} else {
var statearr_12045_12072 = state_12040__$1;
(statearr_12045_12072[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (15))){
var inst_12036 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
var statearr_12046_12073 = state_12040__$1;
(statearr_12046_12073[(2)] = inst_12036);

(statearr_12046_12073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (13))){
var inst_12029 = cljs.core.async.close_BANG_.call(null,out);
var state_12040__$1 = state_12040;
var statearr_12047_12074 = state_12040__$1;
(statearr_12047_12074[(2)] = inst_12029);

(statearr_12047_12074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (6))){
var state_12040__$1 = state_12040;
var statearr_12048_12075 = state_12040__$1;
(statearr_12048_12075[(2)] = null);

(statearr_12048_12075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (3))){
var inst_12038 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12040__$1,inst_12038);
} else {
if((state_val_12041 === (12))){
var inst_12026 = (state_12040[(8)]);
var inst_12026__$1 = (state_12040[(2)]);
var inst_12027 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12026__$1);
var state_12040__$1 = (function (){var statearr_12049 = state_12040;
(statearr_12049[(8)] = inst_12026__$1);

return statearr_12049;
})();
if(cljs.core.truth_(inst_12027)){
var statearr_12050_12076 = state_12040__$1;
(statearr_12050_12076[(1)] = (13));

} else {
var statearr_12051_12077 = state_12040__$1;
(statearr_12051_12077[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (2))){
var inst_12003 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12004 = (0);
var state_12040__$1 = (function (){var statearr_12052 = state_12040;
(statearr_12052[(7)] = inst_12004);

(statearr_12052[(9)] = inst_12003);

return statearr_12052;
})();
var statearr_12053_12078 = state_12040__$1;
(statearr_12053_12078[(2)] = null);

(statearr_12053_12078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (11))){
var inst_12004 = (state_12040[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12040,(10),Object,null,(9));
var inst_12013 = chs__$1.call(null,inst_12004);
var inst_12014 = done.call(null,inst_12004);
var inst_12015 = cljs.core.async.take_BANG_.call(null,inst_12013,inst_12014);
var state_12040__$1 = state_12040;
var statearr_12054_12079 = state_12040__$1;
(statearr_12054_12079[(2)] = inst_12015);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12040__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (9))){
var inst_12004 = (state_12040[(7)]);
var inst_12017 = (state_12040[(2)]);
var inst_12018 = (inst_12004 + (1));
var inst_12004__$1 = inst_12018;
var state_12040__$1 = (function (){var statearr_12055 = state_12040;
(statearr_12055[(10)] = inst_12017);

(statearr_12055[(7)] = inst_12004__$1);

return statearr_12055;
})();
var statearr_12056_12080 = state_12040__$1;
(statearr_12056_12080[(2)] = null);

(statearr_12056_12080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (5))){
var inst_12024 = (state_12040[(2)]);
var state_12040__$1 = (function (){var statearr_12057 = state_12040;
(statearr_12057[(11)] = inst_12024);

return statearr_12057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12040__$1,(12),dchan);
} else {
if((state_val_12041 === (14))){
var inst_12026 = (state_12040[(8)]);
var inst_12031 = cljs.core.apply.call(null,f,inst_12026);
var state_12040__$1 = state_12040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12040__$1,(16),out,inst_12031);
} else {
if((state_val_12041 === (16))){
var inst_12033 = (state_12040[(2)]);
var state_12040__$1 = (function (){var statearr_12058 = state_12040;
(statearr_12058[(12)] = inst_12033);

return statearr_12058;
})();
var statearr_12059_12081 = state_12040__$1;
(statearr_12059_12081[(2)] = null);

(statearr_12059_12081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (10))){
var inst_12008 = (state_12040[(2)]);
var inst_12009 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12040__$1 = (function (){var statearr_12060 = state_12040;
(statearr_12060[(13)] = inst_12008);

return statearr_12060;
})();
var statearr_12061_12082 = state_12040__$1;
(statearr_12061_12082[(2)] = inst_12009);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12040__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (8))){
var inst_12022 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
var statearr_12062_12083 = state_12040__$1;
(statearr_12062_12083[(2)] = inst_12022);

(statearr_12062_12083[(1)] = (5));


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
});})(c__10729__auto___12068,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10634__auto__,c__10729__auto___12068,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_12063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12063[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_12063[(1)] = (1));

return statearr_12063;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_12040){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_12040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e12064){if((e12064 instanceof Object)){
var ex__10638__auto__ = e12064;
var statearr_12065_12084 = state_12040;
(statearr_12065_12084[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12085 = state_12040;
state_12040 = G__12085;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_12040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_12040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___12068,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10731__auto__ = (function (){var statearr_12066 = f__10730__auto__.call(null);
(statearr_12066[(6)] = c__10729__auto___12068);

return statearr_12066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___12068,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__12088 = arguments.length;
switch (G__12088) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10729__auto___12142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___12142,out){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___12142,out){
return (function (state_12120){
var state_val_12121 = (state_12120[(1)]);
if((state_val_12121 === (7))){
var inst_12099 = (state_12120[(7)]);
var inst_12100 = (state_12120[(8)]);
var inst_12099__$1 = (state_12120[(2)]);
var inst_12100__$1 = cljs.core.nth.call(null,inst_12099__$1,(0),null);
var inst_12101 = cljs.core.nth.call(null,inst_12099__$1,(1),null);
var inst_12102 = (inst_12100__$1 == null);
var state_12120__$1 = (function (){var statearr_12122 = state_12120;
(statearr_12122[(7)] = inst_12099__$1);

(statearr_12122[(8)] = inst_12100__$1);

(statearr_12122[(9)] = inst_12101);

return statearr_12122;
})();
if(cljs.core.truth_(inst_12102)){
var statearr_12123_12143 = state_12120__$1;
(statearr_12123_12143[(1)] = (8));

} else {
var statearr_12124_12144 = state_12120__$1;
(statearr_12124_12144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12121 === (1))){
var inst_12089 = cljs.core.vec.call(null,chs);
var inst_12090 = inst_12089;
var state_12120__$1 = (function (){var statearr_12125 = state_12120;
(statearr_12125[(10)] = inst_12090);

return statearr_12125;
})();
var statearr_12126_12145 = state_12120__$1;
(statearr_12126_12145[(2)] = null);

(statearr_12126_12145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12121 === (4))){
var inst_12090 = (state_12120[(10)]);
var state_12120__$1 = state_12120;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12120__$1,(7),inst_12090);
} else {
if((state_val_12121 === (6))){
var inst_12116 = (state_12120[(2)]);
var state_12120__$1 = state_12120;
var statearr_12127_12146 = state_12120__$1;
(statearr_12127_12146[(2)] = inst_12116);

(statearr_12127_12146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12121 === (3))){
var inst_12118 = (state_12120[(2)]);
var state_12120__$1 = state_12120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12120__$1,inst_12118);
} else {
if((state_val_12121 === (2))){
var inst_12090 = (state_12120[(10)]);
var inst_12092 = cljs.core.count.call(null,inst_12090);
var inst_12093 = (inst_12092 > (0));
var state_12120__$1 = state_12120;
if(cljs.core.truth_(inst_12093)){
var statearr_12129_12147 = state_12120__$1;
(statearr_12129_12147[(1)] = (4));

} else {
var statearr_12130_12148 = state_12120__$1;
(statearr_12130_12148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12121 === (11))){
var inst_12090 = (state_12120[(10)]);
var inst_12109 = (state_12120[(2)]);
var tmp12128 = inst_12090;
var inst_12090__$1 = tmp12128;
var state_12120__$1 = (function (){var statearr_12131 = state_12120;
(statearr_12131[(11)] = inst_12109);

(statearr_12131[(10)] = inst_12090__$1);

return statearr_12131;
})();
var statearr_12132_12149 = state_12120__$1;
(statearr_12132_12149[(2)] = null);

(statearr_12132_12149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12121 === (9))){
var inst_12100 = (state_12120[(8)]);
var state_12120__$1 = state_12120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12120__$1,(11),out,inst_12100);
} else {
if((state_val_12121 === (5))){
var inst_12114 = cljs.core.async.close_BANG_.call(null,out);
var state_12120__$1 = state_12120;
var statearr_12133_12150 = state_12120__$1;
(statearr_12133_12150[(2)] = inst_12114);

(statearr_12133_12150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12121 === (10))){
var inst_12112 = (state_12120[(2)]);
var state_12120__$1 = state_12120;
var statearr_12134_12151 = state_12120__$1;
(statearr_12134_12151[(2)] = inst_12112);

(statearr_12134_12151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12121 === (8))){
var inst_12099 = (state_12120[(7)]);
var inst_12100 = (state_12120[(8)]);
var inst_12101 = (state_12120[(9)]);
var inst_12090 = (state_12120[(10)]);
var inst_12104 = (function (){var cs = inst_12090;
var vec__12095 = inst_12099;
var v = inst_12100;
var c = inst_12101;
return ((function (cs,vec__12095,v,c,inst_12099,inst_12100,inst_12101,inst_12090,state_val_12121,c__10729__auto___12142,out){
return (function (p1__12086_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12086_SHARP_);
});
;})(cs,vec__12095,v,c,inst_12099,inst_12100,inst_12101,inst_12090,state_val_12121,c__10729__auto___12142,out))
})();
var inst_12105 = cljs.core.filterv.call(null,inst_12104,inst_12090);
var inst_12090__$1 = inst_12105;
var state_12120__$1 = (function (){var statearr_12135 = state_12120;
(statearr_12135[(10)] = inst_12090__$1);

return statearr_12135;
})();
var statearr_12136_12152 = state_12120__$1;
(statearr_12136_12152[(2)] = null);

(statearr_12136_12152[(1)] = (2));


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
});})(c__10729__auto___12142,out))
;
return ((function (switch__10634__auto__,c__10729__auto___12142,out){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_12137 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12137[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_12137[(1)] = (1));

return statearr_12137;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_12120){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_12120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e12138){if((e12138 instanceof Object)){
var ex__10638__auto__ = e12138;
var statearr_12139_12153 = state_12120;
(statearr_12139_12153[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12154 = state_12120;
state_12120 = G__12154;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_12120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_12120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___12142,out))
})();
var state__10731__auto__ = (function (){var statearr_12140 = f__10730__auto__.call(null);
(statearr_12140[(6)] = c__10729__auto___12142);

return statearr_12140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___12142,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12156 = arguments.length;
switch (G__12156) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10729__auto___12201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___12201,out){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___12201,out){
return (function (state_12180){
var state_val_12181 = (state_12180[(1)]);
if((state_val_12181 === (7))){
var inst_12162 = (state_12180[(7)]);
var inst_12162__$1 = (state_12180[(2)]);
var inst_12163 = (inst_12162__$1 == null);
var inst_12164 = cljs.core.not.call(null,inst_12163);
var state_12180__$1 = (function (){var statearr_12182 = state_12180;
(statearr_12182[(7)] = inst_12162__$1);

return statearr_12182;
})();
if(inst_12164){
var statearr_12183_12202 = state_12180__$1;
(statearr_12183_12202[(1)] = (8));

} else {
var statearr_12184_12203 = state_12180__$1;
(statearr_12184_12203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (1))){
var inst_12157 = (0);
var state_12180__$1 = (function (){var statearr_12185 = state_12180;
(statearr_12185[(8)] = inst_12157);

return statearr_12185;
})();
var statearr_12186_12204 = state_12180__$1;
(statearr_12186_12204[(2)] = null);

(statearr_12186_12204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (4))){
var state_12180__$1 = state_12180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12180__$1,(7),ch);
} else {
if((state_val_12181 === (6))){
var inst_12175 = (state_12180[(2)]);
var state_12180__$1 = state_12180;
var statearr_12187_12205 = state_12180__$1;
(statearr_12187_12205[(2)] = inst_12175);

(statearr_12187_12205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (3))){
var inst_12177 = (state_12180[(2)]);
var inst_12178 = cljs.core.async.close_BANG_.call(null,out);
var state_12180__$1 = (function (){var statearr_12188 = state_12180;
(statearr_12188[(9)] = inst_12177);

return statearr_12188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12180__$1,inst_12178);
} else {
if((state_val_12181 === (2))){
var inst_12157 = (state_12180[(8)]);
var inst_12159 = (inst_12157 < n);
var state_12180__$1 = state_12180;
if(cljs.core.truth_(inst_12159)){
var statearr_12189_12206 = state_12180__$1;
(statearr_12189_12206[(1)] = (4));

} else {
var statearr_12190_12207 = state_12180__$1;
(statearr_12190_12207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (11))){
var inst_12157 = (state_12180[(8)]);
var inst_12167 = (state_12180[(2)]);
var inst_12168 = (inst_12157 + (1));
var inst_12157__$1 = inst_12168;
var state_12180__$1 = (function (){var statearr_12191 = state_12180;
(statearr_12191[(8)] = inst_12157__$1);

(statearr_12191[(10)] = inst_12167);

return statearr_12191;
})();
var statearr_12192_12208 = state_12180__$1;
(statearr_12192_12208[(2)] = null);

(statearr_12192_12208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (9))){
var state_12180__$1 = state_12180;
var statearr_12193_12209 = state_12180__$1;
(statearr_12193_12209[(2)] = null);

(statearr_12193_12209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (5))){
var state_12180__$1 = state_12180;
var statearr_12194_12210 = state_12180__$1;
(statearr_12194_12210[(2)] = null);

(statearr_12194_12210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (10))){
var inst_12172 = (state_12180[(2)]);
var state_12180__$1 = state_12180;
var statearr_12195_12211 = state_12180__$1;
(statearr_12195_12211[(2)] = inst_12172);

(statearr_12195_12211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12181 === (8))){
var inst_12162 = (state_12180[(7)]);
var state_12180__$1 = state_12180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12180__$1,(11),out,inst_12162);
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
});})(c__10729__auto___12201,out))
;
return ((function (switch__10634__auto__,c__10729__auto___12201,out){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_12196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12196[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_12196[(1)] = (1));

return statearr_12196;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_12180){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_12180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e12197){if((e12197 instanceof Object)){
var ex__10638__auto__ = e12197;
var statearr_12198_12212 = state_12180;
(statearr_12198_12212[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12213 = state_12180;
state_12180 = G__12213;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_12180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_12180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___12201,out))
})();
var state__10731__auto__ = (function (){var statearr_12199 = f__10730__auto__.call(null);
(statearr_12199[(6)] = c__10729__auto___12201);

return statearr_12199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___12201,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12215 = (function (f,ch,meta12216){
this.f = f;
this.ch = ch;
this.meta12216 = meta12216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12217,meta12216__$1){
var self__ = this;
var _12217__$1 = this;
return (new cljs.core.async.t_cljs$core$async12215(self__.f,self__.ch,meta12216__$1));
});

cljs.core.async.t_cljs$core$async12215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12217){
var self__ = this;
var _12217__$1 = this;
return self__.meta12216;
});

cljs.core.async.t_cljs$core$async12215.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12215.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12215.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12218 = (function (f,ch,meta12216,_,fn1,meta12219){
this.f = f;
this.ch = ch;
this.meta12216 = meta12216;
this._ = _;
this.fn1 = fn1;
this.meta12219 = meta12219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12220,meta12219__$1){
var self__ = this;
var _12220__$1 = this;
return (new cljs.core.async.t_cljs$core$async12218(self__.f,self__.ch,self__.meta12216,self__._,self__.fn1,meta12219__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12220){
var self__ = this;
var _12220__$1 = this;
return self__.meta12219;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12218.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12214_SHARP_){
return f1.call(null,(((p1__12214_SHARP_ == null))?null:self__.f.call(null,p1__12214_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12218.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12216","meta12216",-1579810232,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12215","cljs.core.async/t_cljs$core$async12215",321376018,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12219","meta12219",17145510,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12218";

cljs.core.async.t_cljs$core$async12218.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12218");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12218.
 */
cljs.core.async.__GT_t_cljs$core$async12218 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12218(f__$1,ch__$1,meta12216__$1,___$2,fn1__$1,meta12219){
return (new cljs.core.async.t_cljs$core$async12218(f__$1,ch__$1,meta12216__$1,___$2,fn1__$1,meta12219));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12218(self__.f,self__.ch,self__.meta12216,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12215.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12216","meta12216",-1579810232,null)], null);
});

cljs.core.async.t_cljs$core$async12215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12215";

cljs.core.async.t_cljs$core$async12215.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12215");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12215.
 */
cljs.core.async.__GT_t_cljs$core$async12215 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12215(f__$1,ch__$1,meta12216){
return (new cljs.core.async.t_cljs$core$async12215(f__$1,ch__$1,meta12216));
});

}

return (new cljs.core.async.t_cljs$core$async12215(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12221 = (function (f,ch,meta12222){
this.f = f;
this.ch = ch;
this.meta12222 = meta12222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12223,meta12222__$1){
var self__ = this;
var _12223__$1 = this;
return (new cljs.core.async.t_cljs$core$async12221(self__.f,self__.ch,meta12222__$1));
});

cljs.core.async.t_cljs$core$async12221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12223){
var self__ = this;
var _12223__$1 = this;
return self__.meta12222;
});

cljs.core.async.t_cljs$core$async12221.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12221.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12221.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12221.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12221.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12221.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12222","meta12222",1851335184,null)], null);
});

cljs.core.async.t_cljs$core$async12221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12221";

cljs.core.async.t_cljs$core$async12221.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12221");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12221.
 */
cljs.core.async.__GT_t_cljs$core$async12221 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12221(f__$1,ch__$1,meta12222){
return (new cljs.core.async.t_cljs$core$async12221(f__$1,ch__$1,meta12222));
});

}

return (new cljs.core.async.t_cljs$core$async12221(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12224 = (function (p,ch,meta12225){
this.p = p;
this.ch = ch;
this.meta12225 = meta12225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12226,meta12225__$1){
var self__ = this;
var _12226__$1 = this;
return (new cljs.core.async.t_cljs$core$async12224(self__.p,self__.ch,meta12225__$1));
});

cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12226){
var self__ = this;
var _12226__$1 = this;
return self__.meta12225;
});

cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12225","meta12225",-300409316,null)], null);
});

cljs.core.async.t_cljs$core$async12224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12224";

cljs.core.async.t_cljs$core$async12224.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async12224");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12224.
 */
cljs.core.async.__GT_t_cljs$core$async12224 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12224(p__$1,ch__$1,meta12225){
return (new cljs.core.async.t_cljs$core$async12224(p__$1,ch__$1,meta12225));
});

}

return (new cljs.core.async.t_cljs$core$async12224(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__12228 = arguments.length;
switch (G__12228) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10729__auto___12268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___12268,out){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___12268,out){
return (function (state_12249){
var state_val_12250 = (state_12249[(1)]);
if((state_val_12250 === (7))){
var inst_12245 = (state_12249[(2)]);
var state_12249__$1 = state_12249;
var statearr_12251_12269 = state_12249__$1;
(statearr_12251_12269[(2)] = inst_12245);

(statearr_12251_12269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (1))){
var state_12249__$1 = state_12249;
var statearr_12252_12270 = state_12249__$1;
(statearr_12252_12270[(2)] = null);

(statearr_12252_12270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (4))){
var inst_12231 = (state_12249[(7)]);
var inst_12231__$1 = (state_12249[(2)]);
var inst_12232 = (inst_12231__$1 == null);
var state_12249__$1 = (function (){var statearr_12253 = state_12249;
(statearr_12253[(7)] = inst_12231__$1);

return statearr_12253;
})();
if(cljs.core.truth_(inst_12232)){
var statearr_12254_12271 = state_12249__$1;
(statearr_12254_12271[(1)] = (5));

} else {
var statearr_12255_12272 = state_12249__$1;
(statearr_12255_12272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (6))){
var inst_12231 = (state_12249[(7)]);
var inst_12236 = p.call(null,inst_12231);
var state_12249__$1 = state_12249;
if(cljs.core.truth_(inst_12236)){
var statearr_12256_12273 = state_12249__$1;
(statearr_12256_12273[(1)] = (8));

} else {
var statearr_12257_12274 = state_12249__$1;
(statearr_12257_12274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (3))){
var inst_12247 = (state_12249[(2)]);
var state_12249__$1 = state_12249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12249__$1,inst_12247);
} else {
if((state_val_12250 === (2))){
var state_12249__$1 = state_12249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12249__$1,(4),ch);
} else {
if((state_val_12250 === (11))){
var inst_12239 = (state_12249[(2)]);
var state_12249__$1 = state_12249;
var statearr_12258_12275 = state_12249__$1;
(statearr_12258_12275[(2)] = inst_12239);

(statearr_12258_12275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (9))){
var state_12249__$1 = state_12249;
var statearr_12259_12276 = state_12249__$1;
(statearr_12259_12276[(2)] = null);

(statearr_12259_12276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (5))){
var inst_12234 = cljs.core.async.close_BANG_.call(null,out);
var state_12249__$1 = state_12249;
var statearr_12260_12277 = state_12249__$1;
(statearr_12260_12277[(2)] = inst_12234);

(statearr_12260_12277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (10))){
var inst_12242 = (state_12249[(2)]);
var state_12249__$1 = (function (){var statearr_12261 = state_12249;
(statearr_12261[(8)] = inst_12242);

return statearr_12261;
})();
var statearr_12262_12278 = state_12249__$1;
(statearr_12262_12278[(2)] = null);

(statearr_12262_12278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (8))){
var inst_12231 = (state_12249[(7)]);
var state_12249__$1 = state_12249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12249__$1,(11),out,inst_12231);
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
});})(c__10729__auto___12268,out))
;
return ((function (switch__10634__auto__,c__10729__auto___12268,out){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_12263 = [null,null,null,null,null,null,null,null,null];
(statearr_12263[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_12263[(1)] = (1));

return statearr_12263;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_12249){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_12249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e12264){if((e12264 instanceof Object)){
var ex__10638__auto__ = e12264;
var statearr_12265_12279 = state_12249;
(statearr_12265_12279[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12280 = state_12249;
state_12249 = G__12280;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_12249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_12249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___12268,out))
})();
var state__10731__auto__ = (function (){var statearr_12266 = f__10730__auto__.call(null);
(statearr_12266[(6)] = c__10729__auto___12268);

return statearr_12266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___12268,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12282 = arguments.length;
switch (G__12282) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto__){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto__){
return (function (state_12345){
var state_val_12346 = (state_12345[(1)]);
if((state_val_12346 === (7))){
var inst_12341 = (state_12345[(2)]);
var state_12345__$1 = state_12345;
var statearr_12347_12385 = state_12345__$1;
(statearr_12347_12385[(2)] = inst_12341);

(statearr_12347_12385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (20))){
var inst_12311 = (state_12345[(7)]);
var inst_12322 = (state_12345[(2)]);
var inst_12323 = cljs.core.next.call(null,inst_12311);
var inst_12297 = inst_12323;
var inst_12298 = null;
var inst_12299 = (0);
var inst_12300 = (0);
var state_12345__$1 = (function (){var statearr_12348 = state_12345;
(statearr_12348[(8)] = inst_12299);

(statearr_12348[(9)] = inst_12300);

(statearr_12348[(10)] = inst_12298);

(statearr_12348[(11)] = inst_12297);

(statearr_12348[(12)] = inst_12322);

return statearr_12348;
})();
var statearr_12349_12386 = state_12345__$1;
(statearr_12349_12386[(2)] = null);

(statearr_12349_12386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (1))){
var state_12345__$1 = state_12345;
var statearr_12350_12387 = state_12345__$1;
(statearr_12350_12387[(2)] = null);

(statearr_12350_12387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (4))){
var inst_12286 = (state_12345[(13)]);
var inst_12286__$1 = (state_12345[(2)]);
var inst_12287 = (inst_12286__$1 == null);
var state_12345__$1 = (function (){var statearr_12351 = state_12345;
(statearr_12351[(13)] = inst_12286__$1);

return statearr_12351;
})();
if(cljs.core.truth_(inst_12287)){
var statearr_12352_12388 = state_12345__$1;
(statearr_12352_12388[(1)] = (5));

} else {
var statearr_12353_12389 = state_12345__$1;
(statearr_12353_12389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (15))){
var state_12345__$1 = state_12345;
var statearr_12357_12390 = state_12345__$1;
(statearr_12357_12390[(2)] = null);

(statearr_12357_12390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (21))){
var state_12345__$1 = state_12345;
var statearr_12358_12391 = state_12345__$1;
(statearr_12358_12391[(2)] = null);

(statearr_12358_12391[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (13))){
var inst_12299 = (state_12345[(8)]);
var inst_12300 = (state_12345[(9)]);
var inst_12298 = (state_12345[(10)]);
var inst_12297 = (state_12345[(11)]);
var inst_12307 = (state_12345[(2)]);
var inst_12308 = (inst_12300 + (1));
var tmp12354 = inst_12299;
var tmp12355 = inst_12298;
var tmp12356 = inst_12297;
var inst_12297__$1 = tmp12356;
var inst_12298__$1 = tmp12355;
var inst_12299__$1 = tmp12354;
var inst_12300__$1 = inst_12308;
var state_12345__$1 = (function (){var statearr_12359 = state_12345;
(statearr_12359[(8)] = inst_12299__$1);

(statearr_12359[(14)] = inst_12307);

(statearr_12359[(9)] = inst_12300__$1);

(statearr_12359[(10)] = inst_12298__$1);

(statearr_12359[(11)] = inst_12297__$1);

return statearr_12359;
})();
var statearr_12360_12392 = state_12345__$1;
(statearr_12360_12392[(2)] = null);

(statearr_12360_12392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (22))){
var state_12345__$1 = state_12345;
var statearr_12361_12393 = state_12345__$1;
(statearr_12361_12393[(2)] = null);

(statearr_12361_12393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (6))){
var inst_12286 = (state_12345[(13)]);
var inst_12295 = f.call(null,inst_12286);
var inst_12296 = cljs.core.seq.call(null,inst_12295);
var inst_12297 = inst_12296;
var inst_12298 = null;
var inst_12299 = (0);
var inst_12300 = (0);
var state_12345__$1 = (function (){var statearr_12362 = state_12345;
(statearr_12362[(8)] = inst_12299);

(statearr_12362[(9)] = inst_12300);

(statearr_12362[(10)] = inst_12298);

(statearr_12362[(11)] = inst_12297);

return statearr_12362;
})();
var statearr_12363_12394 = state_12345__$1;
(statearr_12363_12394[(2)] = null);

(statearr_12363_12394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (17))){
var inst_12311 = (state_12345[(7)]);
var inst_12315 = cljs.core.chunk_first.call(null,inst_12311);
var inst_12316 = cljs.core.chunk_rest.call(null,inst_12311);
var inst_12317 = cljs.core.count.call(null,inst_12315);
var inst_12297 = inst_12316;
var inst_12298 = inst_12315;
var inst_12299 = inst_12317;
var inst_12300 = (0);
var state_12345__$1 = (function (){var statearr_12364 = state_12345;
(statearr_12364[(8)] = inst_12299);

(statearr_12364[(9)] = inst_12300);

(statearr_12364[(10)] = inst_12298);

(statearr_12364[(11)] = inst_12297);

return statearr_12364;
})();
var statearr_12365_12395 = state_12345__$1;
(statearr_12365_12395[(2)] = null);

(statearr_12365_12395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (3))){
var inst_12343 = (state_12345[(2)]);
var state_12345__$1 = state_12345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12345__$1,inst_12343);
} else {
if((state_val_12346 === (12))){
var inst_12331 = (state_12345[(2)]);
var state_12345__$1 = state_12345;
var statearr_12366_12396 = state_12345__$1;
(statearr_12366_12396[(2)] = inst_12331);

(statearr_12366_12396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (2))){
var state_12345__$1 = state_12345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12345__$1,(4),in$);
} else {
if((state_val_12346 === (23))){
var inst_12339 = (state_12345[(2)]);
var state_12345__$1 = state_12345;
var statearr_12367_12397 = state_12345__$1;
(statearr_12367_12397[(2)] = inst_12339);

(statearr_12367_12397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (19))){
var inst_12326 = (state_12345[(2)]);
var state_12345__$1 = state_12345;
var statearr_12368_12398 = state_12345__$1;
(statearr_12368_12398[(2)] = inst_12326);

(statearr_12368_12398[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (11))){
var inst_12311 = (state_12345[(7)]);
var inst_12297 = (state_12345[(11)]);
var inst_12311__$1 = cljs.core.seq.call(null,inst_12297);
var state_12345__$1 = (function (){var statearr_12369 = state_12345;
(statearr_12369[(7)] = inst_12311__$1);

return statearr_12369;
})();
if(inst_12311__$1){
var statearr_12370_12399 = state_12345__$1;
(statearr_12370_12399[(1)] = (14));

} else {
var statearr_12371_12400 = state_12345__$1;
(statearr_12371_12400[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (9))){
var inst_12333 = (state_12345[(2)]);
var inst_12334 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12345__$1 = (function (){var statearr_12372 = state_12345;
(statearr_12372[(15)] = inst_12333);

return statearr_12372;
})();
if(cljs.core.truth_(inst_12334)){
var statearr_12373_12401 = state_12345__$1;
(statearr_12373_12401[(1)] = (21));

} else {
var statearr_12374_12402 = state_12345__$1;
(statearr_12374_12402[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (5))){
var inst_12289 = cljs.core.async.close_BANG_.call(null,out);
var state_12345__$1 = state_12345;
var statearr_12375_12403 = state_12345__$1;
(statearr_12375_12403[(2)] = inst_12289);

(statearr_12375_12403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (14))){
var inst_12311 = (state_12345[(7)]);
var inst_12313 = cljs.core.chunked_seq_QMARK_.call(null,inst_12311);
var state_12345__$1 = state_12345;
if(inst_12313){
var statearr_12376_12404 = state_12345__$1;
(statearr_12376_12404[(1)] = (17));

} else {
var statearr_12377_12405 = state_12345__$1;
(statearr_12377_12405[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (16))){
var inst_12329 = (state_12345[(2)]);
var state_12345__$1 = state_12345;
var statearr_12378_12406 = state_12345__$1;
(statearr_12378_12406[(2)] = inst_12329);

(statearr_12378_12406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (10))){
var inst_12300 = (state_12345[(9)]);
var inst_12298 = (state_12345[(10)]);
var inst_12305 = cljs.core._nth.call(null,inst_12298,inst_12300);
var state_12345__$1 = state_12345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12345__$1,(13),out,inst_12305);
} else {
if((state_val_12346 === (18))){
var inst_12311 = (state_12345[(7)]);
var inst_12320 = cljs.core.first.call(null,inst_12311);
var state_12345__$1 = state_12345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12345__$1,(20),out,inst_12320);
} else {
if((state_val_12346 === (8))){
var inst_12299 = (state_12345[(8)]);
var inst_12300 = (state_12345[(9)]);
var inst_12302 = (inst_12300 < inst_12299);
var inst_12303 = inst_12302;
var state_12345__$1 = state_12345;
if(cljs.core.truth_(inst_12303)){
var statearr_12379_12407 = state_12345__$1;
(statearr_12379_12407[(1)] = (10));

} else {
var statearr_12380_12408 = state_12345__$1;
(statearr_12380_12408[(1)] = (11));

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
});})(c__10729__auto__))
;
return ((function (switch__10634__auto__,c__10729__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10635__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10635__auto____0 = (function (){
var statearr_12381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12381[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10635__auto__);

(statearr_12381[(1)] = (1));

return statearr_12381;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10635__auto____1 = (function (state_12345){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_12345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e12382){if((e12382 instanceof Object)){
var ex__10638__auto__ = e12382;
var statearr_12383_12409 = state_12345;
(statearr_12383_12409[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12410 = state_12345;
state_12345 = G__12410;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10635__auto__ = function(state_12345){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10635__auto____1.call(this,state_12345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10635__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10635__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto__))
})();
var state__10731__auto__ = (function (){var statearr_12384 = f__10730__auto__.call(null);
(statearr_12384[(6)] = c__10729__auto__);

return statearr_12384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto__))
);

return c__10729__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12412 = arguments.length;
switch (G__12412) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12415 = arguments.length;
switch (G__12415) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12418 = arguments.length;
switch (G__12418) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10729__auto___12465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___12465,out){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___12465,out){
return (function (state_12442){
var state_val_12443 = (state_12442[(1)]);
if((state_val_12443 === (7))){
var inst_12437 = (state_12442[(2)]);
var state_12442__$1 = state_12442;
var statearr_12444_12466 = state_12442__$1;
(statearr_12444_12466[(2)] = inst_12437);

(statearr_12444_12466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12443 === (1))){
var inst_12419 = null;
var state_12442__$1 = (function (){var statearr_12445 = state_12442;
(statearr_12445[(7)] = inst_12419);

return statearr_12445;
})();
var statearr_12446_12467 = state_12442__$1;
(statearr_12446_12467[(2)] = null);

(statearr_12446_12467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12443 === (4))){
var inst_12422 = (state_12442[(8)]);
var inst_12422__$1 = (state_12442[(2)]);
var inst_12423 = (inst_12422__$1 == null);
var inst_12424 = cljs.core.not.call(null,inst_12423);
var state_12442__$1 = (function (){var statearr_12447 = state_12442;
(statearr_12447[(8)] = inst_12422__$1);

return statearr_12447;
})();
if(inst_12424){
var statearr_12448_12468 = state_12442__$1;
(statearr_12448_12468[(1)] = (5));

} else {
var statearr_12449_12469 = state_12442__$1;
(statearr_12449_12469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12443 === (6))){
var state_12442__$1 = state_12442;
var statearr_12450_12470 = state_12442__$1;
(statearr_12450_12470[(2)] = null);

(statearr_12450_12470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12443 === (3))){
var inst_12439 = (state_12442[(2)]);
var inst_12440 = cljs.core.async.close_BANG_.call(null,out);
var state_12442__$1 = (function (){var statearr_12451 = state_12442;
(statearr_12451[(9)] = inst_12439);

return statearr_12451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12442__$1,inst_12440);
} else {
if((state_val_12443 === (2))){
var state_12442__$1 = state_12442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12442__$1,(4),ch);
} else {
if((state_val_12443 === (11))){
var inst_12422 = (state_12442[(8)]);
var inst_12431 = (state_12442[(2)]);
var inst_12419 = inst_12422;
var state_12442__$1 = (function (){var statearr_12452 = state_12442;
(statearr_12452[(7)] = inst_12419);

(statearr_12452[(10)] = inst_12431);

return statearr_12452;
})();
var statearr_12453_12471 = state_12442__$1;
(statearr_12453_12471[(2)] = null);

(statearr_12453_12471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12443 === (9))){
var inst_12422 = (state_12442[(8)]);
var state_12442__$1 = state_12442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12442__$1,(11),out,inst_12422);
} else {
if((state_val_12443 === (5))){
var inst_12419 = (state_12442[(7)]);
var inst_12422 = (state_12442[(8)]);
var inst_12426 = cljs.core._EQ_.call(null,inst_12422,inst_12419);
var state_12442__$1 = state_12442;
if(inst_12426){
var statearr_12455_12472 = state_12442__$1;
(statearr_12455_12472[(1)] = (8));

} else {
var statearr_12456_12473 = state_12442__$1;
(statearr_12456_12473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12443 === (10))){
var inst_12434 = (state_12442[(2)]);
var state_12442__$1 = state_12442;
var statearr_12457_12474 = state_12442__$1;
(statearr_12457_12474[(2)] = inst_12434);

(statearr_12457_12474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12443 === (8))){
var inst_12419 = (state_12442[(7)]);
var tmp12454 = inst_12419;
var inst_12419__$1 = tmp12454;
var state_12442__$1 = (function (){var statearr_12458 = state_12442;
(statearr_12458[(7)] = inst_12419__$1);

return statearr_12458;
})();
var statearr_12459_12475 = state_12442__$1;
(statearr_12459_12475[(2)] = null);

(statearr_12459_12475[(1)] = (2));


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
});})(c__10729__auto___12465,out))
;
return ((function (switch__10634__auto__,c__10729__auto___12465,out){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_12460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12460[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_12460[(1)] = (1));

return statearr_12460;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_12442){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_12442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e12461){if((e12461 instanceof Object)){
var ex__10638__auto__ = e12461;
var statearr_12462_12476 = state_12442;
(statearr_12462_12476[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12477 = state_12442;
state_12442 = G__12477;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_12442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_12442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___12465,out))
})();
var state__10731__auto__ = (function (){var statearr_12463 = f__10730__auto__.call(null);
(statearr_12463[(6)] = c__10729__auto___12465);

return statearr_12463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___12465,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12479 = arguments.length;
switch (G__12479) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10729__auto___12545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___12545,out){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___12545,out){
return (function (state_12517){
var state_val_12518 = (state_12517[(1)]);
if((state_val_12518 === (7))){
var inst_12513 = (state_12517[(2)]);
var state_12517__$1 = state_12517;
var statearr_12519_12546 = state_12517__$1;
(statearr_12519_12546[(2)] = inst_12513);

(statearr_12519_12546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (1))){
var inst_12480 = (new Array(n));
var inst_12481 = inst_12480;
var inst_12482 = (0);
var state_12517__$1 = (function (){var statearr_12520 = state_12517;
(statearr_12520[(7)] = inst_12482);

(statearr_12520[(8)] = inst_12481);

return statearr_12520;
})();
var statearr_12521_12547 = state_12517__$1;
(statearr_12521_12547[(2)] = null);

(statearr_12521_12547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (4))){
var inst_12485 = (state_12517[(9)]);
var inst_12485__$1 = (state_12517[(2)]);
var inst_12486 = (inst_12485__$1 == null);
var inst_12487 = cljs.core.not.call(null,inst_12486);
var state_12517__$1 = (function (){var statearr_12522 = state_12517;
(statearr_12522[(9)] = inst_12485__$1);

return statearr_12522;
})();
if(inst_12487){
var statearr_12523_12548 = state_12517__$1;
(statearr_12523_12548[(1)] = (5));

} else {
var statearr_12524_12549 = state_12517__$1;
(statearr_12524_12549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (15))){
var inst_12507 = (state_12517[(2)]);
var state_12517__$1 = state_12517;
var statearr_12525_12550 = state_12517__$1;
(statearr_12525_12550[(2)] = inst_12507);

(statearr_12525_12550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (13))){
var state_12517__$1 = state_12517;
var statearr_12526_12551 = state_12517__$1;
(statearr_12526_12551[(2)] = null);

(statearr_12526_12551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (6))){
var inst_12482 = (state_12517[(7)]);
var inst_12503 = (inst_12482 > (0));
var state_12517__$1 = state_12517;
if(cljs.core.truth_(inst_12503)){
var statearr_12527_12552 = state_12517__$1;
(statearr_12527_12552[(1)] = (12));

} else {
var statearr_12528_12553 = state_12517__$1;
(statearr_12528_12553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (3))){
var inst_12515 = (state_12517[(2)]);
var state_12517__$1 = state_12517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12517__$1,inst_12515);
} else {
if((state_val_12518 === (12))){
var inst_12481 = (state_12517[(8)]);
var inst_12505 = cljs.core.vec.call(null,inst_12481);
var state_12517__$1 = state_12517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12517__$1,(15),out,inst_12505);
} else {
if((state_val_12518 === (2))){
var state_12517__$1 = state_12517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12517__$1,(4),ch);
} else {
if((state_val_12518 === (11))){
var inst_12497 = (state_12517[(2)]);
var inst_12498 = (new Array(n));
var inst_12481 = inst_12498;
var inst_12482 = (0);
var state_12517__$1 = (function (){var statearr_12529 = state_12517;
(statearr_12529[(7)] = inst_12482);

(statearr_12529[(8)] = inst_12481);

(statearr_12529[(10)] = inst_12497);

return statearr_12529;
})();
var statearr_12530_12554 = state_12517__$1;
(statearr_12530_12554[(2)] = null);

(statearr_12530_12554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (9))){
var inst_12481 = (state_12517[(8)]);
var inst_12495 = cljs.core.vec.call(null,inst_12481);
var state_12517__$1 = state_12517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12517__$1,(11),out,inst_12495);
} else {
if((state_val_12518 === (5))){
var inst_12482 = (state_12517[(7)]);
var inst_12490 = (state_12517[(11)]);
var inst_12485 = (state_12517[(9)]);
var inst_12481 = (state_12517[(8)]);
var inst_12489 = (inst_12481[inst_12482] = inst_12485);
var inst_12490__$1 = (inst_12482 + (1));
var inst_12491 = (inst_12490__$1 < n);
var state_12517__$1 = (function (){var statearr_12531 = state_12517;
(statearr_12531[(12)] = inst_12489);

(statearr_12531[(11)] = inst_12490__$1);

return statearr_12531;
})();
if(cljs.core.truth_(inst_12491)){
var statearr_12532_12555 = state_12517__$1;
(statearr_12532_12555[(1)] = (8));

} else {
var statearr_12533_12556 = state_12517__$1;
(statearr_12533_12556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (14))){
var inst_12510 = (state_12517[(2)]);
var inst_12511 = cljs.core.async.close_BANG_.call(null,out);
var state_12517__$1 = (function (){var statearr_12535 = state_12517;
(statearr_12535[(13)] = inst_12510);

return statearr_12535;
})();
var statearr_12536_12557 = state_12517__$1;
(statearr_12536_12557[(2)] = inst_12511);

(statearr_12536_12557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (10))){
var inst_12501 = (state_12517[(2)]);
var state_12517__$1 = state_12517;
var statearr_12537_12558 = state_12517__$1;
(statearr_12537_12558[(2)] = inst_12501);

(statearr_12537_12558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (8))){
var inst_12490 = (state_12517[(11)]);
var inst_12481 = (state_12517[(8)]);
var tmp12534 = inst_12481;
var inst_12481__$1 = tmp12534;
var inst_12482 = inst_12490;
var state_12517__$1 = (function (){var statearr_12538 = state_12517;
(statearr_12538[(7)] = inst_12482);

(statearr_12538[(8)] = inst_12481__$1);

return statearr_12538;
})();
var statearr_12539_12559 = state_12517__$1;
(statearr_12539_12559[(2)] = null);

(statearr_12539_12559[(1)] = (2));


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
});})(c__10729__auto___12545,out))
;
return ((function (switch__10634__auto__,c__10729__auto___12545,out){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_12540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12540[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_12540[(1)] = (1));

return statearr_12540;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_12517){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_12517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e12541){if((e12541 instanceof Object)){
var ex__10638__auto__ = e12541;
var statearr_12542_12560 = state_12517;
(statearr_12542_12560[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12561 = state_12517;
state_12517 = G__12561;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_12517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_12517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___12545,out))
})();
var state__10731__auto__ = (function (){var statearr_12543 = f__10730__auto__.call(null);
(statearr_12543[(6)] = c__10729__auto___12545);

return statearr_12543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___12545,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12563 = arguments.length;
switch (G__12563) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10729__auto___12633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10729__auto___12633,out){
return (function (){
var f__10730__auto__ = (function (){var switch__10634__auto__ = ((function (c__10729__auto___12633,out){
return (function (state_12605){
var state_val_12606 = (state_12605[(1)]);
if((state_val_12606 === (7))){
var inst_12601 = (state_12605[(2)]);
var state_12605__$1 = state_12605;
var statearr_12607_12634 = state_12605__$1;
(statearr_12607_12634[(2)] = inst_12601);

(statearr_12607_12634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (1))){
var inst_12564 = [];
var inst_12565 = inst_12564;
var inst_12566 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12605__$1 = (function (){var statearr_12608 = state_12605;
(statearr_12608[(7)] = inst_12566);

(statearr_12608[(8)] = inst_12565);

return statearr_12608;
})();
var statearr_12609_12635 = state_12605__$1;
(statearr_12609_12635[(2)] = null);

(statearr_12609_12635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (4))){
var inst_12569 = (state_12605[(9)]);
var inst_12569__$1 = (state_12605[(2)]);
var inst_12570 = (inst_12569__$1 == null);
var inst_12571 = cljs.core.not.call(null,inst_12570);
var state_12605__$1 = (function (){var statearr_12610 = state_12605;
(statearr_12610[(9)] = inst_12569__$1);

return statearr_12610;
})();
if(inst_12571){
var statearr_12611_12636 = state_12605__$1;
(statearr_12611_12636[(1)] = (5));

} else {
var statearr_12612_12637 = state_12605__$1;
(statearr_12612_12637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (15))){
var inst_12595 = (state_12605[(2)]);
var state_12605__$1 = state_12605;
var statearr_12613_12638 = state_12605__$1;
(statearr_12613_12638[(2)] = inst_12595);

(statearr_12613_12638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (13))){
var state_12605__$1 = state_12605;
var statearr_12614_12639 = state_12605__$1;
(statearr_12614_12639[(2)] = null);

(statearr_12614_12639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (6))){
var inst_12565 = (state_12605[(8)]);
var inst_12590 = inst_12565.length;
var inst_12591 = (inst_12590 > (0));
var state_12605__$1 = state_12605;
if(cljs.core.truth_(inst_12591)){
var statearr_12615_12640 = state_12605__$1;
(statearr_12615_12640[(1)] = (12));

} else {
var statearr_12616_12641 = state_12605__$1;
(statearr_12616_12641[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (3))){
var inst_12603 = (state_12605[(2)]);
var state_12605__$1 = state_12605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12605__$1,inst_12603);
} else {
if((state_val_12606 === (12))){
var inst_12565 = (state_12605[(8)]);
var inst_12593 = cljs.core.vec.call(null,inst_12565);
var state_12605__$1 = state_12605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12605__$1,(15),out,inst_12593);
} else {
if((state_val_12606 === (2))){
var state_12605__$1 = state_12605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12605__$1,(4),ch);
} else {
if((state_val_12606 === (11))){
var inst_12569 = (state_12605[(9)]);
var inst_12573 = (state_12605[(10)]);
var inst_12583 = (state_12605[(2)]);
var inst_12584 = [];
var inst_12585 = inst_12584.push(inst_12569);
var inst_12565 = inst_12584;
var inst_12566 = inst_12573;
var state_12605__$1 = (function (){var statearr_12617 = state_12605;
(statearr_12617[(7)] = inst_12566);

(statearr_12617[(8)] = inst_12565);

(statearr_12617[(11)] = inst_12583);

(statearr_12617[(12)] = inst_12585);

return statearr_12617;
})();
var statearr_12618_12642 = state_12605__$1;
(statearr_12618_12642[(2)] = null);

(statearr_12618_12642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (9))){
var inst_12565 = (state_12605[(8)]);
var inst_12581 = cljs.core.vec.call(null,inst_12565);
var state_12605__$1 = state_12605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12605__$1,(11),out,inst_12581);
} else {
if((state_val_12606 === (5))){
var inst_12566 = (state_12605[(7)]);
var inst_12569 = (state_12605[(9)]);
var inst_12573 = (state_12605[(10)]);
var inst_12573__$1 = f.call(null,inst_12569);
var inst_12574 = cljs.core._EQ_.call(null,inst_12573__$1,inst_12566);
var inst_12575 = cljs.core.keyword_identical_QMARK_.call(null,inst_12566,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12576 = ((inst_12574) || (inst_12575));
var state_12605__$1 = (function (){var statearr_12619 = state_12605;
(statearr_12619[(10)] = inst_12573__$1);

return statearr_12619;
})();
if(cljs.core.truth_(inst_12576)){
var statearr_12620_12643 = state_12605__$1;
(statearr_12620_12643[(1)] = (8));

} else {
var statearr_12621_12644 = state_12605__$1;
(statearr_12621_12644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (14))){
var inst_12598 = (state_12605[(2)]);
var inst_12599 = cljs.core.async.close_BANG_.call(null,out);
var state_12605__$1 = (function (){var statearr_12623 = state_12605;
(statearr_12623[(13)] = inst_12598);

return statearr_12623;
})();
var statearr_12624_12645 = state_12605__$1;
(statearr_12624_12645[(2)] = inst_12599);

(statearr_12624_12645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (10))){
var inst_12588 = (state_12605[(2)]);
var state_12605__$1 = state_12605;
var statearr_12625_12646 = state_12605__$1;
(statearr_12625_12646[(2)] = inst_12588);

(statearr_12625_12646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12606 === (8))){
var inst_12565 = (state_12605[(8)]);
var inst_12569 = (state_12605[(9)]);
var inst_12573 = (state_12605[(10)]);
var inst_12578 = inst_12565.push(inst_12569);
var tmp12622 = inst_12565;
var inst_12565__$1 = tmp12622;
var inst_12566 = inst_12573;
var state_12605__$1 = (function (){var statearr_12626 = state_12605;
(statearr_12626[(7)] = inst_12566);

(statearr_12626[(8)] = inst_12565__$1);

(statearr_12626[(14)] = inst_12578);

return statearr_12626;
})();
var statearr_12627_12647 = state_12605__$1;
(statearr_12627_12647[(2)] = null);

(statearr_12627_12647[(1)] = (2));


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
});})(c__10729__auto___12633,out))
;
return ((function (switch__10634__auto__,c__10729__auto___12633,out){
return (function() {
var cljs$core$async$state_machine__10635__auto__ = null;
var cljs$core$async$state_machine__10635__auto____0 = (function (){
var statearr_12628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12628[(0)] = cljs$core$async$state_machine__10635__auto__);

(statearr_12628[(1)] = (1));

return statearr_12628;
});
var cljs$core$async$state_machine__10635__auto____1 = (function (state_12605){
while(true){
var ret_value__10636__auto__ = (function (){try{while(true){
var result__10637__auto__ = switch__10634__auto__.call(null,state_12605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10637__auto__;
}
break;
}
}catch (e12629){if((e12629 instanceof Object)){
var ex__10638__auto__ = e12629;
var statearr_12630_12648 = state_12605;
(statearr_12630_12648[(5)] = ex__10638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12649 = state_12605;
state_12605 = G__12649;
continue;
} else {
return ret_value__10636__auto__;
}
break;
}
});
cljs$core$async$state_machine__10635__auto__ = function(state_12605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10635__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10635__auto____1.call(this,state_12605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10635__auto____0;
cljs$core$async$state_machine__10635__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10635__auto____1;
return cljs$core$async$state_machine__10635__auto__;
})()
;})(switch__10634__auto__,c__10729__auto___12633,out))
})();
var state__10731__auto__ = (function (){var statearr_12631 = f__10730__auto__.call(null);
(statearr_12631[(6)] = c__10729__auto___12633);

return statearr_12631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10731__auto__);
});})(c__10729__auto___12633,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
