<script setup>
import { ref } from "vue";

definePageMeta({ layout: false });

const flipped = ref(false);
const lightX = ref(50);
const lightY = ref(50);

function updateLight(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  lightX.value = (x / rect.width) * 100;
  lightY.value = (y / rect.height) * 100;
}
</script>

<template>
  <div class="w-full h-screen bg-neutral-900 flex items-center justify-center">
    <div
      class="w-72 h-48 [perspective:1200px]"
      @mousemove="updateLight"
    >
      <div
        class="relative w-full h-full duration-700 cursor-pointer
               [transform-style:preserve-3d]
               [transition-timing-function:cubic-bezier(0.4,0.2,0.2,1)]"
        :class="{ '[transform:rotateY(180deg)]': flipped }"
        @click="flipped = !flipped"
      >
        <!-- FRONT -->
        <div
          class="absolute inset-0 rounded-2xl shadow-2xl bg-neutral-800 text-white
                 flex items-center justify-center text-2xl font-semibold
                 [backface-visibility:hidden]"
          :style="{
            background: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,0.15), transparent 60%)`
          }"
        >
          FRONT
        </div>

        <!-- BACK -->
        <div
          class="absolute inset-0 rounded-2xl shadow-2xl bg-neutral-700 text-white
                 flex items-center justify-center text-2xl font-semibold
                 [transform:rotateY(180deg)]
                 [backface-visibility:hidden]"
          :style="{
            background: `radial-gradient(circle at ${100-lightX}% ${lightY}%, rgba(255,255,255,0.15), transparent 60%)`
          }"
        >
          BACK
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Nada extra necesario */
</style>