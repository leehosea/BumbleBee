import Vue from 'vue';
import App from '../examples/app.vue';
import BumbleBee from '../src/index.js';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.use(BumbleBee, {
    capture: true
});
Vue.config.debug = true;
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
            path: '/checkBox',
            component: (resolve) => require(['./routers/checkBox.vue'], resolve)
        },
        {
            path: '/tableBody',
            component: (resolve) => require(['./routers/tableBody.vue'], resolve)
        },
        {
            path: '/input',
            component: (resolve) => require(['./routers/input.vue'], resolve)
        },
        {
            path: '/eleTable',
            component: (resolve) => require(['./routers/eleTable.vue'], resolve)
        },
        {
            path: '/editTable',
            component: (resolve) => require(['./routers/editTable.vue'], resolve)
        },
        {
            path: '/handleTable',
            component: (resolve) => require(['./routers/handleTable.vue'], resolve)
        },
        {
            path:'/treeCom',
            component:(resolve) => require(['./routers/treeCom.vue'],resolve)
        },
        {
            path:'/dynamicForm',
            component:(resolve) => require(['./routers/dynamicForm.vue'],resolve)
        }
        
    ]
})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');