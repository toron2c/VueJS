import Vue from 'vue';
import VueRouter from 'vue-router';
import Payments from "../views/Payments";
import About from "../views/About";
import NotFound from "../views/NotFound";
import Paymentsform from "../components/Payments/Paymentsform";

Vue.use(VueRouter);

const routes = [
    {
        path: '/dashboard/:page',
        name: 'Dashboard',
        component: Payments
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/notfound',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/add/payment*',
        name: 'AddPayment',
        component: Paymentsform
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
