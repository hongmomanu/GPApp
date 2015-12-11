// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7347_7361 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7348_7362 = null;
var count__7349_7363 = (0);
var i__7350_7364 = (0);
while(true){
if((i__7350_7364 < count__7349_7363)){
var f_7365 = cljs.core._nth.call(null,chunk__7348_7362,i__7350_7364);
cljs.core.println.call(null,"  ",f_7365);

var G__7366 = seq__7347_7361;
var G__7367 = chunk__7348_7362;
var G__7368 = count__7349_7363;
var G__7369 = (i__7350_7364 + (1));
seq__7347_7361 = G__7366;
chunk__7348_7362 = G__7367;
count__7349_7363 = G__7368;
i__7350_7364 = G__7369;
continue;
} else {
var temp__4425__auto___7370 = cljs.core.seq.call(null,seq__7347_7361);
if(temp__4425__auto___7370){
var seq__7347_7371__$1 = temp__4425__auto___7370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7347_7371__$1)){
var c__4990__auto___7372 = cljs.core.chunk_first.call(null,seq__7347_7371__$1);
var G__7373 = cljs.core.chunk_rest.call(null,seq__7347_7371__$1);
var G__7374 = c__4990__auto___7372;
var G__7375 = cljs.core.count.call(null,c__4990__auto___7372);
var G__7376 = (0);
seq__7347_7361 = G__7373;
chunk__7348_7362 = G__7374;
count__7349_7363 = G__7375;
i__7350_7364 = G__7376;
continue;
} else {
var f_7377 = cljs.core.first.call(null,seq__7347_7371__$1);
cljs.core.println.call(null,"  ",f_7377);

var G__7378 = cljs.core.next.call(null,seq__7347_7371__$1);
var G__7379 = null;
var G__7380 = (0);
var G__7381 = (0);
seq__7347_7361 = G__7378;
chunk__7348_7362 = G__7379;
count__7349_7363 = G__7380;
i__7350_7364 = G__7381;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7382 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4206__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4206__auto__)){
return or__4206__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7382);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7382)))?cljs.core.second.call(null,arglists_7382):arglists_7382));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7351 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7352 = null;
var count__7353 = (0);
var i__7354 = (0);
while(true){
if((i__7354 < count__7353)){
var vec__7355 = cljs.core._nth.call(null,chunk__7352,i__7354);
var name = cljs.core.nth.call(null,vec__7355,(0),null);
var map__7356 = cljs.core.nth.call(null,vec__7355,(1),null);
var map__7356__$1 = ((((!((map__7356 == null)))?((((map__7356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7356):map__7356);
var doc = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7383 = seq__7351;
var G__7384 = chunk__7352;
var G__7385 = count__7353;
var G__7386 = (i__7354 + (1));
seq__7351 = G__7383;
chunk__7352 = G__7384;
count__7353 = G__7385;
i__7354 = G__7386;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7351);
if(temp__4425__auto__){
var seq__7351__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7351__$1)){
var c__4990__auto__ = cljs.core.chunk_first.call(null,seq__7351__$1);
var G__7387 = cljs.core.chunk_rest.call(null,seq__7351__$1);
var G__7388 = c__4990__auto__;
var G__7389 = cljs.core.count.call(null,c__4990__auto__);
var G__7390 = (0);
seq__7351 = G__7387;
chunk__7352 = G__7388;
count__7353 = G__7389;
i__7354 = G__7390;
continue;
} else {
var vec__7358 = cljs.core.first.call(null,seq__7351__$1);
var name = cljs.core.nth.call(null,vec__7358,(0),null);
var map__7359 = cljs.core.nth.call(null,vec__7358,(1),null);
var map__7359__$1 = ((((!((map__7359 == null)))?((((map__7359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7359):map__7359);
var doc = cljs.core.get.call(null,map__7359__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7359__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7391 = cljs.core.next.call(null,seq__7351__$1);
var G__7392 = null;
var G__7393 = (0);
var G__7394 = (0);
seq__7351 = G__7391;
chunk__7352 = G__7392;
count__7353 = G__7393;
i__7354 = G__7394;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map