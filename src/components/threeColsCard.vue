<script setup>

const props = defineProps([ 'data', 'sectionid'])

</script>

<template>
<RouterLink class="sTiles--item" 
  :to="{ name: 'itemCard', params: { id: data.ID, section: sectionid } }" 
>
  <img loading="lazy" class="sTiles--cover" :src="data['PREVIEW_PICTURE_FILE']" alt="">

  <div class="sTiles--labelHolder ">
    <p class="sTiles--itemLabel">{{ data.NAME }}</p>
  </div>
</RouterLink>
</template>

<style scoped>

.sTiles--item {
  position: relative;
  display: block;

  border-radius: 10px;
  
  overflow: hidden;
}


.sTiles--cover {
  width: 100%;  height: 100%;
  object-fit: cover;
}


.sTiles--labelHolder {
  position: absolute;
  bottom: 0; left: 0;
  background: white;
  padding: 14px 20px;
  padding-left: 40px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 40%;
  transform: skewX(30deg) translateX(-20px);
}


.sTiles--item:hover .sTiles--labelHolder {
  width: 100%;
}


.sTiles--itemLabel {
  margin: 0; padding: 0;
  letter-spacing: 1px;

  color: black;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transform: skewX(-30deg);
}

</style>