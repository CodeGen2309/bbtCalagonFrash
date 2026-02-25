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
<div class="iFilter">
  <div class="iFilter--optHolder" v-for="item in filterData" :id="item.id">
    <p class="iFilter--optName">{{ item.name }}</p>

    <ul class="iFilter--optList">
      <li class="iFilter--optValue" v-for="value in item.values">{{ value }}</li>
    </ul>
  </div>
</div>
</template>


<style scoped>
.iFilter {
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  gap: 50px;
}

.iFilter--optHolder {
  /* background: hsl(190 10% 95%); */
  background: #ecf0f1;
  border-radius: 10px;
}

.iFilter--optName {
  position: relative;
  border-radius: 10px 10px 0px 0px;
  width: 99%;

  font-size: 1.2rem;
  letter-spacing: 1px;


  background: linear-gradient(
    to right,
    rgba(189, 195, 199, .4),
    rgba(236, 240, 241, 0)
  );


  padding: 10px;
  margin: 0;
}


.iFilter--optList {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
  gap: 16px;

  list-style: none;
  font-weight: 300;
  padding: 20px;
}

.iFilter--optValue {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 10px 20px;
  background: rgba(0, 0, 0, .05);
  border-radius: 4px;

  font-size: .9rem;
  letter-spacing: 1px;
  font-weight: 400;

  border: 1px solid rgba(0, 0, 0, .2);

  
  transition: .3s;
  cursor: pointer;
}


.iFilter--optValue:hover {
  background: rgba(0, 0, 0, .4);
  /* color: hsl(190 10% 100%); */
  color: white;
}

</style>