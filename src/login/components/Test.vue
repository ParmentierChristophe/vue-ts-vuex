<template>
  <div>
    <div>
      <input type="text" placeholder="email" v-model="loginUser.email" />
    </div>

    <div>
      <input
        type="password"
        placeholder="password"
        v-model="loginUser.password"
      />
    </div>

    <button @click="login(loginUser)">test</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'test',

  data() {
    return {
      loginUser: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    ...mapActions('AuthStore', ['login'])
  }
};
</script>

<style lang="scss">
input {
  background-color: #eaf1f7;
  border: none;
  box-shadow: inset -6px -6px 12px rgba(255, 255, 255, 0.5),
    inset 6px 6px 12px rgba(163, 177, 198, 0.48);
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 12px;
  outline: none;
  border: 3px solid rgba(0, 0, 0, 0);
  margin-left: -3px;
  margin-right: -3px;
  ::placeholder {
    color: #afafaf;
  }
}
</style>
