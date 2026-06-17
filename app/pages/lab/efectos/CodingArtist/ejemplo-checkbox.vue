<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="dark-mode flex justify-center items-center h-screen">
    <label ref="btn" class="btn w-48 h-48 rounded-full bg-[#e0e0e0] border-[8px] border-[#e0e0e0] flex items-center justify-center cursor-pointer transition-all duration-300 relative">
      <input type="checkbox" class="peer hidden" />
      <i class="fa-solid fa-power-off icon text-6xl text-[#7a7a7a] absolute pointer-events-none transition-all duration-300 peer-checked:text-[#15e38a]"></i>
    </label>
  </div>
</template>

<style scoped>
.dark-mode {
  background: #1a1a1a;
}
.dark-mode .btn {
  background: linear-gradient(145deg, #1b1b1b, #1f1f1f);
  position: relative;
  overflow: hidden;
  border: 1px solid #141414;
}

.dark-mode .btn::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 3px);
  pointer-events: none;
  mix-blend-mode: overlay;
}

.dark-mode .btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  mix-blend-mode: soft-light;
  background:
    /* Ruido óptico suave */
    radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.05),
      rgba(0, 0, 0, 0) 60%
    ),
    /* Reflejo lateral del titanio */
    linear-gradient(
      to right,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0) 40%
    );
}


.dark-mode .btn:hover {
  box-shadow:
    6px 6px 12px rgba(0, 0, 0, 0.75),
    -6px -6px 12px rgba(255, 255, 255, 0.06);
}

.dark-mode .btn:active {
  transform: scale(0.97);
  box-shadow:
    3px 3px 6px rgba(0, 0, 0, 0.65),
    -3px -3px 6px rgba(255, 255, 255, 0.03);
}

.dark-mode .btn:has(.peer:checked) {
  box-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.7),
    -4px -4px 8px rgba(255, 255, 255, 0.04),
    inset 4px 4px 8px rgba(0, 0, 0, 0.7),
    inset -4px -4px 8px rgba(255, 255, 255, 0.04),
    0 0 30px rgba(21, 227, 138, 0.55);
}

.dark-mode .peer:checked + .icon {
  color: #15e38a;
  filter: drop-shadow(0 0 10px rgba(21, 227, 138, 0.7));
}

/* Sombras externas (estado inicial) */
.btn {
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
</style>
