<script setup>

import { ref } from 'vue';
import { animate } from 'motion';
import { RouterLink } from 'vue-router';

let mockButtons = [
  'Описание', 
  'Технические характеристики', 
  'Калькулятор плитки', 
  'Гарантия', 
]

let mockImages = [
  "/test/img/plitka/atlant.jpg",
  "/test/img/plitka/atlant2.jpg",
  "/test/img/plitka/fantazy.jpg",
  "/test/img/plitka/fantazy2.jpeg",
  "/test/img/plitka/klassiko.jpeg",
  "/test/img/plitka/terassa.jpeg",
  "/test/img/plitka/villano.jpg",
]

let optList = [
  {
    name: 'Ширина', 
    id: 'width',
    values: ['150мм', '200мм', '300мм', '400мм', '500мм']
  },
  {
    name: 'Высота', 
    id: 'height',
    values: ['20мм', '30мм', '40мм', '50мм', '60мм']
  },
  {
    name: 'Тип покраски', 
    id: 'okrasType',
    values: ['частичная', 'полная', 'смешанная']
  },
  {
    name: 'Цвет', 
    id: 'color',
    values: ['белый', 'серый', 'черный', 'красный', 'желтый']
  },
  {
    name: 'Толщина', 
    id: 'thickness',
    values: ['2мм', '3мм', '4мм', '5мм', '6мм']
  },
  {
    name: 'Толщина', 
    id: 'thickness3',
    values: ['2мм', '3мм', '4мм', '5мм', '6мм']
  },
  {
    name: 'Толщина', 
    id: 'thickness4',
    values: ['2мм', '3мм', '4мм', '5мм', '6мм']
  },
]

let mockSlide = ref(mockImages[0])
let subinfo = ref(false)
let subTitle = ref('Описание')


// FUNCTIONS
// ============================

function toggleSlide (fadeArr, delay = 0) {
  let slide = document.querySelector('.ctgallery--mainSlide')

  let animation = animate(
    slide,
    { opacity: fadeArr },
    { duration: .3, easing: 'ease-in-out', delay}    
  )

  return animation
}


async function changeSlide (idx) {
  toggleSlide([1, 0]).then(() => {
    mockSlide.value = mockImages[idx]
    toggleSlide([0, 1], .2)
  })
}

function scrollFilter (id) {
  let el = document.getElementById(id)
  el.scrollIntoView({ behavior: 'smooth'})
}


async function togleInfo (text) {
  let info = document.querySelector('.ctitem--subinfo')
  subTitle.value = text
  
  if (!subinfo.value) {
    subinfo.value = !subinfo.value
    await animate(info, { opacity: [0, 1] }, { duration: .3, easing: 'ease-in-out' })
  }
  
  // else {
  //   await animate(info, { opacity: [1, 0] }, { duration: .3, easing: 'ease-in-out' })
  //   subinfo.value = !subinfo.value
  // }
}


async function hideInfo () {
  let info = document.querySelector('.ctitem--subinfo')
  await animate(info, { opacity: [1, 0] }, { duration: .3, easing: 'ease-in-out' })
  subinfo.value = false
}

</script>


<template>
<div class="ctitem">
  <div class="ctitem--content">
    <div class="ctitem--subinfo" v-show="subinfo">
      <h1 class="ctitem--subinfoTitle">{{ subTitle }}</h1>
      <div class="ctitem--subinfoClose" @click="hideInfo">Вернуться к товару</div>
    </div>

    <div class="ctitem--block ctitem--breadcrumbs">
      <RouterLink to="/catalog" class="ctitem--crumb">Каталог</RouterLink> / 
      <RouterLink to="/section" class="ctitem--crumb">Тротуарная плитка</RouterLink> / 
      <RouterLink to="/" class="ctitem--crumb">Атлант</RouterLink>
    </div>

    <div class="ctitem--block ctitem--gallery ctgallery">
      <ul class="ctgallery--thumblist">
        <li class="ctgallery--thumb" 
          v-for="(item, index) in mockImages"
          @click="changeSlide(index)"
        >
          <img class="ctgallery--thumbImage" :src="item">
        </li>
      </ul>

      <div class="ctgallery--mainSlide">
        <img class="ctgallery--mainImage" :src="mockSlide">
      </div>

      <div class="ctgallery--pricePanel">
        <div class="ctgallery--priceHolder transformer">
          <p class="ctgallery--price transformer--inner">15 800 руб.</p>
        </div>

        <div class="transformer ctgallery--countHolder">
          <div class="ctgallery--countPanel transformer--inner">
            200 м<sup>2</sup>
          </div>
        </div>

        <div class="ctgallery--buyHolder transformer">
          <button class="ctgallery--buyButton transformer--inner">Купить</button>
        </div>
      </div>
    </div>

    <div class="ctitem--block ctitem--filter ctfilter">
      <div class="ctfilter--wall ctwall">
        <p class="ctwall--title">Атлант</p>

        <div class="ctwall--optHolder" v-for="item in optList" :id="item.id">
          <p class="ctwall--optName">{{ item.name }}</p>

          <ul class="ctwall--optList">
            <li class="ctwall--optItem" v-for="value in item.values">{{ value }}</li>
          </ul>
        </div>
      </div>

      <ul class="ctfilter--optList">
        <li class="ctfilter--optItem"
          v-for="item in optList"
          @click="scrollFilter(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>

  </div>

  
  <div class="ctitem--block ctitem--footer">
    <a class="ctitem--footerLink" href="#" 
      v-for="item in mockButtons"
      @click="togleInfo(item)"
    >
      {{ item }}
    </a>
  </div>
</div>
</template>


<style scoped>

.ctitem {
  display: grid;
  grid-template-rows: 1fr 60px;
  grid-template-columns: 1fr;
  gap: 10px;

  width: 100%; height: 100%;
}

.ctitem--block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ctitem--breadcrumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  grid-column: span 2;
  z-index: 9;
}

.ctitem--crumb {
  text-decoration: none;
  color: inherit;
}

.ctitem--content {
  position: relative;

  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 6fr 3fr;
  max-height: 100%;
  overflow: hidden;

  gap: 10px;
}

.ctitem--subinfo {
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;

  background: rgba(255, 255, 255, .8);
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 8;
}

.ctitem--subinfoClose {
  padding: 10px 40px;
  background: rgba(0, 0, 0, .6);
  color: white;

  letter-spacing: 1px;
  font-size: 1.2rem;


  transition: .3s;
  cursor: pointer;
}

.ctitem--gallery {
}

.ctgallery {
  display: grid;
  grid-template-rows: 1fr 60px;
  grid-template-columns: 80px 1fr;
  gap: 10px;
}

.ctgallery--thumblist {
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%; 
  height: 100%;
  grid-row: span 2;


  margin: 0; 
  padding: 0;
  list-style: none;
}

.ctgallery--thumb {
  position: relative;
  flex-grow: 1;
}

.ctgallery--thumbImage {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;

  object-fit: cover;
  object-position: center;
}

.ctgallery--mainSlide {
  position: relative;
  width: 100%; height: 100%;
}

.ctgallery--mainImage {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;

  object-fit: cover;
  object-position: center;
}

.ctgallery--pricePanel {
  display: flex;
  justify-content: center;

  width: 100%; height: 100%;
  overflow: hidden;
}

.transformer {
  flex-grow: 1;
  transform: skewX(30deg);
  min-width: 35%;
}

.transformer--inner {
  width: 100%; height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ctgallery--priceHolder {
}

.ctgallery--price {
  margin: 0; padding: 0;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 600;
  color: rgba(0, 0, 0, .7);
}

.ctgallery--countHolder {
  background: linear-gradient(
    to left,
    rgba(189, 195, 199, .6),
    rgba(236, 240, 241, .0)
  );

  color: black;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.ctgallery--countPanel {

}

.ctgallery--buyHolder {
  background: rgba(52, 73, 94, .9);
  transition: .3s;
}

.ctgallery--buyHolder:hover {
  background: rgba(52, 73, 94, 1);
}

.ctgallery--buyButton {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;

  color: white;
  font-size: 1.3rem;
  letter-spacing: 2px;
  font-weight: 100;

  border: none; outline: none;
  background: none;
  transition: .3s;
}

.ctitem--filter {
  overflow: hidden;
}

.ctfilter {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.ctfilter--wall {
  flex-grow: 1;
}

.ctfilter--optList {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  list-style: none;
  padding: 20px 0 0 0;
  margin: 10px 0 0 0;

  box-sizing: border-box;
  font-family: 'Zekton';
}


.ctfilter--optList::before {
  content: '';
  position: absolute;
  top: 4px; left: 0;
  width: 100%;
  height: 1px;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, .0),
    rgba(0, 0, 0, .3),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, .7),
    rgba(0, 0, 0, .0)
  );
}

.ctfilter--optList::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 1px;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, .0),
    rgba(0, 0, 0, .7),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, .3),
    rgba(0, 0, 0, .0)
  );
}




.ctfilter--optItem {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  background: rgba(0, 0, 0, .1);
  color: rgba(0, 0, 0, .7);

  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 500;
  /* border-radius: 10px; */
  flex-grow: 1;

  cursor: pointer;
  transition: .3s
}



.ctfilter--wall {
  overflow-y: scroll;
  height: 100%;
}

.ctwall--title {
  position: relative;
  font-size: 1.8rem;
  letter-spacing: 1px;
  padding: 10px;
  padding-top: 0;
  margin: 0;
}

.ctwall--title::before {
  content: '';
  position: absolute;
  bottom: 4px; left: 0;
  width: 100%;
  height: 1px;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, .0),
    rgba(0, 0, 0, .0)
  );
}

.ctwall--title::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%;
  height: 1px;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, .0)
  );
}

.ctwall--optHolder {
  margin: 40px 0px;
}

.ctwall--optName {
  position: relative;
  width: 99%;

  font-size: 1.2rem;
  letter-spacing: 1px;
  background: linear-gradient(
    to right,
    rgba(189, 195, 199, .4),
    rgba(236, 240, 241, 0)
  );


  padding: 10px;
  box-sizing: border-box;
  margin: 0;
}

.ctwall--optName::before {
  content: '';
  position: absolute;
  top: -1px; left: 0;
  width: 100%; height: 100%;

  border: 1px solid black;

  mask-image: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, .4),
    rgba(0, 0, 0, .2),
    rgba(0, 0, 0, .3)
  );
}


.ctwall--optList {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  list-style: none;
  font-weight: 300;
  padding: 0;

  margin: 20px 0;
}

.ctwall--optItem {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 10px 20px;
  /* background: rgba(245, 246, 250,1.0); */

  color: rgba(0, 0, 0, 1);
  font-size: .9rem;
  letter-spacing: 1px;
  
  transition: .3s;
  cursor: pointer;
}


.ctwall--optItem::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: calc(100% - 2px); 
  height: calc(100% - 2px);

  border: 1px solid black;
  
  mask-image: linear-gradient(
    to top right,
    rgba(0, 0, 0, .0),
    rgba(0, 0, 0, .1),
    rgba(0, 0, 0, .4),
    rgba(0, 0, 0, .1),
    rgba(0, 0, 0, .0)

  );
}

.ctwall--optItem:hover {
  background: rgba(0, 0, 0, .7);
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
}


/* FOOTER */
/* ================================================ */
.ctitem--footer {
  display: flex;
  justify-content: center;

  position: relative;
}

.ctitem--footerLink {
  position: relative;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: inherit;
  
  padding: 0px;
  flex-grow: 1;

  color: rgba(0, 0, 0, 1);
  font-size: 1.2rem;
  letter-spacing: 1px;
  transition: .3s;
}

.ctitem--footerLink::before {
  content: '';
  position: absolute;
  top: 0;
  width: 0%; 
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: .5s;
}

.ctitem--footerLink:hover {
}

.ctitem--footerLink:hover::before {
  width: 100%;
  background: rgba(189, 195, 199, .3);
  z-index: -1;
}
</style>