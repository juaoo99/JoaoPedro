<script setup lang="ts">
import GlassSurface from '../../components/GlassSurface.vue';
import ShinyText from '../../components/ShinyText.vue';
import TextType from '../../components/TextType .vue';
function smoothScroll(id) {
    document.body.click();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
</script>
<template>
    <div class="hidden w-full flex-col min-h-dvh items-center lg:justify-around lg:flex lg:flex-row gap-5 mt-10 !bg-transparent">
        <div class="text-center lg:w-1/2 lg:text-left" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000' }">
            <TextType style="font-size: 6rem; color: surface" :text="['hi, i am Joao Pedro', 'happy to see you here!']" :typingSpeed="75" :pauseDuration="2000" :showCursor="true" cursorCharacter="|" />
            <ShinyText
                text=" Sou desenvolvedor formado e com experiência tem aplicações mobile e web. Buscando oportunidades desafiadoras para aplicar minhas skills em programação e desenvolvimento de aplicações de alta performance!"
                :disabled="false"
                :speed="3"
                style="font-size: 1.4rem"
                class-name="your-custom-class"
            />

            <div class="flex flex-wrap justify-center lg:justify-start gap-2 mt-6 px-5 lg:px-0">
                <GlassSurface :width="150" :height="50" :border-radius="24" style="custom-style">
                    <p class="select-none"><a @click="smoothScroll('connect')">Contact Me</a></p>
                </GlassSurface>
                <GlassSurface :width="50" :height="50" :border-radius="24" style="custom-style">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/" target="_blank"><i class="pi pi-linkedin" style="font-size: 1.5rem; color: #0966c2"></i></a>
                </GlassSurface>
            </div>
        </div>

        <div class="flex items-center p-5 lg:p-0" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
            <img src="../../assets/images/more/p2.png" alt="Image" width="400" class="rounded-xl" />
        </div>
    </div>

    <div class="flex lg:hidden flex-col min-w-dvw min-h-dvh gap-5 mt-60">
        <div class="text-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000' }">
            <p class="text-7xl font-bold">hi, i am <br />João Pedro.</p>
            <ShinyText
                text=" Sou desenvolvedor formado e com experiência tem aplicações mobile e web. Buscando oportunidades desafiadoras para aplicar minhas skills em programação e desenvolvimento de aplicações de alta performance!"
                :disabled="false"
                :speed="3"
                style="font-size: 1.4rem"
                class-name="your-custom-class"
            />

            <div class="flex flex-wrap justify-center lg:justify-start gap-2 mt-6 px-5 lg:px-0">
                <GlassSurface :width="150" :height="50" :border-radius="24" style="custom-style">
                    <p class="select-none"><a @click="smoothScroll('connect')">Contact Me</a></p>
                </GlassSurface>
                <GlassSurface :width="50" :height="50" :border-radius="24" style="custom-style">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/" target="_blank"><i class="pi pi-linkedin" style="font-size: 1.5rem; color: #0966c2"></i></a>
                </GlassSurface>
            </div>
        </div>

        <div class="flex items-center p-5 lg:p-0" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
            <img src="../../assets/images/more/p2.png" alt="Image" width="400" class="rounded-xl" />
        </div>
    </div>
</template>
<style>
.contact {
    background-color: #d3e97a;
    border-radius: 20px;
}
.linkdin {
    background-color: rgba(0, 36, 128, 0.234);
    border-radius: 20px;
}

.github {
    background-color: rgba(110, 110, 110, 0.133);
    border-radius: 20px;
}
/* From Uiverse.io by nikk7007 */
.bubbles {
    --c1: #212121;
    --c2: #d3e97a;
    --size-letter: 1.2rem;
    padding: 0.3em 1em;
    font-size: var(--size-letter);

    background-color: transparent;
    border: calc(var(--size-letter) / 6) solid var(--c2);
    border-radius: 0.2em;
    cursor: pointer;

    overflow: hidden;
    position: relative;
    transition: 300ms cubic-bezier(0.83, 0, 0.17, 1);
}

.bubbles > .t {
    font-weight: 700;
    color: var(--c2);
    position: relative;
    z-index: 1;
    transition: color 700ms cubic-bezier(0.83, 0, 0.17, 1);
}

.bubbles::before {
    top: 0;
    left: 0;
}

.bubbles::after {
    top: 100%;
    left: 100%;
}

.bubbles::before,
.bubbles::after {
    content: '';
    width: 150%;
    aspect-ratio: 1/1;
    scale: 0;
    transition: 1000ms cubic-bezier(0.76, 0, 0.24, 1);

    background-color: var(--c2);
    border-radius: 50%;

    position: absolute;
    translate: -50% -50%;
}

.bubbles:hover {
    & > p {
        color: #ffffff;
    }
    &::before,
    &::after {
        scale: 1;
    }
}

.bubbles:active {
    scale: 0.98;
    filter: brightness(0.9);
}
</style>
