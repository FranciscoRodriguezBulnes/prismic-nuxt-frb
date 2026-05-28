<script setup>
import { ref } from "vue";

definePageMeta({ layout: false });

const tiltX = ref(0);
const tiltY = ref(0);
const glowX = ref(50);
const glowY = ref(50);

function move(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const midX = rect.width / 2;
  const midY = rect.height / 2;

  tiltY.value = ((x - midX) / midX) * 10;
  tiltX.value = -((y - midY) / midY) * 10;

  glowX.value = (x / rect.width) * 100;
  glowY.value = (y / rect.height) * 100;
}

function reset() {
  tiltX.value = 0;
  tiltY.value = 0;
}
</script>

<template>
  <div class="w-full h-screen bg-neutral-900 flex items-center justify-center">
    <div class="w-80 h-80 rounded-3xl relative overflow-hidden cursor-pointer [perspective:1200px]" @mousemove="move" @mouseleave="reset">
      <div
        class="absolute inset-0 rounded-3xl transition-transform duration-300 [transform-style:preserve-3d]"
        :style="{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        }"
      >
        <!-- Capa 1: fondo holográfico -->
        <div
          class="absolute inset-0 rounded-3xl opacity-70"
          :style="{
            background: `conic-gradient(
              from 180deg at ${glowX}% ${glowY}%,
              #ff00ff,
              #00ffff,
              #ffea00,
              #ff00ff
            )`,
          }"
        ></div>

        <!-- Capa 2: refracción interna -->
        <div
          class="absolute inset-0 rounded-3xl mix-blend-screen opacity-60 [transform:translateZ(40px)]"
          :style="{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.4), transparent 60%)`,
          }"
        ></div>

        <!-- Capa 3: líneas holográficas -->
        <div
          class="absolute inset-0 rounded-3xl opacity-40 [transform:translateZ(80px)]"
          style="background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 2px, transparent 2px, transparent 6px)"
        ></div>

        <!-- Contenido -->
        <div class="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold [transform:translateZ(120px)]">HOLO</div>
      </div>
    </div>
  </div>
</template>

<style>
/* Nada extra necesario */
</style>
