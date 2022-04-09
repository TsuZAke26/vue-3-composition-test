<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <teleport to=".modals-container">
      <div v-if="showModal" class="modal">
        <h1>This is our modal</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus animi, vero
          perferendis ad maiores quaerat ducimus nam nostrum quis repellendus? Ad suscipit
          eos doloribus ipsum omnis aliquam alias quas nisi?
        </p>
        <button @click="showModal = false">Hide Modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showModal = ref(false);
</script>

<style scoped>
.modal {
  background: blue;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
