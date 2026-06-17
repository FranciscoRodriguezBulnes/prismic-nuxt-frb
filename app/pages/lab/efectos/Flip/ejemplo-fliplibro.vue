<script setup>
definePageMeta({
  layout: false,
});

// Cargar todas las imágenes desde /assets/libros
const archivos = Object.entries(
  import.meta.glob("@/assets/libros/*.{png,jpg,jpeg,webp,gif}", {
    eager: true,
    import: "default",
  }),
);

// Obtener nombre del archivo sin extensión
const getNombre = (ruta) => {
  return ruta
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");
};

// Generar un lorem ipsum distinto para cada tarjeta
const generarLorem = () => {
  const frases = [
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Suspendisse potenti vivamus luctus eros aliquet.",
    "Curabitur blandit tempus porttitor integer posuere erat.",
    "Donec ullamcorper nulla non metus auctor fringilla.",
    "Etiam porta sem malesuada magna mollis euismod.",
    "Aenean lacinia bibendum nulla sed consectetur.",
    "Praesent commodo cursus magna vel scelerisque nisl consectetur.",
  ];

  return frases[Math.floor(Math.random() * frases.length)];
};
</script>

<template>
  <div class="flex flex-wrap gap-10 p-10 justify-center">

    <div v-for="([ruta, url], i) in archivos" :key="i">

      <!-- CARD -->
      <div
        class="group relative w-[300px] h-[400px] bg-white transition-all duration-[1000ms]
               [transform-style:preserve-3d] [transform:perspective(2000px)]
               shadow-[inset_300px_0_50px_rgba(0,0,0,0.5)]
               hover:[transform:perspective(2000px)_rotate(-10deg)]
               hover:shadow-[inset_20px_0_50px_rgba(0,0,0,0.5)]">

        <!-- TAPA (imagen) -->
        <div
          class="absolute inset-0 border border-black z-[11]
                 [transform-origin:left] transition-all duration-[1000ms]
                 group-hover:[transform:rotateY(-135deg)]">
          <img :src="url" class="absolute inset-0 w-full h-full object-cover" />
        </div>

        <!-- INTERIOR (texto) -->
        <div class="absolute inset-0 p-5 text-black">
          <h2 class="text-xl font-bold mb-2">{{ getNombre(ruta) }}</h2>
          <p class="text-sm opacity-90">{{ generarLorem() }}</p>
        </div>

      </div>
      <!-- END CARD -->

    </div>

  </div>
</template>

