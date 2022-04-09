<template>
  <div class="home">
    <div>My Counter: {{ counterData.title }}</div>

    <div>
      <button class="btn" @click="modifyCounter(-1)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="modifyCounter(1)">+</button>
    </div>

    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<!-- Composition API (script setup) -->
<script setup lang="ts">
import { reactive } from "vue";

import { vAutofocus } from "@/directives/vAutofocus";

const counterData = reactive({
  count: 0,
  title: "",
});
const modifyCounter = (value: number) => {
  counterData.count += value;
};
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
