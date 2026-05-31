<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps<{
  settings?: Content.SettingsDocument;
}>();
const isOpen = ref(false);

// function jellyEffect(event: Event) {
//   const el = event.currentTarget as HTMLElement
//   el.classList.add('jelly')
//   setTimeout(() => el.classList.remove('jelly'), 500)
// }
// ¡Una sola línea y ya tienes la función lista para usar en el template!
const { jellyEffect } = useJelly();

</script>

<template>
  <header class="p-4 md:p-6">
    <nav aria-label="Main" class="mx-auto max-w-6xl flex flex-col justify-between py-2 md:flex-row md:items-center">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="z-50" @click="isOpen = false">
          <GlideLogo />
          <span class="sr-only">{{ settings?.data.site_title }} home page</span>
        </NuxtLink>
        <button class="block md:hidden p-2 text-3xl" :aria-expanded="isOpen" @click="isOpen = true">
          <Icon name="ph:list-bold" />
        </button>
      </div>

      <!-- Mobile Navigation -->

      <div
        class="md:hidden fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out will-change-transform"
        :class="isOpen ? 'translate-x-0 ' : 'translate-x-full'"
      >
        <button class="block p-2 text-3xl" @click="isOpen = false">
          <Icon name="ph:x-bold" />
        </button>
        <ul class="grid justify-items-end gap-6">
          <template v-for="link in settings?.data.navigation" :key="link.key">
            <PrismicLink :field="link" :class="{ buttonLink: link.variant === 'Button' }" class="block min-h-11 px-3 text-3xl first:mt-8" />
          </template>
        </ul>
      </div>

      <ul class="hidden md:flex gap-6">
        <template v-for="link in settings?.data.navigation" :key="link.key">
          <PrismicLink :field="link" :class="{ buttonLink: link.variant === 'Button' }" class="inline-flex min-h-11 items-center"
            @click.native="link.variant === 'Button' && jellyEffect($event)"
          />
        </template>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
