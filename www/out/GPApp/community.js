// Compiled by ClojureScript 1.7.48 {}
goog.provide('GPApp.community');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('GPApp.websocket');
goog.require('jayq.core');
GPApp.community.init = (function GPApp$community$init(){
GPApp.community.starter_CommunityService = ["$http",(function ($http){
var G__8045 = {};
(G__8045["getCommunitys"] = ((function (G__8045){
return (function (){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"name","name",1843675177),"Ben Sparrow",new cljs.core.Keyword(null,"lastText","lastText",696157301),"You on your way?",new cljs.core.Keyword(null,"face","face",-1356480717),"img/ben.png"], null)], null));
});})(G__8045))
);

(G__8045["getusersbydeptid"] = ((function (G__8045){
return (function (deptid){
return $http.get([cljs.core.str(serverurl),cljs.core.str("getusersbydeptid")].join(''),(function (){var G__8049 = {};
(G__8049["params"] = (function (){var G__8051 = {};
(G__8051["deptid"] = deptid);

return G__8051;
})());

return G__8049;
})()).then(((function (G__8045){
return (function (response){
return response;
});})(G__8045))
);
});})(G__8045))
);

return G__8045;
})];

angular.module("starter").service("CommunityService",GPApp.community.starter_CommunityService);

GPApp.community.starter_controllers_CommunityCtrl = ["$scope","$sce","CommunityService","$rootScope","$state","$stateParams","$ionicModal","$ionicPopup","$timeout","$ionicLoading","$compile",(function ($scope,$sce,CommunityService,$rootScope,$state,$stateParams,$ionicModal,$ionicPopup,$timeout,$ionicLoading,$compile){
cljs.core.println.call(null,"CommunityCtrl");

var o_SHARP_ = $scope;
(o_SHARP_["chats"] = CommunityService.getCommunitys());

return o_SHARP_;
})];

return angular.module("starter.controllers").controller("CommunityCtrl",GPApp.community.starter_controllers_CommunityCtrl);
});

//# sourceMappingURL=community.js.map