// Compiled by ClojureScript 1.10.520 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.success_QMARK_ = ajax.util.success_QMARK_;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9943 = arguments.length;
var i__4731__auto___9944 = (0);
while(true){
if((i__4731__auto___9944 < len__4730__auto___9943)){
args__4736__auto__.push((arguments[i__4731__auto___9944]));

var G__9945 = (i__4731__auto___9944 + (1));
i__4731__auto___9944 = G__9945;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__9067__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__9067__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__9067__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.GET.cljs$lang$applyTo = (function (seq9941){
var G__9942 = cljs.core.first.call(null,seq9941);
var seq9941__$1 = cljs.core.next.call(null,seq9941);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9942,seq9941__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9948 = arguments.length;
var i__4731__auto___9949 = (0);
while(true){
if((i__4731__auto___9949 < len__4730__auto___9948)){
args__4736__auto__.push((arguments[i__4731__auto___9949]));

var G__9950 = (i__4731__auto___9949 + (1));
i__4731__auto___9949 = G__9950;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__9067__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__9067__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__9067__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.HEAD.cljs$lang$applyTo = (function (seq9946){
var G__9947 = cljs.core.first.call(null,seq9946);
var seq9946__$1 = cljs.core.next.call(null,seq9946);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9947,seq9946__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9953 = arguments.length;
var i__4731__auto___9954 = (0);
while(true){
if((i__4731__auto___9954 < len__4730__auto___9953)){
args__4736__auto__.push((arguments[i__4731__auto___9954]));

var G__9955 = (i__4731__auto___9954 + (1));
i__4731__auto___9954 = G__9955;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__9067__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__9067__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__9067__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.POST.cljs$lang$applyTo = (function (seq9951){
var G__9952 = cljs.core.first.call(null,seq9951);
var seq9951__$1 = cljs.core.next.call(null,seq9951);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9952,seq9951__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9958 = arguments.length;
var i__4731__auto___9959 = (0);
while(true){
if((i__4731__auto___9959 < len__4730__auto___9958)){
args__4736__auto__.push((arguments[i__4731__auto___9959]));

var G__9960 = (i__4731__auto___9959 + (1));
i__4731__auto___9959 = G__9960;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__9067__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__9067__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__9067__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PUT.cljs$lang$applyTo = (function (seq9956){
var G__9957 = cljs.core.first.call(null,seq9956);
var seq9956__$1 = cljs.core.next.call(null,seq9956);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9957,seq9956__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9963 = arguments.length;
var i__4731__auto___9964 = (0);
while(true){
if((i__4731__auto___9964 < len__4730__auto___9963)){
args__4736__auto__.push((arguments[i__4731__auto___9964]));

var G__9965 = (i__4731__auto___9964 + (1));
i__4731__auto___9964 = G__9965;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__9067__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__9067__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__9067__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.DELETE.cljs$lang$applyTo = (function (seq9961){
var G__9962 = cljs.core.first.call(null,seq9961);
var seq9961__$1 = cljs.core.next.call(null,seq9961);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9962,seq9961__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9968 = arguments.length;
var i__4731__auto___9969 = (0);
while(true){
if((i__4731__auto___9969 < len__4730__auto___9968)){
args__4736__auto__.push((arguments[i__4731__auto___9969]));

var G__9970 = (i__4731__auto___9969 + (1));
i__4731__auto___9969 = G__9970;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__9067__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__9067__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__9067__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq9966){
var G__9967 = cljs.core.first.call(null,seq9966);
var seq9966__$1 = cljs.core.next.call(null,seq9966);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9967,seq9966__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9973 = arguments.length;
var i__4731__auto___9974 = (0);
while(true){
if((i__4731__auto___9974 < len__4730__auto___9973)){
args__4736__auto__.push((arguments[i__4731__auto___9974]));

var G__9975 = (i__4731__auto___9974 + (1));
i__4731__auto___9974 = G__9975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__9067__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__9067__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__9067__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.TRACE.cljs$lang$applyTo = (function (seq9971){
var G__9972 = cljs.core.first.call(null,seq9971);
var seq9971__$1 = cljs.core.next.call(null,seq9971);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9972,seq9971__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9978 = arguments.length;
var i__4731__auto___9979 = (0);
while(true){
if((i__4731__auto___9979 < len__4730__auto___9978)){
args__4736__auto__.push((arguments[i__4731__auto___9979]));

var G__9980 = (i__4731__auto___9979 + (1));
i__4731__auto___9979 = G__9980;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__9067__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__9067__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__9067__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PATCH.cljs$lang$applyTo = (function (seq9976){
var G__9977 = cljs.core.first.call(null,seq9976);
var seq9976__$1 = cljs.core.next.call(null,seq9976);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9977,seq9976__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9983 = arguments.length;
var i__4731__auto___9984 = (0);
while(true){
if((i__4731__auto___9984 < len__4730__auto___9983)){
args__4736__auto__.push((arguments[i__4731__auto___9984]));

var G__9985 = (i__4731__auto___9984 + (1));
i__4731__auto___9984 = G__9985;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__9067__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__9067__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__9067__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PURGE.cljs$lang$applyTo = (function (seq9981){
var G__9982 = cljs.core.first.call(null,seq9981);
var seq9981__$1 = cljs.core.next.call(null,seq9981);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9982,seq9981__$1);
});


//# sourceMappingURL=core.js.map
