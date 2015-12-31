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
                                    (! $scope.studypoint.exercises (js/eval $scope.studypoint.exercises))

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

    (! $scope.islearning false)


    (! $scope.getpoints (fn[]
                          (if (> $scope.userstudypoint.timelearn $scope.studypoint.timelong)
                            (.alert $ionicPopup (obj :title "提示" :template "获取学分成功"))
                            (.alert $ionicPopup (obj :title "提示" :template "还未达到学习时间哦"))
                            )


                          ))


    (! $scope.chooseChange (fn[exercise answer]

                              (let [
                                    chooseitems (filter (fn [item] item.checked)  exercise.data)
                                    choosevalues (map #(aget % "value") chooseitems)
                                    choosestr (.join (clj->js choosevalues) ",")
                                    ]


                                (! exercise.isright (= choosestr  answer))
                                )


                             ))

    (! $scope.updatelearningtime (fn[]

                                   ($scope.maketimelearn (new js/Date (- (.getTime (new js/Date)) 10000)))
                                   ($timeout (fn []
                                                 (when $scope.islearning

                                                     ($scope.updatelearningtime)
                                                  )

                                                                           ) 10000)



                                   ))


    (! $scope.startlearning (fn[url]

                              (! $scope.islearning true)
                              (let
                                 [
                                  videourl (str js/serverurl "files/" url)
                                  begitime (.getTime (new js/Date))
                                  options (obj :successCallback (fn[]
                                                                  ;(js/alert "ok")
                                                                  ;(.cancel $interval $scope.startlearningtimer)
                                                                  (! $scope.islearning false)
                                                                  ;($scope.maketimelearn begitime)



                                                                  )
                                               :errorCallback (fn[errMsg]
                                                                  (.alert $ionicPopup (obj :title "提示" :template errMsg))
                                                                )
                                               )
                                  ]




                                 #_(! $scope.startlearningtimer  ($interval (fn []
                                                                           ($scope.maketimelearn begitime)

                                                                           ) 10000))

                                ($scope.updatelearningtime)



                                 (.playVideo js/window.plugins.streamingMedia videourl options)






                                )

                              ))










  )


  )
