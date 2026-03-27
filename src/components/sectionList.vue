<script setup>
import { ref } from 'vue';

const props = defineProps([ 'sections' ])
const emit  = defineEmits(['sectionUpdated'])
const activeSectin = ref('126')


function updateSection (sectionID) {
  activeSectin.value = sectionID
  emit('sectionUpdated', sectionID)
}

</script>


<template>
  <ul class="sList">
    <div class="sList--item" 
      v-for="section in sections" :key="section.ID"
      :class="{ 'sList--item-active': section.ID == activeSectin }"
      @click="updateSection(section.ID)"
    >
      <img loading="lazy" class="sList--image" 
        :src="section.PICTURE_FILE" 
        :alt="section.PICTURE_FILE"
      >
      
      <div class="sList--cover"></div>

      <div class="sList--label">
        <p class="sList--text">{{ section.NAME }}</p>
      </div>
    </div>
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

  font-size: .9rem;
  letter-spacing: 1px;

  border-radius: 10px;
  overflow: hidden;

  transition: .4s;
  transition-delay: .1s;
  cursor: pointer;
}


.sList--item-active,
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
  width: 60%;

  display: flex;
  align-items: end;

  color: black;
  background: rgba(255, 255,  255, 1);

  transform: skewX(20deg);
  margin-left: -30px;

  transition: .4s;
  transition-delay: .1s;
}


.sList--item-active .sList--label,
.sList--item:hover .sList--label {
  margin-left: -50px;
  width: 100%;
  background: rgba(0, 0,  0,  0);
}


.sList--text {
  letter-spacing: 1px;
  text-align: start;
  padding: 30px 50px;
  margin: 0;

  
  transition-delay: .1s;
  transform: skewX(-20deg);
}

.sList--item-active .sList--text,
.sList--item:hover .sList--text {
  /* padding: 20px; */
  font-size: 21px;
  color: white;
}

</style>