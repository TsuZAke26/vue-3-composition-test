<template>
  <div class="home">
    <h1 ref="appTitleRef">{{ appTitle }}</h1>
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
import { reactive, ref, onMounted, nextTick } from "vue";
import type { Ref } from "vue";

import { vAutofocus } from "@/directives/vAutofocus";

const appTitle = ref("My Basic Counter App");
const appTitleRef: Ref<HTMLElement | null> = ref(null);
onMounted(() => {
  console.log(`The app title is ${appTitleRef.value?.offsetWidth} pixels wide`);
});

const counterData = reactive({
  count: 0,
  title: "",
});
const modifyCounter = (value: number) => {
  counterData.count += value;
  nextTick(() => {
    console.log("Counter has updated in DOM");
  });
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
