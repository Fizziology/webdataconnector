# Tableau WDC for Centrifuge

This fork of the Tableau WDC is set up to allow analysts to download data from Centrifuge api endpoints to use in Tableau.  

To run this on the simulator locally, download, install, and run with `npm start`. Visit `http://localhost:8888/Simulator/index.html
`. The connector URL is `../centrifugeWDC.html`.  

We are using a quick custom form to auth each request with Centrifuge due to an issue with WDC https://github.com/tableau/webdataconnector/issues/160  

To use your local Centrifuge, uncomment the line with the url in `centrifugeWDC.js`. To test the endpoint, you can curl it `curl http://localhost:3030/api/tableau/properties -v -H "Authorization: #{btoa(email + ":" + token)}"`. If you are seeing the browser run out of memory trying to load actual data in the Simulator, reduce the number of records returned in the tableau controller. (It's probably the rules.)  

To use the production Centrifuge, connect in Tableau desktop with this information  
URL: https://centrifuge.fizziology.com/tableau/centrifugeWDC.html  
Username: your same email you sign on to Centrifuge with  
Token: your server token not your password (see a member of the dev team if you do not have this token)  

## Deploy Information

Deploy via Capistrano with `cap production deploy`.

# Tableau Web Data Connector SDK
[![Tableau Supported](https://img.shields.io/badge/Support%20Level-Tableau%20Supported-53bd92.svg)](https://www.tableau.com/support-levels-it-and-developer-tools) [![Coverage Status](https://coveralls.io/repos/github/tableau/webdataconnector/badge.svg?branch=master)](https://coveralls.io/github/tableau/webdataconnector?branch=master) [![Build Status](https://travis-ci.org/tableau/webdataconnector.svg?branch=master)](https://travis-ci.org/tableau/webdataconnector)

Use the Tableau Web Data Connector (WDC) to connect to web data sources from Tableau. This is the repository for the Tableau WDC SDK, which includes developer samples and a simulator to help you create your connectors.

[Visit the project website and documentation here](https://tableau.github.io/webdataconnector/).

Want to contribute to the WDC? See our [contribution guidelines](http://tableau.github.io/).
