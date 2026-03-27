<script setup>
import { ref, Transition } from 'vue'

import gmenu from '../../mocks/mainMenu.json'
import menuSection from '@/components/menuSection.vue';

let isMenuShow = ref(false)
let isSubMenuShow = ref(false)
let subMenu = ref({})
let mainMenu = gmenu.mainMenu

let leaveTimeOut = null

function toggleMenu () {
  if (isMenuShow.value) {
    isMenuShow.value = false
    isSubMenuShow.value = false
  }

  else {
    isMenuShow.value = true
  }
}


function hideMenu () {
  leaveTimeOut = setTimeout(() => {
    isMenuShow.value = false
    isSubMenuShow.value = false
  }, 500)
}


function clearHideCounter () {
  clearTimeout(leaveTimeOut)
}



function changeSubMenu (menuItem) {
  let newMenu = {
    cover: menuItem.img,
    name: menuItem.subMenu,
  }

  isSubMenuShow.value = false
  clearTimeout(leaveTimeOut)
  
  setTimeout(() => {
    subMenu.value = newMenu
    isSubMenuShow.value = true
  }, 200)
}



// let HeadLinks = []
let HeadLinks = [
  {link: '#', text: 'Завод'},
  {link: '#', text: 'Корпорация'},
  {link: '#', text: 'Недвижимость'},
]
</script>


<template>
<header class="header">
  <div class="header__main">
    <div class="header__inner">
      <a href="https://belbeton.ru">
        <img class="header__logo" src="/icons/logo.svg">
      </a>

      <div @click="$emit('burgerClick')">
        <img class="header__menuIcon" 
          src="/icons/menu.svg"
        >
      </div>
    </div>
  </div>


  <div class="header__phone">
    <div class="header__phone__inner">
      <img class="header__phoneImg" src="/icons/phone.svg">
      <p class="header__phoneText"> +7 (4722) 37-63-33 </p>
    </div>
  </div>
</header>

<transition name = 'sideFade'>
  <menuSection class="mainMenu"
    :menu="mainMenu" v-if = "isMenuShow"
    @hover="changeSubMenu"
    @leave="hideMenu"
  />
</transition>

<transition name = 'subFade'>
  <menuSection class="subMenu"
    @hover="clearHideCounter"
    @leave="hideMenu"
    :menu="gmenu[subMenu.name]"
    :cover="subMenu.cover"
    v-show="isSubMenuShow"
  />
</transition>
</template>



<style scoped>

.header {
  position: absolute;
  width: 100vw;
  top: 0; left: 0;
  overflow: hidden;

  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 20px;

  box-sizing: border-box;
  z-index: 9;
}

.header__main {
  transform: skewX(-40deg);
  background: white;
  margin-left: -20px;
  padding: 20px 60px;
}

.header__inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;

  transform: skewX(40deg);
}

.header__logo {
  width: 30px;
}

.header__menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  list-style: none;
  margin: 0; padding: 0;
  flex-grow: 1;
}

.header__menuItem {
  padding: 20px;
  font-weight: 100;
  cursor: pointer;
  transition: .3s;
}

.header__menuItem:hover {
  background: rgba(72, 126, 176, .7);
  color: white;
  font-weight: 500;
  padding: 20px 60px;
}

.header__menuLink {
  text-decoration: none;
  color: inherit;  
}


.header__phone {
  background: white;
  transform: skewX(40deg);
  padding: 20px 40px;
  margin-right: -10px;
}


.header__phone__inner {
  display: flex;
  align-items: center;
  gap: 20px;

  transform: skewX(-40deg);
}


.header__phoneImg {
  opacity: .6;
  width: 30px;
}

.header__phoneText {
  font-weight: 100;
  margin: 0; padding: 0;
  font-size: 18px;
  font-weight: 500;
}



.header__menuIcon {
  width: 20px;
  cursor: pointer;
  padding-left: 20px;
}


.mainMenu {
  position: absolute;
  top: 60px; left: 0;
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  font-weight: 300;
  letter-spacing: 2px;
  background: rgba(255, 255, 255, .8);
  backdrop-filter: blur(10px);
  transition: .3s;
}

.mainMenu::-webkit-scrollbar {
  display: none;
}

.mainMenu li {
}

.mainMenu a {
  /* margin: 0; padding: 10px; */
}

.subMenu {
  position: absolute;
  top: 60px; left: 320px;
  z-index: 999;
  margin: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, .8);
  backdrop-filter: blur(10px);
  width: 400px;

  transition: .3s;
}

.subMenu::-webkit-scrollbar {
  display: none;
}



@media (max-width: 900px) {
  .header {
    justify-content: space-between;
  }

  .header__phone {
    display: none;
  }

  .header__menu {
    display: none;
  }
}

</style>