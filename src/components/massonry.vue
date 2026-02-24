<script setup>
  import tiles from '@mocks/massonry.json';

</script>


<template>
  <div class="msnry">
    <router-link v-for="item in tiles" :key="item.name" 
      :to="{ name: 'itemCard', params: { id: item.id } }"
      class="msnry--item" :class="'msnry--item-' + item.size"
    >
      <img class="msnry--itemImg" :src="item.img" alt=""  loading="lazy" />
      
      <div class="msnry--labelHolder transformer">
        <p class="msnry--itemLabel transformer--inner">{{ item.name }}</p>
      </div>
    </router-link>
  </div>
</template>


<style scoped>
  .msnry {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    width: 100%; height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .msnry--item {
    position: relative;
    flex-grow: 1;
    border-radius: 10px;
    overflow: hidden;

    text-decoration: none;
    color: black;

    transition: .3s;
  }


  .msnry--item::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
  }


  .msnry--item:hover {
    /* box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1); */
    box-shadow: 2px 2px 10px 1px rgba(255, 255, 255, .4);
  }

  .msnry--item-normal {
    width: 20%;
  }

  .msnry--item-wide {
    width: 40%;  
  }


  .msnry--itemImg {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;

    object-fit: cover;
    object-position: center;
  }

  .msnry--labelHolder {
    position: absolute;
    bottom: 0; left: 0;

    padding: 10px 40px;
    margin: 0px 30px ;
    margin-bottom: -1px;
    min-width: 5%;

    background: white;
    transition: .3s;
  }

  .msnry--item:hover .msnry--labelHolder {
    min-width: 60%;
  }

  .msnry--itemLabel {
    margin: 0;
    padding: 4px 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>