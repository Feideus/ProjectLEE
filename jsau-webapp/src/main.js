import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './component/app.vue'
import Home from './component/home.vue'
import Foo from './component/foo.vue'
import Bar from './component/bar.vue'
import Test from './component/test.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/foo', component: Foo},
        {path: '/bar', component: Bar},
        {path: '/test', component: Test},
        
    ]})

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
