import Vue from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import routes from  './route'
import vueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(antd)
const router = new vueRouter({
    routes
})
Vue.use(router)

new Vue({
    render: h => h(App)
}).$mount('#app')
