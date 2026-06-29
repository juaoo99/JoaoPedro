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
    <div style="width: 100%; position: relative" class="mx-0 p-0">
        <div id="home" class="landing-wrapper overflow-hidden absolute w-full">
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
            <div style="width: 100%; height: 100dvh" class="relative flex justify-center items-center">
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

                <div id="first" class="relative z-10">
                    <FirstSection />
                </div>
            </div>
             
            <div id="features" class="mt-20 md:mt-40">
                <FirstProject />
            </div>
            <div id="f" class="mt-20 md:mt-40">
                <FourthProject />
            </div>
            <div id="s" class="mt-20 md:mt-40">
                <SecondProject />
            </div>

            <div id="t" class="mt-20 md:mt-40">
                <ThirdPtoject />
            </div>
            <div id="more" class="mt-20 md:mt-40">
                <More />
            </div>
            
            <div id="experiencies" class="mt-20 md:mt-40">
                <Exeperiencies />
            </div>
            <div id="capabilities" class="mt-20 md:mt-40">
                <Skills />
            </div>
            <div id="aboutme" class="mt-20 md:mt-40">
                <AboutMe />
            </div>

            <div id="connect" class="lg:my-60 my-40">
                <Connect />
            </div>
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
