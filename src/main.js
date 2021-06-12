import Vue from 'vue'
import App from './index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
