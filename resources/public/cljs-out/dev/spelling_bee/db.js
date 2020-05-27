// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.db');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('clojure.string');
if((typeof spelling_bee !== 'undefined') && (typeof spelling_bee.db !== 'undefined') && (typeof spelling_bee.db.myurl !== 'undefined')){
} else {
spelling_bee.db.myurl = "https://raw.githubusercontent.com/PatrickHo-134/spelling-bee-cljs-reagent/master/src/spelling_bee/games.json";
}
if((typeof spelling_bee !== 'undefined') && (typeof spelling_bee.db !== 'undefined') && (typeof spelling_bee.db.results !== 'undefined')){
} else {
spelling_bee.db.results = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 25, ["hind",null,"panda",null,"canid",null,"canna",null,"panic",null,"chin",null,"cancan",null,"pain",null,"naiad",null,"indicia",null,"china",null,"hand",null,"niacin",null,"nana",null,"picnic",null,"candid",null,"handicap",null,"apian",null,"pinch",null,"cinch",null,"panini",null,"inch",null,"nada",null,"chain",null,"naan",null], null), null);
}
if((typeof spelling_bee !== 'undefined') && (typeof spelling_bee.db !== 'undefined') && (typeof spelling_bee.db.word_list !== 'undefined')){
} else {
spelling_bee.db.word_list = cljs.core.map.call(null,clojure.string.upper_case,spelling_bee.db.results);
}
if((typeof spelling_bee !== 'undefined') && (typeof spelling_bee.db !== 'undefined') && (typeof spelling_bee.db.letters !== 'undefined')){
} else {
spelling_bee.db.letters = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["N","A","C","D","I","H","P"], null);
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (db,_){
ajax.core.GET.call(null,spelling_bee.db.myurl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__13067_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683),p1__13067_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null));
})], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__13068){
var vec__13069 = p__13068;
var _ = cljs.core.nth.call(null,vec__13069,(0),null);
var response = cljs.core.nth.call(null,vec__13069,(1),null);
var data = JSON.parse(cljs.core.js__GT_clj.call(null,response,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var game = cljs.core.rand_nth.call(null,data.games);
var letters = cljs.core.vec.call(null,cljs.core.map.call(null,clojure.string.upper_case,game.letters));
var wordlist = cljs.core.set.call(null,cljs.core.map.call(null,clojure.string.upper_case,game.wordlist));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"letters","letters",2098125298),letters,new cljs.core.Keyword(null,"word-list","word-list",-230183462),wordlist,new cljs.core.Keyword(null,"answer","answer",-742633163),"",new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),"Beginner");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__13072){
var vec__13073 = p__13072;
var _ = cljs.core.nth.call(null,vec__13073,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13073,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"letters","letters",2098125298),spelling_bee.db.letters,new cljs.core.Keyword(null,"word-list","word-list",-230183462),spelling_bee.db.word_list,new cljs.core.Keyword(null,"answer","answer",-742633163),"",new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),"Beginner");
}));

//# sourceMappingURL=db.js.map
