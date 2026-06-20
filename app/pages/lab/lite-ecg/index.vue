<script setup lang="ts">
import { ref } from 'vue'

// Lista completa de ítems
const items = ref([
  {
    name: "Regularity / Irregularity",
    img: "/ecg/rr.webp",
    open: false,
    params: [
      "If irregular: RR intervals (3–10 beats)",
      "If regular: no additional parameters"
    ],
    calculates: [
      "Successive RR variation",
      "Cycle stability",
      "Pattern repetition"
    ],
    suggests: [
      "Regular rhythm",
      "Irregular rhythm",
      "Irregularly irregular (possible AF)"
    ],
    logic:
      "If the rhythm appears irregular, the tool requests several RR intervals to quantify variability. If the rhythm is regular, no additional input is needed.",
    result: null
  },
  {
    name: "RR intervals",
    img: "/ecg/rr.png",
    open: false,
    params: ["RR list"],
    calculates: ["Mean RR", "Min/Max RR", "Instantaneous HR"],
    suggests: ["Bradycardia", "Tachycardia", "Normal rate"],
    logic:
      "RR intervals determine heart rate and help identify rate-related abnormalities.",
    result: null
  },
  {
    name: "Pauses",
    img: "/ecg/pause.png",
    open: false,
    params: ["RR list"],
    calculates: ["Longest RR", "Pause ratio"],
    suggests: ["Possible sinus pause", "Possible block"],
    logic:
      "A pause is defined when an RR interval exceeds a multiple of the baseline cycle length.",
    result: null
  },
  {
    name: "Cycle stability",
    img: "/ecg/stability.png",
    open: false,
    params: ["RR list"],
    calculates: ["Pattern repetition", "Cycle variance"],
    suggests: ["Stable cycle", "Unstable cycle"],
    logic:
      "Stable cycles repeat with minimal variation. Instability suggests arrhythmia.",
    result: null
  },
  {
    name: "Simple variability",
    img: "/ecg/variability.png",
    open: false,
    params: ["RR list"],
    calculates: ["Beat-to-beat variation"],
    suggests: ["Low variability", "High variability"],
    logic:
      "Variability helps distinguish between physiological and pathological rhythms.",
    result: null
  },
  {
    name: "Conduction patterns (2:1, 3:1, Wenckebach)",
    img: "/ecg/conduction.png",
    open: false,
    params: ["RR list", "P waves (optional)"],
    calculates: ["Dropped beats", "Pattern repetition"],
    suggests: ["2:1 block", "3:1 block", "Wenckebach"],
    logic:
      "Conduction blocks follow recognizable RR patterns that repeat predictably.",
    result: null
  },
  {
    name: "Rhythm transitions",
    img: "/ecg/transitions.png",
    open: false,
    params: ["RR list"],
    calculates: ["Sudden changes", "Segmented cycles"],
    suggests: ["Abrupt transition", "Gradual transition"],
    logic:
      "Transitions help identify ectopic beats or rhythm shifts.",
    result: null
  },
  {
    name: "Short episodes",
    img: "/ecg/episodes.png",
    open: false,
    params: ["RR list"],
    calculates: ["Burst duration", "Frequency"],
    suggests: ["Possible SVT burst", "Possible atrial run"],
    logic:
      "Short episodes may indicate paroxysmal arrhythmias.",
    result: null
  },
  {
    name: "Sudden frequency changes",
    img: "/ecg/frequency.png",
    open: false,
    params: ["RR list"],
    calculates: ["Rate jump", "Rate drop"],
    suggests: ["Abrupt acceleration", "Abrupt deceleration"],
    logic:
      "Sudden changes often indicate ectopic activity or conduction shifts.",
    result: null
  },
  {
    name: "Triage red flags",
    img: "/ecg/redflags.png",
    open: false,
    params: ["RR list"],
    calculates: ["Extreme rates", "Long pauses"],
    suggests: ["Urgent evaluation recommended"],
    logic:
      "Red flags highlight potentially dangerous patterns requiring immediate attention.",
    result: null
  }
])

const toggle = (index: number) => {
  items.value[index].open = !items.value[index].open
}
</script>

<template>
  <section class="wrapper">

    <!-- Imagen principal estilo 'logo casolano' -->
    <img
      src="/ecg/main-print.webp"
      alt="ECG printout"
      class="header-img"
    />

    <h1 class="title">ECG Lite Analyzer</h1>
    <p class="subtitle">
      A first exploratory approach to ECG rhythm pattern analysis.
    </p>

    <div class="item" v-for="(item, index) in items" :key="item.name">

      <div class="item-header">
        <button class="item-title" @click="toggle(index)">
          {{ item.name }}
        </button>

        <!-- Aquí irá la futura conjetura -->
        <div class="item-result">
          {{ item.result || "…" }}
        </div>
      </div>

      <div v-if="item.open" class="panel">

        <!-- Imagen específica del ítem -->
        <img :src="item.img" alt="" class="item-img" />

        <h3>Parameters needed</h3>
        <ul><li v-for="p in item.params" :key="p">{{ p }}</li></ul>

        <h3>What it calculates</h3>
        <ul><li v-for="c in item.calculates" :key="c">{{ c }}</li></ul>

        <h3>Possible suggestions</h3>
        <ul><li v-for="s in item.suggests" :key="s">{{ s }}</li></ul>

        <h3>Logic</h3>
        <p>{{ item.logic }}</p>
      </div>
    </div>

    <p>This tool is intended for educational and triage support purposes only. It does not provide medical diagnosis and must not replace clinical judgment or professional medical evaluation.</p>
  </section>

 

</template>

<style scoped>
.wrapper {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: system-ui, sans-serif;
}

/* Imagen principal estilo logo */
.header-img {
  width: 180px;
  float: right;
  margin-left: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  opacity: 0.9;
}

.title {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 25px;
}

.item {
  margin-bottom: 25px;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-title {
  flex: 1;
  text-align: left;
  padding: 10px;
  background: #222;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.item-result {
  width: 80px;
  text-align: right;
  color: #aaa;
  font-size: 0.9rem;
}

.panel {
  background: #111;
  padding: 15px;
  margin-top: 10px;
  border-radius: 4px;
  color: #ddd;
}

.item-img {
  width: 100%;
  max-width: 300px;
  margin-bottom: 15px;
  border-radius: 6px;
  opacity: 0.95;
}

h3 {
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: 700;
}
</style>



