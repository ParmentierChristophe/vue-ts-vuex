<template>
  <div class="background">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/shared/components/NavBar.vue';
export default {
  name: 'login',
  components: { NavBar }
};
</script>

<style lang="scss" scoped></style>
