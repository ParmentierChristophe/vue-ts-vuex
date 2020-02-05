<template>
  <div class="home">
    <HelloWorld />
    <ul v-for="(user, index) in getUsers" :key="index">
      <li>
        <h3>user {{ index + 1 }}</h3>
      </li>
      <li>{{ user.email }}</li>
      <li>{{ user.password }}</li>
      <li>{{ user.createdAt }}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(["getUsers"])
  }
};
</script>
