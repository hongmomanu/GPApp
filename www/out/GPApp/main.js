// Compiled by ClojureScript 1.7.48 {}
goog.provide('GPApp.main');
goog.require('cljs.core');
goog.require('GPApp.community');
goog.require('GPApp.gpsubject');
goog.require('GPApp.tab');
goog.require('clojure.browser.repl');
goog.require('jayq.core');
goog.require('GPApp.activity');
cljs.core.enable_console_print_BANG_.call(null);
GPApp.main.starter_controllers = angular.module("starter.controllers",[]);
GPApp.tab.init.call(null);
GPApp.gpsubject.init.call(null);
GPApp.community.init.call(null);
GPApp.activity.init.call(null);
cljs.core.println.call(null,"Hello world initssssssss  sssssss!");

//# sourceMappingURL=main.js.map