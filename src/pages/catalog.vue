<script setup>
import sectionList from '@/components/sectionList.vue';
import massonry from '@/components/massonry.vue';
import CtlgFooter from '@/components/ctlgFooter.vue';


</script>


<template>
  <div class="ctlog">
    <div class="ctlog--sections">
      <sectionList></sectionList>
    </div>

    <div class="ctlog--itemsHolder">
      <massonry class="ctlog--itemList"></massonry>
    </div>

    <div class="ctlog--footer">
      <div class="ctlog--footerMain transformer">
        <CtlgFooter class="ctlog--footerPanel transformer--inner"></CtlgFooter>
      </div>

      <button class="ctlog--footerButton">Посмотреть весь каталог</button>
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
  border-top: 2px solid rgba(0, 0, 0, 0.001);
  border-radius: 0px 10px 10px 0px;

  overflow: hidden;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 10%, 
    rgba(0, 0, 0, 0.2), 
    rgba(0, 0, 0, 0.4), 
    rgba(0, 0, 0, 0.6)
  );

  grid-column: span 2;
}

.ctlog--footerMain {
  display: flex;
  align-items: center;

  background: white;
  padding-left: 80px;
  height: 100%; width: 40%;
}

.ctlog--footerPanel {
  margin: 0; padding: 0;
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

</style>