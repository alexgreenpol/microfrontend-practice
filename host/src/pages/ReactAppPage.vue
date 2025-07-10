<script setup lang="ts">
// @ts-ignore: Module Federation remote import
import("remote-react/App");
</script>

<template>
  <section>
    <h1>Мікрофронтенд React</h1>

    <div class="apps">
      <my-react-app class="react-app" />
    </div>
  </section>
</template>

<style scoped>
.react-app {
  width: 100%;
}

section {
  text-align: center;
}
</style>
