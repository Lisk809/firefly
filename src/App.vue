<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
import {ref, watch} from 'vue'
const isGray=ref(false)
watch(isGray, (now)=>{
  let html=document.querySelector(":root") as HTMLElement
  // @ts-ignore
  html.style["background-color"]=now?"#000":"#fff"
})
</script>

<template>
	<div class="hero" :style="`background-color:${isGray?'#161b21':'#f0f0f0'};`">
	  <img @click="isGray=!isGray" :style="`filter:drop-shadow(0 0 4em #688978)${isGray?' grayscale(1)':';'}`" :src="`/hero${isGray?'_':''}.png`" class="logo" />
  </div>
  <footer>Copyright © 2024 Lisk All rights reserved.</footer>
</template>

<style scoped>
.hero {
  border-radius:30px;
  transition:200ms;
}
footer {
  color:#555;
  font-family:"Kirang";
  font-size:32px
}
.logo {
  height: 100%;
  width:100%;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
@font-face{
  font-family:"Kirang";
  src:url("/font.ttf");
}
</style>
