(ns GPApp.userdetail
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

  (println "userdetailinit")


  (def.service starter.UserDetailService [$http]
    (obj
      :getusertotalpointsbyuid (fn [userid]
                  (-> $http
                    (.get (str js/serverurl "getusertotalpointsbyuid") (obj :params  {:userid userid} ))
                    (.then (fn [response] response))))




      ))



  (def.controller starter.controllers.UserDetailCtrl [$scope $sce  UserDetailService   $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "UserDetailCtrl")




    (-> UserDetailService
                           (.getusertotalpointsbyuid js/localStorage.userid)
                           (.then (fn [response]

                                    (! js/localStorage.points response.data.totalpoints)

                                    (! $scope.user (obj :username js/localStorage.username
                                       :realname js/localStorage.realname
                                       :dutyid js/localStorage.dutyid
                                       :personid js/localStorage.personid
                                       :points js/localStorage.points
                                     ) )


                                    )))










  )


  )
