(require 'cljs.build.api)

(cljs.build.api/watch "src"
  {:main 'GPApp.main
   :output-to "out/main.js"})
