<script
  setup
  lang="ts"
>
import type { Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.HeroSlice>(),
);
</script>

<template>
  <Bounded
    :data-slice-type="
      slice.slice_type
    "
    :data-slice-variation="
      slice.variation
    "
  >
    <div
      class="text-center relative"
    >
      <h1
        class="mx-auto max-w-3xl text-balance text-5xl font-medium"
      >
        <PrismicText
          :field="
            slice
              .primary
              .heading
          "
        />
      </h1>
      <p
        class="mx-auto mt-6 max-w-md text-balance text-gray-300"
      >
        <PrismicText
          :field="
            slice
              .primary
              .body
          "
        />
      </p>
      <div
        class="flex flex-wrap gap-8 justify-center mt-8"
      >
        <PrismicLink
          v-for="cta in slice
            .primary
            .ctas"
          :key="
            cta.key
          "
          class="buttonLink"
          :field="
            cta
          "
        />
      </div>
      <div
        class="glass-container mt-16 w-fit"
      >
        <div
          class="absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-sky-700/50 blur-3xl md:blur-[120px] filter mix-blend-screen"
        />
        <PrismicImage
          :field="
            slice
              .primary
              .image
          "
          class="rounded-lg"
        />
      </div>
    </div>
  </Bounded>
</template>
