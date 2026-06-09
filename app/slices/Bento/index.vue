<script setup lang="ts">
import { asText } from "@prismicio/helpers";

import type { Content } from "@prismicio/client";
import { RichTextGlideText, RichTextHeading2 } from "#components";
import Bounded from "~/components/Bounded.vue";

defineProps(getSliceComponentProps<Content.BentoSlice>());
</script>

<template>
  <Bounded :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <PrismicRichText :field="slice.primary.heading" :components="{ heading2: RichTextHeading2, em: RichTextGlideText }" />
    <PrismicRichText :field="slice.primary.body" class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300" wrapper="div" />

    <div class="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
      <article
        v-for="item in slice.primary.bento"
        :key="asText(item.title)"
        class="glass-container grid grid-rows gap-4 rounded-lg bg-gray-950/60 p-4"
        :class="item.is_wide ? 'md:col-span-2' : 'md:col-span-1'"
      >
        <h3 class="text-2xl">
          <PrismicText :field="item.title" />
        </h3>

        <!-- <PrismicRichText :field="item.title" wrapper="div" class="text-2xl" /> -->

        <div class="max-w-md text-balance text-gray-300">
          <PrismicRichText :field="item.body" />
        </div>
        <PrismicImage :field="item.image" class="max-h-36 w-auto" />
        <!-- {{ item.is_wide }} -->
      </article>
    </div>
  </Bounded>
</template>
