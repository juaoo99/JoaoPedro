<script setup lang="ts">
import AboutMe from '@/components/landing/AboutMe.vue';
import Exeperiencies from '@/components/landing/Exeperiencies.vue';
import FirstProject from '@/components/landing/FirstProject.vue';
import FirstSection from '@/components/landing/FirstSection.vue';
import FourthProject from '@/components/landing/FouthProject.vue';
import More from '@/components/landing/More.vue';
import SecondProject from '@/components/landing/SecondProject.vue';
import Skills from '@/components/landing/Skills.vue';
import ThirdPtoject from '@/components/landing/ThirdPtoject.vue';
import { ref } from 'vue';
import DotGrid from '../../layout/DotGrid.vue';
import StaggeredMenu from '../../layout/StaggeredMenu.vue';

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleMenuOpen = () => {
    isMobileMenuOpen.value = true;
};

const handleMenuClose = () => {
    isMobileMenuOpen.value = false;
};

const menuItems = [
    { label: 'home', ariaLabel: 'Go to home page', link: 'first' },
    { label: 'projetos', ariaLabel: 'View projects 1', link: 'features' },
    { label: 'mais', ariaLabel: 'More content', link: 'more' },
    { label: 'sobre mim', ariaLabel: 'Read about me', link: 'aboutme' },
    { label: 'experiências', ariaLabel: 'View experiences', link: 'experiencies' },
    { label: 'conectar', ariaLabel: 'Get in touch', link: 'connect' }
];

function smoothScroll(id) {
    isMobileMenuOpen.value = false;

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
    <div class="w-full overflow-x-hidden">
        <div id="home" class="landing-wrapper relative w-full overflow-x-hidden">
            <div
                :class="{
                    'pointer-events-auto': isMobileMenuOpen,
                    'pointer-events-none': !isMobileMenuOpen
                }"
                class="fixed top-0 right-0 z-[100] h-screen w-screen"
            >
                <StaggeredMenu
                    :open="isMobileMenuOpen"
                    :items="menuItems"
                    :on-item-click="smoothScroll"
                    position="right"
                    :display-item-numbering="true"
                    menu-button-color="#fff"
                    open-menu-button-color="#fff"
                    :change-menu-color-on-open="true"
                    :colors="['#04599C', '#04599C']"
                    logo-url="/path-to-your-logo.svg"
                    accent-color="#04599C"
                    @menu-open="handleMenuOpen"
                    @menu-close="handleMenuClose"
                />
            </div>

            <section class="relative flex min-h-[100dvh] w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <DotGrid
                    :dot-size="3"
                    :gap="15"
                    base-color="#2C2C2CFF"
                    active-color="#04599C"
                    :proximity="150"
                    :speed-trigger="100"
                    :shock-radius="250"
                    :shock-strength="5"
                    :max-speed="5000"
                    :resistance="750"
                    :return-duration="1.5"
                    class-name="custom-dot-grid"
                    class="pointer-events-none"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0"
                />

                <div id="first" class="relative z-10 mx-auto w-full max-w-[1500px] xl:max-w-[1600px] 2xl:max-w-[1700px]">
                    <FirstSection />
                </div>
            </section>

            <section id="features" class="mt-20 px-4 sm:px-6 md:mt-32 lg:mt-40 lg:px-8 xl:px-10 2xl:px-12">
                <div class="mx-auto w-full max-w-[1500px] xl:max-w-[1600px] 2xl:max-w-[1700px]">
                    <FirstProject />
                </div>
            </section>
            <section id="f" class="mt-20 px-4 sm:px-6 md:mt-32 lg:mt-40 lg:px-8 xl:px-10 2xl:px-12">
                <div class="mx-auto w-full max-w-[1500px] xl:max-w-[1600px] 2xl:max-w-[1700px]">
                    <FourthProject />
                </div>
            </section>
            <section id="s" class="mt-20 px-4 sm:px-6 md:mt-32 lg:mt-40 lg:px-8 xl:px-10 2xl:px-12">
                <div class="mx-auto w-full max-w-[1500px] xl:max-w-[1600px] 2xl:max-w-[1700px]">
                    <SecondProject />
                </div>
            </section>

            <section id="t" class="mt-20 px-4 sm:px-6 md:mt-32 lg:mt-40 lg:px-8 xl:px-10 2xl:px-12">
                <div class="mx-auto w-full max-w-[1500px] xl:max-w-[1600px] 2xl:max-w-[1700px]">
                    <ThirdPtoject />
                </div>
            </section>
            <section id="more" class="mt-20 px-4 sm:px-6 md:mt-32 lg:mt-40 lg:px-8 xl:px-10 2xl:px-12">
                <div class="mx-auto w-full max-w-[1500px] xl:max-w-[1600px] 2xl:max-w-[1700px]">
                    <More />
                </div>
            </section>

            <section id="experiencies" class="mt-20 px-4 sm:px-6 md:mt-32 lg:mt-40 lg:px-8 xl:px-10 2xl:px-12">
                <div class="mx-auto w-full max-w-[1500px] xl:max-w-[1600px] 2xl:max-w-[1700px]">
                    <Exeperiencies />
                </div>
            </section>
            <section id="capabilities" class="mt-20 px-4 sm:px-6 md:mt-32 lg:mt-40 lg:px-8 xl:px-10 2xl:px-12">
                <div class="mx-auto w-full max-w-[1500px] xl:max-w-[1600px] 2xl:max-w-[1700px]">
                    <Skills />
                </div>
            </section>
            <section id="aboutme" class="mt-20 px-4 sm:px-6 md:mt-32 lg:mt-40 lg:px-8 xl:px-10 2xl:px-12">
                <div class="mx-auto w-full max-w-[1500px] xl:max-w-[1600px] 2xl:max-w-[1700px]">
                    <AboutMe />
                </div>
            </section>

            <section id="connect" class="my-20 px-4 sm:px-6 md:my-32 lg:my-60 lg:px-8 xl:px-10 2xl:px-12">
                <div class="mx-auto w-full max-w-[1500px] xl:max-w-[1600px] 2xl:max-w-[1700px]">
                    <Connect />
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.dot-grid-container {
    width: 100%;
    height: 500px;
    position: relative;
    overflow: hidden;
}
</style>
