# Using views within relaxjs

relaxjs allows to expose resources accessible via http. In some case we want to represent a resource to
a browsesr via HTML. In those case you can tell a resource to use a template file to build a HTML
representation of its content.

relaxjs uses [lodash teplate](https://lodash.com/docs#template) function to merge the data of a resource with a HTML template.

To run the example as usual install the dependencies, build and start the server:

```
npm install
npm run build
npm start
```

Within a resource you can use the `view` property to tell relaxjs to use
a view template when responding to HTTP request with a header such as `Accept:text/html`.

```
const viewPage : relaxjs.Resource = {
  name: 'view-example',
  view: 'home',
  data: {
   title: 'Welcome to relaxjs views',
  }
};
```

Your `home._` in the `views` directory can be as simple as this:

```
<!DOCTYPE html>
<html>
	<head>
    <title><%= data.title %></title>
  </head>
  <body>
  </body>
</html>
```

**Note**: relaxjs will try to accomodate the format specified in the GET request.
So a request to the same resource with an header such as `Accept: application/json` will return
a representation of the resource data in JSON:

```
{
    "title": "Welcome to relaxjs views",
}
```

Enjoy views in relaxjs!
