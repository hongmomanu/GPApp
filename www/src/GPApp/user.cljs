(ns GPApp.user
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


  (def.service starter.UserService [$http]
  (obj
    :login (fn [username password]
                (-> $http
                  (.get (str js/serverurl "login") (obj :params {:username  username :password password}  ) )
                  (.then (fn [response] response))))

   :newuser (fn [username password realname usertype ]
                (-> $http
                  (.get (str js/serverurl "newuser") (obj :params {:username  username  :password password
                                                                   :realname realname :usertype usertype
                                                                   }  ) )
                  (.then (fn [response] response))))

   :fireunreadmsgs (fn [userid deptid]
                (-> $http
                  (.get (str js/serverurl "getunreadmessages") (obj :params {:userid  userid :deptid deptid}  ) )
                  (.then (fn [response] response))))


   :fireunreadnotifications (fn [userid]
                (-> $http
                  (.get (str js/serverurl "getunreadnotifications") (obj :params {:userid  userid}  ) )
                  (.then (fn [response] response))))


    ))


  (def.controller starter.controllers.UserCtrl [$scope $ionicHistory $sce   $rootScope $state $stateParams $ionicModal $ionicPopup $timeout UserService  $ionicLoading $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "UserCtrl")

    (! $scope.user (obj :usertype js/localStorage.usertype  :username js/localStorage.username :password js/localStorage.password :realname js/localStorage.realname))


    (! $scope.newUser (fn[]

                        (.go $state "newuser")

                        ))


    (! $scope.signIn (fn[]
                       (.show $ionicLoading (obj :template "登录中..." :duration 5000))

                       (-> UserService
                           (.login $scope.user.username $scope.user.password)
                           (.then (fn [response]
                                    (.hide $ionicLoading)
                                    ;(.closeLogin $scope)
                                    (if (js->clj response.data.success)
                                      (do
                                        (! js/localStorage.username response.data.user.username)
                                        (! js/localStorage.password response.data.user.password)
                                        (! js/localStorage.realname response.data.user.realname)
                                        (! js/localStorage.usertype response.data.user.usertype)





                                        (websocket/init  $rootScope)

                                        (.nextViewOptions $ionicHistory (obj :disableBack true))

                                        (.go $state "tab.gpsubject")

                                        )
                                      (.alert $ionicPopup (obj :title "登录提示" :template response.data.message))


                                      )



                                    )))

                       ))



    (.signIn $scope)





    (! $scope.signInchange (fn[]

                             (! js/localStorage.username $scope.user.username)
                             (! js/localStorage.password $scope.user.password)

                             (! js/window.location.href "")
                             ;;(.signIn $scope)


                             ))






  )


  (def.controller starter.controllers.NewUserCtrl [$scope $ionicHistory $sce   $rootScope $state $stateParams $ionicModal $ionicPopup $timeout UserService  $ionicLoading $compile]
  ;(! $scope.tipdetail (fn [bankid] (js/alert "wwwww")))
    (println "NewUserCtrl")

    (! $scope.usertypes (clj->js [
                                  {:text "会员" :value 1}
                                  {:text "非会员" :value 0}

                                  ]))


    (! $scope.user (obj :usertype 1))

    (! $scope.newUser (fn [user]

                        (println user)
                        (if (= user.password user.repassword)

                          (-> UserService
                           (.newuser user.username user.password user.realname user.usertype)
                           (.then (fn [response]
                                    (.hide $ionicLoading)

                                    (if (js->clj response.data.success)
                                      (do
                                        (! js/localStorage.username response.data.user.username)
                                        (! js/localStorage.password response.data.user.password)
                                        (! js/localStorage.realname response.data.user.realname)
                                        (! js/localStorage.usertype response.data.user.usertype)





                                        (websocket/init  $rootScope)

                                        (.nextViewOptions $ionicHistory (obj :disableBack true))

                                        (.go $state "tab.gpsubject")

                                        )
                                      (.alert $ionicPopup (obj :title "登录提示" :template response.data.message))


                                      )



                                    )))

                          (.alert $ionicPopup (obj :title "提示" :template "密码不一致"))



                          )

                        ))










  )


  )
