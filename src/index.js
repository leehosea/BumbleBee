import Button from "./components/Button/index.js"
import Radio from "./components/Radio/index.js"
import Table from "./components/Table/index.js"


const components = {
    Button,
    Radio,
    Table
}

const bumblebee = {
    ...components
}

//vue。use使用时，必须要有install方法。参数就是vue。
const install = (Vue) => {
    //如果已注册，则不再执行注册
    if (install.installed) {
        console.log('Component was already installed!!!');
        return;
    };

    for (var key in bumblebee) {
        Vue.component(key, bumblebee[key])
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION,
    install,
    ...components,
}

// module.exports.default = module.exports = API;
export default API;