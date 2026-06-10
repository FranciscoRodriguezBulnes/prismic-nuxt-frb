<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.ShowcaseSlice>());
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <heading class="text-balance text-center text-5xl font-medium md:text-7xl">
      <PrismicRichText :field="slice.primary.heading" />
    </heading>
    <article>
      <PrismicImage :field="slice.primary.image" />

      <!-- {{ slice.primary.icon }} -->
      <div>
        <PrismicRichText :field="slice.primary.subheading" />
        <div class="">
          <PrismicRichText :field="slice.primary.body" />
        </div>
        <PrismicLink :field="slice.primary.cta" class="buttonLink mt-6" />
      </div>
    </article>
  </section>
</template>
