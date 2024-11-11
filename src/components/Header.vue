<template>
  <header class="header">
    <nav>
      <router-link to="/" class="nav-link">Landing Page</router-link>
      <router-link to="/calculator" class="nav-link">Calculator</router-link>
      <router-link to="/comments" class="nav-link">Comments</router-link>
      <router-link to="/users" class="nav-link">Users</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.header {
  background-color: #f0f0f0;
  padding: 10px 0;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.nav-link {
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #ddd;
  color: #000;
}

@media (max-width: 600px) {
  .nav-link {
    padding: 8px 10px;
  }
}
</style>