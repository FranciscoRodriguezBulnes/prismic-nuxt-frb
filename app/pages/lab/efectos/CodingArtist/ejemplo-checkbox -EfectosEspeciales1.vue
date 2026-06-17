app/pages/CodingArtist/ejemplo-checkbox.vue
<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <body class="flex justify-center items-center h-screen bg-[#ececec]">
    <label class="btn w-48 h-48 rounded-full bg-[#e0e0e0] border-[8px] border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-all duration-300 relative">
      <input type="checkbox" class="peer hidden" />
      <i class="fa-solid fa-power-off icon text-6xl text-[#7a7a7a] absolute pointer-events-none transition-all duration-300 peer-checked:text-[#15e38a]"></i>
    </label>
  </body>
</template>

<style scoped>
/* Sombras externas (estado inicial) */
.btn {
  transition: transform 0.2s cubic-bezier(0.25, 1.5, 0.5, 1);
  box-shadow:
    -12px -12px 20px rgba(255, 255, 255, 0.7),
    12px 12px 20px rgba(0, 0, 0, 0.15);
}

.btn:active {
  transform: scale(0.96);
  box-shadow:
    -6px -6px 12px rgba(255, 255, 255, 0.6),
    6px 6px 12px rgba(0, 0, 0, 0.12);
}

.btn:hover {
  box-shadow:
    -14px -14px 22px rgba(255, 255, 255, 0.75),
    14px 14px 22px rgba(0, 0, 0, 0.18);
}

/* Sombras externas + internas (estado checked) */
.btn:has(.peer:checked) {
  box-shadow:
    -12px -12px 20px rgba(255, 255, 255, 0.7),
    12px 12px 20px rgba(0, 0, 0, 0.15),
    inset -12px -12px 20px rgba(255, 255, 255, 0.7),
    inset 12px 12px 20px rgba(0, 0, 0, 0.15),
    0 0 25px rgba(21, 227, 138, 0.45); /* glow verde */
}

.peer:checked + .icon {
  color: #15e38a;
  filter: drop-shadow(0 0 6px rgba(21, 227, 138, 0.4));
  transition: color 0.25s ease, filter 0.25s ease;
}

</style>
