<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { animate, stagger } from 'motion';

const props = defineProps([ 'offers' ])




// FUNCTIONS
// ------------------------------------
function mountedAnim() {
  animate(
    '.sTiles--item',
    { opacity: [0, 1], transform: ['translateY(-20px)', 'translateY(0px)'] },
    { duration: .5, delay: stagger(.1) }
  )
}


// HOOKS
// ------------------------------------
onMounted( () => {
  setTimeout(mountedAnim, 1000)
})

</script>


<template>
  <div class="sTiles">
    <RouterLink v-for="item in offers" :key="item.ID" 
      :to="{ name: 'itemCard', params: { id: item.ID } }" 
      class="sTiles--item" 
    >
      <img loading="lazy" class="sTiles--cover" :src="item['GALLERY'][0]" alt="">


      <div class="sTiles--labelHolder ">
        <p class="sTiles--itemLabel">{{ item.NAME }}</p>
      </div>
    </RouterLink>
  </div>
</template>


<style scoped>

.sTiles {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  gap: 35px;
  padding: 10px;
}

.sTiles--item {
  position: relative;
  display: block;

  height: 35dvh;
  min-width: 25%;

  border-radius: 10px;
  flex-grow: 1;
  
  opacity: 0;
  overflow: hidden;
}


.sTiles--cover {
  width: 100%;  height: 100%;
  object-fit: cover;
}


.sTiles--labelHolder {
  position: absolute;
  bottom: 0; left: 0;
  background: white;
  padding: 14px 20px;
  padding-left: 40px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 40%;
  transform: skewX(30deg) translateX(-20px);
}


.sTiles--item:hover {
  box-shadow: 0 0 10px 2px  rgba(0, 0, 0, .2);
}


.sTiles--item:hover .sTiles--labelHolder {
  width: 100%;
}


.sTiles--itemLabel {
  margin: 0; padding: 0;
  letter-spacing: 1px;

  color: black;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transform: skewX(-30deg);
}

</style>