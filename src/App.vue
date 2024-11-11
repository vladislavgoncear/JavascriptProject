<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    Footer,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

router-view {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  router-view {
    padding: 10px;
  }
}
</style>