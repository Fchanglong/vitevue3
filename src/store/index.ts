import { defineStore } from 'pinia'

export const mainStore = defineStore('main',{
    state:()=>{
        return{
            msg:'肥仔老汉'
        }
    },
    getters:{},
    actions:{}
})

export const mainStores = defineStore('mains',{
    state:()=>{
        return{
            msg:'123456789'
        }
    },
    getters:{},
    actions:{}
})