<script setup>
import sections from '../../public/mocks/sections';

</script>


<template>
  <ul class="sectRouter">
    <li class="sectRouter--itemHolder"
      v-for="item in sections"
      @click="$emit('sectionRouteClick', item.mock)"
    >
      <div class="sectRouter--item">
        <a class="sectRouter--itemLink" :href="item.link">
          <img class="sectRouter--itemImg" :src="item.cover" :alt="item.label">
          <p class="sectRouter--itemLabel">{{ item.label }}</p>
        </a>
      </div>
    </li>
  </ul>
</template>


<style scoped>
.sectRouter {
  width: 100%; 
  /* height: 100%; */

  display: flex;
  justify-content: center;
  align-items: center;
  
  flex-wrap: wrap;
  gap: 20px;

  list-style: none;
  margin: 0; padding: 20px;
}

.sectRouter--item {
  position: relative;
  margin: 10px 0px;
  border-radius: 10px;

  cursor: pointer;
  transition: .3s;
}

.sectRouter--item:hover {
  transform: scale(1.05);
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .4);
}

.sectRouter--item::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  bottom: 0; right: 0;

  border-radius: 10px;
  border: 3px solid #3498db;
  z-index: 2;

  mask-image: linear-gradient(
    30deg,
    rgba(0, 0, 0, .1),
    rgba(0, 0, 0, .3),
    rgba(0, 0, 0, 0)
  );
}

.sectRouter--itemLink {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  overflow: hidden;

  cursor: pointer;
  transition: .3s;
}

.sectRouter--itemImg {
  width: 100%; height: 100px;
  object-fit: cover;
  object-position: center;
  display: block;
}

.sectRouter--itemLabel {
  margin: 0; padding: 10px 30px;
  background: white;
  font-weight: 300;
  letter-spacing: 1px;
}


</style>