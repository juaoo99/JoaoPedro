<script setup lang="ts">
import { computed } from 'vue';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const props = withDefaults(defineProps<ShinyTextProps>(), {
    text: '',
    disabled: false,
    speed: 5,
    className: ''
});

const animationDuration = computed(() => `${props.speed}s`);
</script>

<template>
    <p
        :class="`text-[#C4C4C4A4] font-light text-lg text-pretty mt-2 px-5 lg:px-0 bg-clip-text inline-block ${!props.disabled ? 'animate-shine' : ''} ${props.className}`"
        :style="{
            backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255) 50%, rgba(255, 255, 255, 0) 60%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            animationDuration: animationDuration
        }"
    >
        {{ props.text }}
    </p>
</template>

<style scoped>
@keyframes shine {
    0% {
        background-position: 100%;
    }
    100% {
        background-position: -100%;
    }
}

.animate-shine {
    animation: shine 5s linear infinite;
}
</style>
