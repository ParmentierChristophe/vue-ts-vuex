<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import TokenService from '@/services/token.service';
import ApiService from '@/services/api.service';

export default {
  beforeMount() {
    // data you want at the start of app - when logged
    // maybe there‘s a better way to do it
    const token = TokenService.getToken();
    if (token) {
      ApiService.setHeader();
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  color: #2c3e50;
  background-color: #eaf1f7;
}
a {
  text-decoration: none;
}

ul {
  padding: 0;
  list-style: none;
}
</style>
