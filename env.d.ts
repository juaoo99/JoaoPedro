// src/env.d.ts
/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

// Esta linha ajuda o TS a entender a estrutura de um componente Vue
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
