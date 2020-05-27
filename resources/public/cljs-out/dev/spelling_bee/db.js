// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.db');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('clojure.string');
spelling_bee.db.myurl = "https://raw.githubusercontent.com/PatrickHo-134/spelling-bee-cljs-reagent/master/src/spelling_bee/games.json";
spelling_bee.db.results = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 25, ["hind",null,"panda",null,"canid",null,"canna",null,"panic",null,"chin",null,"cancan",null,"pain",null,"naiad",null,"indicia",null,"china",null,"hand",null,"niacin",null,"nana",null,"picnic",null,"candid",null,"handicap",null,"apian",null,"pinch",null,"cinch",null,"panini",null,"inch",null,"nada",null,"chain",null,"naan",null], null), null);
spelling_bee.db.word_list = cljs.core.map.call(null,clojure.string.upper_case,spelling_bee.db.results);
spelling_bee.db.letters = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["N","A","C","D","I","H","P"], null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"word-list","word-list",-230183462),spelling_bee.db.word_list,new cljs.core.Keyword(null,"letters","letters",2098125298),spelling_bee.db.letters,new cljs.core.Keyword(null,"answer","answer",-742633163),"",new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),"Beginner"], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"handler-with-http","handler-with-http",229279948),(function (p__11790,_){
var map__11791 = p__11790;
var map__11791__$1 = (((((!((map__11791 == null))))?(((((map__11791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11791):map__11791);
var db = cljs.core.get.call(null,map__11791__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-twirly","show-twirly",1191467838),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),spelling_bee.db.myurl,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"request-it","request-it",-900096096),(function (db,_){
ajax.core.GET.call(null,spelling_bee.db.myurl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11793_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683),p1__11793_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__11794_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__11794_SHARP_], null));
})], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__11795){
var vec__11796 = p__11795;
var _ = cljs.core.nth.call(null,vec__11796,(0),null);
var response = cljs.core.nth.call(null,vec__11796,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.js__GT_clj.call(null,response));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"data","data",-232669377),(function (db,_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(db);
}));
var data_11799 = JSON.parse(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null))));
cljs.core.println.call(null,cljs.core.type.call(null,new cljs.core.Keyword(null,"games","games",1927565374).cljs$core$IFn$_invoke$arity$1(data_11799)));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549),(function (db,p__11800){
var vec__11801 = p__11800;
var _ = cljs.core.nth.call(null,vec__11801,(0),null);
var result = cljs.core.nth.call(null,vec__11801,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549),result);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),(function (db,p__11804){
var vec__11805 = p__11804;
var _ = cljs.core.nth.call(null,vec__11805,(0),null);
var result = cljs.core.nth.call(null,vec__11805,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),result);
}));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler-with-http","handler-with-http",229279948)], null));

//# sourceMappingURL=db.js.map
