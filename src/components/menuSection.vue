<script setup>
defineProps(['cover', 'menu'])

</script>



<template>
  <div class="smenu" @mouseleave="$emit('leave')">
    <img class="smenu__cover" 
      v-if="cover" :src="cover"
    >

    <ul class="smenu__list">
      <li class="smenu__listItem"
        v-for="(item, index) in menu" :key="item.link"
        @mouseenter="$emit('hover', item)"
      >
      <a class="smenu__link" :href = "item.link">
        {{ item.text }}
      </a>

      <hr class="smenu__decr" v-if="index < menu.length - 1">
      </li>
    </ul>
  </div>
</template>


<style scoped>
.smenu {
  background: white;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, .4);
  /* min-width: 400px; */

  display: flex;
  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow: hidden;

  transition: .3s;
}


.smenu__list {
  list-style: none;
  padding: 0;
  overflow: scroll;
  width: 100%;
  max-height: 300px;
}


.smenu__list_downed {
  margin: 240px 0 0 0;
}


.smenu__list::-webkit-scrollbar {
  display: none;
}


.smenu__listItem {
}


.smenu__link {
  display: block;
  text-decoration: none;
  color: rgba(0, 0, 0, .7);

  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;

  border-radius: 10px;
  padding: 20px 10px;
  margin: 0 10px;
  transition: .3s;
}


.smenu__link:hover {
  background: rgba(72, 126, 176, .7);
  color: white;
}


.smenu__cover {
  /* position: absolute; */
  width: 80%; top: 30px; height: 200px;
  padding: 20px;
  /* box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .2); */
  object-fit: cover;
  object-position: center;
}


.smenu__decr {
  margin: 0 auto; padding: 0;
  width: 100px; border: none;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
}


.sideFade-enter-active,
.sideFade-leave-active {
  transform: translateY(-100px);
  opacity: 0;
}

.subFade-enter-active,
.subFade-leave-active {
  transform: translateX(-20px);
  opacity: 0;
}

</style>