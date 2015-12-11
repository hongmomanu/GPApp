// Compiled by ClojureScript 1.7.48 {}
goog.provide('GPApp.tab');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('GPApp.websocket');
goog.require('jayq.core');
GPApp.tab.init = (function GPApp$tab$init(){
cljs.core.println.call(null,"tabinit");

GPApp.tab.starter_controllers_TabCtrl = ["$scope","$sce","MenuService","MessageService","$rootScope","$state","$stateParams","$ionicModal","$ionicPopup","$timeout","UserService","$ionicLoading","$compile",(function ($scope,$sce,MenuService,MessageService,$rootScope,$state,$stateParams,$ionicModal,$ionicPopup,$timeout,UserService,$ionicLoading,$compile){
return cljs.core.println.call(null,"MenuCtrl");
})];

return angular.module("starter.controllers").controller("TabCtrl",GPApp.tab.starter_controllers_TabCtrl);
});

//# sourceMappingURL=tab.js.map