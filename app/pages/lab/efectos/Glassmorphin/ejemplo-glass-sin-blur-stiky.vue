<script setup>
definePageMeta({
  layout: false
})
</script>

<template>
  <div class="relative min-h-screen overflow-y-auto">

    <!-- Fondo que hace scroll -->
    <div
      class="min-h-[200vh] bg-cover bg-center"
      style="background-image: url('/assets/montañas.jpg')"
    ></div>

    <!-- Mensaje fijo -->
    <div
      class="fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2
             w-96 p-8 rounded-3xl
             bg-white/10
             border-[1px] border-white/25
             shadow-[0_30px_80px_rgba(0,0,0,0.55)]
             text-white text-xl font-semibold
             text-center
             pointer-events-none"
    >
      Mensaje fijo mientras haces scroll 😎
    </div>

  </div>
</template>

