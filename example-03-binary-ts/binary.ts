///<reference path='./node_modules/relaxjs/dist/relaxjs.d.ts' />

import fs = require('fs');
import relax = require('relaxjs');

// Create the application by assembling the resources
var site = relax.site('sample5');

// Serve a full image as a Buffer
site.add(  {
  name: 'image',
  outFormat: 'image/jpeg',
  onGet: function( query, respond ) {
    var self = this;
    fs.readFile('image.jpg', function (err: Error, content: Buffer) {
      self.data = content;
      self.headers = { 'Cache-Control' : 'no-transform,public,max-age=300,s-maxage=900' };
      respond.ok();
    });
  }
});

// Serve an image as a data stream
site.add(  {
  name: 'imagestr',
  outFormat: 'image/jpeg',
  onGet: function( query, respond ) {
    var self = this;
    self.data = fs.createReadStream('image.jpg')
    self.headers = { 'Cache-Control' : 'no-transform,public,max-age=300,s-maxage=900' };
    respond.ok();
  }
});


// Create the application server for the site and listen on port 3000
console.log('Server listening on port 3000');
var appSrv = site.serve().listen(3000);
