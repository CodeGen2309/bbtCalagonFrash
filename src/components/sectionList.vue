<script setup>

let sectins = [
  { label: 'Арматурные изделия',    cover: '/public/img/sections/armatur.jpeg' },
  { label: 'Благоустройство',       cover: '/public/img/sections/blagoust.jpeg' },
  { label: 'Игровое оборудование',  cover: '/public/img/sections/detskoe.jpg' },
  { label: 'Двери деревянные',                 cover: '/public/img/sections/doors.jpg' },
  { label: 'Камни бетонные',        cover: '/public/img/sections/kamnibet.jpg' },
  { label: 'Блоки керамзитовые',    cover: '/public/img/sections/kerablock.jpg' },
  { label: 'Керамзит',              cover: '/public/img/sections/keramzit.jpg' },
  { label: 'Металлические изделия', cover: '/public/img/sections/metart.jpg' },
  { label: 'Кирпич облицовочный',   cover: '/public/img/sections/oblic.jpg' },
  { label: 'Окна деревянные',       cover: '/public/img/sections/okna.jpg' },
  { label: 'Плиты перекрытия',      cover: '/public/img/sections/plity.jpg' },
]


</script>


<template>
  <ul class="sList">
    <li class="sList--item" v-for="section in sectins" :key="section.label">
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