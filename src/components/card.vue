<template>
    <div class="px-3 mt-5">
        <div class="card w-full bg-base-100 shadow-md mt-5">
            <div class="card-body">
                <span class="badge badge-xs badge-warning">U3 Foundation</span>
                <div class="flex justify-between">
                    <h2 class="text-3xl font-bold">U3 Card</h2>
                    <span class="text-xl"><span class=" font-semibold text-2xl">0 </span>{{ t("message.card.card4")
                    }}</span>
                </div>
                <ul class="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{{ t("message.card.card5") }}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{{ t("message.card.card6") }}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{{ t("message.card.card7") }}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{{ t("message.card.card8") }}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{{ t("message.card.card9") }}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{{ t("message.card.card10") }}</span>
                    </li>
                </ul>
                <div class="mt-6">
                    <a @click="openNotionLink"><button class="btn btn-primary btn-block">{{ t("message.card.card11")
                    }}</button></a>
                </div>
            </div>
        </div>

        <div class="overflow-x-auto mt-5">
            <table class="table text-xs">
                <!-- head -->
                <thead>
                    <tr>
                        <th></th>
                        <th>{{ t("message.card.card12") }}</th>
                        <th>{{ t("message.card.card13") }}</th>
                        <th>{{ t("message.card.card14") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr>
                        <th>{{ t("message.card.card15") }}</th>
                        <td>{{ t("message.card.card26") }}</td>
                        <td>{{ t("message.card.card26") }}</td>
                        <td>{{ t("message.card.card26") }}</td>
                    </tr>
                    <!-- row 2 -->
                    <tr>
                        <th>{{ t("message.card.card16") }}</th>
                        <td>{{ t("message.card.card27") }}</td>
                        <td>{{ t("message.card.card27") }}</td>
                        <td>{{ t("message.card.card27") }}</td>
                    </tr>
                    <!-- row 3 -->
                    <tr>
                        <th>{{ t("message.card.card17") }}</th>
                        <td>{{ t("message.card.card28") }}</td>
                        <td>{{ t("message.card.card29") }}</td>
                        <td>{{ t("message.card.card30") }}</td>
                    </tr>
                    <tr>
                        <th>{{ t("message.card.card18") }}</th>
                        <td>{{ t("message.card.card31") }}</td>
                        <td>{{ t("message.card.card31") }}</td>
                        <td>{{ t("message.card.card31") }}</td>
                    </tr>
                    <tr>
                        <th>{{ t("message.card.card19") }}</th>
                        <td>{{ t("message.card.card32") }}</td>
                        <td>{{ t("message.card.card33") }}</td>
                        <td>{{ t("message.card.card33") }}</td>
                    </tr>
                    <tr>
                        <th>{{ t("message.card.card20") }}</th>
                        <td>{{ t("message.card.card34") }}</td>
                        <td>{{ t("message.card.card34") }}</td>
                        <td>{{ t("message.card.card34") }}</td>
                    </tr>
                    <tr>
                        <th>{{ t("message.card.card21") }}</th>
                        <td>{{ t("message.card.card35") }}</td>
                        <td>{{ t("message.card.card35") }}</td>
                        <td>{{ t("message.card.card36") }}</td>
                    </tr>
                    <tr>
                        <th>{{ t("message.card.card22") }}</th>
                        <td>{{ t("message.card.card37") }}</td>
                        <td>{{ t("message.card.card37") }}</td>
                        <td>{{ t("message.card.card37") }}</td>
                    </tr>
                    <tr>
                        <th>{{ t("message.card.card23") }}</th>
                        <td>{{ t("message.card.card37") }}</td>
                        <td>{{ t("message.card.card37") }}</td>
                        <td>{{ t("message.card.card37") }}</td>
                    </tr>
                    <tr>
                        <th>{{ t("message.card.card24") }}</th>
                        <td>{{ t("message.card.card37") }}</td>
                        <td>{{ t("message.card.card37") }}</td>
                        <td>{{ t("message.card.card38") }}</td>
                    </tr>
                    <tr>
                        <th>{{ t("message.card.card25") }}</th>
                        <td>{{ t("message.card.card37") }}</td>
                        <td>{{ t("message.card.card38") }}</td>
                        <td>{{ t("message.card.card38") }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="fixed right-4 top-1/3 z-50">
        <div class="dropdown dropdown-end">
            <div class="btn m-1" role="button" tabindex="0">
                <div class="motion-scale-loop-150">
                    <svg
                        class="icon w-5 h-5"
                        height="200"
                        p-id="8462"
                        t="1749375783365"
                        version="1.1"
                        viewBox="0 0 1453 1024"
                        width="200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1399.759917 449.897807a261.586886 261.586886 0 0 0-253.870459-203.713681 252.327174 252.327174 0 0 0-161.273331 57.101562 285.507811 285.507811 0 0 1 23.920924 35.495566 210.658466 210.658466 0 0 1 137.352407-49.385135 219.918179 219.918179 0 0 1 215.288322 180.564399l-5.401499 7.716427a224.548035 224.548035 0 0 0-209.886823-146.612119 231.49282 231.49282 0 0 0-123.462838 37.038851 308.657093 308.657093 0 0 1 27.007496 127.321051 341.83773 341.83773 0 0 1-7.716427 69.447846c38.582137-6.944785 81.79413-16.204497 123.462837-22.377639a77.164273 77.164273 0 0 0 56.329919-43.983636 122.691194 122.691194 0 0 0 7.716428-33.95228 5.401499 5.401499 0 0 1 5.401499-6.173142 6.944785 6.944785 0 0 1 3.858214 0 308.657093 308.657093 0 0 1 54.014991 134.265836 158.958403 158.958403 0 0 1-46.298564 154.328546h5.401499a225.319678 225.319678 0 0 0 105.715054-128.864336 47.841849 47.841849 0 0 0 31.637352 20.834354 220.689821 220.689821 0 0 1-210.658466 163.588259 43.983636 43.983636 0 0 0-40.125422-27.007496 42.44035 42.44035 0 0 0-42.44035 42.44035 41.668708 41.668708 0 0 0 42.44035 41.668708 42.44035 42.44035 0 0 0 40.897065-29.322424A248.46896 248.46896 0 0 0 1419.822628 642.80849a50.156778 50.156778 0 0 0 30.094066-45.526921V499.282942a50.156778 50.156778 0 0 0-50.156777-49.385135z"
                            fill="#CA383E"
                            p-id="8463"
                        ></path>
                        <path
                            d="M1213.794018 661.327916h-6.944784c-0.771643 0-15.432855 24.692567-77.164274 32.408995h-25.46421a92.597128 92.597128 0 0 1-58.644848-15.432855 6.944785 6.944785 0 0 0-7.716427 0 8.48807 8.48807 0 0 0 0 7.716427 100.313555 100.313555 0 0 0 83.337415 46.298564h12.346284a97.998627 97.998627 0 0 0 77.164273-66.361275 6.173142 6.173142 0 0 0 3.086571-4.629856zM499.252848 808.711678h15.432855A126.549408 126.549408 0 0 0 617.314186 719.972763a6.173142 6.173142 0 0 0 0-8.48807 7.716427 7.716427 0 0 0-9.259713 0s-19.291068 31.637352-94.912056 41.668708h-33.180637a125.006123 125.006123 0 0 1-77.164274-20.062711 6.944785 6.944785 0 0 0-9.259712 0 6.173142 6.173142 0 0 0 0 9.259713 128.092694 128.092694 0 0 0 108.029982 60.959776z m408.199005-470.702067a428.261716 428.261716 0 0 0-840.318935 15.432855 77.164273 77.164273 0 0 0-65.589633 77.164273v162.816616a77.164273 77.164273 0 0 0 141.982263 50.928421A368.073583 368.073583 0 0 0 340.294445 851.152028a21.605997 21.605997 0 0 1 0-6.173142 5.401499 5.401499 0 0 1 4.629856 0h3.858214A358.813871 358.813871 0 0 1 238.437604 635.092063 98.77027 98.77027 0 0 1 308.657093 528.605366c69.447846-12.346284 138.895692-27.007496 208.343538-40.125422a119.604624 119.604624 0 0 0 92.597128-72.534417 165.131545 165.131545 0 0 0 13.117926-56.32992 9.259713 9.259713 0 0 1 8.48807-6.944784 8.48807 8.48807 0 0 1 6.944785 0A501.567776 501.567776 0 0 1 733.060596 575.675572c8.48807 105.715054 3.858214 179.021114-77.164273 253.098817a10.802998 10.802998 0 0 0 0 4.629856 5.401499 5.401499 0 0 0 0 5.401499h4.629856a371.931797 371.931797 0 0 0 173.619615-211.430108 84.880701 84.880701 0 0 0 51.700063 33.95228A361.900442 361.900442 0 0 1 544.008126 928.316301a68.676203 68.676203 0 1 0 0 46.298564c199.855468-16.204497 360.357156-135.037478 393.537794-319.460091a81.79413 81.79413 0 0 0 50.156778-77.164273V419.803741a81.79413 81.79413 0 0 0-81.79413-81.79413z m-77.164273 46.298564a368.073583 368.073583 0 0 0-694.478459 0l-9.259713-8.48807a359.585513 359.585513 0 0 1 709.139671 0 70.219489 70.219489 0 0 0-2.314928 12.346283zM340.294445 851.152028z"
                            fill="#CA383E"
                            p-id="8464"
                        ></path>
                    </svg>
                </div>
                <span>&nbsp;&nbsp;{{ t("message.customerService") }}</span>
            </div>
            <ul
                class="dropdown-content menu bg-base-100 rounded-box z-1 w-35 p-2 shadow-sm"
                tabindex="0"
            >
                <li>
                    <a
                        href="https://api.whatsapp.com/qr/GVIK3QSKWBX3H1?autoload=1&app_absent=0"
                    >
                        <div>
                            <svg
                                class="icon w-5 h-5"
                                height="200"
                                p-id="9443"
                                t="1749376452177"
                                version="1.1"
                                viewBox="0 0 1024 1024"
                                width="200"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M849.92 51.2H174.08c-67.8656 0-122.88 55.0144-122.88 122.88v675.84c0 67.8656 55.0144 122.88 122.88 122.88h675.84c67.8656 0 122.88-55.0144 122.88-122.88V174.08c0-67.8656-55.0144-122.88-122.88-122.88z m-337.90464 768.01024h-0.11776c-55.12704-0.02048-109.20448-14.81216-156.35456-42.80832l-11.23328-6.65088-116.27008 30.47936 31.04768-113.31072-7.31648-11.6224A306.42176 306.42176 0 0 1 204.8 511.85152c0.0768-169.3184 137.8816-307.06176 307.31264-307.06176 82.06848 0.02048 159.1808 32.00512 217.18528 90.05056 58.0096 58.04544 89.91744 135.21408 89.90208 217.26208-0.06144 169.34912-137.86112 307.10784-307.18464 307.10784z"
                                    fill="#40C351"
                                    p-id="9444"
                                ></path>
                                <path
                                    d="M680.4992 589.2096c-9.23136-4.62848-54.64064-26.96192-63.10912-30.0288s-14.6176-4.608-20.79232 4.62848c-6.15424 9.23136-23.84384 30.03904-29.24032 36.18816-5.39136 6.1696-10.7776 6.94784-20.01408 2.31936-9.22112-4.63872-38.96832-14.37184-74.26048-45.82912-27.44832-24.46848-45.9776-54.69696-51.37408-63.94368-5.39136-9.22624-0.58368-14.22848 4.04992-18.8416 4.1472-4.1472 9.22624-10.78272 13.85984-16.1792 4.61312-5.39136 6.15424-9.24672 9.22624-15.39584 3.07712-6.17472 1.536-11.56096-0.77824-16.1792-2.2784-4.6336-20.224-50.29888-28.4416-68.56192-6.912-15.37536-14.19264-15.68768-20.79232-15.96416-5.39136-0.2304-11.54048-0.21504-17.69472-0.21504-6.14912 0-16.1536 2.31936-24.6272 11.56608-8.46848 9.24672-32.3328 31.57504-32.3328 77.00992 0 45.44 33.09056 89.344 37.70368 95.50336 4.61312 6.14912 63.89248 102.36928 157.75232 139.392 78.0032 30.76096 93.89056 24.64768 110.82752 23.11168 16.94208-1.53088 54.64064-22.31808 62.33088-43.89888 7.69536-21.56032 7.69536-40.0384 5.39648-43.88864-2.31424-3.86048-8.46336-6.15424-17.6896-10.79296z"
                                    fill="#40C351"
                                    p-id="9445"
                                ></path>
                            </svg>
                        </div>
                        <span> WhatsApp </span>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/gdtund">
                        <div>
                            <svg
                                class="icon w-5 h-5"
                                height="200"
                                p-id="12106"
                                t="1749376515091"
                                version="1.1"
                                viewBox="0 0 1024 1024"
                                width="200"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M679.424 746.862l84.005-395.996c7.424-34.852-12.581-48.567-35.438-40.009L234.277 501.138c-33.72 13.13-33.134 32-5.706 40.558l126.282 39.424 293.156-184.576c13.714-9.143 26.295-3.986 16.018 5.157L426.898 615.973l-9.143 130.304c13.13 0 18.871-5.706 25.71-12.581l61.696-59.429 128 94.282c23.442 13.129 40.01 6.29 46.3-21.724zM1024 512c0 282.843-229.157 512-512 512S0 794.843 0 512 229.157 0 512 0s512 229.157 512 512z"
                                    fill="#1296DB"
                                    p-id="12107"
                                ></path>
                            </svg>
                        </div>

                        <span>TeleGram</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>


        <div class="mt-10"></div>
    </div>


    <BackButton @click="routerBackButton" />
</template>

<script setup lang="ts">
//------------- 多语言
import { useI18n } from "vue-i18n";
const { t } = useI18n();
//------------- 回退按钮
import { BackButton } from 'vue-tg';
import router from '../router';
function routerBackButton() { router.push("/"); }


const openNotionLink = () => {
    if ((window as any).Telegram.WebApp.openLink) {
        (window as any).Telegram.WebApp.openLink("https://card.u3.com");
    } else {
        window.open("https://card.u3.com", "_blank");
    }
};
</script>