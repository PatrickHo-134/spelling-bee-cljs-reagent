// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('clojure.string');
spelling_bee.core.word_list = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 72, ["ANNUAL",null,"DANG",null,"ALGAL",null,"LUNG",null,"NULL",null,"GLANDULAR",null,"RUNG",null,"AGAR",null,"GANG",null,"GALL",null,"ANGULAR",null,"GRANDDAD",null,"AUGURAL",null,"LAND",null,"ANNAL",null,"AURA",null,"LUNAR",null,"ANAL",null,"GRADUAL",null,"RAND",null,"RAGA",null,"GANGLAND",null,"RAGLAN",null,"GRANULAR",null,"ULNA",null,"GRANDAD",null,"LUNULA",null,"DRUG",null,"DRAG",null,"GLUG",null,"GNARL",null,"AURAL",null,"LULU",null,"LAUD",null,"DUAL",null,"GARLAND",null,"LULL",null,"LAGGARD",null,"RADAR",null,"GUAR",null,"UNGAG",null,"GLAD",null,"NANA",null,"GAGA",null,"GURU",null,"ANNULAR",null,"ANNUL",null,"GRAN",null,"GULAG",null,"NAAN",null,"LUAU",null,"ARUGULA",null,"LUNA",null,"ULNAR",null,"LANDAU",null,"RANG",null,"GALA",null,"DUAD",null,"GLAND",null,"NADA",null,"ALGA",null,"GUARD",null,"AUGUR",null,"RURAL",null,"DULL",null,"DULLARD",null,"GRAD",null,"GRAND",null,"DARN",null,"GULL",null,"LARD",null,"DUNG",null], null), null);
spelling_bee.core.letters = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L","R","G","A","D","N","U"], null);
spelling_bee.core.center_letter = "A";
spelling_bee.core.dispatch_user_input = (function spelling_bee$core$dispatch_user_input(input){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),input], null));
});
spelling_bee.core.dispatch_new_points = (function spelling_bee$core$dispatch_new_points(new_points){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-points","new-points",1134894361),new_points], null));
});
spelling_bee.core.dispatch_new_found_words = (function spelling_bee$core$dispatch_new_found_words(new_words){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),new_words], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"answer","answer",-742633163),"",new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),(function (db,p__10381){
var vec__10382 = p__10381;
var _ = cljs.core.nth.call(null,vec__10382,(0),null);
var new_answer = cljs.core.nth.call(null,vec__10382,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"answer","answer",-742633163),new_answer);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-points","new-points",1134894361),(function (db,p__10385){
var vec__10386 = p__10385;
var _ = cljs.core.nth.call(null,vec__10386,(0),null);
var new_points = cljs.core.nth.call(null,vec__10386,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"points","points",-1486596883),new_points);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),(function (db,p__10389){
var vec__10390 = p__10389;
var _ = cljs.core.nth.call(null,vec__10390,(0),null);
var new_words = cljs.core.nth.call(null,vec__10390,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"found-words","found-words",1852804480),new_words);
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
return cljs.core.some.call(null,(function (p1__10393_SHARP_){
return cljs.core._EQ_.call(null,clojure.string.upper_case.call(null,word),p1__10393_SHARP_);
}),spelling_bee.core.word_list);
});
/**
 * Returns predicate value if a word has center letter
 */
spelling_bee.core.include_center_letter_QMARK_ = (function spelling_bee$core$include_center_letter_QMARK_(word){
return cljs.core.some.call(null,(function (p1__10394_SHARP_){
return cljs.core._EQ_.call(null,spelling_bee.core.center_letter,clojure.string.upper_case.call(null,p1__10394_SHARP_));
}),cljs.core.set.call(null,word));
});
/**
 * Returns predicate value if a word is a pangram
 */
spelling_bee.core.pangram_QMARK_ = (function spelling_bee$core$pangram_QMARK_(word){
var and__4120__auto__ = spelling_bee.core.in_word_list_QMARK_.call(null,word);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,clojure.string.upper_case.call(null,word)),cljs.core.set.call(null,spelling_bee.core.letters));
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
return cljs.core.some.call(null,(function (p1__10395_SHARP_){
return cljs.core._EQ_.call(null,clojure.string.upper_case.call(null,word),p1__10395_SHARP_);
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"found-words","found-words",1852804480)], null))));
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
cljs.core.println.call(null,new_answer,new_found_words,new_points);

spelling_bee.core.dispatch_new_found_words.call(null,new_found_words);

spelling_bee.core.dispatch_new_points.call(null,new_points);

return spelling_bee.core.dispatch_user_input.call(null,"");
} else {
return spelling_bee.core.dispatch_user_input.call(null,"");
}
});
/**
 * Displays list of characters to browser
 */
spelling_bee.core.display_letters = (function spelling_bee$core$display_letters(chars){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"How many words can you make with these characters?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),cljs.core.interpose.call(null," -- ",chars)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Words must include letter A (center letter)"], null)], null);
});
/**
 * Set input value to answer
 */
spelling_bee.core.set_input = (function spelling_bee$core$set_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10396_SHARP_){
return spelling_bee.core.dispatch_user_input.call(null,p1__10396_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return spelling_bee.core.handle_submit.call(null);
})], null)], null)], null);
});
/**
 * Displays all items from a sequence to browser
 */
spelling_bee.core.list_found_words = (function spelling_bee$core$list_found_words(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Found words (",cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"found-words","found-words",1852804480)], null)))),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function spelling_bee$core$list_found_words_$_iter__10397(s__10398){
return (new cljs.core.LazySeq(null,(function (){
var s__10398__$1 = s__10398;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__10398__$1);
if(temp__5457__auto__){
var s__10398__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10398__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__10398__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__10400 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__10399 = (0);
while(true){
if((i__10399 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__10399);
cljs.core.chunk_append.call(null,b__10400,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__10401 = (i__10399 + (1));
i__10399 = G__10401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10400),spelling_bee$core$list_found_words_$_iter__10397.call(null,cljs.core.chunk_rest.call(null,s__10398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10400),null);
}
} else {
var item = cljs.core.first.call(null,s__10398__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),spelling_bee$core$list_found_words_$_iter__10397.call(null,cljs.core.rest.call(null,s__10398__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"orange","orange",73816386)], null)], null),"Total Point: ",cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null))))], null)], null);
});
spelling_bee.core.main = (function spelling_bee$core$main(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"Welcome to Spelling Bee!!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.display_letters,spelling_bee.core.letters], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.get_answer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.display_points], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.list_found_words], null)], null);
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
