<script setup lang="ts">
import { Ref, ref } from 'vue'
import { mainStore,mainStores } from '../store';
const store = mainStore();
// const stores = mainStores();
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
  console.log(store);
  // store.msg=0
  console.log(store.msg);
  // store.msg++;
  // console.log(stores.msg);
  
}
</script>

<template>
  <h1>{{msg }}</h1>
  <!-- <h1>{{store}}{{stores}}</h1> -->
  <!-- <h1>{{store}}</h1> -->
  <!-- <input type="text" v-model="store.msg"> -->
<h1>{{store.msg}}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="updateid">123123</button>
    
    
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
