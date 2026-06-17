<script setup>
import { ref } from "vue";

const flipped = ref(false);

definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="w-64 h-40 mx-auto mt-10 [perspective:1000px]">
    <div class="relative w-full h-full duration-700 [transform-style:preserve-3d]" :class="{ '[transform:rotateY(180deg)]': flipped }" @click="flipped = !flipped">
      <!-- FRONT -->
      <div class="absolute inset-0 bg-white rounded-xl shadow-xl flex items-center justify-center text-xl font-semibold [backface-visibility:hidden]">FRONT</div>

      <!-- BACK -->
      <div class="absolute inset-0 bg-black text-white rounded-xl shadow-xl flex items-center justify-center text-xl font-semibold [transform:rotateY(180deg)] [backface-visibility:hidden]">BACK</div>
    </div>
  </div>
</template>

<style>
/* No Tailwind equivalent aún para esto */
</style>
