<script setup>
definePageMeta({
  layout: false
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-[#E8ECF1] p-8">

    <!-- Tarjeta neumórfica -->
    <div class="p-8 rounded-3xl"
         style="
           box-shadow:
             10px 10px 20px #B8BEC5,
             -10px -10px 20px #FFFFFF;
         ">
      <h1 class="text-2xl font-bold mb-4">Neumorfismo</h1>

      <button class="px-6 py-3 rounded-xl"
              style="
                box-shadow:
                  6px 6px 12px #B8BEC5,
                  -6px -6px 12px #FFFFFF;
              ">
        Botón
      </button>
    </div>

  </div>
</template>
