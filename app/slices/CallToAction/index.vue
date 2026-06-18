<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.CallToActionSlice>());
</script>

<template>
  <Bounded :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="relative py-32 text-center font-medium md:py-40">
    <div class="animate-glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-sky-500/50 blur-[160px] filter" />
    <div class="glass-container rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 md:rounded-xl">
      <GlideIcon class="h-24 w-24" />
    </div>
    <heading class="font-medium mt-8 max-w-xl text-balance text-5xl text-center">
      <PrismicRichText :field="slice.primary.heading" />
    </heading>
    <div class="mt-6 flex gap-8 flex-wrap">
      <PrismicLink v-for="link in slice.primary.ctas" :key="link.key" :field="link" class="buttonLink" />
    </div>
  </Bounded>
</template>
