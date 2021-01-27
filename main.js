// Ali Redirect Demo

export function onClientRequest(request) {
	request.respondWith(302, {'Location': ['https://www.tokopedia.com']}, '');
}