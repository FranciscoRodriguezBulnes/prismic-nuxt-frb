<script
  setup
>
definePageMeta(
  {
    layout: false,
  },
);
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-[#e0e0e0]"
  >
    <button
      class="px-6 py-4 rounded-xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] active:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition-all duration-800 flex items-center gap-3"
    >
      <i
        class="fa-solid fa-heart text-red-500 text-xl"
      ></i>
      <span
        class="font-medium"
        >Me
        gusta</span
      >
    </button>
  </div>
</template>
