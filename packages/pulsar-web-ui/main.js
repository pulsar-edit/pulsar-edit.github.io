import { createPage } = require("@vuepress/core");

export default {
  async onInitialized(app) {
    console.log(app.pages.routeMeta.getRoutes());
    //app.pages.routeMeta
  },
}
