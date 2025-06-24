<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h6 font-weight-bold">
        User List
      </v-card-title>

      <v-data-table :headers="headers" :items="users" class="elevation-1" item-value="id" hide-default-footer>
        <!-- Action column with square buttons -->
        <template #item.actions="{ item }">
          <v-btn icon size="small" color="info" class="ma-1" style="border-radius: 3px; width: 50px; height: 36px;"
            @click="viewUser(item)">
            <v-icon>mdi-eye</v-icon>
          </v-btn>

          <v-btn icon size="small" color="primary" class="ma-1" style="border-radius: 3px; width: 50px; height: 36px;"
            @click="editUser(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn icon size="small" color="red" class="ma-1" style="border-radius: 3px; width: 50px; height: 36px;"
            @click="deleteUser(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const headers = [
  { title: 'ID', value: 'id' },
  { title: 'Username', value: 'username' },
  { title: 'Email', value: 'email' },
  { title: 'Role', value: 'role' },
  { title: 'Actions', value: 'actions', sortable: false }
]

const users = ref([
  { id: 1, username: 'john_doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, username: 'jane_smith', email: 'jane@example.com', role: 'User' },
  { id: 3, username: 'mark_wong', email: 'mark@example.com', role: 'Moderator' }
])

const viewUser = (user) => {
  alert(`Viewing user: ${user.username}`)
}

const editUser = (user) => {
  alert(`Editing user: ${user.username}`)
}

const deleteUser = (user) => {
  if (confirm(`Delete user ${user.username}?`)) {
    users.value = users.value.filter(u => u.id !== user.id)
  }
}
</script>
