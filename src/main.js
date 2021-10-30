import Vue from 'vue'
import App from './App.vue'
import Payments from './components/Payments/Payments'
import store from './store'
Vue.component('Payments', Payments);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    store,
}).$mount('#app')
