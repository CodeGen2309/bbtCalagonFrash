<script setup>
import sectionList from '@/components/sectionList.vue';

</script>


<template>
  <div class="ctlog">
    <div class="ctlog--sections">
      <sectionList></sectionList>
    </div>

    <div class="ctlog--itemList">
      <div class="ctlog--item ctlog--item-wide"></div>
      <div class="ctlog--item ctlog--item-normal"></div>
      <div class="ctlog--item ctlog--item-wide"></div>
      <div class="ctlog--item ctlog--item-wide"></div>
      <div class="ctlog--item ctlog--item-normal"></div>
      <div class="ctlog--item ctlog--item-normal"></div>
      <div class="ctlog--item ctlog--item-normal"></div>
    </div>

    <div class="ctlog--footer"></div>
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


.ctlog--itemList {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.ctlog--item {
  flex-grow: 1;
  background: rebeccapurple;
  border-radius: 10px;
  opacity: 0.7;
}

.ctlog--item-normal {
  width: 20%;
}

.ctlog--item-wide {
  width: 40%;  
}


.ctlog--footer {
  /* background: rgba(0, 0, 0, .3); */
  grid-column: span 2;
  border-top: 1px solid rgba(0, 0, 0, .3);
  border-bottom: 1px solid rgba(0, 0, 0, .3);
}


</style>