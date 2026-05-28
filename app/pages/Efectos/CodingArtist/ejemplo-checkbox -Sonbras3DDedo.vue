<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  layout: false,
});

const btn = ref(null);

onMounted(() => {
  const el = btn.value;
  console.log("BTN:", el);
  const updateShadows = (x, y) => {
    // Activamos modo dinámico (desactiva hover/active/checked)
    el.classList.add("dynamic");

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = (x - cx) / 20;
    const dy = (y - cy) / 20;

    el.style.boxShadow = `
      ${-12 - dx}px ${-12 - dy}px 20px rgba(255,255,255,0.7),
      ${12 - dx}px ${12 - dy}px 20px rgba(0,0,0,0.15),
      inset ${-12 - dx}px ${-12 - dy}px 20px rgba(255,255,255,0.7),
      inset ${12 - dx}px ${12 - dy}px 20px rgba(0,0,0,0.15)
    `;
  };

  el.addEventListener("mousemove", (e) => updateShadows(e.clientX, e.clientY));
  el.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    updateShadows(t.clientX, t.clientY);
  });
});
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-[#ececec]">
    <label ref="btn" class="btn w-48 h-48 rounded-full bg-[#e0e0e0] border-[8px] border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-all duration-300 relative">
      <input type="checkbox" class="peer hidden" />

      <i class="fa-solid fa-power-off icon text-6xl text-[#7a7a7a] absolute pointer-events-none transition-all duration-300 peer-checked:text-[#15e38a]"></i>
    </label>
  </div>
</template>

<style scoped>
/* ------------------------------ */
/* SOMBRAS BASE                   */
/* ------------------------------ */
.btn {
  transition:
    transform 0.2s cubic-bezier(0.25, 1.5, 0.5, 1),
    box-shadow 0.15s ease;
  box-shadow:
    -12px -12px 20px rgba(255, 255, 255, 0.7),
    12px 12px 20px rgba(0, 0, 0, 0.15);
}

/* ------------------------------ */
/* PULSACIÓN FÍSICA               */
/* ------------------------------ */
.btn:active {
  transform: scale(0.96);
  box-shadow:
    -6px -6px 12px rgba(255, 255, 255, 0.6),
    6px 6px 12px rgba(0, 0, 0, 0.12);
}

/* ------------------------------ */
/* HOVER SUAVE ESTILO APPLE       */
/* ------------------------------ */
.btn:hover {
  box-shadow:
    -14px -14px 22px rgba(255, 255, 255, 0.75),
    14px 14px 22px rgba(0, 0, 0, 0.18);
}

/* ------------------------------ */
/* ESTADO CHECKED + GLOW VERDE    */
/* ------------------------------ */
.btn:has(.peer:checked) {
  box-shadow:
    -12px -12px 20px rgba(255, 255, 255, 0.7),
    12px 12px 20px rgba(0, 0, 0, 0.15),
    inset -12px -12px 20px rgba(255, 255, 255, 0.7),
    inset 12px 12px 20px rgba(0, 0, 0, 0.15),
    0 0 25px rgba(21, 227, 138, 0.45);
}

/* ------------------------------ */
/* ENCENDIDO GRADUAL DEL ICONO    */
/* ------------------------------ */
.peer:checked + .icon {
  filter: drop-shadow(0 0 6px rgba(21, 227, 138, 0.4));
  transition:
    color 0.25s ease,
    filter 0.25s ease;
}

/* ------------------------------ */
/* MODO DINÁMICO (3D REAL)        */
/* Desactiva hover/active/checked */
/* ------------------------------ */
.btn.dynamic:hover,
.btn.dynamic:active {
  box-shadow: inherit !important;
}
</style>
