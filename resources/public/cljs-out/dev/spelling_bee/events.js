// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('spelling_bee.db');
goog.require('clojure.string');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-list","new-list",1375707571),(function (db,p__9369){
var vec__9370 = p__9369;
var _ = cljs.core.nth.call(null,vec__9370,(0),null);
var new_list = cljs.core.nth.call(null,vec__9370,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"word-list","word-list",-230183462),new_list);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),(function (db,p__9373){
var vec__9374 = p__9373;
var _ = cljs.core.nth.call(null,vec__9374,(0),null);
var new_answer = cljs.core.nth.call(null,vec__9374,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"answer","answer",-742633163),new_answer);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"new-points","new-points",1134894361),(function (cofx,p__9377){
var vec__9378 = p__9377;
var _ = cljs.core.nth.call(null,vec__9378,(0),null);
var new_points = cljs.core.nth.call(null,vec__9378,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"points","points",-1486596883),new_points)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),(function (db,p__9381){
var vec__9382 = p__9381;
var _ = cljs.core.nth.call(null,vec__9382,(0),null);
var new_words = cljs.core.nth.call(null,vec__9382,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"found-words","found-words",1852804480),new_words);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-letter-order","new-letter-order",209282947),(function (db,p__9385){
var vec__9386 = p__9385;
var _ = cljs.core.nth.call(null,vec__9386,(0),null);
var new_order = cljs.core.nth.call(null,vec__9386,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letters","letters",2098125298),new_order);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-rank","new-rank",929533606),(function (db,p__9389){
var vec__9390 = p__9389;
var _ = cljs.core.nth.call(null,vec__9390,(0),null);
var upper_rank = cljs.core.nth.call(null,vec__9390,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rank","rank",-1706728502),upper_rank);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-data","request-data",801295335),(function (p__9393,_){
var map__9394 = p__9393;
var map__9394__$1 = (((((!((map__9394 == null))))?(((((map__9394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9394):map__9394);
var db = cljs.core.get.call(null,map__9394__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.println.call(null,"request data...");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),spelling_bee.db.backup_db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),spelling_bee.db.myurl,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__9396){
var vec__9397 = p__9396;
var _ = cljs.core.nth.call(null,vec__9397,(0),null);
var response = cljs.core.nth.call(null,vec__9397,(1),null);
var game = cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"games","games",1927565374).cljs$core$IFn$_invoke$arity$1(response));
var letters = cljs.core.vec.call(null,cljs.core.map.call(null,clojure.string.upper_case,new cljs.core.Keyword(null,"letters","letters",2098125298).cljs$core$IFn$_invoke$arity$1(game)));
var wordlist = cljs.core.set.call(null,cljs.core.map.call(null,clojure.string.upper_case,new cljs.core.Keyword(null,"wordlist","wordlist",1407847085).cljs$core$IFn$_invoke$arity$1(game)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letters","letters",2098125298),letters,new cljs.core.Keyword(null,"word-list","word-list",-230183462),wordlist,new cljs.core.Keyword(null,"answer","answer",-742633163),"",new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),"Beginner");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__9400){
var vec__9401 = p__9400;
var _ = cljs.core.nth.call(null,vec__9401,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9401,(1),null);
return spelling_bee.db.backup_db;
}));

//# sourceMappingURL=events.js.map
