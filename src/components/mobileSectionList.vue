<script setup>
  import { onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';

  import apirator from '@/lib/apirator';


  let sections = ref('')
  let _install_ready = ref(false)
  let _install_prompt = ref(null)
  let _app_installed = ref(false)
  let isInstalled = ref(false)


function savePrompt(event){
  console.log(event);
  
  event.preventDefault(); // Предотвращает мобильную подсказку
    // Сохраняем ссылку на событие, чтобы активировать его позже
  _install_prompt.value = event;
    // Уведомить пользовательский интерфейс о том, что приложение может быть установлено
  _install_ready.value = true;
}

function installPWA(){
  if(_install_prompt.value){
    _install_prompt.value.prompt()
    // localStorage.setItem("bbtTestAppInstalled", "true")
  }
}

function checkInstalledApp(){
  isInstalled.value = JSON.parse(localStorage.getItem("bbtTestAppInstalled"))
  localStorage.setItem("bbtTestAppInstalled", "false")
  console.log("IS APP INSTALLD");
  console.log(isInstalled.value);
}

function handleAppInstalled(){
    _install_prompt.value = null;
    _app_installed.value = true;
}

  onMounted( async () => {
    window.addEventListener("beforeinstallprompt", savePrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    checkInstalledApp()
    

    let sectionReq = await apirator.getSections()
    let sectionList = await sectionReq.json()

    sections.value = sectionList
  })
</script>


<template>
<section class="mobSections">
  <h3 class="mobSections--title">Магазин <br> ЖБК - 1</h3>

  <RouterLink class="mobSections--item" 
    v-for="item in sections" :key="item.ID"
    :to="{ name: 'section', params: { id: item.ID } }"
  >
    <img class="mobSections--image" :src="item.PICTURE_FILE" alt="">

    <div class="mobSections--label transformer">
      <p class="mobSections--labelText transformer--inner">{{ item.NAME }}</p>
    </div>
  </RouterLink>

  <div class="mobSections--footer" v-if="!isInstalled">
    <h3 class="mobSections--footerTitle">Установите приложение!</h3>
    <p class="mobSections--footerNote">☑️ Быстрая загрузка</p>
    <p class="mobSections--footerNote">☑️ Удобный интерфейс</p>
    <p class="mobSections--footerNote">☑️ Всегда свежая информация</p>

    <button class="mobSections--footerButton" @click="installPWA">Установить</button>
  </div>


  <div class="mobSections--footer" v-else>
    <h3 class="mobSections--footerTitle">Спасибо, что установили наше приложение!</h3>
    <p class="mobSections--footerNote">☑️ Быстрая загрузка</p>
    <p class="mobSections--footerNote">☑️ Удобный интерфейс</p>
    <p class="mobSections--footerNote">☑️ Всегда свежая информация</p>
  </div>
</section>
</template>


<style scoped>
.mobSections {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  scroll-snap-type: y;
  scroll-behavior: smooth;
  padding: 40px 0px;
  padding-bottom: 0;
}

.mobSections--title {
  font-weight: 600; 
}

.mobSections--item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;

  min-height: 300px;
  width: 94vw;
  box-sizing: border-box;

  text-decoration: none;
  color: inherit;
  border-radius: 10px;
  overflow: hidden;

  scroll-snap-align: center;

  animation: scrollAnim .1s linear both;
  animation-timeline: view();
}

.mobSections--image {
  position: absolute;

  height: 100%; width: 100%;

  object-fit: cover;
  object-position: center;
}

.mobSections--label {
  position: relative;
  width: 70%;
  background: white;
}

.transformer {
}

.transformer--inner {
  transform: skewX(-30deg);
  padding: 10px 50px;
  margin: 0;
}

.mobSections--labelText {}



.mobSections--title {
  position: relative;
  width: 70%;
  text-align: center;

  font-size: 2rem;
  font-weight: 600;
  padding: 30px;

  /* color: white; */
  z-index: 1;
}

.mobSections--title::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 1px solid black;

  mask-image: linear-gradient(
    to right top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );

  transform: translateX(3px) translateY(3px);
  z-index: -1;
}

.mobSections--title::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 1px solid black;

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


.mobSections--footer {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  background: linear-gradient(
    to right bottom,
    #30c5d2,
    #471069
  );

  color: aliceblue;
  width: 100%;
  padding: 40px;
}

.mobSections--footerTitle {
  display: block;
  padding: 0px 20px;
  margin: 0;
}

.mobSections--footerNote {
  display: block;
  padding: 0px 20px;
  margin: 0;
}


.mobSections--footerButton {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-left: 20px;
  width: 90%;
  font-size: 1rem;

  background: rgba(255, 255, 255, .2);
  color: aliceblue;
  border: 2px solid aliceblue;
  border-radius: 10px;
  outline: none;
}




@keyframes scrollAnim {
  0%  { 
    min-height: 10px;;
    width: 94vw;
    border-radius: 10px;
  }

  20%  { 
    min-height: 10px;
    width: 94vw;
    border-radius: 10px;
  }

  50%  { 
    min-height: 50dvh; 
    width: 100vw;
    border-radius: 0px;
  }

  80%  { 
    min-height: 10px;
    width: 94vw;
    border-radius: 10px;
  }

  100%  { 
    min-height: 10px;
    width: 94vw;
    border-radius: 10px;
  }
}

</style>