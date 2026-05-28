<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="contenedor">
    <div class="body">
      <div class="card">
        <div class="face front">
          <img src="/assets/03-Japón.jpeg" alt="" class="" />
          <h3 class="font-bold">Japón</h3>
        </div>
        <div class="face back">
          <h3 class="font-bold">Japón</h3>
          <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora autem at officia error adipisci accusantium sed repudiandae id soluta beatae laborum, ipsum aperiam nostrum?
          </p>
          <div class="link">
            <a href="#" class="text-blue-600 underline">Detalles</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face front">
          <img src="/assets/02-Perú.jpeg" alt="" class="" />
          <h3 class="font-bold">Perú</h3>
        </div>
        <div class="face back">
          <h3 class="font-bold">Perú</h3>
          <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora autem at officia error adipisci accusantium sed repudiandae id soluta beatae laborum, ipsum aperiam nostrum?
          </p>
          <div class="link">
            <a href="#" class="text-blue-600 underline">Detalles</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face front">
          <img src="/assets/01-España.jpeg" alt="" class="" />
          <h3 class="font-bold">España</h3>
        </div>
        <div class="face back">
          <h3 class="font-bold">España</h3>
          <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora autem at officia error adipisci accusantium sed repudiandae id soluta beatae laborum, ipsum aperiam nostrum?
          </p>
          <div class="link">
            <a href="#" class="text-blue-600 underline">Detalles</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  color: black;
}

.body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  background: rgb(9, 74, 136);
}

.card {
  position: relative;
  width: 300px;
  height: 350px;
  margin: 20px;
}
.card .face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
}

.card .front {
  transform: perspective(600px) rotateY(0deg);
  box-shadow: 0px 10px 10px #000;
}

.card .front img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card .front h3 {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
}

.card .back {
  transform: perspective(600px) rotateY(180deg);
  background: rgb(3, 35, 54);
  padding: 15px;
  color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 5px 10px #000;
}

.card .back .link {
  border-top: solid 1px #f3f3f3;
  height: 50px;
  line-height: 50px;
}

.card .back .link a {
  color: #f3f3f3;
}

.card .back h3 {
  font-size: 30px;
  margin-top: 20px;
  letter-spacing: 2px;
}
.card .back p {
  letter-spacing: 1px;
}

.card:hover .front {
  transform: perspective(600px) rotateY(180deg);
  /* transition-duration: 1000ms; */
  transition: transform 1.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.card:hover .back {
  transform: perspective(600px) rotateY(0deg);
  /* transition-duration: 1000ms; */
  transition: transform 1.6s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
