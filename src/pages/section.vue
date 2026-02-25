<script setup>
  import { onMounted, ref } from "vue"
  import { animate, stagger } from 'motion';
  import { useRoute, RouterLink } from "vue-router";
  
  import apirator from '@/lib/apirator'
  import productList from '@/components/productList.vue';
  import pageFilter from '@/components/filter.vue';

  let route = useRoute()
  let sectionID = route.params.id
  let isMobile = window.innerWidth < 900

  let section = ref({})
  let prodList = ref([])


  async function showOffAnim () {
    let tiles = document.querySelectorAll('.msnry--item')

    animate(
      tiles,
      { opacity: [1, 0] },
      { duration: .5 }
    ).then(() => {
      resetFilter()
    })
  }

  async function resetFilter () {
    let tiles = document.querySelectorAll('.msnry--item')

    animate(
      tiles,
      { opacity: [0, 1],  transform: ['translateY(-20px)', 'translateY(0px)'] },
      { duration: .5, delay: stagger(.1) }
    )
  }

  async function getSection (sectoinId) {
    let req = await apirator.getSectionItems(sectoinId)
    return await req.json()
  }

  onMounted( async () => {
    if (!sectionID) { sectionID = 126 }

    let res = await getSection(sectionID)
    section.value = res.section
    prodList.value = res.items
  })
</script>


<template>
  <div class="sect">
    <div class="sect--cover" v-if="!isMobile">
      <img class="sect--coverImage" :src="section.PICTURE_FILE">
      <p class="sect--coverTitle">{{  section.NAME  }}</p>

      <RouterLink to="/" class="sect--backButton">Вернуться в каталог</RouterLink>
    </div>

    <div class="sect--sidebar" v-if="!isMobile">
      <pageFilter class="sect--filter" />
    </div>

    <div class="sect--productList">
      <div class="sect--cover" v-if="isMobile">
        <img class="sect--coverImage" :src="section.PICTURE_FILE">
        <p class="sect--coverTitle">{{  section.NAME  }}</p>

        <RouterLink to="/" class="sect--backButton">Вернуться в каталог</RouterLink>
      </div>

      <productList class="sect--prodListComp" :items="prodList"/>
    </div>
  </div>
</template>


<style scoped>

.sect {
  display: grid;
  grid-template-columns: minmax(400px, 2fr) 4fr;
  grid-template-rows: 200px 1fr;
  gap: 20px;

  box-sizing: border-box;


  width: 100%; height: 100%;
  overflow: hidden;
}

.sect--cover {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  grid-column: span 2;
  border-radius: 10px;
  overflow: hidden;
}

.sect--coverImage {
  position: absolute;
  width: 110%; height: 110%;
  object-fit: cover;
  object-position: center;
  filter: blur(6px) brightness(0.7);
}

.sect--coverTitle {
  position: relative;

  font-size: 2rem;
  font-weight: 600;
  padding: 30px;

  color: white;
  z-index: 1;
}

.sect--coverTitle::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 1px solid white;

  mask-image: linear-gradient(
    to right top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );

  transform: translateX(3px) translateY(3px);
  z-index: -1;
}

.sect--coverTitle::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 1px solid white;

  mask-image: linear-gradient(
    to right top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );

  transform: translateX(-3px) translateY(-3px);
  z-index: -1;
}

.sect--sidebar {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  padding: 0 10px;

  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
}

.sect--filter {
  /* height: 60%; */
  padding: 40px 0px;
}

.sect--productList {
  padding: 40px 20px;
  flex-grow: 1;
  overflow-y: scroll;  
}


.sect--backButton {
  position: absolute;
  bottom: 10px; left: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, .2);
  border: 3px solid white ;
  color: white;
  text-decoration: none;

  cursor: pointer;
  transition: .3s;
}

.sect--backButton:hover {
  background: white;
  color: rgba(0, 0, 0, 8);
}

@media screen and (max-width: 900px) {
  .sect {
    grid-template-columns: 1fr;
    grid-template-rows:1fr;
    grid-auto-flow: row;
    gap: 0px;
  }

  .sect--cover {
    height: 30dvh;
    font-size: .8rem;
    border-radius: 0px 0px 10px 10px;
  }

  .sect--coverTitle {
    width: 70%;
    text-align: center;
  }

  .sect--backButton {
    display: none;
  }

  .sect--productList {
    padding: 10px;
  }

  .sect--prodListComp {
    padding: 30px 0px;
  }
  
}

</style>