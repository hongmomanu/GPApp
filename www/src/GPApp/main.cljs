(ns GPApp.main
  (:require [clojure.browser.repl :as repl]

            [GPApp.tab :as tab]
            [GPApp.gpsubject :as gpsubject]
            [GPApp.community :as community]
            [GPApp.activity :as activity]
            [GPApp.setting :as setting]
            [GPApp.user :as user]
            [GPApp.messsage :as messsage]

            )
  (:use [jayq.core :only [$ css html]]

        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )







(enable-console-print!)




(def.module starter.controllers [])




(tab/init)
(gpsubject/init)
(community/init)
(activity/init)
(setting/init)
(user/init)
(messsage/init)

(println "Hello world initssssssss  sssssss!")
