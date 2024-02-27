import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/user/HomeView.vue'
import AboutView from '../views/user/AboutView.vue'
import NewsView from '../views/user/NewsView.vue'
import NewsDetailView from '../views/user/NewsDetailView.vue'
import ProductDetailView from '../views/user/ProductDetailView.vue'

const userRouter = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView
        },
        {
            path: '/news/detail/:id',
            name: 'news.detail',
            component: NewsDetailView,
            props: true
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: { name: 'home' }
        },
        {
            path: '/product/detail/:id',
            name: 'product.detail',
            component: ProductDetailView,
            props: true
        }
    ]
})

export default userRouter
