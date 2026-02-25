<script setup>
import apirator from '@/lib/apirator.js';
import { onMounted, ref } from 'vue';

const filterData = ref([{
  "name": "Ширина", 
  "id": "width",
  "values": ["150мм", "200мм", "300мм", "400мм", "500мм"]
}])

onMounted( async () => {
  filterData.value = await apirator.getFilter().then(res => res.json())
  console.log(filterData.value);
})
</script>


<template>
<div class="ctwall">
  <div class="ctwall--optHolder" v-for="item in filterData" :id="item.id">
    <p class="ctwall--optName">{{ item.name }}</p>

    <ul class="ctwall--optList">
      <li class="ctwall--optValue" v-for="value in item.values">{{ value }}</li>
    </ul>
  </div>
</div>
</template>


<style scoped>
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
  margin: 70px 0px;
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

.ctwall--optValue {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 10px 20px;
  background: hsl(190 10% 90%);
  border-radius: 4px;

  color: rgba(0, 0, 0, 1);
  font-size: .9rem;
  letter-spacing: 1px;
  font-weight: 400;
  
  transition: .3s;
  cursor: pointer;
}


.ctwall--optValue:hover {
  background: hsl(190 10% 50%);
  /* color: hsl(190 10% 100%); */
  color: white;
}

</style>