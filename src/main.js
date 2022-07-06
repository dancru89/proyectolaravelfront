import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vueaxios from "vue-axios"
import Axios from "axios"
import axios from "axios"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)



Vue.use(Vueaxios, axios)
Vue.use(Vueaxios, Axios)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')