<script setup>
import { useLayout } from '@/layout/composables/layout';
import { onMounted } from 'vue';

const { toggleDarkMode, isDarkTheme } = useLayout();
onMounted(() => {
    toggleDarkMode();
});
</script>

<template>
    <div class="fixed flex gap-4 left-10 z-50 opacity-0">
        <Button type="button" @click="toggleDarkMode" rounded :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
    </div>
</template>
