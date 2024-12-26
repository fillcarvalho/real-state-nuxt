<template>
  <div>
    <vue-head></vue-head>
    <!-- main body start -->
    <main>
      <Nuxt/>
      <vue-blog-list></vue-blog-list>
    </main>
    <vue-footer/>
  </div>
</template>
<script setup lang="ts">
import VueHead from "~/components/VueHead.vue";
import VueFooter from "~/components/VueFooter.vue";
</script>
