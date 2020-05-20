// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__10880__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10881__i = 0, G__10881__a = new Array(arguments.length -  0);
while (G__10881__i < G__10881__a.length) {G__10881__a[G__10881__i] = arguments[G__10881__i + 0]; ++G__10881__i;}
  args = new cljs.core.IndexedSeq(G__10881__a,0,null);
} 
return G__10880__delegate.call(this,args);};
G__10880.cljs$lang$maxFixedArity = 0;
G__10880.cljs$lang$applyTo = (function (arglist__10882){
var args = cljs.core.seq(arglist__10882);
return G__10880__delegate(args);
});
G__10880.cljs$core$IFn$_invoke$arity$variadic = G__10880__delegate;
return G__10880;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10883__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10884__i = 0, G__10884__a = new Array(arguments.length -  0);
while (G__10884__i < G__10884__a.length) {G__10884__a[G__10884__i] = arguments[G__10884__i + 0]; ++G__10884__i;}
  args = new cljs.core.IndexedSeq(G__10884__a,0,null);
} 
return G__10883__delegate.call(this,args);};
G__10883.cljs$lang$maxFixedArity = 0;
G__10883.cljs$lang$applyTo = (function (arglist__10885){
var args = cljs.core.seq(arglist__10885);
return G__10883__delegate(args);
});
G__10883.cljs$core$IFn$_invoke$arity$variadic = G__10883__delegate;
return G__10883;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
