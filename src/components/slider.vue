<script setup>
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel'
  import { ref } from 'vue'

  const props = defineProps({ 'images': Array })

  const currentSlide = ref(0)

  const slideTo = (nextSlide) => (currentSlide.value = nextSlide)

  const galleryConfig = {
    itemsToShow: 1,
    wrapAround: true,
    slideEffect: 'slide',
    mouseDrag: false,
    touchDrag: true,
    // gap: 20
    // height: 400,
  }

  const thumbnailsConfig = {
    // height: 80,
    itemsToShow: 10,
    // wrapAround: true,
    touchDrag: true,
    gap: 10,
  }
</script>


<template>
<div class="slider">
  <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
    <Slide v-for="image, index in images" :key="index">
      <div class="gallery--imageHolder">
        <img :src="image" alt="Gallery Image" class="gallery--backdrop" />
        <img :src="image" alt="Gallery Image" class="gallery--image" />
      </div>
    </Slide>
  </Carousel>

  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
    <Slide v-for="image, index in images" :key="index">
      <template #default="{ currentIndex, isActive }">
        <div
          :class="['thumbnail', { 'is-active': isActive }]"
          @click="slideTo(currentIndex)"
        >
          <img :src="image" alt="Thumbnail Image" class="thumbnail--image" />
        </div>
      </template>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</div>
</template>


<style scoped>
:root {
  background-color: #242424;
}

.slider {
  height: 400px;
}

#gallery {
  height: calc(100% - 70px);
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gallery--imageHolder {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  height: 100%;
  background: black;

  border-radius: 10px;
  overflow: hidden;
}

.gallery--backdrop {
  position: absolute;
  width: 110%; height: 110%;
  object-fit: cover;
  filter: blur(6px);
}

.gallery--image {
  position: relative;
  /* border-radius: 16px; */
}

#thumbnails {
  margin-top: 10px;
  height: 60px;
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


@media screen and (max-width: 600px) {
}
</style>
