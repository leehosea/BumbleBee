import Vue from 'vue';
import App from '../examples/app.vue';
import BumbleBee from '../src/index.js';

Vue.config.debug = true;

Vue.use(BumbleBee, {
    capture: true
});

const app = new Vue({
    render: h => h(App)
}).$mount('#app');