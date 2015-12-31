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


     :updateusercardbyid (fn[userid dutyid personid]
                       (-> $http
                    (.get (str js/serverurl "updateusercardbyid") (obj :params
                                                                       {
                                                                        :userid userid
                                                                        :dutyid dutyid
                                                                        :personid personid
                                                                        } ))

                    (.then (fn [response] response)))



                           )




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


    (! $scope.save (fn[user]

                     (.show $ionicLoading (obj :template "保存中..." :duration 5000))
                     (-> UserDetailService
                           (.updateusercardbyid js/localStorage.userid user.dutyid user.personid)
                           (.then (fn [response]
                                    (.hide $ionicLoading)
                                    (! js/localStorage.personid user.personid)
                                    (! js/localStorage.dutyid user.dutyid)
                                    (.alert $ionicPopup (obj :title "提示" :template "保存成功"))


                                    )))




                     ))










  )


  )
