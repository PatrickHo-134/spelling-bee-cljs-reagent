// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__8631){
var map__8632 = p__8631;
var map__8632__$1 = (((((!((map__8632 == null))))?(((((map__8632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8632):map__8632);
var operation = cljs.core.get.call(null,map__8632__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__8632__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__8632__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__8632__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__8634_8654 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__8635_8655 = null;
var count__8636_8656 = (0);
var i__8637_8657 = (0);
while(true){
if((i__8637_8657 < count__8636_8656)){
var vec__8646_8658 = cljs.core._nth.call(null,chunk__8635_8655,i__8637_8657);
var k_8659 = cljs.core.nth.call(null,vec__8646_8658,(0),null);
var cb_8660 = cljs.core.nth.call(null,vec__8646_8658,(1),null);
try{cb_8660.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e8649){var e_8661 = e8649;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_8659,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_8661);
}

var G__8662 = seq__8634_8654;
var G__8663 = chunk__8635_8655;
var G__8664 = count__8636_8656;
var G__8665 = (i__8637_8657 + (1));
seq__8634_8654 = G__8662;
chunk__8635_8655 = G__8663;
count__8636_8656 = G__8664;
i__8637_8657 = G__8665;
continue;
} else {
var temp__5457__auto___8666 = cljs.core.seq.call(null,seq__8634_8654);
if(temp__5457__auto___8666){
var seq__8634_8667__$1 = temp__5457__auto___8666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8634_8667__$1)){
var c__4550__auto___8668 = cljs.core.chunk_first.call(null,seq__8634_8667__$1);
var G__8669 = cljs.core.chunk_rest.call(null,seq__8634_8667__$1);
var G__8670 = c__4550__auto___8668;
var G__8671 = cljs.core.count.call(null,c__4550__auto___8668);
var G__8672 = (0);
seq__8634_8654 = G__8669;
chunk__8635_8655 = G__8670;
count__8636_8656 = G__8671;
i__8637_8657 = G__8672;
continue;
} else {
var vec__8650_8673 = cljs.core.first.call(null,seq__8634_8667__$1);
var k_8674 = cljs.core.nth.call(null,vec__8650_8673,(0),null);
var cb_8675 = cljs.core.nth.call(null,vec__8650_8673,(1),null);
try{cb_8675.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e8653){var e_8676 = e8653;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_8674,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_8676);
}

var G__8677 = cljs.core.next.call(null,seq__8634_8667__$1);
var G__8678 = null;
var G__8679 = (0);
var G__8680 = (0);
seq__8634_8654 = G__8677;
chunk__8635_8655 = G__8678;
count__8636_8656 = G__8679;
i__8637_8657 = G__8680;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
