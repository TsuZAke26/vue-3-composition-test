<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="`id-${post.id}`">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>

    <textarea v-autofocus />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const posts = ref([
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
]);
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
</style>
