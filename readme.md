Centennial College

MAPD713

Enterprise Technologies for Mobile Platforms

**Assignment 1** 

Develop Node.js http server to store, retrieve and delete information about **images** using HTTP GET, POST and DELETE requests and JSON data format.

||**Requirement**|**Points**|
| :- | :- | :- |
|1|<p>- it should be under git control </p><p>- it should have several git commits, with a clear description of each commit</p><p>*E.g. “create package.json”, “implement data storage”, “add request handling”, “fix response message”, “add logging errors”, “change error message”, etc*</p>|1|
|2|it should have package.json file with all required dependencies|1|
|3|<p>it should handle HTTP GET requests</p><p>` `<http://127.0.0.1:5000/images></p>|1|
|4|<p>it should handle HTTP POST requests with JSON payload</p><p><http://127.0.0.1:5000/images></p><p>payload example (with info about image): </p><p>{"imageId": 123, "name":"Candle", "url":"http://candle.cloud.com", "size":"500kb"}</p>|1|
|5|<p>- it should log the information on start-up:</p><p>- about the server uri (IP address and port) </p><p>- endpoints information, so that user knows how to access the server</p><p>Example:</p><p>Server is listening at  <http://127.0.0.1:5000></p><p>Endpoints:</p><p>` `<http://127.0.0.1:5000/images> method: GET, POST</p><p>- it should log request and response information so it is clear what type of request is being processed, e.g. </p><p>> products GET: received request</p><p>< products GET: sending response</p>|1|
|6|<p>- it should have 2 request counters, one for GET requests and the other for POST requests</p><p>- it should log request counters values **every** request:</p><p>Processed Request Count--> Get:2, Post:5</p>|2|
|7|- It should store in-memory json payload received in POST request (<http://127.0.0.1:5000/images>)|3|
|8|- It should return a list of all images information as a response to GET request ( <http://127.0.0.1:5000/images>)|2|
|9|<p>Implement method deleting all records: <http://127.0.0.1:5000/images></p><p>HTTP method: DELETE</p>|1|
|10|Create a sequence diagram, reflecting the application logic|1|
|11|Demo your solution with Postman or curl  (record 1-2min  video)|1|
||**TOTAL**|**15** out of 15|
Zip the files and name the archive **MAPD713-A1-YourNameHere.zip**, e.g. **MAPD713-A1-JohnDoe.zip**
