import Vue from 'vue'
import App from './App.vue'
import AlleyUI from "./components"
Vue.config.productionTip = false
Vue.use(AlleyUI);

new Vue({
    render: h => h(App),
}).$mount('#app')