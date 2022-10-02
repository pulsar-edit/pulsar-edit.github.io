import type { Theme } from '@vuepress/core'
import { path } from '@vuepress/utils'
import { hopeTheme } from 'vuepress-theme-hope'

const __dirname = getDirname(import.meta.url)


export const childTheme = (options: default) => ({
	return {
		name: "pulsar-theme",

	  extends: hopeTheme(options),

	  alias: {
	    // You can override or add aliases here
	    // For example, here we change the vuepress-theme-hope HomePage component to components/HomePage.js under our own theme
	    //"@theme-hope/components/HomePage.js": path.resolve(
	    //  __dirname,
	    //  "./components/HomePage.js"
	    //),
	  },
	},
});
