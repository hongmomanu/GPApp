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



  (def.controller starter.controllers.OnlineClassCtrl [$scope $sce OnlineClassService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "OnlineClassCtrl")

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


    (! $scope.classclick (fn[clickitem]

                           (println clickitem)
                           (if (= clickitem.userid js/localStorage.userid)
                             (do
                               (println "creater")
                               )

                             (do
                               (println "customer")
                               )

                             )


                           ))


  )


  )
