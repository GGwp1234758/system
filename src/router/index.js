import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import container from 'components/container'
import Navbar from 'components/common/NavBar-side'
import TS from  'views/forms/textureAnalysis'
import DCD from  'views/forms/DifferentialChangeDetection'




const routes = [
    {
        path: '/',
        components: {
            Navbar,
            container,
            TS,
            DCD
        }
    },

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
