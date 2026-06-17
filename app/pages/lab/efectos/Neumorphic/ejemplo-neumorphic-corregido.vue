<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <body class="flex justify-center items-center h-screen">
    <div class="app-container py-24 px-20">
      <div class="flex flex-row justify-between">
        <div class="title text-6xl font-bold w-20 h-28 effect rounded-3xl flex justify-center items-center">Ui</div>
        <form action="" class="flex flex-col h-28 bg-red-200 py-4 justify-between">
          <label for="option-1" class="effect rounded-full">
            <input id="option-1" type="radio" name="selector" checked />
            <span class=""></span>
          </label>
          <label for="option-2" class="effect rounded-full">
            <input id="option-2" type="radio" name="selector" class="" />
            <span class=""></span>
          </label>
        </form>
        <div class="flex flex-col bg-green-300 h-28 justify-between py-4">
          <label>
            <div class="switch">
              <input type="checkbox" class="" />
              <div class="switch-bg"></div>
              <div class="switch-indicator"></div>
              <span class=""></span>
            </div>
          </label>
          <label>
            <div class="switch">
              <input type="checkbox" class="" />
              <div class="switch-bg"></div>
              <div class="switch-indicator"></div>
              <span class=""></span>
            </div>
          </label>
        </div>
        <div class="flex flex-col w-52 h-32 bg-blue-500 justify-between">
          <div class="flex flex-row justify-between">
            <div class="w-14 h-12 effect flex justify-center items-center rounded-xl app-color-gray">
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="w-14 h-12 effect flex justify-center items-center rounded-xl app-color-gray">
              <i class="fa-solid fa-pause"></i>
            </div>
            <div class="w-14 h-12 effect flex justify-center items-center rounded-xl app-color-gray">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div class="flex flex-row py-3 px-5 effect justify-between items-center rounded-xl">
            <span class="app-color-gray">Select</span>
            <i class="fa-solid fa-chevron-down app-color-gray"></i>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-6">
        <div class="flex flex-row w-t2 app-color-gray rounded-3xl effect-inner py-3 px-6 items-center">
          <i class="fa-solid fa-magnifying-glass"> </i>
          <input type="text" placeholder="Search for ..." class="ml-2 app-color-gray" />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col w-1/3 bg-red-300">
          <button class="effect py-2 rounded-3xl">Buttom</button>
          <div class="flex flex-row justify-between mt-6">
            <div class="w-14 h-12 flex effect rounded-xl justify-center items-center">
              <i class="fa-solid fa-heart app-color-pink"></i>
            </div>
            <div class="w-14 h-12 flex effect rounded-xl justify-center items-center">
              <i class="fa-solid fa-comment app-color-blue-1"></i>
            </div>
            <div class="w-14 h-12 flex effect rounded-xl justify-center items-center">
              <i class="fa-solid fa-bookmark app-color-blue-2"></i>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <button class="effect py-2 rounded-3xl w-32 app-color-gray">
              <i class="fa-solid fa-share-nodes mr-1"></i>
              Share
            </button>
            <button class="effect py-2 rounded-3xl w-32 app-color-gray">
              <i class="fa-solid fa-plus mr-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<style scoped>
body {
  background: #f9f9f9;
}

.app-container {
  width: 800px;
  height: 600px;
  background: #e0e4e7;
}

.effect {
  background: #e0e4e7;
  box-shadow:
    5px 5px 13px #b8c7dd,
    -5px -5px 13px #ffffff;
}

.effect-inner {
  background: #e0e4e7;
  box-shadow:
    inset 4px 3px 3px 0px #b8c7dd,
    inset -2px -4px 4px 0px #fff;
}

.title {
  color: rgba(236, 126, 218, 0.85);
  text-shadow:
    1px 1px 2px #e0e4e7,
    0 0 0 black,
    1px 4px 6px #def;
}

input[type="radio"] {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="radio"]:checked {
  border-radius: 50%;
  background: #e0e4e7;
  box-shadow:
    4px 4px 8px #b8c7dd,
    -4px -4px 8px #ffffff;
}

input[type="radio"]:checked::before {
  content: "";
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background: #44dbe5;
}

input[type="checkbox"] {
  display: none;
}

input[type="text"] {
  background: none;
}

input[type="text"]:focus {
  outline: none;
}

.switch {
  position: relative;
  cursor: pointer;
}

.switch-bg {
  overflow: visible;
  height: 20px;
  width: 55px;
  border-radius: 15px;
  background: #e0e4e7;
  box-shadow:
    inset 7px 2px 2px 0px #c2cad5,
    inset -3px -2px 2px 0px #f7f7f7;
}

.switch-indicator {
  top: -4px;
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #e0e4e7;
  box-shadow:
    4px 4px 8px #b8c7dd,
    -4px -4px 8px #ffffff;
  transform: translateX(0%);
}

input[type="checkbox"]:checked ~ .switch-indicator {
  transform: translateX(85%);
  box-shadow:
    4px 4px 8px #b8c7dd,
    -4px -4px 8px transparent;
}

input[type="checkbox"]:checked ~ .switch-bg {
  background: #5685ff;
  box-shadow: 4px 3px 3px 0px #4273ee inset;
}

.app-color-gray {
  color: #646464;
}

.app-color-pink {
  color: #ec7eda;
}

.app-bg-blue-1 {
  background: #78bfff;
}

.app-color-blue-1 {
  color: #78bfff;
}

.app-bg-blue-2 {
  background: #5685ff;
}

.app-color-blue-2 {
  color: #5685ff;
}

.app-bg-lavender {
  background: #576ee6;
}

.app-bg-pink {
  background: #ec7eda;
}

.app-bg-teal {
  background: #44dbe5;
}

.app-bg-green {
  background: #68deb4;
}
</style>
