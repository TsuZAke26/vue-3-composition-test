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
      <input type="text" v-model="counterData.title" />
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

<!-- Composition API (script setup) -->
<script setup lang="ts">
import { reactive } from "vue";

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
