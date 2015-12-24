(ns GPApp.activity
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

(println "Activity init")
  (def.controller starter.controllers.ActivityCtrl [$scope $sce GPSubjectService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout  $ionicLoading $compile]

    (println "ActivityCtrl")
    (! $scope.articles (clj->js []))

    (! $scope.resourceurl (str js/serverurl "files/"))

    (! $scope.doRefresh (fn[]

                          (-> GPSubjectService
                           (.getarticlesbytypeandtime 1  (if (nil? (first $scope.articles)) (new js/Date) (new js/Date (js/$.format.date (new js/Date (aget (first $scope.articles) "time")) "yyyy-M-dd"))) )
                           (.then (fn [response]

                                    (when response.data.success
                                      (do

                                        (.unshift $scope.articles response.data)

                                        )

                                      )

                                    (.$broadcast $scope "scroll.refreshComplete")

                                    ))


                               )

                          (.$broadcast $scope "scroll.refreshComplete")

                          ))

    (-> GPSubjectService
                           (.getarticlesbytypeandtime 1 (new js/Date))
                           (.then (fn [response]

                                    (when response.data.success
                                      (do

                                        ;(! $scope.articles (clj->js (conj  $scope.articles response.data)))

                                        (.push $scope.articles response.data)

                                        )

                                      )




                                    )))

  )

  (def.controller starter.controllers.ActivityDetailCtrl [$scope $sce GPSubjectService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "ActivityDetailCtrl")
    (! $scope.article {})

    (! $scope.frameurl "")

    (! $scope.resourceurl (str js/serverurl "files/"))

    (-> GPSubjectService
                           (.getarticlebyid $stateParams.activityId)
                           (.then (fn [response]


                                        (! $scope.article  response.data)

                                        (! $scope.frameurl (.trustAsResourceUrl $sce response.data.content))


                                    )))


  )

  (def.controller starter.controllers.ActivityDetailContentCtrl [$scope $sce GPSubjectService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "ActivityDetailContentCtrl")
    (! $scope.article {})

    (! $scope.renderHtml (fn [htmlCode] (.trustAsHtml $sce htmlCode)))



    (! $scope.resourceurl (str js/serverurl "files/"))

    (-> GPSubjectService
                           (.getarticlebyid $stateParams.activityId)
                           (.then (fn [response]


                                        (! $scope.article  response.data)

                                        ;(! $scope.frameurl (.trustAsResourceUrl $sce response.data.content))


                                    )))


  )




  )
