'use strict';

console.log('loaded webpack');

// expose 
require('expose?$!expose?jQuery!jquery');

//Build public folder  - move to config file ASAP
require("file?name=../[name].html!./index.html");

// Bootstrap 3.x.x
import 'bootstrap/dist/css/bootstrap.css';

// FontAwesome 4.x
//import 'bootstrap/dist/css/bootstrap.css';

require('./css/ladda-themeless.min.css');
require('./css/navbar-fixed-top.css');

require("expose?Ladda!./vendor/ladda.min.js");

require('./main.js');