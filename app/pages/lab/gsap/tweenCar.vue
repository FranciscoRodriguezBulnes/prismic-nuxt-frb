<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Referencia al coche
const car = ref<HTMLElement | null>(null)

// Variable donde guardaremos el tween
let tween: gsap.core.Tween

// Logs (como en el curso)
const logs = ref<string[]>([])
const addLog = (msg: string) => {
  const time = new Date().toLocaleTimeString()
  logs.value.push(`[${time}] ${msg}`)
}

// Crear el tween cuando el componente está montado
onMounted(() => {
  tween = gsap.to(car.value, {
    duration: 2,
    x: 400,
    paused: true,

    onStart: () => addLog("onStart: la animación ha comenzado"),
    onUpdate: () =>
      addLog(
        `update: progreso = ${tween.progress().toFixed(2)}, tiempo = ${tween.time().toFixed(2)}`
      ),
    onComplete: () => addLog("onComplete: la animación ha llegado al final"),
    onReverseComplete: () => addLog("onReverseComplete: ha vuelto al inicio"),
  })
})

// Métodos de control
const play = () => tween.play()
const pause = () => tween.pause()
const resume = () => tween.resume()
const reverse = () => tween.reverse()
const seekHalf = () => tween.seek(0.5)
const progress25 = () => tween.progress(0.25)
const slow = () => tween.timeScale(0.5)
const fast = () => tween.timeScale(2)
const reset = () => tween.restart().pause()
const kill = () => tween.kill()
</script>

<template>
  <div class="wrapper">
    <div class="car" ref="car">🚗</div>

    <div class="controls">
      <button @click="play">Play</button>
      <button @click="pause">Pause</button>
      <button @click="resume">Resume</button>
      <button @click="reverse">Reverse</button>
      <button @click="seekHalf">Seek 0.5s</button>
      <button @click="progress25">Progress 25%</button>
      <button @click="slow">Slow (0.5x)</button>
      <button @click="fast">Fast (2x)</button>
      <button @click="reset">Restablecer</button>
      <button @click="kill">Kill</button>
    </div>

    <div class="log">
      <div v-for="(l, i) in logs" :key="i">{{ l }}</div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px;
  font-family: sans-serif;
}

.car {
  font-size: 40px;
  position: relative;
  left: 0;
  transition: transform 0.2s;
}

.controls {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

button {
  padding: 6px 12px;
  background: #222;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #444;
}

.log {
  margin-top: 20px;
  background: #111;
  color: #0f0;
  padding: 10px;
  height: 150px;
  overflow-y: auto;
  font-family: monospace;
  font-size: 14px;
}
</style>

