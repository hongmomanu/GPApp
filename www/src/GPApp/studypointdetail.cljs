(ns GPApp.studypointdetail
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

  (println "studypointdetailinit")



  (def.service starter.StudyPointDetailService [$http]
    (obj
      :getstudypointbyid (fn [studypointid]
                  (-> $http
                    (.get (str js/serverurl "getstudypointbyid") (obj :params  {:studypointid studypointid} ))
                    (.then (fn [response] response))))


     :getuserstudypoint (fn[studypointid userid]

                           (-> $http
                    (.get (str js/serverurl "getuserstudypoint") (obj :params  {:studypointid studypointid :userid userid} ))
                    (.then (fn [response] response)))


                           )

     :updateuserstudypointlearntime (fn[id timelearn]
                                     (-> $http
                    (.get (str js/serverurl "updateuserstudypointlearntime") (obj :params  {:id id :timelearn timelearn} ))
                    (.then (fn [response] response)))



                                      )

      ))










  (def.controller starter.controllers.StudyPointdetailCtrl [$scope $sce StudyPointDetailService $rootScope $state $stateParams $ionicModal $ionicPopup $timeout $interval $ionicLoading $compile]

    (println "StudyPointdetailCtrl")


    (-> StudyPointDetailService
                           (.getstudypointbyid $stateParams.studypointid)
                           (.then (fn [response]

                                    (! $scope.studypoint response.data)

                                    )))

    (-> StudyPointDetailService
                           (.getuserstudypoint $stateParams.studypointid js/localStorage.userid)
                           (.then (fn [response]
                                    (! $scope.userstudypoint response.data)

                                    )))



    (! $scope.maketimelearn (fn[begitime]

                              (! $scope.userstudypoint.timelearn  (+ $scope.userstudypoint.timelearn (/ (- (.getTime (new js/Date)) begitime) 60000)) )

                                                                  (-> StudyPointDetailService
                                                                     (.updateuserstudypointlearntime $scope.userstudypoint._id $scope.userstudypoint.timelearn)
                                                                     (.then (fn [response]
                                                                              ;(! $scope.userstudypoint response.data)

                                                                              )))




                              ))


    (! $scope.startlearning (fn[url]


                              (let
                                 [
                                  videourl (str js/serverurl "files/" url)
                                  begitime (.getTime (new js/Date))
                                  options (obj :successCallback (fn[]
                                                                  ;(js/alert "ok")
                                                                  ;(.cancel $interval $scope.startlearningtimer)

                                                                  ($scope.maketimelearn begitime)



                                                                  )
                                               :errorCallback (fn[errMsg]
                                                                  (.alert $ionicPopup (obj :title "提示" :template errMsg))
                                                                )
                                               )
                                  ]




                                 #_(! $scope.startlearningtimer  ($interval (fn []
                                                                           ($scope.maketimelearn begitime)

                                                                           ) 10000))

                                 (.playVideo js/window.plugins.streamingMedia videourl options)






                                )

                              ))










  )


  )
