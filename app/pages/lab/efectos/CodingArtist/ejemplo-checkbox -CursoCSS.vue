app/pages/CodingArtist/ejemplo-checkbox.vue<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <label class="btn">
    <input type="checkbox" class="peer" />
    <i class="fa-solid fa-power-off icon"></i>
  </label>
</template>

<style scoped>
.btn {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #e0e0e0;

  /* Borde real, mismo color → invisible */
  border: 8px solid #e0e0e0;

  /* Sombras externas (estado inicial) */
  box-shadow:
    -12px -12px 20px rgba(255, 255, 255, 0.7),
     12px  12px 20px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.icon {
  font-size: 70px;
  color: #7a7a7a;
  transition: all 0.3s ease;
  pointer-events: none;
}

/* Icono verde al hacer checked */
.peer:checked + .icon {
  color: #15e38a;
}

/* ESTADO CHECKED: sombras externas + internas */
.btn:has(.peer:checked) {
  box-shadow:
    /* Sombras externas (se mantienen) */
    -12px -12px 20px rgba(255, 255, 255, 0.7),
     12px  12px 20px rgba(0, 0, 0, 0.15),

    /* Sombras internas (se añaden) */
    inset -12px -12px 20px rgba(255, 255, 255, 0.7),
    inset  12px  12px 20px rgba(0, 0, 0, 0.15);
}
</style>
