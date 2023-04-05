<script setup>
import AutoLink from "@theme-hope/components/AutoLink";
import FeaturePanel from "@theme-hope/components/FeaturePanel";
import MarkdownContent from "@theme-hope/components/MarkdownContent";
import Starfield from "./Starfield.vue";
import "vuepress-theme-hope/styles/home-page.scss";
import "./home-page.scss";
</script>

<template>
  <main class="home project" id="main-content">
    <Starfield />
    <div class="hero-info-wrapper">
      <div id="hero-info">
        <img class="hero-title-image" src="/text-only-light.svg" alt="PULSAR" />
        <h2>{{ $site.description }}</h2>
        <p class="actions">
          <AutoLink
            v-for="action in $frontmatter.actions"
            class="action-button"
            :class="action.type || 'default'"
            :config="action"
            no-external-link-icon
          />
        </p>
      </div>
      <img class="hero-logo" src="/logo-only-light.svg" alt="PULSAR" />
    </div>
    <FeaturePanel :items="$frontmatter.features" />
    <MarkdownContent />
    <hr />
    <div id="sponsors">
      <h1>Our Sponsors</h1>
      <h3>
        Thank you to the following organizations for sponsoring our project!
      </h3>
      <div class="links">
        <a href="https://tutanota.com/" target="_blank">
          <img src="/tutanota-logo.webp" alt="tutanota.com" />
        </a>
      </div>
    </div>
  </main>
</template>
