<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content of post with ID {{ $route.params.id }}</p>

    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>

    <p><router-link to="/posts">&lt; Back</router-link></p>
    <div>
      <button @click="goToHomeRoute">Go Home</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`Post ID: ${route.params.id}`);
};

const goToHomeRoute = () => {
  router.push({ name: "home" });
};
</script>

<style>
.post-detail {
  text-align: center;
  padding: 20px;
}
</style>
