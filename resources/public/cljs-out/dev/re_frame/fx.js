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
var _STAR_current_trace_STAR__orig_val__9086 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__9087 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__9087;

try{try{var seq__9088 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__9089 = null;
var count__9090 = (0);
var i__9091 = (0);
while(true){
if((i__9091 < count__9090)){
var vec__9098 = cljs.core._nth.call(null,chunk__9089,i__9091);
var effect_key = cljs.core.nth.call(null,vec__9098,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9098,(1),null);
var temp__5455__auto___9120 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___9120)){
var effect_fn_9121 = temp__5455__auto___9120;
effect_fn_9121.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9122 = seq__9088;
var G__9123 = chunk__9089;
var G__9124 = count__9090;
var G__9125 = (i__9091 + (1));
seq__9088 = G__9122;
chunk__9089 = G__9123;
count__9090 = G__9124;
i__9091 = G__9125;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9088);
if(temp__5457__auto__){
var seq__9088__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9088__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__9088__$1);
var G__9126 = cljs.core.chunk_rest.call(null,seq__9088__$1);
var G__9127 = c__4550__auto__;
var G__9128 = cljs.core.count.call(null,c__4550__auto__);
var G__9129 = (0);
seq__9088 = G__9126;
chunk__9089 = G__9127;
count__9090 = G__9128;
i__9091 = G__9129;
continue;
} else {
var vec__9101 = cljs.core.first.call(null,seq__9088__$1);
var effect_key = cljs.core.nth.call(null,vec__9101,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9101,(1),null);
var temp__5455__auto___9130 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___9130)){
var effect_fn_9131 = temp__5455__auto___9130;
effect_fn_9131.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9132 = cljs.core.next.call(null,seq__9088__$1);
var G__9133 = null;
var G__9134 = (0);
var G__9135 = (0);
seq__9088 = G__9132;
chunk__9089 = G__9133;
count__9090 = G__9134;
i__9091 = G__9135;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__8609__auto___9136 = re_frame.interop.now.call(null);
var duration__8610__auto___9137 = (end__8609__auto___9136 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__8610__auto___9137,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__8609__auto___9136);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__9086;
}} else {
var seq__9104 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__9105 = null;
var count__9106 = (0);
var i__9107 = (0);
while(true){
if((i__9107 < count__9106)){
var vec__9114 = cljs.core._nth.call(null,chunk__9105,i__9107);
var effect_key = cljs.core.nth.call(null,vec__9114,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9114,(1),null);
var temp__5455__auto___9138 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___9138)){
var effect_fn_9139 = temp__5455__auto___9138;
effect_fn_9139.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9140 = seq__9104;
var G__9141 = chunk__9105;
var G__9142 = count__9106;
var G__9143 = (i__9107 + (1));
seq__9104 = G__9140;
chunk__9105 = G__9141;
count__9106 = G__9142;
i__9107 = G__9143;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9104);
if(temp__5457__auto__){
var seq__9104__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9104__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__9104__$1);
var G__9144 = cljs.core.chunk_rest.call(null,seq__9104__$1);
var G__9145 = c__4550__auto__;
var G__9146 = cljs.core.count.call(null,c__4550__auto__);
var G__9147 = (0);
seq__9104 = G__9144;
chunk__9105 = G__9145;
count__9106 = G__9146;
i__9107 = G__9147;
continue;
} else {
var vec__9117 = cljs.core.first.call(null,seq__9104__$1);
var effect_key = cljs.core.nth.call(null,vec__9117,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9117,(1),null);
var temp__5455__auto___9148 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___9148)){
var effect_fn_9149 = temp__5455__auto___9148;
effect_fn_9149.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9150 = cljs.core.next.call(null,seq__9104__$1);
var G__9151 = null;
var G__9152 = (0);
var G__9153 = (0);
seq__9104 = G__9150;
chunk__9105 = G__9151;
count__9106 = G__9152;
i__9107 = G__9153;
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
var seq__9154 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__9155 = null;
var count__9156 = (0);
var i__9157 = (0);
while(true){
if((i__9157 < count__9156)){
var map__9162 = cljs.core._nth.call(null,chunk__9155,i__9157);
var map__9162__$1 = (((((!((map__9162 == null))))?(((((map__9162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9162):map__9162);
var effect = map__9162__$1;
var ms = cljs.core.get.call(null,map__9162__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9162__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9154,chunk__9155,count__9156,i__9157,map__9162,map__9162__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9154,chunk__9155,count__9156,i__9157,map__9162,map__9162__$1,effect,ms,dispatch))
,ms);
}


var G__9166 = seq__9154;
var G__9167 = chunk__9155;
var G__9168 = count__9156;
var G__9169 = (i__9157 + (1));
seq__9154 = G__9166;
chunk__9155 = G__9167;
count__9156 = G__9168;
i__9157 = G__9169;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9154);
if(temp__5457__auto__){
var seq__9154__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9154__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__9154__$1);
var G__9170 = cljs.core.chunk_rest.call(null,seq__9154__$1);
var G__9171 = c__4550__auto__;
var G__9172 = cljs.core.count.call(null,c__4550__auto__);
var G__9173 = (0);
seq__9154 = G__9170;
chunk__9155 = G__9171;
count__9156 = G__9172;
i__9157 = G__9173;
continue;
} else {
var map__9164 = cljs.core.first.call(null,seq__9154__$1);
var map__9164__$1 = (((((!((map__9164 == null))))?(((((map__9164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9164):map__9164);
var effect = map__9164__$1;
var ms = cljs.core.get.call(null,map__9164__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9164__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9154,chunk__9155,count__9156,i__9157,map__9164,map__9164__$1,effect,ms,dispatch,seq__9154__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9154,chunk__9155,count__9156,i__9157,map__9164,map__9164__$1,effect,ms,dispatch,seq__9154__$1,temp__5457__auto__))
,ms);
}


var G__9174 = cljs.core.next.call(null,seq__9154__$1);
var G__9175 = null;
var G__9176 = (0);
var G__9177 = (0);
seq__9154 = G__9174;
chunk__9155 = G__9175;
count__9156 = G__9176;
i__9157 = G__9177;
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
var seq__9178 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__9179 = null;
var count__9180 = (0);
var i__9181 = (0);
while(true){
if((i__9181 < count__9180)){
var event = cljs.core._nth.call(null,chunk__9179,i__9181);
re_frame.router.dispatch.call(null,event);


var G__9182 = seq__9178;
var G__9183 = chunk__9179;
var G__9184 = count__9180;
var G__9185 = (i__9181 + (1));
seq__9178 = G__9182;
chunk__9179 = G__9183;
count__9180 = G__9184;
i__9181 = G__9185;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9178);
if(temp__5457__auto__){
var seq__9178__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9178__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__9178__$1);
var G__9186 = cljs.core.chunk_rest.call(null,seq__9178__$1);
var G__9187 = c__4550__auto__;
var G__9188 = cljs.core.count.call(null,c__4550__auto__);
var G__9189 = (0);
seq__9178 = G__9186;
chunk__9179 = G__9187;
count__9180 = G__9188;
i__9181 = G__9189;
continue;
} else {
var event = cljs.core.first.call(null,seq__9178__$1);
re_frame.router.dispatch.call(null,event);


var G__9190 = cljs.core.next.call(null,seq__9178__$1);
var G__9191 = null;
var G__9192 = (0);
var G__9193 = (0);
seq__9178 = G__9190;
chunk__9179 = G__9191;
count__9180 = G__9192;
i__9181 = G__9193;
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
var seq__9194 = cljs.core.seq.call(null,value);
var chunk__9195 = null;
var count__9196 = (0);
var i__9197 = (0);
while(true){
if((i__9197 < count__9196)){
var event = cljs.core._nth.call(null,chunk__9195,i__9197);
clear_event.call(null,event);


var G__9198 = seq__9194;
var G__9199 = chunk__9195;
var G__9200 = count__9196;
var G__9201 = (i__9197 + (1));
seq__9194 = G__9198;
chunk__9195 = G__9199;
count__9196 = G__9200;
i__9197 = G__9201;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9194);
if(temp__5457__auto__){
var seq__9194__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9194__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__9194__$1);
var G__9202 = cljs.core.chunk_rest.call(null,seq__9194__$1);
var G__9203 = c__4550__auto__;
var G__9204 = cljs.core.count.call(null,c__4550__auto__);
var G__9205 = (0);
seq__9194 = G__9202;
chunk__9195 = G__9203;
count__9196 = G__9204;
i__9197 = G__9205;
continue;
} else {
var event = cljs.core.first.call(null,seq__9194__$1);
clear_event.call(null,event);


var G__9206 = cljs.core.next.call(null,seq__9194__$1);
var G__9207 = null;
var G__9208 = (0);
var G__9209 = (0);
seq__9194 = G__9206;
chunk__9195 = G__9207;
count__9196 = G__9208;
i__9197 = G__9209;
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
