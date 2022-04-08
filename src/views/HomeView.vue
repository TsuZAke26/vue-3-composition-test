<template>
  <div class="home">
    <div>
      <button class="btn" @click="modifyCounter(-1)">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="modifyCounter(1)">+</button>
    </div>
  </div>
</template>

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
