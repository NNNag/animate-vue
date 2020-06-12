<template>
  <div id="app">
    <router-link to="/">WelcomePage</router-link>
    <router-link to="/about">AboutPage</router-link>
    <router-link to="/service">ServicePage</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/drawer">Drawer</router-link>
    <router-link to="/cards">Cards</router-link>
    <router-link to="/simple">Simple</router-link>
    <router-link to="/stagger">Stagger</router-link>
    <router-link to="/state">State</router-link>
    <router-link to="/timeline">Timeline</router-link>
    <router-link to="/master">Master</router-link>
    <transition name="fade" mode="out-in">>
      <router-view />
     </transition> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.slide-fade-enter {
      transform: translateX(10px);
      opacity: 0;
    }
    .slide-fade-enter-active,
    .slide-fade-leave-active {
      transition: all 0.2s ease;
    }
    .slide-fade-leave-to {
      transform: translateX(-10px);
      opacity: 0;
    }
</style>
