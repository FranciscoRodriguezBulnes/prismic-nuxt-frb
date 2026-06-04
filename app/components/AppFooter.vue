<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps<{
  settings?: Content.SettingsDocument;
}>();

// 1. Añadimos la función para que los botones vuelvan a rebotar aquí
const { jellyEffect } = useJelly();
</script>

<template>
  <footer class="p-4 md:p-6">
    <nav aria-label="Footer" class="flex flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row border-t border-gray-600">
      <NuxtLink to="/" class="z-50">
        <GlideLogo />
        <span class="sr-only">{{ settings?.data.site_title }} home page</span>
      </NuxtLink>

      <ul class="flex gap-6">
        <template v-for="link in settings?.data.navigation" :key="link.key">
          <!-- 2. Añadimos :class y @click.native para mantener la coherencia visual -->
          <PrismicLink :field="link" :class="{ buttonLink: link.variant === 'Button' }" class="inline-flex min-h-11 items-center" @click.native="link.variant === 'Button' && jellyEffect($event)" />
        </template>
      </ul>
    </nav>
  </footer>
</template>

<style scoped></style>
