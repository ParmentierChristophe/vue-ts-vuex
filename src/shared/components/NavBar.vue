<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <div>
      <button class="box">erer</button>
      <button class="box" v-if="getUser" @click="logout">lejr</button>
      <button class="box" v-else>
        <router-link to="/login">lejrn</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'navbar',
  computed: {
    ...mapGetters('AuthStore', ['getUser'])
  },
  methods: {
    ...mapActions('AuthStore', ['logout'])
  }
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.box {
  /* Basic styling and alignment */
  border: 0;
  // padding: 20px;
  cursor: pointer;
  margin: 15px;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  /* Basic styling and alignment */
  /* For Neumorphism Effect */
  background-color: #eaf1f7;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  /* For Neumorphism Effect */
  transition: all 500ms ease;
  &:active,
  &:focus {
    transition: all 500ms ease;

    border: 0;
    background: #eaf1f7;
    box-shadow: inset 3px 3px 7px rgba(163, 177, 198, 0.48),
      inset -3px -3px 7px #ffffff;
    outline: none;
  }

  a {
    text-align: center;
    text-decoration: none;
  }
}
</style>
