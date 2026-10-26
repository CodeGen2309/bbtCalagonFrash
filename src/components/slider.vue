<script setup>

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { ref } from 'vue'

const props = defineProps({ 'images': Array })
const currentSlide = ref(1)

const galleryConfig = {
  itemsToShow: 1.2,
  wrapAround: true,
  slideEffect: 'slide',
  mouseDrag: false,
  autoplay: 10000,
  touchDrag: true,
  gap: 10,
}

const thumbnailsConfig = {
  // height: 80,
  itemsToShow: 10,
  touchDrag: true,
  gap: 10,
}


// FUNCTIONS
function slideTo (nextSlide) {
  currentSlide.value = nextSlide
}

defineExpose({ slideTo })
</script>


<template>
<div class="slider" ref="sliderInstance">
  <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
    <Slide class="gallery--slide" v-for="image, index in images" :key="index">
        <img :src="image.src" alt="Gallery Image" 
          class="gallery--image" :class="image.class"
       />
    </Slide>
  </Carousel>

  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
    <Slide v-for="image, index in images" :key="index" @click="slideTo(index)">
        <img :src="image.src" alt="Gallery Image" 
          class="thumbnail" :class="image.class"
       />
    </Slide>
  </Carousel>
</div>
</template>


<style scoped>
:root {
  background-color: rgba(0, 0, 0, .4);
}

.slider {
}

#gallery {
  height: calc(100% - 70px);
  max-height: 100%;
}

.carousel {
  --vc-nav-border-radius: 100%;
}


.gallery--slide {
  position: relative;
}


.gallery--image {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gallery--footnote {
  position: absolute;
  bottom: 10px; left: 10px;
  z-index: inherit;


  margin: 0;
  padding: 10px 20px;
  border-radius: 10px;
  background:rgba(255, 255, 255, .6);
  color: black;
  font-size: 1.4rem;
  font-weight: 300;
}


.gallery--offer {
  width: 70%;
  height: 70%;
  position: relative;
}

#thumbnails {
  margin-top: 10px;
  height: 60px;
  border: none;
  outline: none;
}


.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}


.thumbnail--image {
  object-fit: cover;
}


.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}

.carousel__next,
.carousel__prev {
  background: rgba(255, 255, 255, .5);
  margin: 10px;
}


@media screen and (max-width: 600px) {
}
</style>
