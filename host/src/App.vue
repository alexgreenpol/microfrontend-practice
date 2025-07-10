<template>
  <main>
    <nav style="margin-bottom: 20px; margin-top: 40px; text-align: center;">
      <router-link to="/">🏠 Home</router-link> |
      <router-link to="/vue">Vue App</router-link> |
      <router-link to="/react">React App</router-link>
    </nav>
    <router-view />
  </main>
</template>
