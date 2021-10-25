import Vue from 'vue'
import App from './App.vue'
import Payments from './components/Payments/Payments'

Vue.component('Payments', Payments);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
