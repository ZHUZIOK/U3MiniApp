import { createRouter, createWebHashHistory } from "vue-router";

import home from "../components/home.vue";
import card from "../components/card.vue";
import qalist from "../components/qalist.vue";
import cardUsageRateDescription from "../components/cardUsageRateDescription.vue";
import apayQalist from "../components/apayQalist.vue";

const routes = [
    { path: "/", component: home },
    { path: "/card", component: card },
    { path: "/qalist", component: qalist },
    { path: "/cardUsageRateDescription", component: cardUsageRateDescription },
    { path: "/apayQalist", component: apayQalist },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;