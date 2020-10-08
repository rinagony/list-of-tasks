import Vue from 'vue'
import Router from 'vue-router'
import Create from './views/Create.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'create',
            component: Create
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/list',
            name: 'list',
            component: () => import('./views/List.vue')
        },
        {
            path: '/task/:id',
            name: 'task',
            component: () => import('./views/Task.vue')
        }

    ]
})
