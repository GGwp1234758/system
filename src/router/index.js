import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import container from 'components/container'
import Navbar from 'components/common/NavBar-side'

import cme from 'views/forms/CompositeModelEnhancements'
import ic from 'views/forms/imageCutting'
import cdt from 'views/forms/ChangeDetectionTool'
import ard from 'views/forms/AnalysisRoadDamage'


const routes = [
    {
        path: '/',
        components: {
            Navbar,
            container,
           ic,cme,cdt,
            ard

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
