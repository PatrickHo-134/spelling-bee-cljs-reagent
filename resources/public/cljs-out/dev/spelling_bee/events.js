// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.events');
goog.require('cljs.core');
goog.require('spelling_bee.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-list","new-list",1375707571),(function (db,p__9945){
var vec__9946 = p__9945;
var _ = cljs.core.nth.call(null,vec__9946,(0),null);
var new_list = cljs.core.nth.call(null,vec__9946,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"word-list","word-list",-230183462),new_list);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),(function (db,p__9949){
var vec__9950 = p__9949;
var _ = cljs.core.nth.call(null,vec__9950,(0),null);
var new_answer = cljs.core.nth.call(null,vec__9950,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"answer","answer",-742633163),new_answer);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"new-points","new-points",1134894361),(function (cofx,p__9953){
var vec__9954 = p__9953;
var _ = cljs.core.nth.call(null,vec__9954,(0),null);
var new_points = cljs.core.nth.call(null,vec__9954,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"points","points",-1486596883),new_points)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),(function (db,p__9957){
var vec__9958 = p__9957;
var _ = cljs.core.nth.call(null,vec__9958,(0),null);
var new_words = cljs.core.nth.call(null,vec__9958,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"found-words","found-words",1852804480),new_words);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-letter-order","new-letter-order",209282947),(function (db,p__9961){
var vec__9962 = p__9961;
var _ = cljs.core.nth.call(null,vec__9962,(0),null);
var new_order = cljs.core.nth.call(null,vec__9962,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letters","letters",2098125298),new_order);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-rank","new-rank",929533606),(function (db,p__9965){
var vec__9966 = p__9965;
var _ = cljs.core.nth.call(null,vec__9966,(0),null);
var upper_rank = cljs.core.nth.call(null,vec__9966,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rank","rank",-1706728502),upper_rank);
}));

//# sourceMappingURL=events.js.map
