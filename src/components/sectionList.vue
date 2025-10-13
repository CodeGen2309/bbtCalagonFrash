<script setup>

let sectins = [
  { 
    label: 'Арматурные изделия', 
    cover: '/img/sections/armatur.jpeg' ,
    mock: ''
  },

  { 
    label: 'Благоустройство', 
    cover: '/img/sections/blagoust.jpeg' ,
    mock: 'blago'
  },

  { 
    label: 'Игровое оборудование', 
    cover: '/img/sections/detskoe.jpg' ,
    mock: ''
  },

  { 
    label: 'Двери деревянные', 
    cover: '/img/sections/doors.jpg' ,
    mock: ''
  },

  { 
    label: 'Камни бетонные', 
    cover: '/img/sections/kamnibet.jpg' ,
    mock: ''
  },

  { 
    label: 'Блоки керамзитовые', 
    cover: '/img/sections/kerablock.jpg' ,
    mock: ''
  },

  { 
    label: 'Керамзит', 
    cover: '/img/sections/keramzit.jpg',
    mock: ''
  },

  { 
    label: 'Металлические изделия', 
    cover: '/img/sections/metart.jpg',
    mock: ''
  },

  { 
    label: 'Кирпич облицовочный', 
    cover: '/img/sections/oblic.jpg',
    mock: 'oblic'
  },

  { 
    label: 'Окна деревянные', 
    cover: '/img/sections/okna.jpg' ,
    mock: ''
  },

  { 
    label: 'Плиты перекрытия', 
    cover: '/img/sections/plity.jpg',
    mock: ''
  },

]


</script>


<template>
  <ul class="sList">
    <li class="sList--item" v-for="section in sectins" :key="section.label"
      @click="$emit('sectionClick', section.mock)"
    >
      <img class="sList--image" :src="section.cover" :alt="section.label">
      <div class="sList--cover"></div>

      <div class="sList--label transformer">
        <p class="sList--text transformer--inner">{{ section.label }}</p>
      </div>
    </li>
  </ul>
</template>


<style scoped>

.sList {
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 0; padding: 0;
  padding-top: 60px;
  list-style: none;
}

.sList--item {
  position: relative;
  display: flex;
  min-height: 100px;
  width: 100%;

  border-radius: 2px;

  overflow: hidden;

  cursor: pointer;
  transition: .4s;
  transition-delay: .1s;
}

.sList--item:hover {
  min-height: 250px;
}

.sList--image {
  width: 100%; height: 100%;

  object-fit: cover;
  object-position: center;
  position: absolute;
}

.sList--cover {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(
    20deg, 
    rgba(0, 0, 0, .9),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.1)
  );
}

.sList--label {
  position: relative;
  margin: 0; padding: 0px;
  min-width: 20px;

  display: flex;
  justify-content: center;
  align-items: end;


  background: rgba(255,  255,  255,  1);
  color: black;

  transition: .4s;
  transition-delay: .1s;
}


.sList--item:hover .sList--label {
  color: white;
  background: rgba(0, 0,  0,  0);
}


.sList--text {
  letter-spacing: 1px;
  padding: 30px 50px;
  margin: 0;

  transition: .3s;
  transition-delay: .1s;
}


.sList--item:hover .sList--text {
  padding: 20px;
  font-size: 21px;
}

</style>