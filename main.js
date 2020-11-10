// Hello World Example

export function onClientRequest(request) {
  request.respondWith(200, {'X-HelloWorld': ['From EdgeWorkers']}, '<html><body><h1>Hello World From Akamai EdgeWorkers</h1></body></html>');
}
