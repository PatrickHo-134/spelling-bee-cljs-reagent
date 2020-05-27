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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"request-it","request-it",-900096096),(function (db,_){
ajax.core.GET.call(null,spelling_bee.db.myurl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__9582_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683),p1__9582_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__9583_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__9583_SHARP_], null));
})], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__9584){
var vec__9585 = p__9584;
var _ = cljs.core.nth.call(null,vec__9585,(0),null);
var response = cljs.core.nth.call(null,vec__9585,(1),null);
var data = JSON.parse(cljs.core.js__GT_clj.call(null,response,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var game = cljs.core.rand_nth.call(null,data.games);
var letters = cljs.core.vec.call(null,cljs.core.map.call(null,clojure.string.upper_case,game.letters));
var wordlist = cljs.core.set.call(null,cljs.core.map.call(null,clojure.string.upper_case,game.wordlist));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"letters","letters",2098125298),letters,new cljs.core.Keyword(null,"word-list","word-list",-230183462),wordlist,new cljs.core.Keyword(null,"answer","answer",-742633163),"",new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),"Beginner");
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"data","data",-232669377),(function (db,_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(db);
}));
cljs.core.println.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null))));

//# sourceMappingURL=db.js.map
