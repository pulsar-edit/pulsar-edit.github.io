import { path } from '@vuepress/utils';
import { hopeTheme } from 'vuepress-theme-hope';

export default options => ({
	name: 'pulsar-theme',

	extends: hopeTheme(options),

	alias: {
		// You can override or add aliases here
		// For example, here we change the vuepress-theme-hope HomePage component to components/HomePage.js under our own theme
		//"@theme-hope/components/HomePage.js": path.resolve(
		//  __dirname,
		// "./components/HomePage.js"
		//),
	},
});
