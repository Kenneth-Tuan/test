import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import { MotionPlugin } from '@vueuse/motion'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)
Vue.use(MotionPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
