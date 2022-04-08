<template>
  <div class="home">
    <div>
      <button class="btn" @click="modifyCounter(-1)">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="modifyCounter(1)">+</button>
    </div>
  </div>
</template>

<!-- Options API
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    modifyCounter(value: number) {
      this.counter += value;
    },
  },
});
</script>
-->

<!-- Composition API (without script setup)
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const counter = ref(0);
    const modifyCounter = (value: number) => {
      counter.value += value;
    };

    return {
      counter,
      modifyCounter,
    };
  },
});
</script>
-->

<script setup lang="ts">
import { ref } from "vue";

const counter = ref(0);
const modifyCounter = (value: number) => {
  counter.value += value;
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
</style>
