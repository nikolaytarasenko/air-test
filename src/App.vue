<template>
  <global-header></global-header>
  <page-menu></page-menu>
  <main class="main main-ru">
    <banner></banner>
    <staff></staff>
  </main>
</template>

<script>
import { onMounted } from 'vue';
import GlobalHeader from './components/GlobalHeader.vue';
import PageMenu from './components/PageMenu.vue';
import Banner from './components/Banner.vue';
import Staff from './components/Staff.vue';

export default {
  name: "App",
  components: {
    GlobalHeader,
    PageMenu,
    Banner,
    Staff
  },
  setup() {
    onMounted(() => {
      document.body.classList.add('homepage', 'homepage-basic');
    });
  }
};
</script>

<style>
@font-face {
  font-family: 'Gilroy';
  src: local('Gilroy-Regular'),
    url('~@/assets/fonts/Gilroy-Regular.woff') format('woff'),
    url('~@/assets/fonts/Gilroy-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: local('Gilroy-Medium'),
    url('~@/assets/fonts/Gilroy-Medium.woff') format('woff'),
    url('~@/assets/fonts/Gilroy-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: local('Gilroy-Bold'),
    url('~@/assets/fonts/Gilroy-Bold.woff') format('woff'),
    url('~@/assets/fonts/Gilroy-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

body {
  font-family: 'Gilroy', "Segoe UI", sans-serif;
  background: #f5f6fa;
}

@import url("./assets/css/app.css");
@import url("./assets/css/homepage-basic.css");
@import url("./assets/css/homepage.css");
</style>