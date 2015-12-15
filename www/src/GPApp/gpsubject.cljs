(ns GPApp.gpsubject
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




  (def.service starter.GPSubjectService [$http]
    (obj
      :getarticlesbytypeandtime (fn [type time]
                  (-> $http
                    (.get (str js/serverurl "getarticlesbytypeandtime")
                          (obj :params {:type type :time time}  ) )
                    (.then (fn [response] response))))

     :getarticlebyid (fn [articleid]
                  (-> $http
                    (.get (str js/serverurl "getarticlebyid")
                          (obj :params {:articleid articleid}  ) )
                    (.then (fn [response] response))))


      )
     )

  (println "GPApp.gpsubject init")


  (def.controller starter.controllers.GPsubjectCtrl [$scope $sce GPSubjectService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "GPsubjectCtrl")
    (! $scope.articles (clj->js []))

    (! $scope.resourceurl (str js/serverurl "files/"))

    (! $scope.doRefresh (fn[]

                          (-> GPSubjectService
                           (.getarticlesbytypeandtime 0  (if (nil? (first $scope.articles)) (new js/Date) (new js/Date (aget (first $scope.articles) "time"))) )
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
                           (.getarticlesbytypeandtime 0 (new js/Date))
                           (.then (fn [response]

                                    (when response.data.success
                                      (do

                                        ;(! $scope.articles (clj->js (conj  $scope.articles response.data)))
                                         (.push $scope.articles response.data)
                                        )

                                      )




                                    )))


  )


  (def.controller starter.controllers.GPsubjectDetailCtrl [$scope $sce $ionicNavBarDelegate GPSubjectService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "GPsubjectDetailCtrl")
    (! $scope.article {})

    (! $scope.frameurl "")

    (! $scope.resourceurl (str js/serverurl "files/"))

    (-> GPSubjectService
                           (.getarticlebyid $stateParams.gpsubjectId)
                           (.then (fn [response]

                                      ($timeout (fn []

                                                  (! $scope.article  response.data)
                                                  ;(.title $ionicNavBarDelegate response.data.title)

                                                  (! $scope.frameurl (.trustAsResourceUrl $sce response.data.content))


                                                                ) 0 )




                                    )))


  )

  (def.controller starter.controllers.GPsubjectDetailContentCtrl [$scope $sce  $ionicNavBarDelegate GPSubjectService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "GPsubjectDetailCtrl")
    (! $scope.article {})

    (! $scope.renderHtml (fn [htmlCode] (.trustAsHtml $sce htmlCode)))



    (! $scope.resourceurl (str js/serverurl "files/"))

    (-> GPSubjectService
                           (.getarticlebyid $stateParams.gpsubjectId)
                           (.then (fn [response]


                                        (! $scope.article  response.data)
                                        ;(.title $ionicNavBarDelegate response.data.title)

                                        ;(! $scope.frameurl (.trustAsResourceUrl $sce response.data.content))


                                    )))


  )


  )
