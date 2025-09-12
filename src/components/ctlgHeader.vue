<script setup>
  import { ref, Transition } from 'vue'

  let isMenuShow = ref(false)
  let isSubMenuShow = ref(false)
  let subMenu = ref({})

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
    <div class="header--main">
      <div class="header--inner">
        <RouterLink class="header--logoLink" to="/">
          <img class="header--logo" src="/public/icons/logo.svg">
        </RouterLink>

        <div class="header--menuLink" @click="$emit('burgerClick')">
          <img class="header--menuIcon" 
            src="/public/icons/menu.svg"
          >
        </div>
      </div>
    </div>


    <div class="header--phone">
      <div class="header--phone__inner">
        <img class="header--phoneImg" src="/public/icons/phone.svg">
        <p class="header--phoneText"> +7 (4722) 37-63-33 </p>
      </div>
    </div>
  </header>
</template>


<style scoped>
  .header {
    position: absolute;
    width: 100%;
    overflow: hidden;

    display: flex;
    align-items: stretch;
    justify-content: space-between;

    box-sizing: border-box;
    z-index: 9;
  }

  .header--main {
    display: flex;
    justify-content: center;

    transform: skewX(-40deg);
    background: white;
    margin-left: -25px;
    padding: 10px 40px;
  }

  .header--inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    transform: skewX(40deg);
  }


  .header--logo {
    width: 30px;
  }

  .header--menuLink {
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .header--menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    list-style: none;
    margin: 0; padding: 0;
    flex-grow: 1;
  }

  .header--menuItem {
    padding: 20px;
    font-weight: 100;
    cursor: pointer;
    transition: .3s;
  }

  .header--menuItem:hover {
    background: rgba(72, 126, 176, .7);
    color: white;
    font-weight: 500;
    padding: 20px 60px;
  }

  .header--menuLink {
    text-decoration: none;
    color: inherit;  
  }


  .header--phone {
    background: white;
    transform: skewX(40deg);
    padding: 10px 40px;
    margin-right: -25px;
  }


  .header--phone__inner {
    display: flex;
    align-items: center;
    gap: 20px;

    transform: skewX(-40deg);
  }


  .header--phoneImg {
    opacity: .6;
    width: 30px;
  }

  .header--phoneText {
    font-weight: 100;
    margin: 0; padding: 0;
    font-size: 18px;
    /* font-weight: 500; */
  }



  .header--menuIcon {
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

    .header--phone {
      display: none;
    }

    .header--menu {
      display: none;
    }
  }

</style>
