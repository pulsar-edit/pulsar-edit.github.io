<script setup>
    import HomeFeatures from '@theme-hope/components/HomeFeatures.js';
    import { usePageFrontmatter, useSiteData } from "@vuepress/client";
    import Starfield from './Starfield.vue'
    // vuepress-theme-hope does not export their scss files :( - Justin White <kyjus25>
    import './home-page.scss';
    const { actions } = usePageFrontmatter().value;
    const { description } = useSiteData().value;
</script>

<template>
    <Starfield />
    <div id="hero">
        <div>
            <img src="/text-only-light.svg">
            <h1>{{description}}</h1>
            <a
                v-for="{text, link, type} in actions"
                :href="link"
                :class="`nav-link action-button ${type || 'default'}`"
            >
                {{text}}
            </a>
        </div>
        <img src="/logo-only-light.svg">
    </div>
    <main class="home project" id="main-content" aria-labelledby="main-title">
        <HomeFeatures />
        <Content />
        <hr>
        <div id="sponsors">
          <h1>Our Sponsors</h1>
          <h3>Thank you to the following organizations for sponsoring our project!</h3>
          <div class="links">
            <a href="https://tutanota.com/" target="_blank">
              <img src="/tutanota-logo.webp" alt="tutanota.com">
            </a>
          </div>
        </div>
    </main>

</template>
