import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../examples/app.vue';
import BumbleBee from '../src/index.js';

Vue.config.debug = true;

Vue.use(VueRouter);

Vue.use(BumbleBee, {
    capture: true
});

const router = new VueRouter({
    esMoudle: false,
    mode: 'history',
    routes: [
        {
            path: '/button',
            component: (resolve) => require(['./routers/button.vue'], resolve)
        }
    ]
})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');