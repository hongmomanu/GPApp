(ns GPApp.setting
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

  (println "settinginit")

  (def.controller starter.controllers.SettingCtrl [$scope $sce $ionicHistory  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout   $ionicLoading $compile]

    (println "SettingCtrl")

    (! $scope.usertype js/localStorage.usertype)

    (! $scope.unreadnums nil)

    (! $scope.logout (fn[]

                       (! js/localStorage.password "")
                       (.nextViewOptions $ionicHistory (obj :disableBack true))
                       (.go $state "user")

                       ))


    (.$on $scope "clearmsgnums" (fn [event ]

                              (! $scope.unreadnums nil)

                                 )


          )

    (.$on $scope "addmsgnums" (fn [event ]

                              (! $scope.unreadnums (+ (if (nil? $scope.unreadnums) 0 $scope.unreadnums) 1))

                                 )


          )

  )


  )
