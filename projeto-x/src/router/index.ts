import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Order from '../views/Order.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
