<script setup lang="ts">
import { asText } from "@prismicio/client";
import { components } from "~/slices";

const { client } = usePrismic();
const { data: page } = await useAsyncData("index", () =>
  client.getByUID("page", "home"),
);

useHead({
  title: asText(page.value?.data.title),
});
</script>

<template>
  <main>
    <!-- <div class="text-green-600 text-xl font-bold">Tailwind funciona</div> -->

    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </main>
</template>
