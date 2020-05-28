// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.db');
goog.require('cljs.core');
goog.require('re_frame.core');
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
if((typeof spelling_bee !== 'undefined') && (typeof spelling_bee.db !== 'undefined') && (typeof spelling_bee.db.default_db !== 'undefined')){
} else {
spelling_bee.db.default_db = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"word-list","word-list",-230183462),spelling_bee.db.word_list,new cljs.core.Keyword(null,"letters","letters",2098125298),spelling_bee.db.letters,new cljs.core.Keyword(null,"answer","answer",-742633163),"",new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),"Beginner"], null);
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return spelling_bee.db.default_db;
}));

//# sourceMappingURL=db.js.map
