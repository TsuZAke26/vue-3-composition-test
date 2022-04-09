<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1><slot name="title" /></h1>
      <h2>{{ title }}</h2>
      <slot />
      <button @click="handleHideModal">Hide Modal</button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
const handleHideModal = () => {
  emit('update:modelValue', false);
};
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
