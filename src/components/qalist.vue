<template>
    <div class="px-3 mt-5">
        <div class="card card-border bg-base-100 shadow-md">
            <div class="card-body">
                <h2 class="card-title">{{ t("message.QA") }}</h2>
                <div class="collapse bg-base-100 border border-base-300">
                    <input name="my-accordion-1" type="radio" />
                    <div class="collapse-title font-semibold">{{ t("message.QAInfo.questions1") }}</div>
                    <div class="collapse-content text-sm">{{ t("message.QAInfo.qnswers1") }}
                    </div>
                </div>
                <div class="collapse bg-base-100 border border-base-300">
                    <input name="my-accordion-1" type="radio" />
                    <div class="collapse-title font-semibold">{{ t("message.QAInfo.questions2") }}</div>
                    <div class="collapse-content text-sm">{{ t("message.QAInfo.qnswers2") }}
                    </div>
                </div>
                <div class="collapse bg-base-100 border border-base-300">
                    <input name="my-accordion-1" type="radio" />
                    <div class="collapse-title font-semibold">{{ t("message.QAInfo.questions3") }}</div>
                    <div class="collapse-content text-sm">{{ t("message.QAInfo.qnswers3") }}
                    </div>
                </div>
                 <div class="collapse bg-base-100 border border-base-300">
                    <input name="my-accordion-1" type="radio" />
                    <div class="collapse-title font-semibold">{{ t("message.QAInfo.questions4") }}</div>
                    <div class="collapse-content text-sm">{{ t("message.QAInfo.qnswers4") }}
                    </div>
                </div>
                 <div class="collapse bg-base-100 border border-base-300">
                    <input name="my-accordion-1" type="radio" />
                    <div class="collapse-title font-semibold">{{ t("message.QAInfo.questions5") }}</div>
                    <div class="collapse-content text-sm">{{ t("message.QAInfo.qnswers5") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <BackButton @click="routerBackButton" />
</template>

<script lang="ts" setup>

//------------- 多语言
import { useI18n } from "vue-i18n";
const { t } = useI18n();
//------------- 回退按钮
import { BackButton } from 'vue-tg';
import router from '../router';
function routerBackButton() {
    router.push("/");
}
</script>