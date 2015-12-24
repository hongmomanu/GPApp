(ns GPApp.videobroadcast
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

  (println "videobroadcastinit")

  (def broadcastsocketurl (
                let [
                     oldport (clojure.string/join "" (drop 1 (re-find #":\d+" js/serverurl)))
                     oldtcp "http"
                     port  "8887"
                     tcp "http"
                     ]

                (->
                 js/serverurl
                 (clojure.string/replace  oldport port)
                 (clojure.string/replace  oldtcp tcp)
                 )


                ))

  (def uploadsocketurl (
                let [
                     oldport (clojure.string/join "" (drop 1 (re-find #":\d+" js/serverurl)))
                     oldtcp "http"
                     port  "8888"
                     tcp "http"
                     ]

                (->
                 js/serverurl
                 (clojure.string/replace  oldport port)
                 (clojure.string/replace  oldtcp tcp)
                 )
                 "http://111.1.76.108:8001/"


                ))




  (def.controller starter.controllers.VideobroadcastCtrl [$scope $sce  $ionicHistory   $rootScope $state $stateParams $ionicModal $ionicPopup $timeout    $ionicLoading $compile]

    (println "VideobroadcastCtrl")

    (.show $ionicLoading (obj :template "启动中..." :duration 5000))



    (! $scope.onlineclass (obj :title $stateParams.classtitle :classid $stateParams.classid))

    (! $scope.socket (.connect js/ioold broadcastsocketurl (obj "force new connection"  true)))

    (! $scope.uploadsocket  (js/io uploadsocketurl))



    (! $scope.onMessageCallbacks (obj))

    (.on $scope.socket "message" (fn [data]
                                   (println "messagemessagemessagemessage" data $scope.connection.userid)

                                   (if (= data.sender  $scope.connection.userid)
                                     (println "do nothing")
                                     (when (aget $scope.onMessageCallbacks data.channel)

                                       (do

                                         ((aget $scope.onMessageCallbacks data.channel) data.message)

                                         )

                                       )
                                     )

                                   ))




 (! $scope.initRTCMultiConnection (fn [userid]
                                    (let [
                                          connection (new js/RTCMultiConnection )
                                          ]
                                      (! connection.body  (.getElementById js/document "videos-container"))
                                      (! connection.channel  (if userid userid connection.userid))
                                      (! connection.sessionid  (if userid userid connection.userid))
                                      (! connection.userid  (if userid userid connection.userid))

                                      (! connection.sdpConstraints.mandatory
                                            (obj :OfferToReceiveAudio false :OfferToReceiveVideo true))

                                      (!  connection.openSignalingChannel
                                                             (fn [config]
                                                               (let [
                                                                   channel (if config.channel config.channel connection.channel)

                                                                      ]

                                                                 (aset  $scope.onMessageCallbacks channel config.onmessage)

                                                                 (when config.onopen ($timeout (fn []

                                                                                                 (.onopen config)
                                                                                                 )

                                                                                               1000))


                                                                 (obj :send (fn [message] (.emit $scope.socket "message"
                                                                                                  (obj :sender connection.userid
                                                                                                       :channel channel
                                                                                                       :message message
                                                                                                       )))
                                                                       :channel channel

                                                                       )





                                                                 )



                                                                          ))


                                      (! connection.onMediaError (fn [error]

                                                                      (js/alert (.stringify js/JSON error))

                                                                      ))


                                      connection




                                      )))


    (! $scope.connection ($scope.initRTCMultiConnection ))

    (! $scope.connection.getExternalIceServers false)

    (! $scope.connection.onleave (fn[e]
             ;(js/alert (str "good bye"  $scope.isconnectionclosed))
            (when-not $scope.isconnectionclosed
              ($scope.broadcastinit)
              )

        ))

    (! $scope.last false)

    (! $scope.recordcallback (fn [timeno stream]
                               (let [
                                     test (println "ssss" stream)
                                     videoRecorder (js/RecordRTC stream (obj :type "video"))
                                     audioRecorder (js/RecordRTC stream)

                                     ]
                                 (.startRecording videoRecorder)
                                 (.startRecording audioRecorder)

                                 ($timeout (fn[]
                                             (.stopRecording audioRecorder (fn[]

                                                  (.stopRecording videoRecorder
                                                                  (fn[]
                                                                     (println "videoRecorder" (.getBlob videoRecorder))
                                                                     (println "audioRecorder" (.getBlob audioRecorder))

                                                                    (.emit $scope.uploadsocket "newstream"
                                                                               (obj
                                                                                    :broadcastid $stateParams.classid
                                                                                    :last $scope.last
                                                                                    :vdata (.getBlob videoRecorder)
                                                                                    :adata (.getBlob audioRecorder)

                                                                                    )

                                                                               )
                                                                    (when-not  $scope.last

                                                                      ($scope.recordcallback timeno stream )
                                                                      )


                                                                                  ))

                                                                             ))


                                             ) timeno)

                                 )

                               ))





    (! $scope.recordMediaStream  (fn[stream]

                                   ($timeout (fn[]


                                               (.emit $scope.uploadsocket "beginRecording"

                                                (obj :broadcastid $stateParams.classid)

                                               )

                                            ($scope.recordcallback 3000 stream)




                                             (println "recordMediaStream")



                                               ) 5000)






                                  ))



    (! $scope.stopRecord (fn []

                           (! $scope.last true)
                           (.emit $scope.uploadsocket "stopRecording"

                                        (obj :broadcastid $stateParams.classid)

                                        )

                           ))



    (! $scope.connection.onstream (fn[event]


                                    (when (= $stateParams.userid js/localStorage.userid)

                                      ($scope.recordMediaStream event.stream)

                                      )


                                    (.appendChild $scope.connection.body event.mediaElement)
                                    ;(println "onstream event.mediaElement" event.stream )

                                    (! $scope.stream event.stream)


                                    ;(set! js/testobj event.mediaElement)
                                    (println $scope.connection.isInitiator $scope.connection.broadcastingConnection)
                                    (when (and (not $scope.connection.isInitiator )
                                               (not $scope.connection.broadcastingConnection)
                                               )

                                      (do

                                        ;(js/alert "12121")
                                        (! $scope.connection.broadcastingConnection ($scope.initRTCMultiConnection $scope.connection.userid))

                                        (! $scope.connection.broadcastingConnection.onstream (fn[]))

                                        (! $scope.connection.broadcastingConnection.session $scope.connection.session)

                                        (.push $scope.connection.broadcastingConnection.attachStreams event.stream)
                                        (! $scope.connection.broadcastingConnection.dontCaptureUserMedia  true)

                                        (! $scope.broadcastingConnection.sdpConstraints.mandatory
                                           (obj :OfferToReceiveVideo false :OfferToReceiveAudio false))

                                        (.open $scope.connection.broadcastingConnection (obj :dontTransmit true))
                                        )
                                      )

                                    ))






     (.on $scope.socket "join-broadcaster" (fn [broadcaster typeOfStreams]
                                             (.hide $ionicLoading)
                                             (! $scope.connection.session typeOfStreams)
                                             (! $scope.connection.channel  broadcaster.userid)
                                             (! $scope.connection.sessionid  broadcaster.userid)

                                             (! $scope.connection.sdpConstraints.mandatory

                                                (obj :OfferToReceiveVideo $scope.connection.session.video
                                                     :OfferToReceiveAudio $scope.connection.session.audio
                                                     )

                                                )

                                             (.join $scope.connection (obj :sessionid broadcaster.userid
                                                                           :userid broadcaster.userid
                                                                           :extra (obj)
                                                                           :session $scope.connection.session
                                                                           ))


                                             ))



    (.on $scope.socket "start-broadcasting" (fn [typeOfStreams]
                                              ;(js/alert $stateParams.userid)
                                              (.hide $ionicLoading)
                                              (if (= $stateParams.userid js/localStorage.userid)
                                                (do
                                                  (! $scope.connection.sdpConstraints.mandatory

                                                 (obj :OfferToReceiveVideo false
                                                      :OfferToReceiveAudio false
                                                      )



                                                 )

                                              (! $scope.session typeOfStreams)

                                              (.open $scope.connection (obj :dontTransmit true))

                                              (when $scope.connection.broadcastingConnection

                                                (do
                                                  (.close connection.broadcastingConnection)
                                                  (! $scope.connection.broadcastingConnection nil)

                                                  )
                                                )

                                                  )

                                                (.alert $ionicPopup (obj :title "提示" :template "直播已结束"))

                                                )


                                              ))







    (! $scope.broadcastinit (fn[]

                              (let [broadcastid $stateParams.classid]

                                 (! $scope.connection.session (obj :video true
                                                                   :screen false
                                                                   :audio true
                                                                   :oneway true
                                                                   ))

                                 (.emit $scope.socket "join-broadcast"

                                        (obj :broadcastid broadcastid
                                             :userid $scope.connection.userid
                                             :typeOfStreams $scope.connection.session
                                             )

                                        )
                                )

                              ))


    ($timeout (fn [] (.broadcastinit $scope)) 100)


    #_(.$on $scope "$ionicView.beforeLeave" (fn [event]

                                      (js/alert "before leave")
                                      (println "$ionicView.beforeLeave" event)
                                      (.preventDefault event)
                                      (.stopPropagation event)

                                      (println "$ionicView.beforeLeave" event)
                                       false




                                      )



          )

    (! $scope.isconnectionclosed false)

    (.$on $scope "$stateChangeStart"  (fn [event  toState  toStateParams fromState fromStateParams]

                                        (println "oooo" event)

                                        (when-not $scope.isconnectionclosed
                                          (do
                                            (.preventDefault event)

                                            (->
                                            $ionicPopup
                                              (.confirm (obj :title "温馨提示"
                                                           :template "你确定要关闭直播么?"))
                                              (.then (fn [res]
                                                       (if res
                                                         (do

                                                           ($scope.stopRecord)
                                                           (! $scope.isconnectionclosed true)

                                                           (.stop $scope.connection.streams)
                                                           (.remove $scope.connection.streams)

                                                           (.close $scope.connection )

                                                           (.emit $scope.socket "forceDisconnect")

                                                           (.nextViewOptions $ionicHistory (obj :disableBack true))

                                                           (.go $state "tab.onlineclass")


                                                           )
                                                         (.preventDefault event)
                                                         )

                                                       )))

                                            )

                                          )







                                        )

          )



)














  )
