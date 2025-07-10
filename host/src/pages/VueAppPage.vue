<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// @ts-ignore: Module Federation remote import
const myVueApp = defineAsyncComponent(() => import("remote-vue/App"));
</script>

<template>
  <section>
    <h1>Мікрофронтенд Vue</h1>

    <div class="apps">
      <my-vue-app class="vue-app" />
    </div>
  </section>
</template>

<style scoped>
.vue-app {
  width: 100%;
}

section {
  text-align: center;
}
</style>
