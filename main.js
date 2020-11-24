// Ali Redirect Demo

export function onClientRequest(request) {
	request.respondWith(302, {'Location': ['https://www.singtel.com/personal/products-services/mobile/phones/apple-iphone-12']}, '');
}
