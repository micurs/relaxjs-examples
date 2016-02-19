///<reference path='../typings/node/node.d.ts' />
///<reference path='../node_modules/relaxjs/dist/relaxjs.d.ts' />
var relax = require('relaxjs');
var resources = require('./resources');
var portNum = 5000;
var site = new relax.Site('CORS Enabled Site');
console.log("relaxjs listening on port " + portNum);
site.add(resources.simpleResource);
site.allowCORS(true);
site.serve().listen(portNum);
//# sourceMappingURL=server.js.map