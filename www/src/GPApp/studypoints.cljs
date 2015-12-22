(ns GPApp.studypoints
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

  (println "studypointsinit")


  (def.service starter.StudyPointsService [$http]
    (obj
      :getstudypoints (fn [page]
                  (-> $http
                    (.get (str js/serverurl "getstudypoints") (obj :params  {:page page :userid js/localStorage.userid} ))
                    (.then (fn [response] response))))


     :applyforstudypoint (fn[studyid userid]

                           (-> $http
                    (.get (str js/serverurl "applyforstudypoint") (obj :params  {:studyid studyid :userid userid} ))
                    (.then (fn [response] response)))


                           )








      ))


  (def.controller starter.controllers.StudyPointsCtrl [$scope $sce StudyPointsService  $ionicActionSheet   $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]


    (println "StudyPointsCtrl")


    (! $scope.studypoints (clj->js []))


    (! $scope.currentpage 0)


    (! $scope.moreDataCanBeLoaded true)

    (! $scope.myuserid js/localStorage.userid)


    (! $scope.initstudypoints (fn[]

                                  ($scope.refreshpoints (fn[response]
                                                           (if (> response.data.length 0 )

                                                             (do
                                                               (! $scope.studypoints response.data)
                                                               (! $scope.currentpage 1)
                                                               (! $scope.moreDataCanBeLoaded true)
                                                               )

                                                             (do
                                                               (! $scope.currentpage 0)
                                                               (! $scope.moreDataCanBeLoaded false)

                                                               )
                                                             )


                                                           (.$broadcast $scope "scroll.refreshComplete")
                                                           ) 1)

                                  ))


    (! $scope.refreshpoints (fn[callback page]
                                  (-> StudyPointsService
                           (.getstudypoints page)
                           (.then (fn [response]
                                    (when-not (nil? callback) (callback response))

                                    )))


                                  ))


    (! $scope.getmorestudypoints (fn []


                                     ($scope.refreshpoints (fn[response]
                                                            (if (> response.data.length 0 )
                                                              (do
                                                                (! $scope.studypoints response.data)
                                                                (! $scope.currentpage (+ $scope.currentpage 1))
                                                                (! $scope.moreDataCanBeLoaded true)
                                                                )
                                                              (! $scope.moreDataCanBeLoaded false)

                                                              )

                                                           (.$broadcast $scope "scroll.infiniteScrollComplete")
                                                           )
                                                            (+ $scope.currentpage 1))



                                     ))



    (! $scope.studypointclick (fn[clickitem]

                           ;(println clickitem (some #(= "name" %) clickitem.userids))
                            (if (some #(= js/localStorage.userid %) clickitem.userids)
                              ;(println "i hava been added")
                              (.go $state "tab.studypointdetail" (obj :studypointid clickitem._id) )
                              (.show $ionicActionSheet (obj :buttons [
                          {:text  "<center><i class=\"icon ion-android-cloud-done calm\"></i>我要申请</center>" }


            ]
            :titleText "开始申请学分课程"
            :cancelOnStateChange false
            :cancelText "取消"
            :cancel (fn [] (println "cancel"))
            :buttonClicked (fn[index]

                             ($scope.applyforstudypoint clickitem)

                                true


                         )))




                              )




                           ))




    (! $scope.applyforstudypoint (fn[item]
                                  (println "applyforstudypoint" item)
                                   (->
                                  $ionicPopup
                                  (.confirm (obj :title "温馨提示"
                                                           :template "你确定要申请该学分课程么?"))
                                  (.then (fn [res]
                                           (if res (do
                                (-> StudyPointsService
                                 (.applyforstudypoint item._id js/localStorage.userid)
                                 (.then (fn [response]
                                          (if response.data.success
                                            (do
                                              ($scope.initstudypoints)
                                              ;(.go $state "tab.seestudyvideo" (obj :classtitle item.title :classid  item._id :userid item.userid) )
                                              )

                                            (.alert $ionicPopup (obj :title "提示" :template response.data.message))

                                            )


                                          ))


                                 )


                                                     )


                                             (println "cancel")
                                             )


                                           ))
                                  )



                                   ))







  )


  )
