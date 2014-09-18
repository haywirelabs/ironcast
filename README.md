Ironcast Presentation Framework
===============================

Ironcast front-end presentation application framework designed to consume web presented content and format it for presentation.

Installation
------------

1. ```git clone https://github.com/haywirelabs/ironcast.git```
2. ```cd ironcast```
3. ```npm install```

Run Tool
--------

1. ```node bin/ironcast.js```
2. Deployment distribution will be created in "dist" directory.

Run Debugger
------------

Output all debugging messages
  - ```DEBUG=* node bin/forge_content.js```

Gulp Functionality
------------------

Run Linting functionality
  - ```gulp lint```

Build Distribution folder and serve it with a webserver.  Application will watch for file changes and restart the event loop if a change is made.
  - ```gulp serve```

Roadmap and Patch Notes
-----------------------

Information about Ironcast patch notes and roadmap are available on the [Ironcast Project](https://confluence.zenimaxonline.com:8444/display/services/POC+Project+-+Ironcast) page.