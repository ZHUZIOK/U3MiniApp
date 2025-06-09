<template>
    <div>
        <div class="bg-base-200 min-h-screen px-3">
            <div class="hero-content flex-col lg:flex-row">
                <img :src="U3CardMiniApp" alt="" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h4 class="text-3xl font-bold">{{
                        t("message.reviewTheUsageRateDescription.U3rateDescription")
                    }}</h4>
                </div>
            </div>
            <div class="px-3">
                <h4 class="text-1xl font-bold">{{
                    t("message.reviewTheUsageRateDescription.cardDescription1")
                }}</h4>
                <p class="py-3 px-3">
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription11")
                    }} <br>
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription12")
                    }} <br>
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription13")
                    }} <br>
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription14")
                    }} <br>
                </p>
                <p></p>
            </div>
            <div class="px-3 mt-5">
                <h4 class="text-1xl font-bold">{{
                    t("message.reviewTheUsageRateDescription.cardDescription2")
                }}</h4>
                <p class="py-3 px-3">
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription21")
                    }}<br>
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription22")
                    }}<br>
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription23")
                    }}<br>
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription24")
                    }}<br>
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription25")
                    }}<br>
                </p>
                <p></p>
            </div>
            <div class="px-3 mt-5">
                <h4 class="text-1xl font-bold">{{
                    t("message.reviewTheUsageRateDescription.cardDescription3")
                }}</h4>
                <p class="py-3 px-3">
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription31")
                    }} <br>
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription32")
                    }} <br>
                </p>
                <p></p>
            </div>
            <div class="px-3 mt-5">
                <h4 class="text-1xl font-bold">{{
                    t("message.reviewTheUsageRateDescription.cardDescription4")
                }}</h4>
                <p class="py-3 px-3">
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription41")
                    }}
                </p>
                <p></p>
            </div>
            <div class="px-3 mt-5">
                <h4 class="text-1xl font-bold">{{ t("message.reviewTheUsageRateDescription.cardDescription5") }}</h4>
                <p class="py-3 px-3">
                    {{
                        t("message.reviewTheUsageRateDescription.cardDescription51")
                    }}
                </p>
                <p></p>
            </div>
            <div class="px-3 mt-5">&nbsp;</div>
        </div>
    </div>

    <BackButton @click="routerBackButton" />
</template>

<script lang="ts" setup>
import U3CardMiniApp from "../assets/U3CardMiniApp.png";

//------------- 多语言
import { useI18n } from "vue-i18n";
//------------- 回退按钮
import { BackButton } from 'vue-tg';
import router from '../router';

const { t } = useI18n();

function routerBackButton() {
    router.push("/");
}

/**
 * 登录链接：https://sso.godaddy.com/?app=email&realm=pass
 * 账户：service@parapack.ai
 * 密码：HAha1999@
 */
</script>