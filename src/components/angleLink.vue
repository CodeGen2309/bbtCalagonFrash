<script setup>

const props = defineProps({ 'link': String, 'text': String })

</script>


<template>
  <RouterLink class="angleLink" :to="{name: props.link}">
    <div class="angleLink--transformer">
      <p class="angleLink--inner">{{ props.text }}</p>
    </div>
  </RouterLink>
</template>


<style scoped>
.angleLink {
  text-decoration: none;
  color: inherit;
}

.angleLink--transformer {
  position: relative;
  transform: skewX(30deg);
  margin-left: -20px;
  padding: 0px 20px;
  background-color: white;
  transition: .3s;
}

.angleLink--transformer:hover {
  /* background: linear-gradient(
    to left bottom,
    rgba(0, 0, 0, .1),
    rgba(0, 0, 0, .2),
    rgba(0, 0, 0, .1)
  ); */
  
  padding: 0px 40px;
  box-sizing: border-box;
}

.angleLink--transformer::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  /* border-top: 1px solid rgba(0, 0, 0, .5); */
  border-left: 1px solid rgba(0, 0, 0, .3);

  /* mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0) 50%
  ); */
}

.angleLink--inner {
  transform: skewX(-30deg);
  padding: 20px 30px; 
  margin: 0;
}

</style>