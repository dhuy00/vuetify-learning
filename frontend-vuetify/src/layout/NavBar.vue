<!-- src/components/NavBar.vue -->
<template>
  <v-app-bar color="indigo" dark flat height="50">
    <!-- Left side -->
    <v-app-bar-title class="mr-8">My App</v-app-bar-title>

    <!-- Center links -->
    <div class="d-flex align-center gap-4">
      <v-btn text to="/user" class="text-white">User</v-btn>
      <v-btn text to="/shopping" class="text-white">Shopping</v-btn>
      <v-btn text to="/order" class="text-white">Order</v-btn>
      <v-btn text to="/product" class="text-white">Product</v-btn>
    </div>

    <v-spacer />

    <!-- Right side -->
    <v-btn color="white" class="text-white rounded-pill" prepend-icon="mdi-logout">
      Logout
    </v-btn>
  </v-app-bar>
</template>
