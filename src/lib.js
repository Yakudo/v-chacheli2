import ChacheliDesigner         from './Designer.vue'
import ChacheliLayout           from './Layout.vue'

export {
	ChacheliDesigner,
	ChacheliLayout
}

export default {
  install(Vue, options) {
    Vue.component(ChacheliDesigner);
    Vue.component(ChacheliLayout);
  }
}
