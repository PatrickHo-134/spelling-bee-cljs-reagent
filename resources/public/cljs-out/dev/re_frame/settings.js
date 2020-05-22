// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.settings');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
re_frame.settings.defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),false,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),re_frame.interop.empty_queue], null);
re_frame.settings.store = cljs.core.atom.call(null,re_frame.settings.defaults);
re_frame.interop.on_load.call(null,(function (){
return cljs.core.swap_BANG_.call(null,re_frame.settings.store,(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),true);
}));
}));
re_frame.settings.loaded_QMARK_ = (function re_frame$settings$loaded_QMARK_(){
return new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.settings.store));
});
re_frame.settings.reg_global_interceptor = (function re_frame$settings$reg_global_interceptor(p__8722){
var map__8723 = p__8722;
var map__8723__$1 = (((((!((map__8723 == null))))?(((((map__8723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8723):map__8723);
var interceptor = map__8723__$1;
var id = cljs.core.get.call(null,map__8723__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,re_frame.settings.store,cljs.core.update,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),((function (map__8723,map__8723__$1,interceptor,id){
return (function (global_interceptors){
var ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),global_interceptors);
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,re_frame.settings.loaded_QMARK_.call(null));
if(and__4120__auto__){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),ids);
} else {
return and__4120__auto__;
}
})())){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: duplicate global interceptor id: ",id);
} else {
}
} else {
}

return cljs.core.conj.call(null,global_interceptors,interceptor);
});})(map__8723,map__8723__$1,interceptor,id))
);
});
re_frame.settings.get_global_interceptors = (function re_frame$settings$get_global_interceptors(){
return new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.settings.store));
});
re_frame.settings.clear_global_interceptors = (function re_frame$settings$clear_global_interceptors(var_args){
var G__8727 = arguments.length;
switch (G__8727) {
case 0:
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.swap_BANG_.call(null,re_frame.settings.store,cljs.core.assoc,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),re_frame.interop.empty_queue);
});

re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1 = (function (id){
return cljs.core.swap_BANG_.call(null,re_frame.settings.store,cljs.core.update,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),(function (global_interceptors){
return cljs.core.into.call(null,re_frame.interop.empty_queue,cljs.core.remove.call(null,(function (p1__8725_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8725_SHARP_));
}),global_interceptors));
}));
});

re_frame.settings.clear_global_interceptors.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=settings.js.map
