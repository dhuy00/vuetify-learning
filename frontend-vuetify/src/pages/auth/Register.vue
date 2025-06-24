<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const handleRegister = () => {
  if (!email.value || !password.value || !confirmPassword.value) {
    alert('Please fill in all fields.')
    return
  }

  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match.')
    return
  }

  // Simulated registration success
  alert('Registration successful!')
  router.push('/dashboard') // or redirect to /login
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <v-container fluid class="fill-height d-flex align-center justify-center login-background">
    <div style="width: 500px;">
      <v-card class="pa-8 rounded-xl elevation-12">
        <v-card-title class="text-h5 font-weight-bold justify-center mb-6">
          Create your account
        </v-card-title>

        <v-form @submit.prevent="handleRegister">
          <v-text-field
            v-model="email"
            label="Email"
            prepend-icon="mdi-email"
            type="email"
            variant="outlined"
            density="comfortable"
            color="primary"
            class="mb-4"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            type="password"
            variant="outlined"
            density="comfortable"
            color="primary"
            class="mb-4"
            required
          ></v-text-field>

          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            prepend-icon="mdi-lock-check"
            type="password"
            variant="outlined"
            density="comfortable"
            color="primary"
            class="mb-6"
            required
          ></v-text-field>

          <v-btn type="submit" color="indigo" size="large" block>Register</v-btn>
        </v-form>

        <v-divider class="my-6"></v-divider>

        <v-card-text class="text-center">
          <div class="d-flex justify-center align-center" style="gap: 8px;">
            <span>Already have an account?</span>
            <v-btn text color="teal-lighten-1" @click="goToLogin">Login</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<style scoped>
.fill-height {
  height: 100vh;
}

.login-background {
  background: linear-gradient(135deg, #f3f4f6, #e0f7fa);
  padding: 20px;
}
</style>
