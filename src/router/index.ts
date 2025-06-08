import { createRouter, createWebHashHistory } from "vue-router";

import home from "../components/home.vue";
import card from "../components/card.vue";
const routes = [
    { path: "/", component: home },
    { path: "/card", component: card },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;