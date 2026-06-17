<script setup>
import { ref } from "vue";

definePageMeta({ layout: false });

const rotateX = ref(0);
const rotateY = ref(0);
const glowX = ref(50);
const glowY = ref(50);

function handleMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const midX = rect.width / 2;
  const midY = rect.height / 2;

  rotateY.value = ((x - midX) / midX) * 12; // inclinación horizontal
  rotateX.value = -((y - midY) / midY) * 12; // inclinación vertical

  glowX.value = (x / rect.width) * 100;
  glowY.value = (y / rect.height) * 100;
}

function reset() {
  rotateX.value = 0;
  rotateY.value = 0;
}
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center bg-neutral-900">
    <div
      class="w-80 h-48 rounded-2xl shadow-2xl bg-neutral-800 relative overflow-hidden
             transition-transform duration-300 ease-out
             [transform-style:preserve-3d]"
      @mousemove="handleMove"
      @mouseleave="reset"
      :style="{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }"
    >
      <!-- Glow dinámico -->
      <div
        class="absolute inset-0 pointer-events-none"
        :style="{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.25), transparent 60%)`
        }"
      ></div>

      <!-- Contenido -->
      <div class="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
        3D CARD
      </div>
    </div>
  </div>
</template>

<style>
/* Nada extra necesario */
</style>