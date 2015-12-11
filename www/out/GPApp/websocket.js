// Compiled by ClojureScript 1.7.48 {}
goog.provide('GPApp.websocket');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('cljs.reader');
goog.require('jayq.core');
GPApp.websocket.serverurl = serverurl;
GPApp.websocket.socketurl = (function (){var oldport = clojure.string.join.call(null,"",cljs.core.drop.call(null,(1),cljs.core.re_find.call(null,/:\d+/,GPApp.websocket.serverurl)));
var oldtcp = "http";
var port = ((1) + cljs.reader.read_string.call(null,oldport));
var tcp = "ws";
return clojure.string.replace.call(null,clojure.string.replace.call(null,GPApp.websocket.serverurl,oldport,port),oldtcp,tcp);
})();
GPApp.websocket.init = (function GPApp$websocket$init($rootScope){
var socket = (new ReconnectingWebSocket(GPApp.websocket.socketurl));
cljs.core.println.call(null,socket,"hahha");

socketobj = socket;

var o_SHARP__6719 = socket;
(o_SHARP__6719["onmessage"] = ((function (o_SHARP__6719,socket){
return (function (event){
var res = JSON.parse((event["data"]));
cljs.core.println.call(null,"websockty",res);

var G__6716 = (res["type"]);
switch (G__6716) {
case "message":
return cljs.core.println.call(null,(function (){var temp__4423__auto__ = (res["data"]);
if(cljs.core.truth_(temp__4423__auto__)){
var G__6717 = temp__4423__auto__;
var temp__4423__auto____$1 = (G__6717["mtype"]);
if(cljs.core.truth_(temp__4423__auto____$1)){
var G__6718 = temp__4423__auto____$1;
return G__6718;
} else {
return null;
}
} else {
return null;
}
})());

break;
default:
return "default";

}
});})(o_SHARP__6719,socket))
);


var o_SHARP_ = socket;
(o_SHARP_["onopen"] = ((function (o_SHARP_,socket){
return (function (event){
cljs.core.println.call(null,"opend");

socket.send((function (){var obj_SHARP_ = JSON;
var fn_SHARP_ = (obj_SHARP_["stringify"]);
return fn_SHARP_.call(obj_SHARP_,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"userid","userid",1974246085),(localStorage["userid"])], null)));
})());

return $rootScope.$broadcast("getunreadmsgs");
});})(o_SHARP_,socket))
);

return o_SHARP_;
});

//# sourceMappingURL=websocket.js.map