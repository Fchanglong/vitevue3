<script setup lang="ts">
import { Ref, ref } from 'vue'
import { mainStore,mainStores } from '../store';
const store = mainStore();
const stores = mainStores();
const count = ref(10)
let str2=ref('mt')
let str = ref('2324') as Ref<string>
  //第一种
// defineProps<{ msg: string }>()
//组件传值的第二种写法
const props =defineProps({
  msg:{
    type: String,
  },
})
const getid=()=>{
  // console.log(1,count.value);
  // console.log(props);
  
}
getid();
const updateid=()=>{
  // console.log(store.msg);
  // store.msg=0
  console.log(store.msg);
  store.msg++;
  // console.log(stores.msg);
  
}
</script>

<template>
  <h1>{{msg }}</h1>
  <h1>{{store}}{{stores}}</h1>
  <input type="text" v-model="store.msg">
<h1>{{store.msg}}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}{{str}}</button>
    <button type="button" @click="updateid">123123</button>
    
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <!-- <p>Ajax&nbsp;异步设置内容&nbsp;HT&nbsp;ML</p><p><br></p><pre><code >啊实打实的</code></pre><blockquote style="text-align: left;">&nbsp;<a href="https://www.wangeditor.com/v5/for-frame.html#demo" target="_blank">你好</a>&nbsp;</blockquote> -->
  <!-- <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
