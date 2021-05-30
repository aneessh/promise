## Practice

### Develop Promise driven HTTP Client

#### Context

One of the ways of making web applications interactive, is by making calls to access data to external apis.

This operation has to be performed asynchronously to allow non-blocking execution

The XMLHttpRequest object helps to make asynchronous calls and provides responses.

However to retrieve response event handlers are required that invoke on events being raised as the response is generated

For multiple nested calls the code becomes too complex

Better approach would be to create a promise object that makes XHR requests and returns promise with response.

The resulting response can be consumed by calling then( ) and catch( ) methods


#### Problem Statement

Develop Promise driven HTTP client that uses XMLHttpRequest object to make HTTP calls and return promise to resolve or reject for the request made to provided url

#### Instructions

1. Fork the boilerplate
2. Clone the forked repository
3. Provide the solution code within the file `script.js`.
4. Launch the `index.html` page on the browser to view the rendered output
