(ns GPApp.onlineclass
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


  (def.service starter.OnlineClassService [$http]
  (obj
    :getonlineclasses (fn [page]
                (-> $http
                  (.get (str js/serverurl "getonlineclasses") (obj :params  {:page page} ))
                  (.then (fn [response] response))))



   :updateonlineclassestate (fn [id state]
                (-> $http
                  (.get (str js/serverurl "updateonlineclassestate") (obj :params  {:id id :state state} ))
                  (.then (fn [response] response))))


   :deleteonlineclassestate (fn [id]
                (-> $http
                  (.get (str js/serverurl "deleteonlineclassestate") (obj :params  {:id id } ))
                  (.then (fn [response] response))))





    :addnewclass (fn [userid realname title classtime place]

                      (-> $http
                  (.get (str js/serverurl "addnewclass") (obj :params
                                                              {
                                                               :userid userid :realname realname
                                                               :title title :classtime classtime :place place

                                                               }))
                  (.then (fn [response] response)))

                      )




    ))



  (def.controller starter.controllers.OnlineClassCtrl [$scope $sce $ionicActionSheet OnlineClassService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "OnlineClassCtrl")

    #_(.webkitGetUserMedia js/navigator (obj :audio true :video true)  (fn [stream]
                                                                 (println "stream" stream)

                                                                 ) (fn [errr]
                                                                     (js/alert errr)

                                                                     ))


    (! $scope.newclassdata (obj))

    (! $scope.onlineclasses (clj->js []))


    (! $scope.currentpage 0)


    (! $scope.moreDataCanBeLoaded true)


    (! $scope.initonlineclasses (fn[]

                                  ($scope.refreshclasses (fn[response]
                                                           (if (> response.data.length 0 )

                                                             (do
                                                               (! $scope.onlineclasses response.data)
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


    (! $scope.refreshclasses (fn[callback page]
                                  (-> OnlineClassService
                           (.getonlineclasses page)
                           (.then (fn [response]
                                    (when-not (nil? callback) (callback response))

                                    )))


                                  ))


    (! $scope.getmoreonlineclasses (fn []


                                     ($scope.refreshclasses (fn[response]
                                                            (if (> response.data.length 0 )
                                                              (do
                                                                (! $scope.onlineclasses response.data)
                                                                (! $scope.currentpage (+ $scope.currentpage 1))
                                                                (! $scope.moreDataCanBeLoaded true)
                                                                )
                                                              (! $scope.moreDataCanBeLoaded false)

                                                              )

                                                           (.$broadcast $scope "scroll.infiniteScrollComplete")
                                                           )
                                                            (+ $scope.currentpage 1))



                                     ))






    (! $scope.sendnewclass (fn[]
                             (println $scope.newclassdata)

                             (if (or (nil? $scope.newclassdata.title ) (nil? $scope.newclassdata.classtime ))
                               (.alert $ionicPopup (obj :title "提示" :template "课堂名称和时间不能为空"))



                               (-> OnlineClassService
                           (.addnewclass js/localStorage.userid js/localStorage.realname $scope.newclassdata.title $scope.newclassdata.classtime $scope.newclassdata.place)
                           (.then (fn [response]
                                    (.hide $ionicLoading)

                                    (if (js->clj response.data.success)
                                      (do
                                        (.hide $scope.newclassmodal)
                                        ($scope.initonlineclasses)

                                        )
                                      (.alert $ionicPopup (obj :title "提示" :template response.data.message))


                                      )



                                    )))


                               )


                             ))

    (! $scope.closemodal (fn[]

                             (.hide $scope.newclassmodal)

                             ))

    (! $scope.newclass (fn[]


                         (-> (.fromTemplateUrl  $ionicModal (str "templates/newclassmodal.html") (obj :scope $scope
                                                                       )) (.then  (fn [modal] (
                                                                                                 ! $scope.newclassmodal modal
                                                                                                 )
                                                                                     (.show $scope.newclassmodal)

                                                                                     )))

                         ))


    (! $scope.getbuttommenubyclick (fn[clickitem]

                                ;(println "okk" (= clickitem.state "0") (= clickitem.state "1") clickitem)

                               (cond
                                (= clickitem.state 0) (.show $ionicActionSheet (obj :buttons [
                {:text  "<center><i class=\"icon ion-videocamera calm\"></i>开始</center>" }

                {:text  "<center><i class=\"icon ion-close-circled assertive\"></i>删除</center>" }
            ]
            :titleText "开始在线课堂"
            :cancelOnStateChange false
            :cancelText "取消"
            :cancel (fn [] (println "cancel"))
            :buttonClicked (fn[index] (if (= index 0) ($scope.broadcastnewclassonline clickitem)
                                         ($scope.delteclass  clickitem) )
                                true


                         )))

                                (= clickitem.state 1) (.show $ionicActionSheet (obj :buttons [
                {:text  "<center><i class=\"icon ion-videocamera calm\"></i>开始</center>" }

                {:text  "<center><i class=\"icon ion-close-circled assertive\"></i>结束</center>" }
            ]
            :titleText "开始在线课堂"
            :cancelOnStateChange false
            :cancelText "取消"
            :cancel (fn [] (println "cancel"))
            :buttonClicked (fn[index] (if (= index 0) ($scope.broadcastnewclassonline clickitem)
                                         ($scope.endclass  clickitem) )
                                true


                         )))
                                 :else (.go $state "tab.historyvideo"  (obj  :classid  clickitem._id  )))



                               ))


    (! $scope.classclick (fn[clickitem]

                           (println clickitem)
                           (if (= clickitem.userid js/localStorage.userid)
                             (do
                               (println "creater")

                               ($scope.getbuttommenubyclick clickitem)


                               )

                             (do
                               (println "customer")
                               (if (= clickitem.state 1)
                                 (.go $state "tab.videobroadcast" (obj :classtitle clickitem.title :classid  clickitem._id :userid clickitem.userid) )
                                 (.alert $ionicPopup (obj :title "提示" :template "当前没有直播"))
                                 )
                               )

                             )


                           ))


    (! $scope.broadcastnewclassonline (fn[item]
                                  (println "broadcastnewclassonline" item)
                                   (->
                                  $ionicPopup
                                  (.confirm (obj :title "温馨提示"
                                                           :template "你确定要开启直播么?"))
                                  (.then (fn [res]
                                           (if res (do
                                (-> OnlineClassService
                                 (.updateonlineclassestate item._id 1)
                                 (.then (fn [response]
                                          (if response.data.success
                                            (do
                                              ($scope.initonlineclasses)
                                              (.go $state "tab.videobroadcast" (obj :classtitle item.title :classid  item._id :userid item.userid) )
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


    (! $scope.delteclass (fn[item]

                           (println "delteclass" item)


                           (->
                                  $ionicPopup
                                  (.confirm (obj :title "温馨提示"
                                                           :template "你确定要删除么?"))
                                  (.then (fn [res]
                                           (if res (do
                                (-> OnlineClassService
                                 (.deleteonlineclassestate item._id)
                                 (.then (fn [response]
                                          (if response.data.success

                                            (do
                                              ($scope.initonlineclasses)
                                              (println "success")
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

    ;(! $scope.linehtmlstr "\r")


    (! $scope.endclass (fn[item]

                           (println "endclass" item)


                           (->
                                  $ionicPopup
                                  (.confirm (obj :title "温馨提示"
                                                           :template "你确定要结束么?"))
                                  (.then (fn [res]
                                           (if res (do
                                (-> OnlineClassService
                                 (.updateonlineclassestate item._id 2)
                                 (.then (fn [response]
                                          (if response.data.success

                                            (do
                                              ($scope.initonlineclasses)
                                              (println "success")
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
