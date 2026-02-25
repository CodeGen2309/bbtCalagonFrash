<script setup>
import { computed, onMounted, ref } from 'vue';
import { animate } from 'motion';
import { RouterLink, useRoute } from 'vue-router';

import apirator from '@/lib/apirator.js';
import slider from '@/components/slider.vue';
import productFilter from '@/components/filter.vue';


let mockButtons = [
  'Описание', 
  'С этим товаром покупают', 
  'Гарантийные обязательства', 
]


let route = useRoute()
let itemID = route.params.id

let arrItem  = ref({})
let name  = ref('')
let decription = ref('')

let section = ref({ 'NAME': 'Load',  'ID': '1'})
let optList = ref([])

let slides = ref([])
let mockSlide = ref("/img/plitka/atlant.jpg")

let subinfo = ref(false)
let subTitle = ref('Описание')

let basePrice = ref(1)
let count = ref(1)

let finalPrice = computed(() => basePrice.value * count.value)


// FUNCTIONS
// ============================

async function togleInfo (text) {
  let info = document.querySelector('.iCard--subinfo')
  subTitle.value = text
  
  if (!subinfo.value) {
    subinfo.value = !subinfo.value
    await animate(info, { opacity: [0, 1] }, { duration: .3, easing: 'ease-in-out' })
  }
}


async function hideInfo () {
  let info = document.querySelector('.iCard--subinfo')
  await animate(info, { opacity: [1, 0] }, { duration: .3, easing: 'ease-in-out' })
  subinfo.value = false
}



async function setupAjax () {
  let resItem  = await apirator.getProduct(itemID).then(res => res.json())
  
  arrItem.value = resItem
  optList.value = await apirator.getFilter().then(res => res.json())
  
  name.value       = resItem['ITEM']['NAME']
  slides.value     = resItem['GALLERY']
  section.value    = resItem['SECTION']
  basePrice.value  = Number(resItem['PRICE']['PRICE'])
  mockSlide.value  = slides.value[0]
  decription.value = resItem['ITEM']['DETAIL_TEXT']
  
  return resItem
}


onMounted( async () => {
  await setupAjax()
})

</script>


<template>
<div class="iCard">
  <div class="iCard--content">
    <div class="iCard--subinfo" v-show="subinfo">
      <div class="iCard--subinfoTitle" v-html="decription" ></div>
      <div class="iCard--subinfoClose" @click="hideInfo">Вернуться к товару</div>
    </div>

    <div class="iCard--block iCard--breadcrumbs">
      <RouterLink :to="{ name: 'catalog', params: { id: section.ID }}" class="iCard--crumb">Каталог</RouterLink> / 

      <RouterLink :to="{ name: 'section', params: { id: section.ID }}" class="iCard--crumb">
        {{  section.NAME  }}
      </RouterLink>

      <a href="#"  class="iCard--crumb">{{ name }}</a>
    </div>

    <div class="iCard--gallery ctgallery">
      <slider class="iCard--slider" :images="slides"></slider>

      <div class="ctgallery--pricePanel">
        <div class="ctgallery--priceHolder transformer">
          <p class="ctgallery--price transformer--inner">{{ finalPrice }} руб. </p>
        </div>

        <div class="transformer ctgallery--countHolder">
          <div class="ctgallery--countPanel transformer--inner">
            <input class="ctgallery--count" type="number" v-model="count">
            <span class="ctgallery--countUnit">  м<sup>2</sup> </span>
          </div>
        </div>

        <div class="ctgallery--buyHolder transformer">
          <button class="ctgallery--buyButton transformer--inner">Купить</button>
        </div>
      </div>
    </div>

    <div class="iCard--block iCard--filter ctfilter">
      <div class="ctfilter--wall ctwall">
        <p class="ctwall--title">{{ name }}</p>
        <productFilter class="ctwall--filter"></productFilter>
      </div>
    </div>
  </div>

  
  <div class="iCard--block iCard--footer">
    <a class="iCard--footerLink" href="#" 
      v-for="item in mockButtons"
      @click="togleInfo(item)"
    >
      {{ item }}
    </a>
  </div>
</div>
</template>


<style scoped>

.iCard {
  display: grid;
  grid-template-rows: 1fr 60px;
  grid-template-columns: 1fr;
  gap: 30px;

  width: 100%; height: 100%;
}

.iCard--block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.iCard--breadcrumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  grid-column: span 2;
  z-index: 9;
}

.iCard--crumb {
  text-decoration: none;
  color: inherit;
}

.iCard--content {
  position: relative;

  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 6fr minmax(300px, 3fr);
  max-height: 100%;
  overflow: hidden;

  gap: 30px;
}

.iCard--subinfo {
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;

  background: rgba(255, 255, 255, .9);
  backdrop-filter: blur(8px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 8;
}

.iCard--subinfoTitle {
  padding: 20px;
}

.iCard--subinfoClose {
  padding: 10px 40px;
  background: rgba(0, 0, 0, .6);
  color: white;

  letter-spacing: 1px;
  font-size: 1.2rem;


  transition: .3s;
  cursor: pointer;
}

.iCard--gallery {
}

.ctgallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.iCard--slider {
  flex-grow: 1;
}

.ctgallery--thumblist {
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%; 
  height: 100%;
  grid-row: span 2;
  grid-area: thumblist;


  margin: 0; 
  padding: 0;
  list-style: none;
}

.ctgallery--thumb {
  position: relative;
  max-height: 150px;
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
  grid-area: mainSlide;
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
  /* background: hsl(190 10% 85%); */
  background: #ecf0f1;
  grid-area: pricePanel;

  width: 100%; 
  height: 60px;
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
  color: rgba(0, 0, 0, 1);
}

.ctgallery--countHolder {
  color: black;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.ctgallery--count {
  outline: none; border: none;
  border-radius: 10px;

  padding: 10px;
  box-sizing: border-box;
  background: white;


  font-size: .9rem;
  text-align: center;
  letter-spacing: 1px;

}

.ctgallery--countUnit {
  padding: 0 10px;;
}

.ctgallery--countPanel {

}

.ctgallery--buyHolder {
  background: hsl(200 100 30);
  transition: .3s;
}

.ctgallery--buyHolder:hover {
  background: hsl(205 100 50);
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

.iCard--filter {
  overflow: hidden;
}


.ctfilter--wall {
  flex-grow: 1;
}


.ctfilter--wall {
  display: flex;
  flex-direction: column;
  gap: 40px;

  /* overflow-y: scroll; */
  height: 100%;
}

.ctwall--title {
  /* justify-content: center; */
  /* align-items: center; */

  position: relative;
  font-size: 1.6rem;
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

.ctwall--filter {
  height: 60%;
  mask-image: linear-gradient(to bottom, transparent, black 20px, black 90%, transparent);
  box-sizing: border-box;
  padding: 40px 20px 40px 0px;
  overflow-y: scroll;
  flex-grow: 1;
}




/* FOOTER */
/* ================================================ */
.iCard--footer {
  display: flex;
  justify-content: center;
  /* background: hsl(190 10% 95%); */
  background: #ecf0f1;

  position: relative;
}

.iCard--footerLink {
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

.iCard--footerLink::before {
  content: '';
  position: absolute;
  top: 0;
  width: 0%; 
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: .5s;
}

.iCard--footerLink:hover {
}

.iCard--footerLink:hover::before {
  width: 100%;
  background: rgba(189, 195, 199, .3);
}

@media screen and (width < 900px) {
  .iCard {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 10px;
    box-sizing: border-box;
  }

  .iCard--breadcrumbs { display: none; }

  .iCard--content {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    overflow-y: scroll
  }

  .ctfilter {
    min-height: 100dvh;
  }

  .ctgallery {
    height: 60dvh;
    grid-template-areas: 
      'mainSlide mainSlide'
      ' thumblist thumblist'
    ;
  }

  .iCard--footer {
    display: none;
  }

  .ctgallery--pricePanel {
    position: fixed;
    bottom: 0; left: 0;
    height: 80px;
    z-index: 9;
  }

  .ctgallery--mainSlide {
  }

  .ctgallery--thumblist {
    flex-direction: row;
  }
}
</style>