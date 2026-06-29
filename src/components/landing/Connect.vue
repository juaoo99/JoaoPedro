<script setup>
import { computed } from 'vue';

// Cria o caminho dinâmico correto combinando a URL base e o arquivo
const cvPath = computed(() => {
  const baseUrl = import.meta.env.BASE_URL;
  // Garante que não vai duplicar a barra se a baseUrl terminar com /
  return `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}joao_pedro_cv_ptbr.pdf`;
});
</script>

<template>
    <div class="px-5 sm:px-10 lg:px-20 flex flex-col lg:flex-row w-full lg:items-center lg:justify-around gap-5 lg:gap-5">
        <div class="flex flex-col items-center lg:items-start lg:w-1/3 justify-center lg:pr-10 mb-5 lg:mb-0" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            <span class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center lg:text-left">let's connect</span>
            <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5">Entre em contato enviando uma um email para <a href="mailto:jpsshome@gmail.com" class="border-b border-[#D3E97A]">jpsshome@gmail.com</a>.</p>
            <div class="mt-3 sm:mt-5">
                <GlassSurface :width="250" :height="50" :border-radius="24" style="custom-style">
                    <button class="flex items-center w-auto px-4 sm:px-5 py-2 gap-2 sm:gap-3 text-xs sm:text-sm md:text-base" style="border-radius: 50px">
                        <i class="pi pi-file-pdf"></i>
                        <p class="font-light text-pretty">
                            <a :href="cvPath" download="Joao_Pedro_CV.pdf" target="_blank">
                                Confira meu currículo.
                            </a>
                        </p>
                    </button>
                </GlassSurface>
            </div>

            <div class="flex flex-wrap justify-center lg:justify-start mt-4 sm:mt-6 gap-3 sm:gap-5">
                <GlassSurface :width="50" :height="50" :border-radius="24" style="custom-style">
                    <a href="mailto:jpsshome@gmail.com"><i class="pi pi-envelope" style="font-size: 1.5rem; color: #b74f4f"></i></a>
                </GlassSurface>
                <GlassSurface :width="50" :height="50" :border-radius="24" style="custom-style">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/" target="_blank"> <i class="pi pi-linkedin" style="font-size: 1.5rem; color: #0966c2"></i></a>
                </GlassSurface>
                <GlassSurface :width="50" :height="50" :border-radius="24" style="custom-style">
                    <p><i class="pi pi-github" style="font-size: 1.5rem"></i></p>
                </GlassSurface>
            </div>
        </div>
        <div class="hidden lg:flex items-center lg:w-1/2"></div>
    </div>
</template>

<style></style>
