<script setup>
    import HomeFeatures from '@theme-hope/components/HomeFeatures.js';
    import Starfield from './Starfield.vue'
    // vuepress-theme-hope does not export their scss files :( - Justin White <kyjus25>
    import './home-page.scss';
</script>

<template>
    <Starfield />
    <main class="home project" id="main-content" aria-labelledby="main-title">
        <HomeFeatures />
        <Content />
    </main>
    
</template>
