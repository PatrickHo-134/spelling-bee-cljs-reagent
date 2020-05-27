// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__9487){
var vec__9488 = p__9487;
var success_QMARK_ = cljs.core.nth.call(null,vec__9488,(0),null);
var response = cljs.core.nth.call(null,vec__9488,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__9493){
var map__9494 = p__9493;
var map__9494__$1 = (((((!((map__9494 == null))))?(((((map__9494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9494):map__9494);
var request = map__9494__$1;
var on_success = cljs.core.get.call(null,map__9494__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__9494__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__9494,map__9494__$1,request,on_success,on_failure){
return (function (p1__9491_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__9491_SHARP_));
});})(api,map__9494,map__9494__$1,request,on_success,on_failure))
,((function (api,map__9494,map__9494__$1,request,on_success,on_failure){
return (function (p1__9492_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__9492_SHARP_));
});})(api,map__9494,map__9494__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__9496 = cljs.core.seq.call(null,seq_request_maps);
var chunk__9497 = null;
var count__9498 = (0);
var i__9499 = (0);
while(true){
if((i__9499 < count__9498)){
var request__$1 = cljs.core._nth.call(null,chunk__9497,i__9499);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__9500 = seq__9496;
var G__9501 = chunk__9497;
var G__9502 = count__9498;
var G__9503 = (i__9499 + (1));
seq__9496 = G__9500;
chunk__9497 = G__9501;
count__9498 = G__9502;
i__9499 = G__9503;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9496);
if(temp__5457__auto__){
var seq__9496__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9496__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__9496__$1);
var G__9504 = cljs.core.chunk_rest.call(null,seq__9496__$1);
var G__9505 = c__4550__auto__;
var G__9506 = cljs.core.count.call(null,c__4550__auto__);
var G__9507 = (0);
seq__9496 = G__9504;
chunk__9497 = G__9505;
count__9498 = G__9506;
i__9499 = G__9507;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__9496__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__9508 = cljs.core.next.call(null,seq__9496__$1);
var G__9509 = null;
var G__9510 = (0);
var G__9511 = (0);
seq__9496 = G__9508;
chunk__9497 = G__9509;
count__9498 = G__9510;
i__9499 = G__9511;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map
