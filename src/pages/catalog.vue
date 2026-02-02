<script setup>
import { RouterLink } from 'vue-router';

import sectionList       from '@/components/sectionList.vue';
import mobileSectionList from '@/components/mobileSectionList.vue';
import massonry          from '@/components/massonry.vue';
import CtlgFooter        from '@/components/ctlgFooter.vue';

let isMobile = window.innerWidth < 900

</script>


<template>
  <div class="ctlog">
    <div class="ctlog--sections">
      <sectionList v-if="!isMobile"></sectionList>
      <mobileSectionList v-else></mobileSectionList>
    </div>

    <div class="ctlog--itemsHolder" v-if="!isMobile">
      <massonry class="ctlog--itemList"></massonry>
    </div>

    <div class="ctlog--footer" v-if="!isMobile">
      <CtlgFooter class="ctlog--footerPanel"></CtlgFooter>
      
      <RouterLink :to="{ name: 'section', params: { id: '485' }}" class="ctlog--footerButton">Посмотреть весь каталог</RouterLink>
    </div>
  </div>
</template>


<style scoped>

.ctlog {
  display: grid;
  grid-template-rows: 1fr 80px;
  grid-template-columns: 2fr 4fr;
  gap: 20px;

  width: 100%; height: 100%;
}

.ctlog--sections {
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  padding-right: 10px;
}


.ctlog--itemsHolder {
}

.ctlog--itemList {

}

.ctlog--footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-top: 2px solid rgba(0, 0, 0, 0.001); */
  border-radius: 10px;
  overflow: hidden;

  background: hsl(190 10% 60%);
  padding: 0px 20px;
  margin-right: 20px;

  grid-column: span 2;
}


.ctlog--footerPanel {
  margin: 0; padding: 0;
  height: 100%;

}

.ctlog--footerButton {
  background: linear-gradient(
    to top right,
    rgba(255, 255, 255, .1),
    rgba(255, 255, 255, .3),
    rgba(255, 255, 255, .1)
  );

  color: white;

  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 6px;
  outline: none;

  margin-right: 20px;
  padding: 15px 30px;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 700;

  cursor: pointer;
  transition: .3s;
}

.ctlog--footerButton:hover {
  padding: 15px 50px;
  background: white;
  color: rgba(0, 0, 0, 1);
  /* font-weight: 300; */
}

@media screen and ( width < 900px ) {
  .ctlog {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  .ctlog--sections {
    padding-right: 0px;
  }
}

</style>