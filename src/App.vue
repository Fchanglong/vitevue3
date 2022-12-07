<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import { getbackstageList } from './api/axios'
import HelloWorld from './components/HelloWorld.vue'

// const getid =async()=>{
//   let id = await getbackstageList();

//   console.log(id);
  
// }
// getid();
</script>

<template>
  <!-- <div class="app">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </div> -->
  <router-link to="/">1111</router-link>|
  <router-link to="/tow">2222</router-link>
  <div>
    <router-view/>
  </div>
<HelloWorld msg="嘿嘿,肥仔老汉" />
</template>

<style scoped lang="scss">
  .app{
    font-size: 12px;
   
  }
.logo {
  height: 16em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
