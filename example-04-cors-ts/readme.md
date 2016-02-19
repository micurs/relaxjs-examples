# Example #4 - enable CORS on your relaxjs server

Enable CORS in a relaxjs server is very easy.

    const site = new relax.Site('CORS Enabled Site');
    site.allowCORS(true);

That's it!

With this setting the CORS header will be automatically added to all the responses on all requests.
Furthermore the server will be responding to the so called preflight OPTIONS requests automatically.
See the [Mozilla page](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) about CORS for details about the protocol.

In the example here you run a relaxjs site by

    npm start

and a client web site by

    npm run client

The relaxjs site runs on localhost:5000 while the client site runs on localhost:3000.
So these are effecitevly to sites running from 2 different hosts as far as the browser is concerned.

In the client site the browser should open automatically and you can test there 4 calls to the relaxjs site.

Enjoy.
