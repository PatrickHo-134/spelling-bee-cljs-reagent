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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__10017){
var vec__10018 = p__10017;
var success_QMARK_ = cljs.core.nth.call(null,vec__10018,(0),null);
var response = cljs.core.nth.call(null,vec__10018,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__10023){
var map__10024 = p__10023;
var map__10024__$1 = (((((!((map__10024 == null))))?(((((map__10024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10024):map__10024);
var request = map__10024__$1;
var on_success = cljs.core.get.call(null,map__10024__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__10024__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__10024,map__10024__$1,request,on_success,on_failure){
return (function (p1__10021_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__10021_SHARP_));
});})(api,map__10024,map__10024__$1,request,on_success,on_failure))
,((function (api,map__10024,map__10024__$1,request,on_success,on_failure){
return (function (p1__10022_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__10022_SHARP_));
});})(api,map__10024,map__10024__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__10026 = cljs.core.seq.call(null,seq_request_maps);
var chunk__10027 = null;
var count__10028 = (0);
var i__10029 = (0);
while(true){
if((i__10029 < count__10028)){
var request__$1 = cljs.core._nth.call(null,chunk__10027,i__10029);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__10030 = seq__10026;
var G__10031 = chunk__10027;
var G__10032 = count__10028;
var G__10033 = (i__10029 + (1));
seq__10026 = G__10030;
chunk__10027 = G__10031;
count__10028 = G__10032;
i__10029 = G__10033;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10026);
if(temp__5457__auto__){
var seq__10026__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10026__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10026__$1);
var G__10034 = cljs.core.chunk_rest.call(null,seq__10026__$1);
var G__10035 = c__4550__auto__;
var G__10036 = cljs.core.count.call(null,c__4550__auto__);
var G__10037 = (0);
seq__10026 = G__10034;
chunk__10027 = G__10035;
count__10028 = G__10036;
i__10029 = G__10037;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__10026__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__10038 = cljs.core.next.call(null,seq__10026__$1);
var G__10039 = null;
var G__10040 = (0);
var G__10041 = (0);
seq__10026 = G__10038;
chunk__10027 = G__10039;
count__10028 = G__10040;
i__10029 = G__10041;
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
