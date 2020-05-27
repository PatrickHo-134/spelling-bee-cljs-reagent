// Compiled by ClojureScript 1.10.520 {}
goog.provide('spelling_bee.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('reagent_modals.modals');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.events');
/**
 * Returns predicate value if a word has equal or less than 3 letters
 */
spelling_bee.views.too_short_QMARK_ = (function spelling_bee$views$too_short_QMARK_(word){
return ((3) >= cljs.core.count.call(null,word));
});
/**
 * Returns predicate value if a value is in a list
 */
spelling_bee.views.in_list_QMARK_ = (function spelling_bee$views$in_list_QMARK_(val,lst){
return cljs.core.some.call(null,(function (p1__15750_SHARP_){
return cljs.core._EQ_.call(null,val,p1__15750_SHARP_);
}),lst);
});
/**
 * Returns predicate value if a word has center letter
 */
spelling_bee.views.include_center_letter_QMARK_ = (function spelling_bee$views$include_center_letter_QMARK_(word,c_letter){
return cljs.core.some.call(null,(function (p1__15751_SHARP_){
return cljs.core._EQ_.call(null,c_letter,clojure.string.upper_case.call(null,p1__15751_SHARP_));
}),cljs.core.set.call(null,clojure.string.upper_case.call(null,word)));
});
/**
 * Returns predicate value if a word is a pangram
 */
spelling_bee.views.pangram_QMARK_ = (function spelling_bee$views$pangram_QMARK_(word,letters){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,clojure.string.upper_case.call(null,word)),cljs.core.set.call(null,letters));
});
spelling_bee.views.dispatch_new_word_list = (function spelling_bee$views$dispatch_new_word_list(word_list){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-list","new-list",1375707571),word_list], null));
});
spelling_bee.views.dispatch_user_input = (function spelling_bee$views$dispatch_user_input(input){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer-input","answer-input",-576382609),input], null));
});
spelling_bee.views.dispatch_new_points = (function spelling_bee$views$dispatch_new_points(new_points){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-points","new-points",1134894361),new_points], null));
});
spelling_bee.views.dispatch_new_found_words = (function spelling_bee$views$dispatch_new_found_words(new_words){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-found-words","new-found-words",871526894),new_words], null));
});
spelling_bee.views.dispatch_new_letter_order = (function spelling_bee$views$dispatch_new_letter_order(new_order){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-letter-order","new-letter-order",209282947),new_order], null));
});
spelling_bee.views.dispatch_new_rank = (function spelling_bee$views$dispatch_new_rank(upper_rank){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-rank","new-rank",929533606),upper_rank], null));
});
/**
 * Returns point if a word is in word list
 */
spelling_bee.views.calculate_point = (function spelling_bee$views$calculate_point(word){
var results = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null)));
var letters = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null)));
if(cljs.core.not.call(null,spelling_bee.views.in_list_QMARK_.call(null,word,results))){
return (0);
} else {
var point = ((cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,word)))?(1):cljs.core.count.call(null,word));
if((!(spelling_bee.views.pangram_QMARK_.call(null,word,letters)))){
return point;
} else {
return (point + (7));
}
}
});
/**
 * Return maximum point of a game
 */
spelling_bee.views.get_max_point = (function spelling_bee$views$get_max_point(){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,spelling_bee.views.calculate_point,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null)))));
});
/**
 * Returns a rank corresponding to the current point
 */
spelling_bee.views.get_rank = (function spelling_bee$views$get_rank(points,results){
var curr_point = cljs.core.reduce.call(null,cljs.core._PLUS_,points);
var max_point = spelling_bee.views.get_max_point.call(null);
if((((0.02 * max_point) | (0)) > curr_point)){
return "Beginner";
} else {
if((((((0.02 * max_point) | (0)) <= curr_point)) && ((((0.05 * max_point) | (0)) > curr_point)))){
return "Good Start";
} else {
if((((((0.05 * max_point) | (0)) <= curr_point)) && ((((0.1 * max_point) | (0)) > curr_point)))){
return "Moving Up";
} else {
if((((((0.1 * max_point) | (0)) <= curr_point)) && ((((0.2 * max_point) | (0)) > curr_point)))){
return "Good";
} else {
if((((((0.2 * max_point) | (0)) <= curr_point)) && ((((0.3 * max_point) | (0)) > curr_point)))){
return "Solid";
} else {
if((((((0.3 * max_point) | (0)) <= curr_point)) && ((((0.4 * max_point) | (0)) > curr_point)))){
return "Nice";
} else {
if((((((0.4 * max_point) | (0)) <= curr_point)) && ((((0.5 * max_point) | (0)) > curr_point)))){
return "Great";
} else {
if((((((0.5 * max_point) | (0)) <= curr_point)) && ((((0.7 * max_point) | (0)) > curr_point)))){
return "Amazing";
} else {
if((((0.7 * max_point) | (0)) <= curr_point)){
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
spelling_bee.views.check_answer = (function spelling_bee$views$check_answer(word){
var letters = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null)));
var found_words = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"found-words","found-words",1852804480)], null)));
var word_list = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null)));
if(cljs.core._EQ_.call(null,"",word)){
return "";
} else {
if(spelling_bee.views.too_short_QMARK_.call(null,word)){
return "Too short!";
} else {
if(((cljs.core.not.call(null,spelling_bee.views.in_list_QMARK_.call(null,word,found_words))) && (spelling_bee.views.pangram_QMARK_.call(null,word,letters)))){
return "Genius!";
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,spelling_bee.views.in_list_QMARK_.call(null,word,found_words));
if(and__4120__auto__){
var and__4120__auto____$1 = (!(spelling_bee.views.pangram_QMARK_.call(null,word,letters)));
if(and__4120__auto____$1){
return spelling_bee.views.in_list_QMARK_.call(null,word,word_list);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return "Very good!";
} else {
if(cljs.core.truth_(spelling_bee.views.in_list_QMARK_.call(null,word,found_words))){
return "Repeated answer!";
} else {
if(cljs.core.not.call(null,spelling_bee.views.include_center_letter_QMARK_.call(null,word,cljs.core.first.call(null,letters)))){
return "Missing center letter";
} else {
return "Not in word list!";

}
}
}
}
}
}
});
/**
 * Handles click on submit button
 */
spelling_bee.views.handle_submit = (function spelling_bee$views$handle_submit(){
var new_answer = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null)));
var found_words = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"found-words","found-words",1852804480)], null)));
var results = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null)));
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,spelling_bee.views.in_list_QMARK_.call(null,new_answer,found_words));
if(and__4120__auto__){
return spelling_bee.views.in_list_QMARK_.call(null,new_answer,results);
} else {
return and__4120__auto__;
}
})())){
var new_found_words = cljs.core.conj.call(null,found_words,new_answer);
var new_points = cljs.core.conj.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null))),spelling_bee.views.calculate_point.call(null,new_answer));
spelling_bee.views.dispatch_new_found_words.call(null,new_found_words);

spelling_bee.views.dispatch_new_points.call(null,new_points);

spelling_bee.views.dispatch_new_rank.call(null,spelling_bee.views.get_rank.call(null,new_points,results));

return spelling_bee.views.dispatch_user_input.call(null,"");
} else {
return spelling_bee.views.dispatch_user_input.call(null,"");
}
});
spelling_bee.views.handle_delete = (function spelling_bee$views$handle_delete(){
var current_answer = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null)));
var new_answer = cljs.core.subs.call(null,current_answer,(0),(cljs.core.count.call(null,current_answer) - (1)));
return spelling_bee.views.dispatch_user_input.call(null,new_answer);
});
spelling_bee.views.handle_shuffle = (function spelling_bee$views$handle_shuffle(){
var chars = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null)));
var center_letter = cljs.core.first.call(null,chars);
var other_letters = cljs.core.shuffle.call(null,cljs.core.rest.call(null,chars));
var new_order = cljs.core.concat.call(null,center_letter,other_letters);
return spelling_bee.views.dispatch_new_letter_order.call(null,cljs.core.vec.call(null,new_order));
});
spelling_bee.views.listen_to_key_press_BANG_ = (function spelling_bee$views$listen_to_key_press_BANG_(DomElement){
return goog.events.listen(DomElement,goog.events.EventType.KEYDOWN,(function (evt){
evt.preventDefault();

if(((cljs.core._EQ_.call(null,(8),evt.keyCode)) || (cljs.core._EQ_.call(null,(46),evt.keyCode)))){
return spelling_bee.views.handle_delete.call(null);
} else {
if(cljs.core._EQ_.call(null,(13),evt.keyCode)){
return spelling_bee.views.handle_submit.call(null);
} else {
if(((((65) <= evt.keyCode)) && (((90) >= evt.keyCode)))){
var current_answer = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null)));
var new_answer = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_answer),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,evt.key))].join('');
return spelling_bee.views.dispatch_user_input.call(null,new_answer);
} else {
return spelling_bee.views.dispatch_user_input.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null))));

}
}
}
}));
});
spelling_bee.views.shuffle_button = (function spelling_bee$views$shuffle_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-secondary btn-sm",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return spelling_bee.views.handle_shuffle.call(null);
})], null),"Shuffle"], null);
});
spelling_bee.views.submit_button = (function spelling_bee$views$submit_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-success btn-sm",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return spelling_bee.views.handle_submit.call(null);
})], null),"Enter"], null);
});
spelling_bee.views.delete_button = (function spelling_bee$views$delete_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-danger btn-sm",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return spelling_bee.views.handle_delete.call(null);
})], null),"Delete"], null);
});
/**
 * Creates a list of letter buttons
 */
spelling_bee.views.letter_buttons = (function spelling_bee$views$letter_buttons(chars){
var iter__4523__auto__ = (function spelling_bee$views$letter_buttons_$_iter__15753(s__15754){
return (new cljs.core.LazySeq(null,(function (){
var s__15754__$1 = s__15754;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15754__$1);
if(temp__5457__auto__){
var s__15754__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15754__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15754__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15756 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15755 = (0);
while(true){
if((i__15755 < size__4522__auto__)){
var letter = cljs.core._nth.call(null,c__4521__auto__,i__15755);
cljs.core.chunk_append.call(null,b__15756,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-light",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.Keyword(null,"value","value",305978217),letter,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15755,letter,c__4521__auto__,size__4522__auto__,b__15756,s__15754__$2,temp__5457__auto__){
return (function (p1__15752_SHARP_){
return spelling_bee.views.dispatch_user_input.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15752_SHARP_.target.value)].join(''));
});})(i__15755,letter,c__4521__auto__,size__4522__auto__,b__15756,s__15754__$2,temp__5457__auto__))
], null),letter], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)));

var G__15757 = (i__15755 + (1));
i__15755 = G__15757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15756),spelling_bee$views$letter_buttons_$_iter__15753.call(null,cljs.core.chunk_rest.call(null,s__15754__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15756),null);
}
} else {
var letter = cljs.core.first.call(null,s__15754__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-light",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.Keyword(null,"value","value",305978217),letter,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (letter,s__15754__$2,temp__5457__auto__){
return (function (p1__15752_SHARP_){
return spelling_bee.views.dispatch_user_input.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15752_SHARP_.target.value)].join(''));
});})(letter,s__15754__$2,temp__5457__auto__))
], null),letter], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),letter], null)),spelling_bee$views$letter_buttons_$_iter__15753.call(null,cljs.core.rest.call(null,s__15754__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,chars);
});
/**
 * Lists letters in buttons
 */
spelling_bee.views.list_letters = (function spelling_bee$views$list_letters(chars){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"40px 50px 40px 50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),spelling_bee.views.letter_buttons.call(null,cljs.core.subvec.call(null,chars,(1),(4)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-warning",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,chars),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__15758_SHARP_){
return spelling_bee.views.dispatch_user_input.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15758_SHARP_.target.value)].join(''));
})], null),cljs.core.first.call(null,chars)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),spelling_bee.views.letter_buttons.call(null,cljs.core.subvec.call(null,chars,(4),(7)))], null)], null);
});
spelling_bee.views.request_new_game = (function spelling_bee$views$request_new_game(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-warning",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));
})], null),"NEW GAME"], null);
});
/**
 * Displays list of characters to browser
 */
spelling_bee.views.display_letters = (function spelling_bee$views$display_letters(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"How many words can you make with these characters?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Words must include center letter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.views.request_new_game], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.views.list_letters,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.views.submit_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.views.shuffle_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.views.delete_button], null)], null);
});
/**
 * Displays typed in text from user
 */
spelling_bee.views.display_answer = (function spelling_bee$views$display_answer(){
var answer = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null),(function (){var iter__4523__auto__ = ((function (answer){
return (function spelling_bee$views$display_answer_$_iter__15759(s__15760){
return (new cljs.core.LazySeq(null,((function (answer){
return (function (){
var s__15760__$1 = s__15760;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15760__$1);
if(temp__5457__auto__){
var s__15760__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15760__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15760__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15762 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15761 = (0);
while(true){
if((i__15761 < size__4522__auto__)){
var letter = cljs.core._nth.call(null,c__4521__auto__,i__15761);
cljs.core.chunk_append.call(null,b__15762,(cljs.core.truth_(spelling_bee.views.in_list_QMARK_.call(null,letter,cljs.core.rest.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),letter], null):((cljs.core._EQ_.call(null,letter,cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"orange","orange",73816386)], null)], null),letter], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3], null)], null),letter], null)
)));

var G__15763 = (i__15761 + (1));
i__15761 = G__15763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15762),spelling_bee$views$display_answer_$_iter__15759.call(null,cljs.core.chunk_rest.call(null,s__15760__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15762),null);
}
} else {
var letter = cljs.core.first.call(null,s__15760__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(spelling_bee.views.in_list_QMARK_.call(null,letter,cljs.core.rest.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),letter], null):((cljs.core._EQ_.call(null,letter,cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"orange","orange",73816386)], null)], null),letter], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3], null)], null),letter], null)
)),spelling_bee$views$display_answer_$_iter__15759.call(null,cljs.core.rest.call(null,s__15760__$2)));
}
} else {
return null;
}
break;
}
});})(answer))
,null,null));
});})(answer))
;
return iter__4523__auto__.call(null,cljs.core.seq.call(null,answer));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"TextFadeInAndOut",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),"|"], null)], null);
});
spelling_bee.views.type_in_answer = (function spelling_bee$views$type_in_answer(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Enter your answer: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.views.display_answer], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"TextFadeInAndOut",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),spelling_bee.views.check_answer.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null))))], null)], null);
});
});
spelling_bee.views.ranking_information = (function spelling_bee$views$ranking_information(){
var max_point = spelling_bee.views.get_max_point.call(null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Rankings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Ranks are based on a percentage of possible points in a puzzle. The minimum scores to reach each rank for today\u2019s are:"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Beginner (0)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Good Start (",((0.02 * max_point) | (0)),")"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Moving Up (",((0.05 * max_point) | (0)),")"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Good (",((0.1 * max_point) | (0)),")"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Solid (",((0.2 * max_point) | (0)),")"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Nice (",((0.3 * max_point) | (0)),")"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Great (",((0.4 * max_point) | (0)),")"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Amazing (",((0.5 * max_point) | (0)),")"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Genius (",((0.7 * max_point) | (0)),")"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Have feedback? Email us at ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"phat.hovinh.13@gmail.com"], null),"phat.hovinh.13@gmail.com"], null)], null)], null);
});
spelling_bee.views.display_points = (function spelling_bee$views$display_points(){
var points = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"orange","orange",73816386)], null)], null),"Point: ",cljs.core.reduce.call(null,cljs.core._PLUS_,points)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),spelling_bee.views.get_rank.call(null,points,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_modals.modals.modal_window], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),"slider",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null),new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.reduce.call(null,cljs.core._PLUS_,points),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),spelling_bee.views.get_max_point.call(null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (points){
return (function (){
return reagent_modals.modals.modal_BANG_.call(null,spelling_bee.views.ranking_information.call(null));
});})(points))
], null)], null)], null)], null);
});
/**
 * Displays all items from a sequence to browser
 */
spelling_bee.views.list_found_words = (function spelling_bee$views$list_found_words(){
var words = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"found-words","found-words",1852804480)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Found words (",cljs.core.count.call(null,words),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = ((function (words){
return (function spelling_bee$views$list_found_words_$_iter__15764(s__15765){
return (new cljs.core.LazySeq(null,((function (words){
return (function (){
var s__15765__$1 = s__15765;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15765__$1);
if(temp__5457__auto__){
var s__15765__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15765__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15765__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15767 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15766 = (0);
while(true){
if((i__15766 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__15766);
cljs.core.chunk_append.call(null,b__15767,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__15768 = (i__15766 + (1));
i__15766 = G__15768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15767),spelling_bee$views$list_found_words_$_iter__15764.call(null,cljs.core.chunk_rest.call(null,s__15765__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15767),null);
}
} else {
var item = cljs.core.first.call(null,s__15765__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),spelling_bee$views$list_found_words_$_iter__15764.call(null,cljs.core.rest.call(null,s__15765__$2)));
}
} else {
return null;
}
break;
}
});})(words))
,null,null));
});})(words))
;
return iter__4523__auto__.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,words));
})()], null)], null);
});
spelling_bee.views.listen_to_key_press_BANG_.call(null,document);
spelling_bee.views.main = (function spelling_bee$views$main(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"Welcome to Spelling Bee!!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-6 col-md-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.views.display_letters,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letters","letters",2098125298)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.views.type_in_answer], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"col-6 col-md-6"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.views.display_points], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.views.list_found_words], null)], null)], null);
});

//# sourceMappingURL=views.js.map
