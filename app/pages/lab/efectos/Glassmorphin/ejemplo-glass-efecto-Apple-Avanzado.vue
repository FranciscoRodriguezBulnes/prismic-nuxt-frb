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
    class="min-h-screen bg-cover bg-center flex items-center justify-center"
    style="
      background-image: url(&quot;/assets/montañasverdes.jpg&quot;);
    "
  >
    <div
      class="relative w-96 p-8 rounded-3xl bg-white/10 backdrop-blur-3xl border-[10px] border-white/40 shadow-[0_0_40px_rgba(0,0,0,0.45),0_0_60px_rgba(255,255,255,0.25)] text-white text-xl font-semibold overflow-hidden"
    >
      <!-- Borde cristal interno -->
      <div
        class="absolute inset-0 rounded-3xl border-[3px] border-white/70 pointer-events-none"
      ></div>

      <!-- BRILLO ANIMADO -->
      <div
        class="absolute inset-0 rounded-3xl pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border-[3px] before:border-transparent before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:animate-[shine_3s_linear_infinite]"
      ></div>

      Glassmorphism
      potente
      😎
    </div>
  </div>
</template>

<style>
@keyframes shine {
  0% {
    transform: translateX(
      -150%
    );
  }
  50% {
    transform: translateX(
      150%
    );
  }
  100% {
    transform: translateX(
      150%
    );
  }
}
</style>
