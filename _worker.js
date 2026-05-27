export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		if (url.pathname === '/admin') {
			return new Response('需要密码', { status: 401 });
		}
		return new Response('edgetunnel OK', { status: 200 });
	}
}
