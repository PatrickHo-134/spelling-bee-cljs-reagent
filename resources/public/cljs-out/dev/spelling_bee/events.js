// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.events');
goog.require('cljs.core');
goog.require('spelling_bee.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-list","new-list",1375707571),(function (db,p__13211){
var vec__13212 = p__13211;
var _ = cljs.core.nth.call(null,vec__13212,(0),null);
var new_list = cljs.core.nth.call(null,vec__13212,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"word-list","word-list",-230183462),new_list);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),(function (db,p__13215){
var vec__13216 = p__13215;
var _ = cljs.core.nth.call(null,vec__13216,(0),null);
var new_answer = cljs.core.nth.call(null,vec__13216,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"answer","answer",-742633163),new_answer);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"new-points","new-points",1134894361),(function (cofx,p__13219){
var vec__13220 = p__13219;
var _ = cljs.core.nth.call(null,vec__13220,(0),null);
var new_points = cljs.core.nth.call(null,vec__13220,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"points","points",-1486596883),new_points)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),(function (db,p__13223){
var vec__13224 = p__13223;
var _ = cljs.core.nth.call(null,vec__13224,(0),null);
var new_words = cljs.core.nth.call(null,vec__13224,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"found-words","found-words",1852804480),new_words);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-letter-order","new-letter-order",209282947),(function (db,p__13227){
var vec__13228 = p__13227;
var _ = cljs.core.nth.call(null,vec__13228,(0),null);
var new_order = cljs.core.nth.call(null,vec__13228,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letters","letters",2098125298),new_order);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-rank","new-rank",929533606),(function (db,p__13231){
var vec__13232 = p__13231;
var _ = cljs.core.nth.call(null,vec__13232,(0),null);
var upper_rank = cljs.core.nth.call(null,vec__13232,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rank","rank",-1706728502),upper_rank);
}));

//# sourceMappingURL=events.js.map
