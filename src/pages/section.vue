<script setup>
import { ref } from 'vue';
import { animate, stagger } from 'motion';

import productList from '@/components/productList.vue';
import filre from './filre.vue';
import sectionRouter from '@/components/sectionRouter.vue';

let isRouter = ref(false)

async function showOffAnim () {
  let tiles = document.querySelectorAll('.msnry--item')

  animate(
    tiles,
    { opacity: [1, 0] },
    { duration: .5 }
  ).then(() => {
    resetFilter()
  })
}


async function resetFilter () {
  let tiles = document.querySelectorAll('.msnry--item')

  animate(
    tiles,
    { opacity: [0, 1],  transform: ['translateY(-20px)', 'translateY(0px)'] },
    { duration: .5, delay: stagger(.1) }
  )
}

</script>


<template>
<div class="sect">
  <div class="sect--cover">
    <img class="sect--coverImage" src="/public/img/plitka/fantazy2.jpeg">
    <p class="sect--coverTitle">Тротуарная плитка</p>

    <button class="sect--coverButton"
      @click="isRouter = !isRouter"
    >
      Весь каталог
    </button>
  </div>

  <transition name="slideAnim" type="animation" mode="out-in">
    <div class="sect--sidebar" v-show="!isRouter">
      <filre  @filter="showOffAnim" />
    </div>
  </transition>


  <transition name="slideAnim" type="animation" mode="out-in">
    <div class="sect--productList" v-show="!isRouter">
      <productList/>
    </div>
  </transition>

  <transition name="slideAnim" type="animation" mode="out-in">
    <div class="sect--router" v-show="isRouter">
      <sectionRouter @sectionRouteClick=" isRouter = !isRouter" />
    </div>
  </transition>  
</div>
</template>


<style scoped>

.sect {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 2fr;
  grid-template-rows: 200px 1fr;
  gap: 20px;

  box-sizing: border-box;

  width: 100%; height: 100%;
  overflow: hidden;
}

.sect--cover {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  grid-column: span 2;
  border-radius: 10px;
  overflow: hidden;
}

.sect--coverImage {
  position: absolute;
  width: 110%; height: 110%;
  object-fit: cover;
  object-position: center;
  filter: blur(6px) brightness(0.7);
}

.sect--coverTitle {
  position: relative;

  font-size: 2rem;
  font-weight: 600;
  padding: 30px;

  color: white;
  z-index: 1;
}

.sect--coverTitle::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 1px solid white;

  mask-image: linear-gradient(
    to right top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );

  transform: translateX(3px) translateY(3px);
  z-index: -1;
}

.sect--coverTitle::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 1px solid white;

  mask-image: linear-gradient(
    to right top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );

  transform: translateX(-3px) translateY(-3px);
  z-index: -1;
}

.sect--coverButton {
  position: absolute;
  bottom: 0; right: 0;
  margin: 20px;

  padding: 10px 30px;
  background: linear-gradient(
    to top right,
    rgba(255, 255, 255, .4),
    rgba(255, 255, 255, .6),
    rgba(255, 255, 255, .3)
  );

  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 6px;
  font-size: 1rem;
  letter-spacing: 1px;
  outline: none;

  color: #000;
  text-decoration: none;
  font-weight: 300;

  cursor: pointer;
  transition: .3s;
}

.sect--coverButton:hover {
  padding: 10px 40px;
  background: white;
}

.sect--sidebar {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;

  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;

  transition: .3s;
}

.sect--productList {
  min-height: 100%;
  padding: 40px 20px;
  flex-grow: 1;
  overflow-y: scroll;
  transition: .3s;
}

.sect--router {
  display: flex;
  justify-content: center;
  align-items: center;

  grid-column: span 2;
  border-radius: 10px;

  transition: .3s;
}

.slideAnim-enter-active, 
.slideAnim-leave-active {
  transition: opacity 0.5s ease;
}

.slideAnim-enter-from,
.slideAnim-leave-to {
  opacity: 0;
}


</style>