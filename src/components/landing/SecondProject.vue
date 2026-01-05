<script setup lang="ts">
import VariableProximity from '../../components/VariableProximity.vue';

import Carousel from 'primevue/carousel';
import { ref } from 'vue';
import loginImage from '../../assets/images/login.png';
import menuImage from '../../assets/images/menu.png';
import menu2Image from '../../assets/images/menu2.png';
import serveImage from '../../assets/images/serve.png';
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
        image: menu2Image
    },
    {
        image: serveImage
    }
]);
</script>
<template>
    <div class="lg:px-40 px-10 gap-20 min-h-dvh">
        <div class="lg:flex w-full lg:items-center lg:justify-around gap-20 mt-10">
            <div class="imga w-full lg:w-1/2" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <p class="font-light text-xl text-pretty text-center lg:text-left">GuestLink</p>
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
                    label="GuestLink"
                    from-font-variation-settings="'wght' 400, 'opsz' 9"
                    to-font-variation-settings="'wght' 1000, 'opsz' 40"
                    :container-ref="containerRef"
                    :radius="100"
                    falloff="linear"
                    class-name="font-semibold text-4xl text-pretty mt-5"
                />
                <p class="font-light text-lg text-pretty mt-5">
                    Participei do desenvolvimento do Guestlink, um softphone de alta performance projetado para transformar a comunicação em hotéis. Utilizando uma base de código robusta em Swift, SwiftUI e Objective-C, criei um aplicativo que vai
                    além de um simples ramal de telefone. O Guestlink permite que os hóspedes realizem e recebam chamadas diretamente do seu smartphone, enquanto oferece um sistema de chat integrado para comunicação direta com a equipe do hotel. Além
                    disso, o aplicativo conta com um módulo de pedidos que agiliza o serviço de quarto e outras solicitações, centralizando toda a interação do cliente em uma única e intuitiva interface.
                </p>
                <div class="lg:flex gap-5">
                    <p class="font-light text-lg text-pretty uppercase">Avaliable on:</p>
                    <p class="font-light text-lg text-pretty uppercase">
                        <a
                            href="https://apps.apple.com/us/app/ch%C3%A1cara-menina-da-serra/id6751280484"
                            target="_blank"
                            class="bg-[#d3e97a67] p-3 rounded-full transition-all duration-300 hover:bg-[#d3e97ad7] hover:shadow-[0_0_20px_#d3e97a] hover:scale-105"
                            >App Store</a
                        >
                    </p>
                    <p class="font-light text-lg text-pretty">&</p>
                    <p class="font-light text-lg text-pretty uppercase">
                        <a
                            href="https://play.google.com/store/apps/details?id=br.app.amax.meninadaserra"
                            target="_blank"
                            class="bg-[#d3e97a67] p-3 rounded-full transition-all duration-300 hover:bg-[#d3e97ad7] hover:shadow-[0_0_20px_#d3e97a] hover:scale-105"
                            >Play Store</a
                        >
                    </p>
                </div>
                <p class="font-light text-lg text-pretty mt-5 uppercase">Project Info</p>
                <Divider />
                <div class="lg:flex justify-between">
                    <p class="font-light text-lg text-pretty mt-5">Year</p>
                    <p class="font-light text-lg text-pretty mt-5">2024 - 2025</p>
                </div>
                <Divider />
                <div class="lg:flex justify-between">
                    <p class="font-light text-lg text-pretty mt-5">Role</p>
                    <p class="font-light text-lg text-pretty mt-5">Mobile Developer Full-Stack</p>
                </div>
                <Divider />
                <div class="lg:flex justify-between">
                    <p class="font-light text-lg text-pretty mt-5">Langagues/Frameworks</p>
                    <p class="font-light text-lg text-pretty mt-5 flex items-center gap-5">Obj-C <i class="pi pi-circle-fill" style="font-size: 0.5rem"></i> Swift <i class="pi pi-circle-fill" style="font-size: 0.5rem"></i> SwiftUI</p>
                </div>
                <Divider />
            </div>
        </div>
    </div>
</template>

<style scoped>
.imga {
    padding: 20px;
    background-color: rgba(128, 128, 128, 0.111);
    border-radius: 5px;
}
</style>
