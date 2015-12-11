(ns GPApp.community
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


   (def.service starter.CommunityService [$http]
    (obj
      :getusersbydeptid (fn [deptid]
                  (-> $http
                    (.get (str js/serverurl "getusersbydeptid") (obj :params {:deptid  deptid}  ) )
                    (.then (fn [response] response))))

      :getCommunitys (fn[]

                       (clj->js  [{
                            :id 0
                            :name "Ben Sparrow"
                            :lastText "You on your way?"
                            :face "img/ben.png"
                            }])

                       )


      )
     )


  (def.controller starter.controllers.CommunityCtrl [$scope $sce CommunityService $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "CommunityCtrl")

    (! $scope.chats (-> CommunityService
                           (.getCommunitys)))

  )


  )
