<script setup lang="ts">
import VariableProximity from '../../components/VariableProximity.vue';

import Carousel from 'primevue/carousel';
import { ref } from 'vue';
import account from '../../assets/images/bshop/account.png';
import config from '../../assets/images/bshop/config.png';
import loginImage from '../../assets/images/bshop/login.png';
import menuImage from '../../assets/images/bshop/main.png';
import nfc from '../../assets/images/bshop/nfc.png';
import pay from '../../assets/images/bshop/pay.png';

const containerRef = ref<HTMLElement | null>(null);

const responsiveOptions = ref([
    {
        breakpoint: '1500px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '576px',
        numVisible: 1,
        numScroll: 1
    }
]);
const products = ref([
    {
        image: loginImage
    },
    {
        image: menuImage
    },
    {
        image: config
    },
    {
        image: pay
    },
    {
        image: nfc
    },
    {
        image: account
    }
]);
</script>
<template>
    <div class="lg:px-20 px-10 gap-20 min-h-dvh">
        <div class="lg:flex w-full lg:items-center lg:justify-around gap-20 mt-10">
            <div class="imga p-10 w-full lg:w-1/2 rounded-lg" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <p class="font-light text-xl text-pretty text-center lg:text-left">BShop Mobile</p>
                <Carousel :value="products" circular :autoplayInterval="5000" :showIndicators="false" :showNavigators="true" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="rounded m-2 p-4">
                            <div class="mb-4">
                                <div class="relative mx-auto">
                                    <img :src="slotProps.data.image" alt="Project Image" class="w-full h-auto max-w-xs mx-auto lg:rounded-lg rounded-sm" />
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>

            <div class="items-center lg:w-1/2" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <VariableProximity
                    label="BShop Mobile"
                    from-font-variation-settings="'wght' 400, 'opsz' 9"
                    to-font-variation-settings="'wght' 1000, 'opsz' 40"
                    :container-ref="containerRef"
                    :radius="100"
                    falloff="linear"
                    class-name="font-semibold text-4xl text-pretty mt-5"
                />
                <p class="font-light text-lg text-pretty mt-5">
                   O BShop Mobile é um ecossistema robusto de Ponto de Venda (PDV) e softphone focado no setor varejista e de automação comercial. A plataforma unifica serviços de telecomunicação e soluções financeiras, otimizando a operação e o fluxo de vendas diretamente em smartphones comuns e terminais dedicados (Smart POS). O sistema foi projetado com arquitetura escalável utilizando múltiplos build variants (flavors) para gerenciar com segurança uma carteira de clientes ativos.
                   <br />
                   Como Desenvolvedor Android na Server Informática, atuei diretamente em todo o ciclo de vida do aplicativo, com foco em otimização de código e integração de hardware. Meu principal marco no projeto foi liderar de ponta a ponta a integração do SDK 'Tap on Phone' do PagBank.
                </p>
                <div class="lg:flex gap-5">
                    <p class="font-light text-lg text-pretty uppercase">Avaliable on:</p>
                    <p class="font-light text-lg text-pretty uppercase"><a href="https://play.google.com/store/apps/details?id=com.serverinfo.bshoppdv.playstore&hl=pt" target="_blank" class="bg-[#04599C] p-2 rounded-xl select-none">Play Store</a></p>
                </div>
                <p class="font-light text-lg text-pretty mt-5 uppercase">Project Info</p>
                <Divider />
                <div class="lg:flex justify-between">
                    <p class="font-light text-lg text-pretty mt-5">Year</p>
                    <p class="font-light text-lg text-pretty mt-5">2026</p>
                </div>
                <Divider />
                <div class="lg:flex justify-between">
                    <p class="font-light text-lg text-pretty mt-5">Role</p>
                    <p class="font-light text-lg text-pretty mt-5">Mobile Developer Full-Stack</p>
                </div>
                <Divider />
                <div class="lg:flex justify-between">
                    <p class="font-light text-lg text-pretty mt-5">Langagues/Frameworks</p>
                    <p class="font-light text-lg text-pretty mt-5 flex items-center gap-5">Kotlin<i class="pi pi-circle-fill" style="font-size: 0.5rem"></i> Java 
                    </p>
                </div>
                <Divider />
            </div>
        </div>
    </div>
</template>

<style scoped>
.imga {
    background-color: rgba(128, 128, 128, 0.111);
}
</style>
