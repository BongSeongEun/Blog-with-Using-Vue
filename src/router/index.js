import { createWebHistory, createRouter } from 'vue-router'
import MainSrcView from '../components/MainSrcView.vue'
import MainView from '../components/MainView.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainView
    },{
        path: '/src',
        name: 'srcmain',
        component: MainSrcView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router