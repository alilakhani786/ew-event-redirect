// Ali Redirect Demo

export function onClientRequest(request) {
	request.respondWith(302, {'Location': ['http://www.singtel.com']}, '');
}
