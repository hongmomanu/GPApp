(ns GPApp.historyvideo
  (:require [clojure.browser.repl :as repl]
            [GPApp.websocket :as websocket]

            )
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(defn init []

  (println "historyvideoinit")

  (def uploadsocketurl (
                let [
                     oldport (clojure.string/join "" (drop 1 (re-find #":\d+" js/serverurl)))
                     oldtcp "http"
                     port  "8888"
                     tcp "http"
                     ]

                (->
                 js/serverurl
                 (clojure.string/replace  oldport port)
                 (clojure.string/replace  oldtcp tcp)
                 )
                 "http://111.1.76.108:8001/"


                ))


  (def.controller starter.controllers.HistoryVideoCtrl [$scope $sce     $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "HistoryVideoCtrl")



    (! $scope.historyvideourl (.trustAsResourceUrl $sce (str uploadsocketurl "uploads/recording/" $stateParams.classid "/web.webm"  )))

  )


  )
