<script setup>
import CtlgHeader from './components/ctlgHeader.vue';


</script>


<template>
  <section class="market">
    <CtlgHeader></CtlgHeader>
    <RouterView></RouterView>
  </section>
</template>


<style>
  .market {
    position: relative;
    width: calc(100vw - 40px); 
    height: calc(100vh - 40px);
    margin: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
  }
</style>