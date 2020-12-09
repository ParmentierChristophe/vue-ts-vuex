<template>
  <div class="home">
    <ul v-for="(user, index) in getUsers" :key="index">
      <li>
        <h3>user {{ index + 1 }}</h3>
      </li>
      <li>{{ user.email }}</li>
      <li>{{ user.password }}</li>
      <li>{{ user.createdAt | moment('calendar') }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',

  mounted() {
    this.fetchDataUsers();
  },
  computed: {
    ...mapGetters(['getUsers'])
  },

  methods: {
    ...mapActions(['fetchDataUsers'])
  }
};
</script>
