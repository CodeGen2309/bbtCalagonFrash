<script setup>
import CtlgHeader from './components/ctlgHeader.vue';


</script>


<template>
  <section class="market">
    <CtlgHeader></CtlgHeader>

    <router-view v-slot="{ Component }">
      <transition name="fadeAnim" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>    
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
    /* overflow: hidden; */
  }

  .fadeAnim-enter-active, .fadeAnim-leave-active {
    transition: opacity .5s ease;
  }
  .fadeAnim-enter-from, .fadeAnim-leave-to {
    opacity: 0;
  }
</style>