<template>
    <div>
      <h2>Usuaris</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UsersPage',
    data() {
      return {
        users: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        this.users = response.data.users;
      } catch (error) {
        console.error('Error carregant usuaris:', error);
      }
    },
  };
  </script>
  