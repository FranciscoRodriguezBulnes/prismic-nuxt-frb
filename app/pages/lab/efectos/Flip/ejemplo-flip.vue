<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="card group">
      <div class="card-inner">
        <div class="card-face card-front">
          <img src="/assets/03-Japón.jpeg" class="w-full h-full object-cover" />
          <h3 class="absolute bottom-0 w-full text-center text-white bg-black/40 py-2 font-bold">Japón</h3>
        </div>

        <div class="card-face card-back font-melon">
          <h3 class="text-2xl font-bold mb-4">Japón</h3>
          <p class="text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" class="text-blue-400 underline">Detalles</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
