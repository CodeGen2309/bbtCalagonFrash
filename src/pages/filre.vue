<script setup>
import { defineEmits } from 'vue'
import arrowIcon from '/public/icons/arrow.svg?component'

import setupEnv from '../../setupEnv';


let emit = defineEmits(['filter'])


let widtMock = {
  name: 'Толщина',
  units: 'мм',
  values: [ '45', '60', '80' ],
}

let surface = {
  name: 'Тип поверхности',
  units: '',
  values: [ 'Гладкий', 'Декоративный' ],
}

let palette = {
  name: 'Палитра',
  units: '',
  values: [ 'COLOR MIX', 'Стандарт', 'Гранит' ],
}

let colors = [
  { name: 'Черный',     file: `${setupEnv.assetDir}/img/colors/black-1.jpg` },
  { name: 'Белый',      file: `${setupEnv.assetDir}/img/colors/white.jpg` },
  { name: 'Горчичный',  file: `${setupEnv.assetDir}/img/colors/karry.jpg` },
  { name: 'Красный',    file: `${setupEnv.assetDir}/img/colors/red.jpg` },
  { name: 'Серый',      file: `${setupEnv.assetDir}/img/colors/gray.jpg` },
  { name: 'Коричневый', file: `${setupEnv.assetDir}/img/colors/brown2.jpg` },
  { name: 'Черный',     file: `${setupEnv.assetDir}/img/colors/black-1.jpg` },
  { name: 'Белый',      file: `${setupEnv.assetDir}/img/colors/white.jpg` },
  { name: 'Горчичный',  file: `${setupEnv.assetDir}/img/colors/karry.jpg` },
  { name: 'Красный',    file: `${setupEnv.assetDir}/img/colors/red.jpg` },
  { name: 'Серый',      file: `${setupEnv.assetDir}/img/colors/gray.jpg` },
  { name: 'Коричневый', file: `${setupEnv.assetDir}/img/colors/brown2.jpg` },
]


function setActive (ent) {
  let item = ent.target

  console.log({item});
  

  let neihdors = item.parentElement.children

  console.log({neihdors});

  for (let i = 0; i < neihdors.length; i++) {
    neihdors[i].classList.remove('active')    
  }

  item.classList.toggle('active')
  emit('filter')
}

</script>


<template>
  <div class="filter">
    <div class="filter--item" 
      v-for="item in [ widtMock, surface, palette ]"
    >
      <h3 class="filter--title">{{item.name}}</h3>
     
      <arrowIcon class="filter--arrow filter--arrow-left" />
      <div class="filter--ListHolder">
        <ul class="filter--List">
          <li class="filter--ListItem" 
            @click="setActive"
            v-for="value in item.values"
          >
            {{ value }} {{ item.units }}
          </li>
        </ul>
      </div>
      <arrowIcon class="filter--arrow filter--arrow-right" />
    </div>

    <div class="filter--item filter--item-colors">
      <h3 class="filter--title">Цвет</h3>
     
      <arrowIcon class="filter--arrow filter--arrow-left" />
      <div class="filter--ListHolder">
        <ul class="filter--List filter--List-colors">
          <li class="filter--ListItem filter--ListItem-color" 
            v-for="item in colors"
            @click="setActive"
          >
            <img class="filter--color" :src="item.file" :alt="item.name">
            <p class="filter--colorName">{{item.name}}</p>
          </li>
        </ul>
      </div>
      <arrowIcon class="filter--arrow filter--arrow-right" />
    </div>
  </div>

</template>


<style scoped>

.filter {
  width: 100%; 
  height: 100%;
  scrollbar-width: thin;
  padding: 10px;
}

.filter--item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  padding: 20px 0;
}

.filter--title {
  width: 100%;
  font-weight: 500;
}

.filter--arrow  {
  opacity: .6;
  scale: 1.2;
  padding: 10px;
  fill: black;
  border-radius: 4px;

  cursor: pointer;
  transition: .3s;
}

.filter--arrow:hover {
  background: rgba(0, 0, 0, .6);
  opacity: 1;
  fill: white;
}

.filter--arrow-left {
  transform: rotate(180deg);
}

.filter--arrow-right {

}


.filter--ListHolder {
  margin: 0; padding: 0;
  width: 70%;
  overflow-x: scroll;
  flex-grow: 1;

}

.filter--ListHolder::-webkit-scrollbar {
  width: 0;
  display: none;
}


.filter--List {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;

  gap: 20px;
  
  list-style: none;
  margin: 0;
  padding: 4px 10px;
}


.filter--List-colors {
  max-width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
}


.filter--List::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 1px;
  border-bottom: 1px solid black;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, .2),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, .2)
  );
}


.filter--List::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 1px;
  border-bottom: 1px solid black;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, .2),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, .2)
  );
}


.filter--ListItem {
  height: 100%;
  min-width: max-content;

  padding: 16px 10px;
  border-radius: 4px;

  font-weight: 300;
  text-align: center;
  letter-spacing: 1px;
  flex-grow: 1;

  cursor: pointer;
  transition: .3s;
}

.filter--color {
  overflow: hidden;
  border-radius: 10px;
}

.filter--ListItem-color {
  width: 90px;
  flex-grow: 0;
}

.filter--colorName {
  font-weight: 300;
  font-size: 0.8rem;
}

.active,
.filter--ListItem:hover {
  background: rgba(0, 0, 0, .6);

  color: white;
  font-weight: 300;
}

</style>