<template>
    <div class="lg:px-20 px-10 lg:flex w-full lg:items-center lg:justify-around gap-5">
        <div class="items-center lg:w-1/3 justify-center pr-10" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            <span class="text-7xl font-bold">let's connect</span>
            <p class="font-light text-lg text-pretty mt-5">Entre em contato enviando uma um email para <a href="mailto:jpsshome@gmail.com" class="border-b border-[#D3E97A]">jpsshome@gmail.com</a>.</p>
            <GlassSurface :width="300" :height="50" :border-radius="24" style="custom-style">
                <button class="flex items-center w-auto px-5 py-2 gap-3" style="border-radius: 50px">
                    <i class="pi pi-file-pdf"></i>
                    <p class="font-light text-lg text-pretty"><a href="../../assets/João Pedro Silva Santos.pdf" download>Confira meu currículo.</a></p>
                </button>
            </GlassSurface>

            <div class="flex flex-wrap justify-start mt-6 gap-5">
                <GlassSurface :width="50" :height="50" :border-radius="24" style="custom-style">
                    <a href="mailto:jpsshome@gmail.com"><i class="pi pi-envelope" style="font-size: 1.8rem; color: #b74f4f"></i></a>
                </GlassSurface>
                <GlassSurface :width="50" :height="50" :border-radius="24" style="custom-style">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/" target="_blank"> <i class="pi pi-linkedin" style="font-size: 2rem; color: #0966c2"></i></a>
                </GlassSurface>
                <GlassSurface :width="50" :height="50" :border-radius="24" style="custom-style">
                    <p><i class="pi pi-github" style="font-size: 2rem"></i></p>
                </GlassSurface>
            </div>
        </div>
        <div class="items-center w-1/2"></div>
    </div>
</template>

<style></style>
