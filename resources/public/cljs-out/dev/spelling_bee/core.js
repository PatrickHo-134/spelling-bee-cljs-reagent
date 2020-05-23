// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('clojure.string');
spelling_bee.core.word_list = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 72, ["ANNUAL",null,"DANG",null,"ALGAL",null,"LUNG",null,"NULL",null,"GLANDULAR",null,"RUNG",null,"AGAR",null,"GANG",null,"GALL",null,"ANGULAR",null,"GRANDDAD",null,"AUGURAL",null,"LAND",null,"ANNAL",null,"AURA",null,"LUNAR",null,"ANAL",null,"GRADUAL",null,"RAND",null,"RAGA",null,"GANGLAND",null,"RAGLAN",null,"GRANULAR",null,"ULNA",null,"GRANDAD",null,"LUNULA",null,"DRUG",null,"DRAG",null,"GLUG",null,"GNARL",null,"AURAL",null,"LULU",null,"LAUD",null,"DUAL",null,"GARLAND",null,"LULL",null,"LAGGARD",null,"RADAR",null,"GUAR",null,"UNGAG",null,"GLAD",null,"NANA",null,"GAGA",null,"GURU",null,"ANNULAR",null,"ANNUL",null,"GRAN",null,"GULAG",null,"NAAN",null,"LUAU",null,"ARUGULA",null,"LUNA",null,"ULNAR",null,"LANDAU",null,"RANG",null,"GALA",null,"DUAD",null,"GLAND",null,"NADA",null,"ALGA",null,"GUARD",null,"AUGUR",null,"RURAL",null,"DULL",null,"DULLARD",null,"GRAD",null,"GRAND",null,"DARN",null,"GULL",null,"LARD",null,"DUNG",null], null), null);
spelling_bee.core.letters = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","L","R","G","D","N","U"], null);
spelling_bee.core.dispatch_user_input = (function spelling_bee$core$dispatch_user_input(input){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),input], null));
});
spelling_bee.core.dispatch_new_points = (function spelling_bee$core$dispatch_new_points(new_points){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-points","new-points",1134894361),new_points], null));
});
spelling_bee.core.dispatch_new_found_words = (function spelling_bee$core$dispatch_new_found_words(new_words){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),new_words], null));
});
spelling_bee.core.dispatch_new_letter_order = (function spelling_bee$core$dispatch_new_letter_order(new_order){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-letter-order","new-letter-order",209282947),new_order], null));
});
spelling_bee.core.dispatch_new_rank = (function spelling_bee$core$dispatch_new_rank(upper_rank){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-rank","new-rank",929533606),upper_rank], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"letters","letters",2098125298),spelling_bee.core.letters,new cljs.core.Keyword(null,"answer","answer",-742633163),"",new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"rank","rank",-1706728502),"Beginner"], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),(function (db,p__9906){
var vec__9907 = p__9906;
var _ = cljs.core.nth.call(null,vec__9907,(0),null);
var new_answer = cljs.core.nth.call(null,vec__9907,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"answer","answer",-742633163),new_answer);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-points","new-points",1134894361),(function (db,p__9910){
var vec__9911 = p__9910;
var _ = cljs.core.nth.call(null,vec__9911,(0),null);
var new_points = cljs.core.nth.call(null,vec__9911,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"points","points",-1486596883),new_points);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),(function (db,p__9914){
var vec__9915 = p__9914;
var _ = cljs.core.nth.call(null,vec__9915,(0),null);
var new_words = cljs.core.nth.call(null,vec__9915,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"found-words","found-words",1852804480),new_words);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-letter-order","new-letter-order",209282947),(function (db,p__9918){
var vec__9919 = p__9918;
var _ = cljs.core.nth.call(null,vec__9919,(0),null);
var new_order = cljs.core.nth.call(null,vec__9919,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letters","letters",2098125298),new_order);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-rank","new-rank",929533606),(function (db,p__9922){
var vec__9923 = p__9922;
var _ = cljs.core.nth.call(null,vec__9923,(0),null);
var upper_rank = cljs.core.nth.call(null,vec__9923,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rank","rank",-1706728502),upper_rank);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),(function (db,_){
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"found-words","found-words",1852804480),(function (db,_){
return new cljs.core.Keyword(null,"found-words","found-words",1852804480).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163),(function (db,_){
return new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"letters","letters",2098125298),(function (db,_){
return new cljs.core.Keyword(null,"letters","letters",2098125298).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502),(function (db,_){
return new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(db);
}));
/**
 * Returns predicate value if a word has equal or less than 3 letters
 */
spelling_bee.core.too_short_QMARK_ = (function spelling_bee$core$too_short_QMARK_(word){
return ((3) >= cljs.core.count.call(null,word));
});
/**
 * Returns predicate value if a word is in word list
 */
spelling_bee.core.in_word_list_QMARK_ = (function spelling_bee$core$in_word_list_QMARK_(word){
return cljs.core.some.call(null,(function (p1__9926_SHARP_){
return cljs.core._EQ_.call(null,clojure.string.upper_case.call(null,word),p1__9926_SHARP_);
}),spelling_bee.core.word_list);
});
/**
 * Returns predicate value if a word has center letter
 */
spelling_bee.core.include_center_letter_QMARK_ = (function spelling_bee$core$include_center_letter_QMARK_(word){
return cljs.core.some.call(null,(function (p1__9927_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null)))),clojure.string.upper_case.call(null,p1__9927_SHARP_));
}),cljs.core.set.call(null,word));
});
/**
 * Returns predicate value if a word is a pangram
 */
spelling_bee.core.pangram_QMARK_ = (function spelling_bee$core$pangram_QMARK_(word){
var and__4120__auto__ = spelling_bee.core.in_word_list_QMARK_.call(null,word);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,clojure.string.upper_case.call(null,word)),cljs.core.set.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null)))));
} else {
return and__4120__auto__;
}
});
/**
 * Returns point if a word is in word list
 */
spelling_bee.core.give_point = (function spelling_bee$core$give_point(word){
if(cljs.core.not.call(null,spelling_bee.core.in_word_list_QMARK_.call(null,word))){
return (0);
} else {
var point = (cljs.core.count.call(null,word) - (3));
if(cljs.core.not.call(null,spelling_bee.core.pangram_QMARK_.call(null,word))){
return point;
} else {
return (point + (7));
}
}
});
/**
 * Returns predicate value if a word is already found
 */
spelling_bee.core.found_word_QMARK_ = (function spelling_bee$core$found_word_QMARK_(word){
return cljs.core.some.call(null,(function (p1__9928_SHARP_){
return cljs.core._EQ_.call(null,clojure.string.upper_case.call(null,word),p1__9928_SHARP_);
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"found-words","found-words",1852804480)], null))));
});
spelling_bee.core.get_rank = (function spelling_bee$core$get_rank(points){
var total_point = cljs.core.reduce.call(null,cljs.core._PLUS_,points);
if(((2) > total_point)){
return "Beginner";
} else {
if(((((2) <= total_point)) && (((5) > total_point)))){
return "Good Start";
} else {
if(((((5) <= total_point)) && (((8) > total_point)))){
return "Moving Up";
} else {
if(((((8) <= total_point)) && (((16) > total_point)))){
return "Good";
} else {
if(((((16) <= total_point)) && (((27) > total_point)))){
return "Solid";
} else {
if(((((27) <= total_point)) && (((42) > total_point)))){
return "Nice";
} else {
if(((((42) <= total_point)) && (((53) > total_point)))){
return "Great";
} else {
if(((((53) <= total_point)) && (((74) > total_point)))){
return "Amazing";
} else {
if(((74) <= total_point)){
return "Genius";
} else {
return null;
}
}
}
}
}
}
}
}
}
});
/**
 * Displays result of the answer
 */
spelling_bee.core.display_message = (function spelling_bee$core$display_message(word){
if(cljs.core._EQ_.call(null,"",word)){
return "";
} else {
if(spelling_bee.core.too_short_QMARK_.call(null,word)){
return "Too-short!";
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,spelling_bee.core.found_word_QMARK_.call(null,word));
if(and__4120__auto__){
return spelling_bee.core.pangram_QMARK_.call(null,word);
} else {
return and__4120__auto__;
}
})())){
return "Genius!";
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,spelling_bee.core.found_word_QMARK_.call(null,word));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,spelling_bee.core.pangram_QMARK_.call(null,word));
if(and__4120__auto____$1){
return spelling_bee.core.in_word_list_QMARK_.call(null,word);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return "Very good!";
} else {
if(cljs.core.truth_(spelling_bee.core.found_word_QMARK_.call(null,word))){
return "Repeated answer!";
} else {
return "Not in word list!";

}
}
}
}
}
});
/**
 * Handles click on submit button
 */
spelling_bee.core.handle_submit = (function spelling_bee$core$handle_submit(){
var new_answer = clojure.string.upper_case.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null))));
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,spelling_bee.core.found_word_QMARK_.call(null,new_answer));
if(and__4120__auto__){
return spelling_bee.core.in_word_list_QMARK_.call(null,new_answer);
} else {
return and__4120__auto__;
}
})())){
var words = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"found-words","found-words",1852804480)], null)));
var new_found_words = cljs.core.conj.call(null,words,new_answer);
var new_points = cljs.core.conj.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null))),spelling_bee.core.give_point.call(null,new_answer));
spelling_bee.core.dispatch_new_found_words.call(null,new_found_words);

spelling_bee.core.dispatch_new_points.call(null,new_points);

spelling_bee.core.dispatch_new_rank.call(null,spelling_bee.core.get_rank.call(null,new_points));

return spelling_bee.core.dispatch_user_input.call(null,"");
} else {
return spelling_bee.core.dispatch_user_input.call(null,"");
}
});
/**
 * Submits answer if user press Enter
 */
spelling_bee.core.handle_key_press = (function spelling_bee$core$handle_key_press(e){
if(cljs.core._EQ_.call(null,(13),e.charCode)){
return spelling_bee.core.handle_submit.call(null);
} else {
return null;
}
});
spelling_bee.core.handle_delete = (function spelling_bee$core$handle_delete(){
return spelling_bee.core.dispatch_user_input.call(null,"");
});
spelling_bee.core.handle_shuffle = (function spelling_bee$core$handle_shuffle(){
var chars = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null)));
var center_letter = cljs.core.first.call(null,chars);
var other_letters = cljs.core.shuffle.call(null,cljs.core.rest.call(null,chars));
var new_order = cljs.core.concat.call(null,center_letter,other_letters);
return spelling_bee.core.dispatch_new_letter_order.call(null,cljs.core.vec.call(null,new_order));
});
/**
 * Lists letters in buttons
 */
spelling_bee.core.list_letters = (function spelling_bee$core$list_letters(chars){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"50px 50px 20px 50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = (function spelling_bee$core$list_letters_$_iter__9929(s__9930){
return (new cljs.core.LazySeq(null,(function (){
var s__9930__$1 = s__9930;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9930__$1);
if(temp__5457__auto__){
var s__9930__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9930__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9930__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9932 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9931 = (0);
while(true){
if((i__9931 < size__4522__auto__)){
var letter = cljs.core._nth.call(null,c__4521__auto__,i__9931);
cljs.core.chunk_append.call(null,b__9932,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)));

var G__9937 = (i__9931 + (1));
i__9931 = G__9937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9932),spelling_bee$core$list_letters_$_iter__9929.call(null,cljs.core.chunk_rest.call(null,s__9930__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9932),null);
}
} else {
var letter = cljs.core.first.call(null,s__9930__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)),spelling_bee$core$list_letters_$_iter__9929.call(null,cljs.core.rest.call(null,s__9930__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.subvec.call(null,chars,(1),(4)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"orange","orange",73816386)], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,chars)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = (function spelling_bee$core$list_letters_$_iter__9933(s__9934){
return (new cljs.core.LazySeq(null,(function (){
var s__9934__$1 = s__9934;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9934__$1);
if(temp__5457__auto__){
var s__9934__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9934__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9934__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9936 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9935 = (0);
while(true){
if((i__9935 < size__4522__auto__)){
var letter = cljs.core._nth.call(null,c__4521__auto__,i__9935);
cljs.core.chunk_append.call(null,b__9936,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)));

var G__9938 = (i__9935 + (1));
i__9935 = G__9938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9936),spelling_bee$core$list_letters_$_iter__9933.call(null,cljs.core.chunk_rest.call(null,s__9934__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9936),null);
}
} else {
var letter = cljs.core.first.call(null,s__9934__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)),spelling_bee$core$list_letters_$_iter__9933.call(null,cljs.core.rest.call(null,s__9934__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.subvec.call(null,chars,(4),(7)));
})()], null)], null);
});
/**
 * Displays list of characters to browser
 */
spelling_bee.core.display_letters = (function spelling_bee$core$display_letters(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"How many words can you make with these characters?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Words must include center letter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.list_letters,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Shuffle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return spelling_bee.core.handle_shuffle.call(null);
})], null)], null)], null);
});
/**
 * Set input value to answer
 */
spelling_bee.core.set_input = (function spelling_bee$core$set_input(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__9939_SHARP_){
return spelling_bee.core.dispatch_user_input.call(null,p1__9939_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__9940_SHARP_){
return spelling_bee.core.handle_key_press.call(null,p1__9940_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return spelling_bee.core.handle_submit.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return spelling_bee.core.handle_delete.call(null);
})], null)], null)], null);
});
/**
 * Displays all items from a sequence to browser
 */
spelling_bee.core.list_found_words = (function spelling_bee$core$list_found_words(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Found words (",cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"found-words","found-words",1852804480)], null)))),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function spelling_bee$core$list_found_words_$_iter__9941(s__9942){
return (new cljs.core.LazySeq(null,(function (){
var s__9942__$1 = s__9942;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9942__$1);
if(temp__5457__auto__){
var s__9942__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9942__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9942__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9944 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9943 = (0);
while(true){
if((i__9943 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__9943);
cljs.core.chunk_append.call(null,b__9944,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__9945 = (i__9943 + (1));
i__9943 = G__9945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9944),spelling_bee$core$list_found_words_$_iter__9941.call(null,cljs.core.chunk_rest.call(null,s__9942__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9944),null);
}
} else {
var item = cljs.core.first.call(null,s__9942__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),spelling_bee$core$list_found_words_$_iter__9941.call(null,cljs.core.rest.call(null,s__9942__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"found-words","found-words",1852804480)], null)))));
})()], null)], null);
});
spelling_bee.core.get_answer = (function spelling_bee$core$get_answer(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Enter your answer: "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.set_input], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your answer is: ",clojure.string.upper_case.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)], null)], null),spelling_bee.core.display_message.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null))))], null)], null);
});
});
spelling_bee.core.display_points = (function spelling_bee$core$display_points(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"orange","orange",73816386)], null)], null),"Total Point: ",cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),spelling_bee.core.get_rank.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10%"], null),new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null)))),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null)], null)], null)], null);
});
spelling_bee.core.main = (function spelling_bee$core$main(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"Welcome to Spelling Bee!!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.display_letters,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.get_answer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.display_points], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.list_found_words], null)], null);
});
spelling_bee.core.get_app_element = (function spelling_bee$core$get_app_element(){
return goog.dom.getElement("app");
});
spelling_bee.core.mount = (function spelling_bee$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.main], null),el);
});
spelling_bee.core.mount_app_element = (function spelling_bee$core$mount_app_element(){
var temp__5457__auto__ = spelling_bee.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return spelling_bee.core.mount.call(null,el);
} else {
return null;
}
});
spelling_bee.core.mount_app_element.call(null);
spelling_bee.core.on_reload = (function spelling_bee$core$on_reload(){
return spelling_bee.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
