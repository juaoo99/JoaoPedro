<script setup lang="ts">
import { computed } from 'vue';

interface GradientTextProps {
    text: string;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
}

const props = withDefaults(defineProps<GradientTextProps>(), {
    text: '',
    className: '',
    colors: () => ['#ffaa40', '#9c40ff', '#ffaa40'],
    animationSpeed: 8,
    showBorder: false
});

const gradientStyle = computed(() => ({
    backgroundImage: `linear-gradient(to right, ${props.colors.join(', ')})`,
    animationDuration: `${props.animationSpeed}s`,
    backgroundSize: '300% 100%',
    '--animation-duration': `${props.animationSpeed}s`
}));

const textStyle = computed(() => ({
    ...gradientStyle.value,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text'
}));
</script>

<template>
    <div :class="`${className}`">
        <div class="z-2 text-transparent bg-cover animate-gradient" :style="textStyle">
            {{ text }}
        </div>
    </div>
</template>

<style scoped>
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.animate-gradient {
    animation: gradient var(--animation-duration, 8s) linear infinite;
}
</style>
