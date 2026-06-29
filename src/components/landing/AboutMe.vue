<template>
    <div class="px-5 sm:px-10 lg:px-20 gap-5 lg:gap-20 min-h-dvh flex flex-col lg:flex-row lg:items-center lg:justify-around">
        <div class="flex flex-col items-center lg:items-start lg:w-1/3 justify-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            <span class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5">about me</span>
            <div class="w-full flex items-center justify-center lg:justify-start pt-10 max-w-xs sm:max-w-sm" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000' }">
                <img src="../../assets/images/s.jpeg" alt="" class="rounded-lg w-full object-cover" />
            </div>
        </div>
        <div class="flex flex-col items-start lg:w-1/2">
            <!--<p class="text-4xl font-bold py-10" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">Desenvolvedor Full-Stack & Analista de Tecnologia .</p>-->
            <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-5" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                <span class="text-xl sm:text-2xl font-bold py-5 block">Atualmente</span> moro no Rio Grande do Sul e por três fiz parte do time de desenvolvimento da Flux Tecnologia. Casado e pai de uma linda menina. Adoro cinema, música e ler. De Attack on Titan
                ao cinema do Denis Villanueve, de Rachmaninoff ao Kendrik Lamar, e das documentações intermináveis das linguagens e ferramentas que uso até Dostoiévski.
            </p>
            <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                Meu inglês me permite ter uma comunicação excelente, tenho experiência e contato com nativos americanos que sempre me ajudam a melhorar essa skill importante nesse meio como desenvolvedor.
            </p>
            <p class="font-light text-sm sm:text-base md:text-lg text-pretty mt-3 sm:mt-5" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                Tenho um trabalho voluntário junto a comunidade religiosa do qual faço parte, junto com minha esposa, como líderes do berçário, cuidando das crianças mais pequenas.
            </p>
        </div>
    </div>
</template>

<style></style>
