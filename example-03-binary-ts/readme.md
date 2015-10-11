# Example 03: delivering binary data

Relaxjs can stream large binary data to minimize the memory conumption in the server.

When returning binary data for a resource request you can set the data member
of the resource with a Buffer containing the data or with readable stream.

In the first case relaxjs will send the binary data in one piece while in the
second case relaxjs will pipe the stream to the response allowing large amount of data
to flow directly to the client without using large amount of data in the server.
  

