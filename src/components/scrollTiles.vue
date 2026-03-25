<script setup>
import mockData from '@mocks/sectionData.json'

const offers = mockData.items
</script>


<template>
  <div class="sTiles">
    <div class="sTiles--item" v-for="item in offers">
      <img class="sTiles--cover" :src="item['GALLERY'][0]" alt="">

      <div class="sTiles--labelHolder transformer">
        <p class="sTiles--itemLabel transformer--inner">{{ item.name }}</p>
      </div>
    </div>

    <!-- <pre class="sTiles--data" >
      {{ items }}
    </pre> -->
  </div>
</template>


<style scoped>

.sTiles {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  gap: 20px
}

.sTiles--item {
  position: relative;
  flex-grow: 1;
  border-radius: 10px;

  height: 200px;
  min-width: 33%;

  overflow: hidden;
}

.sTiles--cover {
  width: 100%; height: 100%;
  object-fit: cover;
}

</style>