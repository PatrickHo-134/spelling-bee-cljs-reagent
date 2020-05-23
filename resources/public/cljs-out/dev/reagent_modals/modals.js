// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent_modals.modals');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
reagent_modals.modals.modal_id = "reagent-modal";
reagent_modals.modals.modal_content = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.Keyword(null,"shown","shown",-1564457683),null,new cljs.core.Keyword(null,"size","size",1098693007),null], null));
reagent_modals.modals.get_modal = (function reagent_modals$modals$get_modal(){
return goog.dom.getElement(reagent_modals.modals.modal_id);
});
reagent_modals.modals.show_modal_BANG_ = (function reagent_modals$modals$show_modal_BANG_(keyboard){
var m = jQuery(reagent_modals.modals.get_modal.call(null));
(m["modal"]).call(m,({"keyboard": keyboard}));

(m["modal"]).call(m,"show");

return m;
});
reagent_modals.modals.close_modal_BANG_ = (function reagent_modals$modals$close_modal_BANG_(){
var m = jQuery(reagent_modals.modals.get_modal.call(null));
return (m["modal"]).call(m,"hide");
});
/**
 * A pre-configured close button. Just include it anywhere in the
 * modal to let the user dismiss it.
 */
reagent_modals.modals.close_button = (function reagent_modals$modals$close_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"Close"], null)], null);
});
reagent_modals.modals.modal_window_STAR_ = (function reagent_modals$modals$modal_window_STAR_(){
var map__8501 = cljs.core.deref.call(null,reagent_modals.modals.modal_content);
var map__8501__$1 = (((((!((map__8501 == null))))?(((((map__8501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8501):map__8501);
var content = cljs.core.get.call(null,map__8501__$1,new cljs.core.Keyword(null,"content","content",15833224));
var size = cljs.core.get.call(null,map__8501__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_class = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lg","lg",-80787836),"modal-lg",new cljs.core.Keyword(null,"sm","sm",-1402575065),"modal-sm"], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),reagent_modals.modals.modal_id,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get.call(null,size_class,size)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),content], null)], null)], null);
});
reagent_modals.modals.modal_window = cljs.core.with_meta.call(null,reagent_modals.modals.modal_window_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (e){
var m = jQuery(reagent_modals.modals.get_modal.call(null));
(m["on"]).call(m,"hidden.bs.modal",((function (m){
return (function (){
return cljs.core.reset_BANG_.call(null,reagent_modals.modals.modal_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null));
});})(m))
);

(m["on"]).call(m,"shown.bs.modal",((function (m){
return (function (){
var temp__5457__auto__ = new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return f.call(null);
} else {
return null;
}
});})(m))
);

(m["on"]).call(m,"hide.bs.modal",((function (m){
return (function (){
var temp__5457__auto__ = new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return f.call(null);
} else {
return null;
}
});})(m))
);

return (m["on"]).call(m,"hidden.bs.modal",((function (m){
return (function (){
var temp__5457__auto__ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return f.call(null);
} else {
return null;
}
});})(m))
);
})], null));
/**
 * Update and show the modal window. `reagent-content' is a normal
 * reagent component. `configs' is an optional map of advanced
 * configurations: 
 * 
 * - :shown -> a function called once the modal is shown.
 * - :hide -> a function called once the modal is asked to hide.
 * - :hidden -> a function called once the modal is hidden.
 * - :size -> Can be :lg (large) or :sm (small). Everything else defaults to medium.
 * - :keyboard -> if `esc' can dismiss the modal. Default to true.
 */
reagent_modals.modals.modal_BANG_ = (function reagent_modals$modals$modal_BANG_(var_args){
var G__8504 = arguments.length;
switch (G__8504) {
case 1:
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reagent_content){
return reagent_modals.modals.modal_BANG_.call(null,reagent_content,null);
});

reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reagent_content,configs){
cljs.core.reset_BANG_.call(null,reagent_modals.modals.modal_content,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),reagent_content], null),configs));

return reagent_modals.modals.show_modal_BANG_.call(null,cljs.core.get.call(null,configs,new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),true));
});

reagent_modals.modals.modal_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=modals.js.map
