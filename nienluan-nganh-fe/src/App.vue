<template>
  <div class="">
      <app-Header></app-Header>
      <app-TrangChu></app-TrangChu>
      <!-- <app-Login></app-Login> -->
  </div>
</template>

<script>
  import Header from './components/quanly/header.vue';
  import Trangchu from './components/quanly/trangchu.vue';
  // import Login from './components/quanly/login.vue';

  export default {
    components: {
      appHeader: Header,
      appTrangChu: Trangchu,
      // appLogin: Login,
    }
  }
</script>

<style>

</style>

