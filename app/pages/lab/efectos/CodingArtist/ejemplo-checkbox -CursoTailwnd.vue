app/pages/CodingArtist/ejemplo-checkbox.vue
<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <label class="btn w-48 h-48 rounded-full bg-[#e0e0e0] border-[8px] border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-all duration-300 relative">
    <input type="checkbox" class="peer hidden" />

    <i class="fa-solid fa-power-off icon text-6xl text-[#7a7a7a] absolute pointer-events-none transition-all duration-300 peer-checked:text-[#15e38a]"></i>
  </label>
</template>

<style scoped>
/* Sombras externas (estado inicial) */
.btn {
  box-shadow:
    -12px -12px 20px rgba(255, 255, 255, 0.7),
    12px 12px 20px rgba(0, 0, 0, 0.15);
}

/* Sombras externas + internas (estado checked) */
.btn:has(.peer:checked) {
  box-shadow:
    /* externas */
    -12px -12px 20px rgba(255, 255, 255, 0.7),
    12px 12px 20px rgba(0, 0, 0, 0.15),
    /* internas */ inset -12px -12px 20px rgba(255, 255, 255, 0.7),
    inset 12px 12px 20px rgba(0, 0, 0, 0.15);
}
</style>
