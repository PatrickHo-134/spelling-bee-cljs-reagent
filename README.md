# Spelling-bee

This is a remade version of [New York Times' spelling bee game](https://www.nytimes.com/puzzles/spelling-bee) using Clojurescript and Reagent.

## Overview

This project is part of my Clojure training program and used for demonstrating some important concepts in Clojurescript and Reagent.

## Development

To get an interactive development environment run:

    lein fig:build

This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

	lein clean

To create a production build run:

	lein clean
	lein fig:min


## License

Copyright © 2018 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.