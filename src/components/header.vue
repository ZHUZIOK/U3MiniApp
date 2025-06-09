<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="https://u3.com/">U3基金官网</a></li>
                    <li>
                        <a>U3</a>
                        <ul class="p-2">
                            <li><a href="https://card.u3.com">官网</a></li>
                            <li><router-link to="/card"><a>卡片介绍</a></router-link></li>
                            <li><router-link to="/cardUsageRateDescription"><a>费率说明</a></router-link></li>
                            <li><router-link to="/qalist"><a>常见问题</a></router-link></li>
                        </ul>
                    </li>
                    <!-- <li><a @click="() => changeLang()">{{ t("message.switchLanguage") }}</a></li> -->
                </ul>
            </div>
            <a class="btn btn-ghost text-xl">U3</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><a href="https://u3.com/">U3基金官网</a></li>
                <li>
                    <a>U3</a>
                    <ul class="p-2">
                        <li><a href="https://card.u3.com">官网</a></li>
                        <li><router-link to="/card"><a>卡片介绍</a></router-link></li>
                        <li><router-link to="/cardUsageRateDescription"><a>费率说明</a></router-link></li>
                        <li><router-link to="/qalist"><a>常见问题</a></router-link></li>
                    </ul>
                </li>
                <!-- <li><a @click="() => changeLang()">{{ t("message.switchLanguage") }}</a></li> -->
            </ul>
        </div>
        <div class="navbar-end ">
            <a class="btn" href="https://card.u3.com">{{ t("message.registrationAndLogin") }}</a>
        </div>
    </div>
</template>

<script setup lang="ts">

import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

// const changeLang = () => {
//     let lang: string;
//     if (locale.value == "zhCN") {
//         locale.value = "enUS";
//         lang = "enUS";
//     } else {
//         locale.value = "zhCN";
//         lang = "zhCN";
//     }
//     localStorage.setItem("LANG", lang);
// };
const getCurrentLang = computed(() => {
    return locale.value;
});

console.log(getCurrentLang.value);
console.log(t("message.hello"));



</script>