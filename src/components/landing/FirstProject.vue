<script setup lang="ts">
import VariableProximity from '../../components/VariableProximity.vue';

import Carousel from 'primevue/carousel';
import { ref } from 'vue';

import call1 from '../../assets/images/call1.png';
import call2 from '../../assets/images/call2.png';
import key from '../../assets/images/keypad.png';
import op from '../../assets/images/options.png';
import reg from '../../assets/images/reg.png';
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
        image: reg
    },
    {
        image: op
    },
    {
        image: key
    },
    {
        image: call1
    },
    {
        image: call2
    }
]);
</script>
<template>
    <div class="px-5 sm:px-10 lg:px-20 gap-5 lg:gap-20 min-h-dvh">
        <div class="flex flex-col items-center justify-center mb-10 lg:mb-40" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            <span class="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center">Projects</span>
            <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5">
                Alguns dos principais projetos em que trabalhei e ainda trabalho hoje são comercializados, o sofpthone whitelabel pode ser baixado na
                <a href="https://play.google.com/store/apps/dev?id=5756200202892972493" target="_blank" class="bg-[#04599C] p-2 rounded-xl">Play Store</a> e
                <a href="https://apps.apple.com/us/developer/amax-software-house-ltda/id1693262417" target="_blank" class="bg-[#04599C] p-2 rounded-xl">App Store</a>. Check my work.
            </p>
        </div>
        <div class="flex flex-col lg:flex-row w-full lg:items-center lg:justify-around gap-5 lg:gap-20 mt-5 lg:mt-10">
            <div class="imga w-full lg:w-1/2 p-5 sm:p-10 rounded-lg" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <p class="font-light text-lg sm:text-xl text-pretty text-center lg:text-left">Fluxphone</p>
                <Carousel :value="products" circular :autoplayInterval="5000" :showIndicators="false" :showNavigators="true" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="rounded m-1 sm:m-2 p-2 sm:p-4">
                            <div class="mb-4">
                                <div class="relative mx-auto">
                                    <img :src="slotProps.data.image" alt="Project Image" class="w-full h-auto max-w-xs mx-auto lg:rounded-lg rounded-sm object-cover" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
            <div class="flex flex-col items-start lg:w-1/2" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <VariableProximity
                    label="Softphone Withe-label"
                    from-font-variation-settings="'wght' 400, 'opsz' 9"
                    to-font-variation-settings="'wght' 1000, 'opsz' 40"
                    :container-ref="containerRef"
                    :radius="100"
                    falloff="linear"
                    class-name="font-semibold text-2xl sm:text-3xl md:text-4xl text-pretty mt-5"
                />
                <p class="font-light text-sm sm:text-base md:text-lg lg:text-pretty mt-3 sm:mt-5">
                    Responsável pelo desenvolvimento e manutenção de um softphone VoIP whitelabel, uma plataforma que serve a mais de 70 clientes distintos. Para construir um sistema de alta performance, implementei tecnologias modernas como Firebase
                    para uma gestão de dados eficiente e notificações push para aprimorar a experiência de comunicação. Essa arquitetura permitiu que as personalizações de cada cliente fossem feitas de maneira dinâmica, enquanto as atualizações de
                    segurança e novas funcionalidades eram implementadas em todos os aplicativos de forma simultânea. Entreguei um produto robusto e confiável, demonstrando minha expertise na criação de soluções escaláveis e tecnologicamente
                    avançadas.
                </p>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-3 sm:mt-5 flex-wrap">
                    <p class="font-light text-sm sm:text-base md:text-lg text-pretty">Avaliable on:</p>
                    <p class="font-light text-sm sm:text-base md:text-lg text-pretty uppercase"><a href="https://apps.apple.com/us/app/fluxphone/id6450217761" target="_blank" class="bg-[#04599C] p-2 rounded-xl select-none">App Store</a></p>
                    <p class="font-light text-sm sm:text-base md:text-lg text-pretty">&</p>
                    <p class="font-light text-sm sm:text-base md:text-lg text-pretty uppercase"><a href="https://play.google.com/store/apps/details?id=br.net.flux.fluxphone_beta" target="_blank" class="bg-[#04599C] p-2 rounded-xl select-none">Play Store</a></p>
                </div>
                <p class="font-semibold text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5 uppercase">Project Info</p>
                <Divider />
                <div class="flex flex-col sm:flex-row sm:justify-between w-full gap-2">
                    <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5">Year</p>
                    <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5">2023 - 2025</p>
                </div>
                <Divider />
                <div class="flex flex-col sm:flex-row sm:justify-between w-full gap-2">
                    <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5">Role</p>
                    <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5">Mobile Developer Full-Stack</p>
                </div>
                <Divider />
                <div class="flex flex-col sm:flex-row sm:justify-between w-full gap-2">
                    <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5">Langagues/Frameworks</p>
                    <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5 flex items-center gap-3 sm:gap-5">Obj-C <i class="pi pi-circle-fill" style="font-size: 0.5rem"></i> Swift <i class="pi pi-circle-fill" style="font-size: 0.5rem"></i> SwiftUI</p>
                </div>
                <Divider />
            </div>
        </div>
    </div>
</template>

<style scoped>
.imga {
    background-color: rgba(178, 178, 178, 0.111);
}
</style>
