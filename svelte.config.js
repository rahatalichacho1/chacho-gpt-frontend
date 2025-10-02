import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'public',      // ye change karo
			assets: 'public',     // ye change karo
			fallback: 'index.html'
		})
	}
};

export default config;
