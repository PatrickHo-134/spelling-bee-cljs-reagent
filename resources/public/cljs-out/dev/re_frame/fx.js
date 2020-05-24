// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__10080 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__10081 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__10081;

try{try{var seq__10082 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10083 = null;
var count__10084 = (0);
var i__10085 = (0);
while(true){
if((i__10085 < count__10084)){
var vec__10092 = cljs.core._nth.call(null,chunk__10083,i__10085);
var effect_key = cljs.core.nth.call(null,vec__10092,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10092,(1),null);
var temp__5455__auto___10114 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10114)){
var effect_fn_10115 = temp__5455__auto___10114;
effect_fn_10115.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10116 = seq__10082;
var G__10117 = chunk__10083;
var G__10118 = count__10084;
var G__10119 = (i__10085 + (1));
seq__10082 = G__10116;
chunk__10083 = G__10117;
count__10084 = G__10118;
i__10085 = G__10119;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10082);
if(temp__5457__auto__){
var seq__10082__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10082__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10082__$1);
var G__10120 = cljs.core.chunk_rest.call(null,seq__10082__$1);
var G__10121 = c__4550__auto__;
var G__10122 = cljs.core.count.call(null,c__4550__auto__);
var G__10123 = (0);
seq__10082 = G__10120;
chunk__10083 = G__10121;
count__10084 = G__10122;
i__10085 = G__10123;
continue;
} else {
var vec__10095 = cljs.core.first.call(null,seq__10082__$1);
var effect_key = cljs.core.nth.call(null,vec__10095,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10095,(1),null);
var temp__5455__auto___10124 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10124)){
var effect_fn_10125 = temp__5455__auto___10124;
effect_fn_10125.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10126 = cljs.core.next.call(null,seq__10082__$1);
var G__10127 = null;
var G__10128 = (0);
var G__10129 = (0);
seq__10082 = G__10126;
chunk__10083 = G__10127;
count__10084 = G__10128;
i__10085 = G__10129;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__9315__auto___10130 = re_frame.interop.now.call(null);
var duration__9316__auto___10131 = (end__9315__auto___10130 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9316__auto___10131,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__9315__auto___10130);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__10080;
}} else {
var seq__10098 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10099 = null;
var count__10100 = (0);
var i__10101 = (0);
while(true){
if((i__10101 < count__10100)){
var vec__10108 = cljs.core._nth.call(null,chunk__10099,i__10101);
var effect_key = cljs.core.nth.call(null,vec__10108,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10108,(1),null);
var temp__5455__auto___10132 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10132)){
var effect_fn_10133 = temp__5455__auto___10132;
effect_fn_10133.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10134 = seq__10098;
var G__10135 = chunk__10099;
var G__10136 = count__10100;
var G__10137 = (i__10101 + (1));
seq__10098 = G__10134;
chunk__10099 = G__10135;
count__10100 = G__10136;
i__10101 = G__10137;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10098);
if(temp__5457__auto__){
var seq__10098__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10098__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10098__$1);
var G__10138 = cljs.core.chunk_rest.call(null,seq__10098__$1);
var G__10139 = c__4550__auto__;
var G__10140 = cljs.core.count.call(null,c__4550__auto__);
var G__10141 = (0);
seq__10098 = G__10138;
chunk__10099 = G__10139;
count__10100 = G__10140;
i__10101 = G__10141;
continue;
} else {
var vec__10111 = cljs.core.first.call(null,seq__10098__$1);
var effect_key = cljs.core.nth.call(null,vec__10111,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10111,(1),null);
var temp__5455__auto___10142 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10142)){
var effect_fn_10143 = temp__5455__auto___10142;
effect_fn_10143.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10144 = cljs.core.next.call(null,seq__10098__$1);
var G__10145 = null;
var G__10146 = (0);
var G__10147 = (0);
seq__10098 = G__10144;
chunk__10099 = G__10145;
count__10100 = G__10146;
i__10101 = G__10147;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__10148 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10149 = null;
var count__10150 = (0);
var i__10151 = (0);
while(true){
if((i__10151 < count__10150)){
var map__10156 = cljs.core._nth.call(null,chunk__10149,i__10151);
var map__10156__$1 = (((((!((map__10156 == null))))?(((((map__10156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10156):map__10156);
var effect = map__10156__$1;
var ms = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10148,chunk__10149,count__10150,i__10151,map__10156,map__10156__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10148,chunk__10149,count__10150,i__10151,map__10156,map__10156__$1,effect,ms,dispatch))
,ms);
}


var G__10160 = seq__10148;
var G__10161 = chunk__10149;
var G__10162 = count__10150;
var G__10163 = (i__10151 + (1));
seq__10148 = G__10160;
chunk__10149 = G__10161;
count__10150 = G__10162;
i__10151 = G__10163;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10148);
if(temp__5457__auto__){
var seq__10148__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10148__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10148__$1);
var G__10164 = cljs.core.chunk_rest.call(null,seq__10148__$1);
var G__10165 = c__4550__auto__;
var G__10166 = cljs.core.count.call(null,c__4550__auto__);
var G__10167 = (0);
seq__10148 = G__10164;
chunk__10149 = G__10165;
count__10150 = G__10166;
i__10151 = G__10167;
continue;
} else {
var map__10158 = cljs.core.first.call(null,seq__10148__$1);
var map__10158__$1 = (((((!((map__10158 == null))))?(((((map__10158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10158):map__10158);
var effect = map__10158__$1;
var ms = cljs.core.get.call(null,map__10158__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10158__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10148,chunk__10149,count__10150,i__10151,map__10158,map__10158__$1,effect,ms,dispatch,seq__10148__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10148,chunk__10149,count__10150,i__10151,map__10158,map__10158__$1,effect,ms,dispatch,seq__10148__$1,temp__5457__auto__))
,ms);
}


var G__10168 = cljs.core.next.call(null,seq__10148__$1);
var G__10169 = null;
var G__10170 = (0);
var G__10171 = (0);
seq__10148 = G__10168;
chunk__10149 = G__10169;
count__10150 = G__10170;
i__10151 = G__10171;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__10172 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10173 = null;
var count__10174 = (0);
var i__10175 = (0);
while(true){
if((i__10175 < count__10174)){
var event = cljs.core._nth.call(null,chunk__10173,i__10175);
re_frame.router.dispatch.call(null,event);


var G__10176 = seq__10172;
var G__10177 = chunk__10173;
var G__10178 = count__10174;
var G__10179 = (i__10175 + (1));
seq__10172 = G__10176;
chunk__10173 = G__10177;
count__10174 = G__10178;
i__10175 = G__10179;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10172);
if(temp__5457__auto__){
var seq__10172__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10172__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10172__$1);
var G__10180 = cljs.core.chunk_rest.call(null,seq__10172__$1);
var G__10181 = c__4550__auto__;
var G__10182 = cljs.core.count.call(null,c__4550__auto__);
var G__10183 = (0);
seq__10172 = G__10180;
chunk__10173 = G__10181;
count__10174 = G__10182;
i__10175 = G__10183;
continue;
} else {
var event = cljs.core.first.call(null,seq__10172__$1);
re_frame.router.dispatch.call(null,event);


var G__10184 = cljs.core.next.call(null,seq__10172__$1);
var G__10185 = null;
var G__10186 = (0);
var G__10187 = (0);
seq__10172 = G__10184;
chunk__10173 = G__10185;
count__10174 = G__10186;
i__10175 = G__10187;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__10188 = cljs.core.seq.call(null,value);
var chunk__10189 = null;
var count__10190 = (0);
var i__10191 = (0);
while(true){
if((i__10191 < count__10190)){
var event = cljs.core._nth.call(null,chunk__10189,i__10191);
clear_event.call(null,event);


var G__10192 = seq__10188;
var G__10193 = chunk__10189;
var G__10194 = count__10190;
var G__10195 = (i__10191 + (1));
seq__10188 = G__10192;
chunk__10189 = G__10193;
count__10190 = G__10194;
i__10191 = G__10195;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10188);
if(temp__5457__auto__){
var seq__10188__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10188__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10188__$1);
var G__10196 = cljs.core.chunk_rest.call(null,seq__10188__$1);
var G__10197 = c__4550__auto__;
var G__10198 = cljs.core.count.call(null,c__4550__auto__);
var G__10199 = (0);
seq__10188 = G__10196;
chunk__10189 = G__10197;
count__10190 = G__10198;
i__10191 = G__10199;
continue;
} else {
var event = cljs.core.first.call(null,seq__10188__$1);
clear_event.call(null,event);


var G__10200 = cljs.core.next.call(null,seq__10188__$1);
var G__10201 = null;
var G__10202 = (0);
var G__10203 = (0);
seq__10188 = G__10200;
chunk__10189 = G__10201;
count__10190 = G__10202;
i__10191 = G__10203;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
