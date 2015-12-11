// Compiled by ClojureScript 1.7.48 {}
goog.provide('GPApp.gpsubject');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('GPApp.websocket');
goog.require('jayq.core');
GPApp.gpsubject.init = (function GPApp$gpsubject$init(){
cljs.core.println.call(null,"GPApp.gpsubject init");

GPApp.gpsubject.starter_controllers_GPsubjectCtrl = ["$scope","$sce","$rootScope","$state","$stateParams","$ionicModal","$ionicPopup","$timeout","$ionicLoading","$compile",(function ($scope,$sce,$rootScope,$state,$stateParams,$ionicModal,$ionicPopup,$timeout,$ionicLoading,$compile){
return cljs.core.println.call(null,"GPsubjectCtrl");
})];

return angular.module("starter.controllers").controller("GPsubjectCtrl",GPApp.gpsubject.starter_controllers_GPsubjectCtrl);
});

//# sourceMappingURL=gpsubject.js.map