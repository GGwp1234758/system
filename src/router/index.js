import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import container from 'components/container'
import Navbar from 'components/common/NavBar-side'


const routes = [
    {
        path: '/',
        components: {
            Navbar,
            container,


        },
        children: [{
            path: '/profile',
            name: 'profile',
            components: {
                profile: resolve => {
                    require(['components/content/profile'], resolve)
                },
            }
        },
            /*{
                path: '/test',
                components: {
                    test: resolve => {
                        require(['views/forms/customFiltering'], resolve)
                    }
                }
            }*/]
    },

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
