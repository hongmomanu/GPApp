(ns GPApp.tab
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

  (println "tabinit")

  (def.controller starter.controllers.TabCtrl [$scope $sce MenuService MessageService $rootScope $state $stateParams $ionicModal $ionicPopup $timeout UserService  $ionicLoading $compile]

    (println "MenuCtrl")

  )


  )
