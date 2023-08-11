<template>

  <HeaderView/>

  <div>
    <router-link to="/src" class="srcbtn">src</router-link>
    <router-link to="/" class="srcbtn">main</router-link>
  </div>

  <router-view/>

  <FooterView/>

</template>

<script>
/* eslint-disable */
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
import MainView from './components/MainView.vue';
import MainSrcView from './components/MainSrcView.vue';
export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView,
    MainView,
    MainSrcView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.srcbtn{
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}
</style>
