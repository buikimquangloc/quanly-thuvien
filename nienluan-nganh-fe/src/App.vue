<template>
  <div class="component">
      <app-Header></app-Header>
      <app-TrangChu></app-TrangChu>
      <app-Footer></app-Footer>
  </div>
</template>

<script>
  import Header from './components/quanly/header.vue';
  import Trangchu from './components/quanly/trangchu.vue';
  import Footer from './components/quanly/footer.vue';

  export default {
    components: {
      appHeader: Header,
      appTrangChu: Trangchu,
      appFooter: Footer,
    }
  }
</script>
