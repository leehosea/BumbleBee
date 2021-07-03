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
    base: '/',
    routes: [
        {
            path: '/button',
            component: (resolve) => require(['./routers/button.vue'], resolve),

        },
        {
            path: '/radio',
            component: (resolve) => require(['./routers/radio.vue'], resolve)
        },
        {
            path: '/table',
            component: (resolve) => require(['./routers/table.vue'], resolve)
        },
        {
            path: '/tableBody',
            component: (resolve) => require(['./routers/tableBody.vue'], resolve)
        },
        {
            path: '/input',
            component: (resolve) => require(['./routers/input.vue'], resolve)
        }
    ]
})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');