<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal" title="My Title as a Prop" @show-modal="showModal = $event">
      <template #title>My Shiny New Modal</template>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus animi, vero
        perferendis ad maiores quaerat ducimus nam nostrum quis repellendus? Ad suscipit
        eos doloribus ipsum omnis aliquam alias quas nisi?
      </p>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

const showModal = ref(false);
</script>
