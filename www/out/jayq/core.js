// Compiled by ClojureScript 1.7.48 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4423__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4423__auto__)){
var cm = temp__4423__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(){
var args6882 = [];
var len__5245__auto___6885 = arguments.length;
var i__5246__auto___6886 = (0);
while(true){
if((i__5246__auto___6886 < len__5245__auto___6885)){
args6882.push((arguments[i__5246__auto___6886]));

var G__6887 = (i__5246__auto___6886 + (1));
i__5246__auto___6886 = G__6887;
continue;
} else {
}
break;
}

var G__6884 = args6882.length;
switch (G__6884) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6882.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__4206__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__4206__auto__)){
return or__4206__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__6890 = null;
var G__6890__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__6890__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__6890 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__6890__2.call(this,self__,k);
case 3:
return G__6890__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6890.cljs$core$IFn$_invoke$arity$2 = G__6890__2;
G__6890.cljs$core$IFn$_invoke$arity$3 = G__6890__3;
return G__6890;
})()
;

jQuery.prototype.apply = (function (self__,args6889){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6889)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(){
var args__5252__auto__ = [];
var len__5245__auto___6896 = arguments.length;
var i__5246__auto___6897 = (0);
while(true){
if((i__5246__auto___6897 < len__5245__auto___6896)){
args__5252__auto__.push((arguments[i__5246__auto___6897]));

var G__6898 = (i__5246__auto___6897 + (1));
i__5246__auto___6897 = G__6898;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__6894){
var vec__6895 = p__6894;
var speed = cljs.core.nth.call(null,vec__6895,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6895,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq6891){
var G__6892 = cljs.core.first.call(null,seq6891);
var seq6891__$1 = cljs.core.next.call(null,seq6891);
var G__6893 = cljs.core.first.call(null,seq6891__$1);
var seq6891__$2 = cljs.core.next.call(null,seq6891__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__6892,G__6893,seq6891__$2);
});
jayq.core.text = (function jayq$core$text(){
var args6899 = [];
var len__5245__auto___6902 = arguments.length;
var i__5246__auto___6903 = (0);
while(true){
if((i__5246__auto___6903 < len__5245__auto___6902)){
args6899.push((arguments[i__5246__auto___6903]));

var G__6904 = (i__5246__auto___6903 + (1));
i__5246__auto___6903 = G__6904;
continue;
} else {
}
break;
}

var G__6901 = args6899.length;
switch (G__6901) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6899.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(){
var args6906 = [];
var len__5245__auto___6909 = arguments.length;
var i__5246__auto___6910 = (0);
while(true){
if((i__5246__auto___6910 < len__5245__auto___6909)){
args6906.push((arguments[i__5246__auto___6910]));

var G__6911 = (i__5246__auto___6910 + (1));
i__5246__auto___6910 = G__6911;
continue;
} else {
}
break;
}

var G__6908 = args6906.length;
switch (G__6908) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6906.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(){
var args6913 = [];
var len__5245__auto___6916 = arguments.length;
var i__5246__auto___6917 = (0);
while(true){
if((i__5246__auto___6917 < len__5245__auto___6916)){
args6913.push((arguments[i__5246__auto___6917]));

var G__6918 = (i__5246__auto___6917 + (1));
i__5246__auto___6917 = G__6918;
continue;
} else {
}
break;
}

var G__6915 = args6913.length;
switch (G__6915) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6913.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(){
var args6920 = [];
var len__5245__auto___6923 = arguments.length;
var i__5246__auto___6924 = (0);
while(true){
if((i__5246__auto___6924 < len__5245__auto___6923)){
args6920.push((arguments[i__5246__auto___6924]));

var G__6925 = (i__5246__auto___6924 + (1));
i__5246__auto___6924 = G__6925;
continue;
} else {
}
break;
}

var G__6922 = args6920.length;
switch (G__6922) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6920.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(){
var args6927 = [];
var len__5245__auto___6930 = arguments.length;
var i__5246__auto___6931 = (0);
while(true){
if((i__5246__auto___6931 < len__5245__auto___6930)){
args6927.push((arguments[i__5246__auto___6931]));

var G__6932 = (i__5246__auto___6931 + (1));
i__5246__auto___6931 = G__6932;
continue;
} else {
}
break;
}

var G__6929 = args6927.length;
switch (G__6929) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6927.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(){
var args6934 = [];
var len__5245__auto___6937 = arguments.length;
var i__5246__auto___6938 = (0);
while(true){
if((i__5246__auto___6938 < len__5245__auto___6937)){
args6934.push((arguments[i__5246__auto___6938]));

var G__6939 = (i__5246__auto___6938 + (1));
i__5246__auto___6938 = G__6939;
continue;
} else {
}
break;
}

var G__6936 = args6934.length;
switch (G__6936) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6934.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(){
var args6941 = [];
var len__5245__auto___6944 = arguments.length;
var i__5246__auto___6945 = (0);
while(true){
if((i__5246__auto___6945 < len__5245__auto___6944)){
args6941.push((arguments[i__5246__auto___6945]));

var G__6946 = (i__5246__auto___6945 + (1));
i__5246__auto___6945 = G__6946;
continue;
} else {
}
break;
}

var G__6943 = args6941.length;
switch (G__6943) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6941.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(){
var args__5252__auto__ = [];
var len__5245__auto___6952 = arguments.length;
var i__5246__auto___6953 = (0);
while(true){
if((i__5246__auto___6953 < len__5245__auto___6952)){
args__5252__auto__.push((arguments[i__5246__auto___6953]));

var G__6954 = (i__5246__auto___6953 + (1));
i__5246__auto___6953 = G__6954;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6950){
var vec__6951 = p__6950;
var speed = cljs.core.nth.call(null,vec__6951,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6951,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq6948){
var G__6949 = cljs.core.first.call(null,seq6948);
var seq6948__$1 = cljs.core.next.call(null,seq6948);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__6949,seq6948__$1);
});
jayq.core.show = (function jayq$core$show(){
var args__5252__auto__ = [];
var len__5245__auto___6959 = arguments.length;
var i__5246__auto___6960 = (0);
while(true){
if((i__5246__auto___6960 < len__5245__auto___6959)){
args__5252__auto__.push((arguments[i__5246__auto___6960]));

var G__6961 = (i__5246__auto___6960 + (1));
i__5246__auto___6960 = G__6961;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6957){
var vec__6958 = p__6957;
var speed = cljs.core.nth.call(null,vec__6958,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6958,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq6955){
var G__6956 = cljs.core.first.call(null,seq6955);
var seq6955__$1 = cljs.core.next.call(null,seq6955);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__6956,seq6955__$1);
});
jayq.core.toggle = (function jayq$core$toggle(){
var args__5252__auto__ = [];
var len__5245__auto___6966 = arguments.length;
var i__5246__auto___6967 = (0);
while(true){
if((i__5246__auto___6967 < len__5245__auto___6966)){
args__5252__auto__.push((arguments[i__5246__auto___6967]));

var G__6968 = (i__5246__auto___6967 + (1));
i__5246__auto___6967 = G__6968;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6964){
var vec__6965 = p__6964;
var speed = cljs.core.nth.call(null,vec__6965,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6965,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq6962){
var G__6963 = cljs.core.first.call(null,seq6962);
var seq6962__$1 = cljs.core.next.call(null,seq6962);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__6963,seq6962__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(){
var args__5252__auto__ = [];
var len__5245__auto___6973 = arguments.length;
var i__5246__auto___6974 = (0);
while(true){
if((i__5246__auto___6974 < len__5245__auto___6973)){
args__5252__auto__.push((arguments[i__5246__auto___6974]));

var G__6975 = (i__5246__auto___6974 + (1));
i__5246__auto___6974 = G__6975;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6971){
var vec__6972 = p__6971;
var speed = cljs.core.nth.call(null,vec__6972,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6972,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq6969){
var G__6970 = cljs.core.first.call(null,seq6969);
var seq6969__$1 = cljs.core.next.call(null,seq6969);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__6970,seq6969__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(){
var args__5252__auto__ = [];
var len__5245__auto___6980 = arguments.length;
var i__5246__auto___6981 = (0);
while(true){
if((i__5246__auto___6981 < len__5245__auto___6980)){
args__5252__auto__.push((arguments[i__5246__auto___6981]));

var G__6982 = (i__5246__auto___6981 + (1));
i__5246__auto___6981 = G__6982;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6978){
var vec__6979 = p__6978;
var speed = cljs.core.nth.call(null,vec__6979,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6979,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq6976){
var G__6977 = cljs.core.first.call(null,seq6976);
var seq6976__$1 = cljs.core.next.call(null,seq6976);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__6977,seq6976__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(){
var args__5252__auto__ = [];
var len__5245__auto___6987 = arguments.length;
var i__5246__auto___6988 = (0);
while(true){
if((i__5246__auto___6988 < len__5245__auto___6987)){
args__5252__auto__.push((arguments[i__5246__auto___6988]));

var G__6989 = (i__5246__auto___6988 + (1));
i__5246__auto___6988 = G__6989;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6985){
var vec__6986 = p__6985;
var speed = cljs.core.nth.call(null,vec__6986,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6986,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq6983){
var G__6984 = cljs.core.first.call(null,seq6983);
var seq6983__$1 = cljs.core.next.call(null,seq6983);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__6984,seq6983__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(){
var args__5252__auto__ = [];
var len__5245__auto___6994 = arguments.length;
var i__5246__auto___6995 = (0);
while(true){
if((i__5246__auto___6995 < len__5245__auto___6994)){
args__5252__auto__.push((arguments[i__5246__auto___6995]));

var G__6996 = (i__5246__auto___6995 + (1));
i__5246__auto___6995 = G__6996;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6992){
var vec__6993 = p__6992;
var speed = cljs.core.nth.call(null,vec__6993,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6993,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq6990){
var G__6991 = cljs.core.first.call(null,seq6990);
var seq6990__$1 = cljs.core.next.call(null,seq6990);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__6991,seq6990__$1);
});
jayq.core.siblings = (function jayq$core$siblings(){
var args6997 = [];
var len__5245__auto___7000 = arguments.length;
var i__5246__auto___7001 = (0);
while(true){
if((i__5246__auto___7001 < len__5245__auto___7000)){
args6997.push((arguments[i__5246__auto___7001]));

var G__7002 = (i__5246__auto___7001 + (1));
i__5246__auto___7001 = G__7002;
continue;
} else {
}
break;
}

var G__6999 = args6997.length;
switch (G__6999) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6997.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(){
var args7004 = [];
var len__5245__auto___7007 = arguments.length;
var i__5246__auto___7008 = (0);
while(true){
if((i__5246__auto___7008 < len__5245__auto___7007)){
args7004.push((arguments[i__5246__auto___7008]));

var G__7009 = (i__5246__auto___7008 + (1));
i__5246__auto___7008 = G__7009;
continue;
} else {
}
break;
}

var G__7006 = args7004.length;
switch (G__7006) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7004.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(){
var args7011 = [];
var len__5245__auto___7014 = arguments.length;
var i__5246__auto___7015 = (0);
while(true){
if((i__5246__auto___7015 < len__5245__auto___7014)){
args7011.push((arguments[i__5246__auto___7015]));

var G__7016 = (i__5246__auto___7015 + (1));
i__5246__auto___7015 = G__7016;
continue;
} else {
}
break;
}

var G__7013 = args7011.length;
switch (G__7013) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7011.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(){
var args7018 = [];
var len__5245__auto___7021 = arguments.length;
var i__5246__auto___7022 = (0);
while(true){
if((i__5246__auto___7022 < len__5245__auto___7021)){
args7018.push((arguments[i__5246__auto___7022]));

var G__7023 = (i__5246__auto___7022 + (1));
i__5246__auto___7022 = G__7023;
continue;
} else {
}
break;
}

var G__7020 = args7018.length;
switch (G__7020) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7018.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(){
var args7025 = [];
var len__5245__auto___7028 = arguments.length;
var i__5246__auto___7029 = (0);
while(true){
if((i__5246__auto___7029 < len__5245__auto___7028)){
args7025.push((arguments[i__5246__auto___7029]));

var G__7030 = (i__5246__auto___7029 + (1));
i__5246__auto___7029 = G__7030;
continue;
} else {
}
break;
}

var G__7027 = args7025.length;
switch (G__7027) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7025.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(){
var args7032 = [];
var len__5245__auto___7035 = arguments.length;
var i__5246__auto___7036 = (0);
while(true){
if((i__5246__auto___7036 < len__5245__auto___7035)){
args7032.push((arguments[i__5246__auto___7036]));

var G__7037 = (i__5246__auto___7036 + (1));
i__5246__auto___7036 = G__7037;
continue;
} else {
}
break;
}

var G__7034 = args7032.length;
switch (G__7034) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7032.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(){
var args7039 = [];
var len__5245__auto___7042 = arguments.length;
var i__5246__auto___7043 = (0);
while(true){
if((i__5246__auto___7043 < len__5245__auto___7042)){
args7039.push((arguments[i__5246__auto___7043]));

var G__7044 = (i__5246__auto___7043 + (1));
i__5246__auto___7043 = G__7044;
continue;
} else {
}
break;
}

var G__7041 = args7039.length;
switch (G__7041) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7039.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(){
var args7046 = [];
var len__5245__auto___7049 = arguments.length;
var i__5246__auto___7050 = (0);
while(true){
if((i__5246__auto___7050 < len__5245__auto___7049)){
args7046.push((arguments[i__5246__auto___7050]));

var G__7051 = (i__5246__auto___7050 + (1));
i__5246__auto___7050 = G__7051;
continue;
} else {
}
break;
}

var G__7048 = args7046.length;
switch (G__7048) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7046.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(){
var args7053 = [];
var len__5245__auto___7056 = arguments.length;
var i__5246__auto___7057 = (0);
while(true){
if((i__5246__auto___7057 < len__5245__auto___7056)){
args7053.push((arguments[i__5246__auto___7057]));

var G__7058 = (i__5246__auto___7057 + (1));
i__5246__auto___7057 = G__7058;
continue;
} else {
}
break;
}

var G__7055 = args7053.length;
switch (G__7055) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7053.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(){
var args7060 = [];
var len__5245__auto___7063 = arguments.length;
var i__5246__auto___7064 = (0);
while(true){
if((i__5246__auto___7064 < len__5245__auto___7063)){
args7060.push((arguments[i__5246__auto___7064]));

var G__7065 = (i__5246__auto___7064 + (1));
i__5246__auto___7064 = G__7065;
continue;
} else {
}
break;
}

var G__7062 = args7060.length;
switch (G__7062) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7060.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(){
var args__5252__auto__ = [];
var len__5245__auto___7072 = arguments.length;
var i__5246__auto___7073 = (0);
while(true){
if((i__5246__auto___7073 < len__5245__auto___7072)){
args__5252__auto__.push((arguments[i__5246__auto___7073]));

var G__7074 = (i__5246__auto___7073 + (1));
i__5246__auto___7073 = G__7074;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__7070){
var vec__7071 = p__7070;
var context = cljs.core.nth.call(null,vec__7071,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq7067){
var G__7068 = cljs.core.first.call(null,seq7067);
var seq7067__$1 = cljs.core.next.call(null,seq7067);
var G__7069 = cljs.core.first.call(null,seq7067__$1);
var seq7067__$2 = cljs.core.next.call(null,seq7067__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__7068,G__7069,seq7067__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(){
var args7075 = [];
var len__5245__auto___7078 = arguments.length;
var i__5246__auto___7079 = (0);
while(true){
if((i__5246__auto___7079 < len__5245__auto___7078)){
args7075.push((arguments[i__5246__auto___7079]));

var G__7080 = (i__5246__auto___7079 + (1));
i__5246__auto___7079 = G__7080;
continue;
} else {
}
break;
}

var G__7077 = args7075.length;
switch (G__7077) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7075.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(){
var args7082 = [];
var len__5245__auto___7085 = arguments.length;
var i__5246__auto___7086 = (0);
while(true){
if((i__5246__auto___7086 < len__5245__auto___7085)){
args7082.push((arguments[i__5246__auto___7086]));

var G__7087 = (i__5246__auto___7086 + (1));
i__5246__auto___7086 = G__7087;
continue;
} else {
}
break;
}

var G__7084 = args7082.length;
switch (G__7084) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7082.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(){
var args7089 = [];
var len__5245__auto___7092 = arguments.length;
var i__5246__auto___7093 = (0);
while(true){
if((i__5246__auto___7093 < len__5245__auto___7092)){
args7089.push((arguments[i__5246__auto___7093]));

var G__7094 = (i__5246__auto___7093 + (1));
i__5246__auto___7093 = G__7094;
continue;
} else {
}
break;
}

var G__7091 = args7089.length;
switch (G__7091) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7089.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(){
var args7096 = [];
var len__5245__auto___7099 = arguments.length;
var i__5246__auto___7100 = (0);
while(true){
if((i__5246__auto___7100 < len__5245__auto___7099)){
args7096.push((arguments[i__5246__auto___7100]));

var G__7101 = (i__5246__auto___7100 + (1));
i__5246__auto___7100 = G__7101;
continue;
} else {
}
break;
}

var G__7098 = args7096.length;
switch (G__7098) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7096.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__7105){
var map__7108 = p__7105;
var map__7108__$1 = ((((!((map__7108 == null)))?((((map__7108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7108):map__7108);
var request = map__7108__$1;
var data = cljs.core.get.call(null,map__7108__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__7108__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__7108,map__7108__$1,request,data,contentType){
return (function (p1__7104_SHARP_){
if(cljs.core.truth_((function (){var and__4194__auto__ = ct;
if(cljs.core.truth_(and__4194__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__4194__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__7104_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__7104_SHARP_;
}
});})(ct,map__7108,map__7108__$1,request,data,contentType))
.call(null,((function (ct,map__7108,map__7108__$1,request,data,contentType){
return (function (p1__7103_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__7103_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__7103_SHARP_;
}
});})(ct,map__7108,map__7108__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(){
var args7110 = [];
var len__5245__auto___7113 = arguments.length;
var i__5246__auto___7114 = (0);
while(true){
if((i__5246__auto___7114 < len__5245__auto___7113)){
args7110.push((arguments[i__5246__auto___7114]));

var G__7115 = (i__5246__auto___7114 + (1));
i__5246__auto___7114 = G__7115;
continue;
} else {
}
break;
}

var G__7112 = args7110.length;
switch (G__7112) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7110.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__7117,content,callback){
var vec__7119 = p__7117;
var method = cljs.core.nth.call(null,vec__7119,(0),null);
var uri = cljs.core.nth.call(null,vec__7119,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(){
var args__5252__auto__ = [];
var len__5245__auto___7125 = arguments.length;
var i__5246__auto___7126 = (0);
while(true){
if((i__5246__auto___7126 < len__5245__auto___7125)){
args__5252__auto__.push((arguments[i__5246__auto___7126]));

var G__7127 = (i__5246__auto___7126 + (1));
i__5246__auto___7126 = G__7127;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__7123){
var vec__7124 = p__7123;
var func = cljs.core.nth.call(null,vec__7124,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq7120){
var G__7121 = cljs.core.first.call(null,seq7120);
var seq7120__$1 = cljs.core.next.call(null,seq7120);
var G__7122 = cljs.core.first.call(null,seq7120__$1);
var seq7120__$2 = cljs.core.next.call(null,seq7120__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__7121,G__7122,seq7120__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(){
var args__5252__auto__ = [];
var len__5245__auto___7133 = arguments.length;
var i__5246__auto___7134 = (0);
while(true){
if((i__5246__auto___7134 < len__5245__auto___7133)){
args__5252__auto__.push((arguments[i__5246__auto___7134]));

var G__7135 = (i__5246__auto___7134 + (1));
i__5246__auto___7134 = G__7135;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7131){
var vec__7132 = p__7131;
var sel = cljs.core.nth.call(null,vec__7132,(0),null);
var data = cljs.core.nth.call(null,vec__7132,(1),null);
var handler = cljs.core.nth.call(null,vec__7132,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq7128){
var G__7129 = cljs.core.first.call(null,seq7128);
var seq7128__$1 = cljs.core.next.call(null,seq7128);
var G__7130 = cljs.core.first.call(null,seq7128__$1);
var seq7128__$2 = cljs.core.next.call(null,seq7128__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__7129,G__7130,seq7128__$2);
});
jayq.core.one = (function jayq$core$one(){
var args__5252__auto__ = [];
var len__5245__auto___7141 = arguments.length;
var i__5246__auto___7142 = (0);
while(true){
if((i__5246__auto___7142 < len__5245__auto___7141)){
args__5252__auto__.push((arguments[i__5246__auto___7142]));

var G__7143 = (i__5246__auto___7142 + (1));
i__5246__auto___7142 = G__7143;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7139){
var vec__7140 = p__7139;
var sel = cljs.core.nth.call(null,vec__7140,(0),null);
var data = cljs.core.nth.call(null,vec__7140,(1),null);
var handler = cljs.core.nth.call(null,vec__7140,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq7136){
var G__7137 = cljs.core.first.call(null,seq7136);
var seq7136__$1 = cljs.core.next.call(null,seq7136);
var G__7138 = cljs.core.first.call(null,seq7136__$1);
var seq7136__$2 = cljs.core.next.call(null,seq7136__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__7137,G__7138,seq7136__$2);
});
jayq.core.off = (function jayq$core$off(){
var args__5252__auto__ = [];
var len__5245__auto___7149 = arguments.length;
var i__5246__auto___7150 = (0);
while(true){
if((i__5246__auto___7150 < len__5245__auto___7149)){
args__5252__auto__.push((arguments[i__5246__auto___7150]));

var G__7151 = (i__5246__auto___7150 + (1));
i__5246__auto___7150 = G__7151;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7147){
var vec__7148 = p__7147;
var sel = cljs.core.nth.call(null,vec__7148,(0),null);
var handler = cljs.core.nth.call(null,vec__7148,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq7144){
var G__7145 = cljs.core.first.call(null,seq7144);
var seq7144__$1 = cljs.core.next.call(null,seq7144);
var G__7146 = cljs.core.first.call(null,seq7144__$1);
var seq7144__$2 = cljs.core.next.call(null,seq7144__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__7145,G__7146,seq7144__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(){
var args7152 = [];
var len__5245__auto___7155 = arguments.length;
var i__5246__auto___7156 = (0);
while(true){
if((i__5246__auto___7156 < len__5245__auto___7155)){
args7152.push((arguments[i__5246__auto___7156]));

var G__7157 = (i__5246__auto___7156 + (1));
i__5246__auto___7156 = G__7157;
continue;
} else {
}
break;
}

var G__7154 = args7152.length;
switch (G__7154) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7152.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(){
var args7159 = [];
var len__5245__auto___7162 = arguments.length;
var i__5246__auto___7163 = (0);
while(true){
if((i__5246__auto___7163 < len__5245__auto___7162)){
args7159.push((arguments[i__5246__auto___7163]));

var G__7164 = (i__5246__auto___7163 + (1));
i__5246__auto___7163 = G__7164;
continue;
} else {
}
break;
}

var G__7161 = args7159.length;
switch (G__7161) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7159.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(){
var args7166 = [];
var len__5245__auto___7169 = arguments.length;
var i__5246__auto___7170 = (0);
while(true){
if((i__5246__auto___7170 < len__5245__auto___7169)){
args7166.push((arguments[i__5246__auto___7170]));

var G__7171 = (i__5246__auto___7170 + (1));
i__5246__auto___7170 = G__7171;
continue;
} else {
}
break;
}

var G__7168 = args7166.length;
switch (G__7168) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7166.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(){
var args7173 = [];
var len__5245__auto___7176 = arguments.length;
var i__5246__auto___7177 = (0);
while(true){
if((i__5246__auto___7177 < len__5245__auto___7176)){
args7173.push((arguments[i__5246__auto___7177]));

var G__7178 = (i__5246__auto___7177 + (1));
i__5246__auto___7177 = G__7178;
continue;
} else {
}
break;
}

var G__7175 = args7173.length;
switch (G__7175) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7173.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(){
var args7180 = [];
var len__5245__auto___7183 = arguments.length;
var i__5246__auto___7184 = (0);
while(true){
if((i__5246__auto___7184 < len__5245__auto___7183)){
args7180.push((arguments[i__5246__auto___7184]));

var G__7185 = (i__5246__auto___7184 + (1));
i__5246__auto___7184 = G__7185;
continue;
} else {
}
break;
}

var G__7182 = args7180.length;
switch (G__7182) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7180.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(){
var args7187 = [];
var len__5245__auto___7190 = arguments.length;
var i__5246__auto___7191 = (0);
while(true){
if((i__5246__auto___7191 < len__5245__auto___7190)){
args7187.push((arguments[i__5246__auto___7191]));

var G__7192 = (i__5246__auto___7191 + (1));
i__5246__auto___7191 = G__7192;
continue;
} else {
}
break;
}

var G__7189 = args7187.length;
switch (G__7189) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7187.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(){
var args__5252__auto__ = [];
var len__5245__auto___7196 = arguments.length;
var i__5246__auto___7197 = (0);
while(true){
if((i__5246__auto___7197 < len__5245__auto___7196)){
args__5252__auto__.push((arguments[i__5246__auto___7197]));

var G__7198 = (i__5246__auto___7197 + (1));
i__5246__auto___7197 = G__7198;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq7194){
var G__7195 = cljs.core.first.call(null,seq7194);
var seq7194__$1 = cljs.core.next.call(null,seq7194);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__7195,seq7194__$1);
});
jayq.core.fail = (function jayq$core$fail(){
var args__5252__auto__ = [];
var len__5245__auto___7201 = arguments.length;
var i__5246__auto___7202 = (0);
while(true){
if((i__5246__auto___7202 < len__5245__auto___7201)){
args__5252__auto__.push((arguments[i__5246__auto___7202]));

var G__7203 = (i__5246__auto___7202 + (1));
i__5246__auto___7202 = G__7203;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq7199){
var G__7200 = cljs.core.first.call(null,seq7199);
var seq7199__$1 = cljs.core.next.call(null,seq7199);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__7200,seq7199__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(){
var args7204 = [];
var len__5245__auto___7207 = arguments.length;
var i__5246__auto___7208 = (0);
while(true){
if((i__5246__auto___7208 < len__5245__auto___7207)){
args7204.push((arguments[i__5246__auto___7208]));

var G__7209 = (i__5246__auto___7208 + (1));
i__5246__auto___7208 = G__7209;
continue;
} else {
}
break;
}

var G__7206 = args7204.length;
switch (G__7206) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7204.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(){
var args__5252__auto__ = [];
var len__5245__auto___7213 = arguments.length;
var i__5246__auto___7214 = (0);
while(true){
if((i__5246__auto___7214 < len__5245__auto___7213)){
args__5252__auto__.push((arguments[i__5246__auto___7214]));

var G__7215 = (i__5246__auto___7214 + (1));
i__5246__auto___7214 = G__7215;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq7211){
var G__7212 = cljs.core.first.call(null,seq7211);
var seq7211__$1 = cljs.core.next.call(null,seq7211);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__7212,seq7211__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(){
var args7216 = [];
var len__5245__auto___7219 = arguments.length;
var i__5246__auto___7220 = (0);
while(true){
if((i__5246__auto___7220 < len__5245__auto___7219)){
args7216.push((arguments[i__5246__auto___7220]));

var G__7221 = (i__5246__auto___7220 + (1));
i__5246__auto___7220 = G__7221;
continue;
} else {
}
break;
}

var G__7218 = args7216.length;
switch (G__7218) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7216.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map