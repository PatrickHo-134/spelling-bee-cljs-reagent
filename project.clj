(defproject spelling-bee "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [reagent "0.8.1"]
                 [figwheel "0.5.19"]
                 [re-frame "1.0.0-rc1"]
                 [cljs-ajax "0.8.0"]
                 [day8.re-frame/http-fx "v0.2.0"]
                 [re-com "2.8.0"]
                ;  [org.clojure/data.json "0.2.2"]
                 [org.clojars.frozenlock/reagent-modals "0.2.3"]]
                 
  :source-paths ["src"]
  
  :css-dirs ["resources/public/css"]

  :aliases {"fig"       ["run" "-m" "figwheel.main"]
            "fig:build" ["run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "spelling-bee.test-runner"]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.3"]]
                   }})

