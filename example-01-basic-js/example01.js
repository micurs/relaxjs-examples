// relaxjs example #01 - Simple resources

var r = require('relaxjs');

// Create the application by assembling the resources
var site = r.site('Example #01');

site.add(  {
  name: 'hello',
  view: 'helloworld',
  data: { message: "Hello World!" }
});

site.add( {
  name: 'greetings',
  view: 'helloworld',
  data: { message: "This is a resource with child resources" },
  resources: [
    {
      name: 'zh',
      view: 'helloworld',
      data: { message: "你好世界" }
    },
    {
      name: 'en',
      view: 'helloworld',
      data: { message: "Hello World!" }
    }
  ]
});

function getCurrentDate() {
  var date = new Date();
  return ''+date.getHours()+':'+date.getMinutes()+'.'+date.getSeconds()+' UTC';
}

var staticResource = {
  name: 'static',
  view : 'helloworld',
  data : { message: 'Hello! This resource was created on '+ getCurrentDate() }
};

var dynamicResource = {
  name: 'dynamic',
  view : 'helloworld',
  onGet : function( query, respond ) {
    var date = new Date();
    this.data = { message: 'Hello Dynamic World! It is now '+ getCurrentDate()  };
    respond.ok();
  }
};


site.add( staticResource );
site.add( dynamicResource );

// Create the application server for the site
var appSrv = site.serve();

// Listen
console.log('Server listening on port 3030');
appSrv.listen(3030);
