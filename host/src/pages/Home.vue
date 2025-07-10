<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// @ts-ignore: Module Federation remote import
const myVueApp = defineAsyncComponent(() => import("remote-vue/App"));

// @ts-ignore: Module Federation remote import
import("remote-react/App");
</script>

<template>
  <section>
    <h1>🌐 Це головний хост додаток</h1>
    <p>Далі йде 2 мікрофронтенди, один на реакті, інший на вью.</p>

    <div class="apps">
      <my-vue-app />
      <my-react-app />
    </div>
  </section>
</template>

<style scoped>
.apps {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
}

section {
  text-align: center;
  margin-bottom: 40px;
}
</style>
