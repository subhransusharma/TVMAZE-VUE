<template>
  <div id="app">
    <div class="px-4 pb-24 pt-8 sm:px-6 lg:px-8 overflow-hidden">
      <nav-bar></nav-bar>
      <router-view></router-view>
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: 'App',
  components: {FooterBar, NavBar},
}
</script>

<style>


</style>
