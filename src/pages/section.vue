<script setup>
  import massonry from '@/components/massonry.vue';

</script>


<template>
  <div class="sect">
    <div class="sect--cover">
      <img class="sect--coverImage" src="/public/img/plitka/fantazy2.jpeg">
      <p class="sect--coverTitle">Тротуарная плитка</p>
    </div>

    <div class="sect--sidebar">
      <p>Sidebar</p>
    </div>

    <div class="sect--productList">
      <massonry></massonry>
    </div>
  </div>
</template>


<style scoped>

.sect {
  display: grid;
  grid-template-columns: 1fr 2fr;
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
  align-items: center;
  background: rgba(0, 0, 0, .1);
  box-sizing: border-box;
}

.sect--productList {
}

</style>