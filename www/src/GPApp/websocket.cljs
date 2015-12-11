(ns GPApp.websocket
  (:require [clojure.browser.repl :as repl]

            [cljs.reader :as reader]
            )
  (:use [jayq.core :only [$ css html]]

        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )


(def serverurl js/serverurl)



(def socketurl (
                let [
                     oldport (clojure.string/join "" (drop 1 (re-find #":\d+" serverurl)))
                     oldtcp "http"
                     port  (+ 1 (reader/read-string oldport))
                     tcp "ws"
                     ]

                (->
                 serverurl
                 (clojure.string/replace  oldport port)
                 (clojure.string/replace  oldtcp tcp)
                 )


                ))





(defn init [$rootScope]

  (let [
        socket (new js/ReconnectingWebSocket socketurl)
        ]

    (println js/socket "hahha")
    ;(when-not (nil? js/socketobj) (.close js/socketobj))

    (set! js/socketobj socket)


    (! socket.onmessage (fn [event]
                          (let [
                                res (.parse js/JSON event.data)
                                ]

                          (println "websockty" res)
                          (case res.type
                            "message" (do
                                        (println res.data.mtype)


                                        )


                            "default")

                            )



                          ))



    (! socket.onopen (fn [event]

                        (println "opend")

                       (.send socket (js/JSON.stringify
                                       (clj->js {:userid js/localStorage.userid})))

                       (.$broadcast $rootScope "getunreadmsgs")


                        ))













    )







  )





