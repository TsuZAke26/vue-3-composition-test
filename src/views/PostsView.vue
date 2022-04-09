<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="i in 3" :key="`id-${i}`">
        <router-link :to="`/post/${i}`">Post {{ i }}</router-link>
      </li>
    </ul>

    <textarea v-autofocus />
  </div>
</template>

<script setup lang="ts">
import { vAutofocus } from "@/directives/vAutofocus";
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
</style>
