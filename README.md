Ironcast Presentation Framework
===============================

Ironcast front-end presentation application framework designed to consume web presented content and format it for presentation.

Installation
------------

1. ```git clone https://github.com/haywirelabs/ironcast.git```
2. ```cd ironcast```
3. ```npm install```
4. ```npm install gulp -g```
5. ```npm install jshint -g```
6. ```npm install gulp``` (local project version of Gulp)

Gulp Functionality
------------------

Run Linting functionality
  - ```gulp lint```

Create build artifact
  - ```gulp build```

Build Distribution folder and serve it with a webserver.  Application will watch for file changes and restart the event loop if a change is made.
URL: [http://localhost:5000](http://localhost:5000)
  - ```gulp serve```

Roadmap and Patch Notes
-----------------------

Information about Ironcast patch notes and roadmap are available on the [Ironcast Project](https://confluence.zenimaxonline.com:8444/display/services/POC+Project+-+Ironcast) page.