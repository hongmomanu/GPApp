(ns GPApp.gpsubject
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


   (println "GPApp.gpsubject init")

  (def.controller starter.controllers.GPsubjectCtrl [$scope $sce  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "GPsubjectCtrl")


  )


  )
