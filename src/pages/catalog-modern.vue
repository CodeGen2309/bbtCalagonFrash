<script setup>
// TODO: это касатеся всего проекта, прикрути анимашки как будет время
import { ref } from 'vue';
import { animate, stagger } from 'motion';


import Massonry from '@/components/massonry.vue';


let sections = [
  { label: 'Арматурные изделия',    link: '/public/img/sections/armatur.jpeg' },
  { label: 'Благоустройство',       link: '/public/img/sections/blagoust.jpeg' },
  { label: 'Игровое оборудование',  link: '/public/img/sections/detskoe.jpg' },
  { label: 'Двери деревянные',      link: '/public/img/sections/doors.jpg' },
  { label: 'Камни бетонные',        link: '/public/img/sections/kamnibet.jpg' },
  { label: 'Блоки керамзитовые',    link: '/public/img/sections/kerablock.jpg' },
  { label: 'Керамзит',              link: '/public/img/sections/keramzit.jpg' },
  // { label: 'Металлические изделия', link: '/public/img/sections/metart.jpg' },
  // { label: 'Кирпич облицовочный',   link: '/public/img/sections/oblic.jpg' },
  // { label: 'Окна деревянные',       link: '/public/img/sections/okna.jpg' },
  // { label: 'Плиты перекрытия',      link: '/public/img/sections/plity.jpg' },
]

// bacground props
let showBack = ref(true)
let backImg  = ref('/public/img/sections/oblic.jpg')

async function  changeBackground (imgSrc) {
  showBack.value = false

  await hideTiles()
  .then(() => {
    backImg.value  = imgSrc
    showBack.value = true
  })
  .then(showTiles)
}


async function hideTiles () {
  return animate(
    '.msnry--item',
    { opacity: 0 },
    { type: 'keyframes', duration: .5, }
  )
}


async function showTiles () {
  animate(
    '.msnry--item',
    { opacity: 1 },
    { duration: .5, delay: stagger(.1) }
  )
}


function setActive (ent, link) {
  let item = ent.target
  let neihdors = item.parentElement.children


  for (let i = 0; i < neihdors.length; i++) {
    neihdors[i].classList.remove('mct--sectionsLink-active')
  }

  item.classList.toggle('mct--sectionsLink-active')
  changeBackground(section.link)
}
</script>


<template>
  <div class="mct">
      <div class="mct--backHolder">
        <transition name="backAnim">
          <img class="mct--backImage" :src="backImg" v-show="showBack">
        </transition>
      </div>

    <div class="mct--content">
      <div class="mct--sections mct--sections-left">
        <a class="mct--sectionsLink" @click="changeBackground(section.link)"
          v-for="section in sections" :key="section.label"
        >
          {{ section.label }}
        </a>
      </div>

      <Massonry></Massonry>

      <div class="mct--sections mct--sections-left">
        <a class="mct--sectionsLink" :href="section.link"
          v-for="section in sections" :key="section.label"
        >
        {{ section.label }}
        </a>
      </div>
    </div>

    <div class="mct--footer">
      <div class="mct--footerHolder">
        <a href="#" class="mct--footerLink">
          Посмотреть весь каталог
        </a>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .mct {
    position: relative;
    width: 100%; height: 100%;
    padding-top: 60px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
  }

  .mct--content {
    display: flex;
    gap: 30px;

    position: relative;
    flex-grow: 1;

    padding: 20px;
    box-sizing: border-box;
  }

  .mct--backHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -9;

    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;

    background: black;
    transition: .3s;
  }

  .mct--backImage {
    min-width: 110%; height: 110%;
    object-fit: cover;
    object-position: center;
    filter: blur(4px) brightness(.3) saturate(1.7);
    transition: .3s;
  }


  .mct--sections {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    width: 40%; height: 100%;
    border-radius: 10px;
  }

  .mct--sectionsLink {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px 10px;
    color: white;
    text-decoration: none;
    letter-spacing: 1px;

    transition: .3s;
  }

  .mct--sectionsLink:hover {
    color: black;
  }


  .mct--sectionsLink::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(255, 255, 255, .2);
    border: 1px solid white;

    mask-image: linear-gradient(
      to right bottom, 
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0) 
    );

    transition: .3s;
    transform: translateX(-4px) translateY(-4px);
    z-index: -1;
  }

  .mct--sectionsLink::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(255, 255, 255, .2);
    border: 1px solid white;

    mask-image: linear-gradient(
      to left top, 
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0) 
    );

    transition: .3s;
    transform: translateX(4px) translateY(4px);
    z-index: -1;
  }

  .mct--sectionsLink-active:hover::before,
  .mct--sectionsLink-active:hover::after,
  .mct--sectionsLink:hover::before,
  .mct--sectionsLink:hover::after {
    mask-image: linear-gradient(
      to left top, 
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.8) 
    );


    background: rgba(255, 255, 255, 1);
    transform: translateX(0px) translateY(0px);
  }



  .mct--footer {
    height: 60px;
    position: relative;
  }

  .mct--footerHolder {
    position: absolute;
    bottom: 0; right: 0;
    background: white;

    transform: skewX(-30deg) translateX(50px);
    padding-right: 50px;
  }


  .mct--footerLink {
    display: block;
    padding: 20px 40px;

    transform: skewX(30deg);

    text-decoration: none;
    color: black;
    letter-spacing: 1px;
  }


  .backAnim-enter-active {
    opacity: 0;
    /* transform: translateX(50px); */
  }

  .backAnim-leave-active {
    opacity: 0;
    /* transform: translateX(-50px); */
  }
</style>