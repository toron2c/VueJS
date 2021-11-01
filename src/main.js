import Vue from 'vue'
import App from './App.vue'
import Payments from './views/Payments'
import store from './store'
import router from './router'

Vue.component('Payments', Payments);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
