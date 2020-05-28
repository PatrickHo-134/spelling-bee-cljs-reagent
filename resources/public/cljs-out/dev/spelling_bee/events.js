// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('spelling_bee.db');
goog.require('clojure.string');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-list","new-list",1375707571),(function (db,p__9171){
var vec__9172 = p__9171;
var _ = cljs.core.nth.call(null,vec__9172,(0),null);
var new_list = cljs.core.nth.call(null,vec__9172,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"word-list","word-list",-230183462),new_list);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),(function (db,p__9175){
var vec__9176 = p__9175;
var _ = cljs.core.nth.call(null,vec__9176,(0),null);
var new_answer = cljs.core.nth.call(null,vec__9176,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"answer","answer",-742633163),new_answer);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"new-points","new-points",1134894361),(function (cofx,p__9179){
var vec__9180 = p__9179;
var _ = cljs.core.nth.call(null,vec__9180,(0),null);
var new_points = cljs.core.nth.call(null,vec__9180,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"points","points",-1486596883),new_points)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),(function (db,p__9183){
var vec__9184 = p__9183;
var _ = cljs.core.nth.call(null,vec__9184,(0),null);
var new_words = cljs.core.nth.call(null,vec__9184,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"found-words","found-words",1852804480),new_words);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-letter-order","new-letter-order",209282947),(function (db,p__9187){
var vec__9188 = p__9187;
var _ = cljs.core.nth.call(null,vec__9188,(0),null);
var new_order = cljs.core.nth.call(null,vec__9188,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letters","letters",2098125298),new_order);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-rank","new-rank",929533606),(function (db,p__9191){
var vec__9192 = p__9191;
var _ = cljs.core.nth.call(null,vec__9192,(0),null);
var upper_rank = cljs.core.nth.call(null,vec__9192,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rank","rank",-1706728502),upper_rank);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-data","request-data",801295335),(function (p__9195,_){
var map__9196 = p__9195;
var map__9196__$1 = (((((!((map__9196 == null))))?(((((map__9196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9196):map__9196);
var db = cljs.core.get.call(null,map__9196__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),spelling_bee.db.myurl,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__9198){
var vec__9199 = p__9198;
var _ = cljs.core.nth.call(null,vec__9199,(0),null);
var response = cljs.core.nth.call(null,vec__9199,(1),null);
var game = cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"games","games",1927565374).cljs$core$IFn$_invoke$arity$1(response));
var letters = cljs.core.vec.call(null,cljs.core.map.call(null,clojure.string.upper_case,new cljs.core.Keyword(null,"letters","letters",2098125298).cljs$core$IFn$_invoke$arity$1(game)));
var wordlist = cljs.core.set.call(null,cljs.core.map.call(null,clojure.string.upper_case,new cljs.core.Keyword(null,"wordlist","wordlist",1407847085).cljs$core$IFn$_invoke$arity$1(game)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letters","letters",2098125298),letters,new cljs.core.Keyword(null,"word-list","word-list",-230183462),wordlist,new cljs.core.Keyword(null,"answer","answer",-742633163),"",new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),"Beginner");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__9202){
var vec__9203 = p__9202;
var _ = cljs.core.nth.call(null,vec__9203,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9203,(1),null);
return spelling_bee.db.default_db;
}));

//# sourceMappingURL=events.js.map
