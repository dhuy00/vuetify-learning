<!-- src/layouts/DefaultLayout.vue -->
<template>
  <v-app>
    <NavBar />

    <v-main class="bg-grey-lighten-5">
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>
