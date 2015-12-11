// Compiled by ClojureScript 1.7.48 {}
goog.provide('GPApp.activity');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('GPApp.websocket');
goog.require('jayq.core');
GPApp.activity.init = (function GPApp$activity$init(){
cljs.core.println.call(null,"Activity init");

GPApp.activity.starter_controllers_ActivityCtrl = ["$scope","$sce","$rootScope","$state","$stateParams","$ionicModal","$ionicPopup","$timeout","$ionicLoading","$compile",(function ($scope,$sce,$rootScope,$state,$stateParams,$ionicModal,$ionicPopup,$timeout,$ionicLoading,$compile){
cljs.core.println.call(null,"ActivityCtrl");

var o_SHARP_ = $scope;
(o_SHARP_["settings"] = (function (){var G__7601 = {};
(G__7601["enableFriends"] = true);

return G__7601;
})());

return o_SHARP_;
})];

return angular.module("starter.controllers").controller("ActivityCtrl",GPApp.activity.starter_controllers_ActivityCtrl);
});

//# sourceMappingURL=activity.js.map