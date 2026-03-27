<script setup>
import { animate } from 'motion';
import { useRouter } from 'vue-router';
import CtlgHeader from '@/components/header.vue';

const router = useRouter()

async function toggleMenu () {
  let curRoute = router.currentRoute.value.name
  let nextRoute = curRoute == 'menu' ? '/' : '/menu'

  // await animate(
  //   document.querySelector('.market'),
  //   { opacity: 0, filter: 'blur(10px)' },
  //   { duration: .3 }
  // )

  router.push(nextRoute)
}

</script>


<template>
  <CtlgHeader @burgerClick="toggleMenu"></CtlgHeader>

  <section class="market">
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
    height: calc(100vh - 60px);
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

  @media screen and (max-width: 768px) {
    .market {
      padding: 0;
      margin: 0;
      width: 100vw;
      height: 100vh;
    }
    
  }
</style>