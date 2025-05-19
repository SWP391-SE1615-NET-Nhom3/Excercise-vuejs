<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';

// See vite.config.ts for details about automatic imports
const route = useRoute()

useHead({
  title: () => route.meta.title || 'Magionet Project',
  meta: [
    {
      property: 'og:title',
      content: () => route.meta.title as string || '',
    },
    {
      name: 'twitter:title',
      content: () => route.meta.title as string || '',
    },
  ],
})
</script>
<template>
  <router-view />
</template>
