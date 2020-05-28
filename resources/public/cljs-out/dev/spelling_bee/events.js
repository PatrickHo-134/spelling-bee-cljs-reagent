// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('spelling_bee.db');
goog.require('clojure.string');
goog.require('re_frame.core');
<<<<<<< HEAD
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-list","new-list",1375707571),(function (db,p__8957){
var vec__8958 = p__8957;
var _ = cljs.core.nth.call(null,vec__8958,(0),null);
var new_list = cljs.core.nth.call(null,vec__8958,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"word-list","word-list",-230183462),new_list);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),(function (db,p__8961){
var vec__8962 = p__8961;
var _ = cljs.core.nth.call(null,vec__8962,(0),null);
var new_answer = cljs.core.nth.call(null,vec__8962,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"answer","answer",-742633163),new_answer);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"new-points","new-points",1134894361),(function (cofx,p__8965){
var vec__8966 = p__8965;
var _ = cljs.core.nth.call(null,vec__8966,(0),null);
var new_points = cljs.core.nth.call(null,vec__8966,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"points","points",-1486596883),new_points)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),(function (db,p__8969){
var vec__8970 = p__8969;
var _ = cljs.core.nth.call(null,vec__8970,(0),null);
var new_words = cljs.core.nth.call(null,vec__8970,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"found-words","found-words",1852804480),new_words);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-letter-order","new-letter-order",209282947),(function (db,p__8973){
var vec__8974 = p__8973;
var _ = cljs.core.nth.call(null,vec__8974,(0),null);
var new_order = cljs.core.nth.call(null,vec__8974,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letters","letters",2098125298),new_order);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-rank","new-rank",929533606),(function (db,p__8977){
var vec__8978 = p__8977;
var _ = cljs.core.nth.call(null,vec__8978,(0),null);
var upper_rank = cljs.core.nth.call(null,vec__8978,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rank","rank",-1706728502),upper_rank);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-data","request-data",801295335),(function (p__8981,_){
var map__8982 = p__8981;
var map__8982__$1 = (((((!((map__8982 == null))))?(((((map__8982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8982):map__8982);
var db = cljs.core.get.call(null,map__8982__$1,new cljs.core.Keyword(null,"db","db",993250759));
=======
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-list","new-list",1375707571),(function (db,p__8955){
var vec__8956 = p__8955;
var _ = cljs.core.nth.call(null,vec__8956,(0),null);
var new_list = cljs.core.nth.call(null,vec__8956,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"word-list","word-list",-230183462),new_list);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),(function (db,p__8959){
var vec__8960 = p__8959;
var _ = cljs.core.nth.call(null,vec__8960,(0),null);
var new_answer = cljs.core.nth.call(null,vec__8960,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"answer","answer",-742633163),new_answer);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"new-points","new-points",1134894361),(function (cofx,p__8963){
var vec__8964 = p__8963;
var _ = cljs.core.nth.call(null,vec__8964,(0),null);
var new_points = cljs.core.nth.call(null,vec__8964,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"points","points",-1486596883),new_points)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),(function (db,p__8967){
var vec__8968 = p__8967;
var _ = cljs.core.nth.call(null,vec__8968,(0),null);
var new_words = cljs.core.nth.call(null,vec__8968,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"found-words","found-words",1852804480),new_words);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-letter-order","new-letter-order",209282947),(function (db,p__8971){
var vec__8972 = p__8971;
var _ = cljs.core.nth.call(null,vec__8972,(0),null);
var new_order = cljs.core.nth.call(null,vec__8972,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letters","letters",2098125298),new_order);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-rank","new-rank",929533606),(function (db,p__8975){
var vec__8976 = p__8975;
var _ = cljs.core.nth.call(null,vec__8976,(0),null);
var upper_rank = cljs.core.nth.call(null,vec__8976,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rank","rank",-1706728502),upper_rank);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-data","request-data",801295335),(function (p__8979,_){
var map__8980 = p__8979;
var map__8980__$1 = (((((!((map__8980 == null))))?(((((map__8980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8980):map__8980);
var db = cljs.core.get.call(null,map__8980__$1,new cljs.core.Keyword(null,"db","db",993250759));
>>>>>>> test-calling-server
cljs.core.println.call(null,"request data...");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),spelling_bee.db.backup_db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),spelling_bee.db.myurl,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-response","success-response",441653340)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null)], null);
}));
<<<<<<< HEAD
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__8984){
var vec__8985 = p__8984;
var _ = cljs.core.nth.call(null,vec__8985,(0),null);
var response = cljs.core.nth.call(null,vec__8985,(1),null);
=======
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-response","success-response",441653340),(function (db,p__8982){
var vec__8983 = p__8982;
var _ = cljs.core.nth.call(null,vec__8983,(0),null);
var response = cljs.core.nth.call(null,vec__8983,(1),null);
>>>>>>> test-calling-server
var game = cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"games","games",1927565374).cljs$core$IFn$_invoke$arity$1(response));
var letters = cljs.core.vec.call(null,cljs.core.map.call(null,clojure.string.upper_case,new cljs.core.Keyword(null,"letters","letters",2098125298).cljs$core$IFn$_invoke$arity$1(game)));
var wordlist = cljs.core.set.call(null,cljs.core.map.call(null,clojure.string.upper_case,new cljs.core.Keyword(null,"wordlist","wordlist",1407847085).cljs$core$IFn$_invoke$arity$1(game)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letters","letters",2098125298),letters,new cljs.core.Keyword(null,"word-list","word-list",-230183462),wordlist,new cljs.core.Keyword(null,"answer","answer",-742633163),"",new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),"Beginner");
}));
<<<<<<< HEAD
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__8988){
var vec__8989 = p__8988;
var _ = cljs.core.nth.call(null,vec__8989,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8989,(1),null);
=======
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__8986){
var vec__8987 = p__8986;
var _ = cljs.core.nth.call(null,vec__8987,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8987,(1),null);
>>>>>>> test-calling-server
return spelling_bee.db.backup_db;
}));

//# sourceMappingURL=events.js.map
