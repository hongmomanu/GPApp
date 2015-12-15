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


  (def.controller starter.controllers.CommunityCtrl [$scope $sce GPSubjectService CommunityService $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "CommunityCtrl")

    (! $scope.articles (clj->js []))

    (! $scope.resourceurl (str js/serverurl "files/"))

    (! $scope.doRefresh (fn[]

                          (-> GPSubjectService
                           (.getarticlesbytypeandtime 1  (if (nil? (first $scope.articles)) (new js/Date) (new js/Date (aget (first $scope.articles) "time"))) )
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

  (def.controller starter.controllers.CommunityDetailCtrl [$scope $ionicNavBarDelegate $sce GPSubjectService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "CommunityDetailCtrl")
    (! $scope.article {})

    (! $scope.frameurl "")

    (! $scope.resourceurl (str js/serverurl "files/"))

    (-> GPSubjectService
                           (.getarticlebyid $stateParams.communityId)
                           (.then (fn [response]


                                        (! $scope.article  response.data)



                                        (! $scope.frameurl (.trustAsResourceUrl $sce response.data.content))


                                    )))


  )

  (def.controller starter.controllers.CommunityDetailContentCtrl [$scope $ionicNavBarDelegate $sce GPSubjectService  $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "CommunityDetailContentCtrl")
    (! $scope.article {})

    (! $scope.renderHtml (fn [htmlCode] (.trustAsHtml $sce htmlCode)))



    (! $scope.resourceurl (str js/serverurl "files/"))

    (-> GPSubjectService
                           (.getarticlebyid $stateParams.communityId)
                           (.then (fn [response]


                                        (! $scope.article  response.data)




                                        ;(! $scope.frameurl (.trustAsResourceUrl $sce response.data.content))


                                    )))


  )


  )
