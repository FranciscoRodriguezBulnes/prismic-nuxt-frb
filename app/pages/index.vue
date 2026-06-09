<script setup lang="ts">
import { asText, asImageSrc } from "@prismicio/client";
import { components } from "~/slices";

const { client } = usePrismic();
const { data: page } = await useAsyncData("index", () => client.getByUID("page", "home"));

// useHead({
//   title: asText(page.value?.data.title),
// });

useSeoMeta({
  title: page.value?.data.meta_title,
  ogTitle: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
  ogDescription: page.value?.data.meta_description,
  ogImage: computed(() => asImageSrc(page.value?.data.meta_image)),
});
</script>

<template>
  <main>
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </main>
</template>
