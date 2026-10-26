<script setup>
  import { onMounted } from 'vue';
  import { animate, stagger, inView } from 'motion';
  import { toRaw, ref } from 'vue';

  import ThreeColsCard  from './threeColsCard.vue';


  const props = defineProps([ 'offers', 'sectionid'])
  const offersGrid = ref([])



  // FUNCTIONS
  // ------------------------------------


  function mountedAnim() {
    animate(
      '.tCols--item',
      { opacity: [0, 1], transform: ['translateY(-20px)', 'translateY(0px)'] },
      { duration: .5, delay: stagger(.1, { from: 'center' }) }
    )
  }


  function setupOffersGrid() {
    const rawOffers = toRaw(props.offers)

    const offersGrid = rawOffers.reduce(
      (acc, item, index) => {
        acc[index % 3].push(item)
        return acc
      },
      [[], [], []]
    )

    return offersGrid
  }


  onMounted(() => {
    offersGrid.value = setupOffersGrid()
    setTimeout(mountedAnim, 500)
  })
</script>





<template>
<div class="tCols">
  <div class="tCols--column" v-for="column in offersGrid">
    <ThreeColsCard v-for="item in column"
      class="tCols--item" 
      :key="item.ID" :data="item"
      :sectionid="sectionid" 
    />
  </div>
</div>
</template>





<style scoped>

.tCols {
  display: flex;
  gap: 20px
}

.tCols--column {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 35%;
}

.tCols--item {
  opacity: 0;  
}

</style>