<template>
  <div class="about">
    <h1>About</h1>
    <textarea v-autofocus />
  </div>
</template>

<script setup lang="ts">
import { vAutofocus } from "@/directives/vAutofocus";
</script>

<style>
.about {
  text-align: center;
  padding: 20px;
}
</style>
