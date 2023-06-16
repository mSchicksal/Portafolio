import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/HomePage.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../components/AboutView.vue')
        }
    ]
})

export default router
