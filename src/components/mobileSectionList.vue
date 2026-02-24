<script setup>
  import { onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import { inView, animate, scroll } from 'motion'

  import apirator from '@/lib/apirator';


  let sections = ref('')
  let _install_ready  = ref(false)
  let _install_prompt = ref(null)
  let _app_installed  = ref(false)
  let isInstalled = ref(false)

  let viewSupport = window.CSS.supports("animation-timeline: view()")

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


  function handleAppInstalled(){
    _install_prompt.value = null;
    _app_installed.value = true;
  }


  function scaleInAnimation (item, offView = false) {
    let label = item.querySelector('.mobSections--label')
    let labelAnimList = { opacity: [0, 1] }

    let itemAnimList = {
      "width": ['90vw', '100vw'], 
      "height": ['20vh', '50vh'],
      "border-radius": ['10px', '0px']
    }


    if ( offView ) {
      labelAnimList = { opacity: [1, 0] }

      for (let key in itemAnimList) { 
        itemAnimList[key] = itemAnimList[key].reverse()
      }
    }

    animate(item, itemAnimList, { "duration": .3 } )
    animate(label, labelAnimList, { "duration": .5 } )
  }


  function setupJSAnim () {
    animate('.mobSections--label', { "opacity": 0 })

    inView('.mobSections--item', 
      (item) => {
        scaleInAnimation(item, false)
        return () => scaleInAnimation(item, true)
      },

      { margin: '-40%' },
    )
  }


  onMounted( async () => {
    window.addEventListener("beforeinstallprompt",  savePrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    sections.value = await apirator.getSections().then(res => res.json())
    if (!viewSupport) { setTimeout(setupJSAnim, 200) } 
  })
</script>


<template>
<section class="mobSections">
  <div class="mobSections--header mobHeader">
    <img class="mobHeader--cover" src="/img/marketBack.jpeg" alt="">
    <h1 class="mobHeader--title">Онлайн - магазин <br> ЖБК - 1</h1>
  </div>


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
  padding: 20px 0px;
  padding-bottom: 0;
  view-timeline-name: --test-view;
}

.mobHeader {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  overflow: hidden;
}


.mobHeader--cover {
  position: absolute;
  top: -10px; left: -10;
  width: 110%; height: 110%;
  object-fit: cover;
  object-position: center;

  filter: blur(4px) brightness(0.9);
}


.mobHeader--title {
  position: relative;
  width: 70%;
  text-align: center;

  font-size: 1.5rem;
  font-weight: 600;
  padding: 30px;

  color: white;
}

.mobHeader--title::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 2px solid white;

  mask-image: linear-gradient(
    to right top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );

  transform: translateX(3px) translateY(3px);
}

.mobHeader--title::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 2px solid white;

  mask-image: linear-gradient(
    to right top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );

  transform: translateX(-3px) translateY(-3px);
  z-index: 1;
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

  /* animation: scrollAnim .1s linear both; */
  /* animation-timeline: view(); */
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

.mobSections--labelText {

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


@supports (animation-timeline: view()) {
  .mobSections--item {
    animation: scrollAnim .1s linear both;
    animation-timeline: view();
  }
}


@keyframes scrollAnim {
  0%  { 
    min-height: 10px;;
    width: 94vw;
    border-radius: 10px;
    opacity: 0;
  }

  20%  { 
    min-height: 10px;
    width: 94vw;
    border-radius: 10px;
    opacity: .6;
  }

  50%  { 
    min-height: 40dvh; 
    width: 100vw;
    border-radius: 0px;
    opacity: 1;
  }

  80%  { 
    min-height: 10px;
    width: 94vw;
    border-radius: 10px;
    opacity: .6;
  }

  100%  { 
    min-height: 10px;
    width: 94vw;
    border-radius: 10px;
    opacity: 0;
  }
}


@keyframes firefoxScrollAnim {
  0%  { 
    opacity: 0;
  }

  20%  { 
    min-height: 10px;
    width: 94vw;
    border-radius: 10px;
    opacity: .6;
  }

  50%  { 
    min-height: 40dvh; 
    width: 100vw;
    border-radius: 0px;
    opacity: 1;
  }

  80%  { 
    min-height: 10px;
    width: 94vw;
    border-radius: 10px;
    opacity: .6;
  }

  100%  { 
    min-height: 10px;
    width: 94vw;
    border-radius: 10px;
    opacity: 0;
  }
}

</style>