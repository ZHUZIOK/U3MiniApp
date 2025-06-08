import { createI18n } from "vue-i18n";

import zhCN from "./zh-CN/index";
import enUS from "./en-US";
const message = {
    zhCN:{
        ...zhCN
    },
    enUS:{
        ...enUS
    }
}

const i18n = createI18n({
    locale:"zhCN",
    globalInjection:true,
    messages:message,
})


export default i18n;