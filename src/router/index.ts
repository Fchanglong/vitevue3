import { createRouter , createWebHistory } from "vue-router";


const routeHistory = createWebHistory()
const router = createRouter({
    history: routeHistory,
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/routerone.vue")
        },
        {
            path: "/tow",
            name: "tow",
            component: () => import("../views/routertow.vue")
        }
    ]
})

export default router