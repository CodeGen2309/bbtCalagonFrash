<script setup>
  import { onMounted, defineProps } from 'vue';
  import { RouterLink } from 'vue-router';

  import setupEnv from '@/setupEnv';
  

  let props = defineProps([ 'items', 'title', 'cover' ])

  let mocks = [
    { 
      'name': 'Атлант',     
      'img': `${setupEnv.assetDir}/img/plitka/atlant.jpg`,
      'link': '#'
    },

    { 
      'name': 'Фантазия', 
      'img': `${setupEnv.assetDir}/img/plitka/fantazy.jpg`,
      'link': '#'
    },

    { 
      'name': 'Классико',
      'img': `${setupEnv.assetDir}/img/plitka/klassiko.jpeg`,
      'link': '#'
    },

    { 
      'name': 'Фантазия',
      'img': `${setupEnv.assetDir}/img/plitka/fantazy2.jpeg`,
      'link': '#'
    },

    { 
      'name': 'Терасса',
      'img': `${setupEnv.assetDir}/img/plitka/terassa.jpeg`,
      'link': '#'
    },

    { 
      'name': 'Еще Атлант',
      'img': `${setupEnv.assetDir}/img/plitka/atlant2.jpg`,
      'link': '#'
    },

    { 
      'name': 'Атлант',     
      'img': `${setupEnv.assetDir}/img/plitka/atlant.jpg`,
      'link': '#'
    },

    { 
      'name': 'Фантазия', 
      'img': `${setupEnv.assetDir}/img/plitka/fantazy.jpg`,
      'link': '#'
    },

    { 
      'name': 'Классико',
      'img': `${setupEnv.assetDir}/img/plitka/klassiko.jpeg`,
      'link': '#'
    },

    { 
      'name': 'Фантазия',
      'img': `${setupEnv.assetDir}/img/plitka/fantazy2.jpeg`,
      'link': '#'
    },

    { 
      'name': 'Терасса',
      'img': `${setupEnv.assetDir}/img/plitka/terassa.jpeg`,
      'link': '#'
    },

    { 
      'name': 'Еще Атлант',
      'img': `${setupEnv.assetDir}/img/plitka/atlant2.jpg`,
      'link': '#'
    },

    { 
      'name': 'Атлант',     
      'img': `${setupEnv.assetDir}/img/plitka/atlant.jpg`,
      'link': '#'
    },

    { 
      'name': 'Фантазия', 
      'img': `${setupEnv.assetDir}/img/plitka/fantazy.jpg`,
      'link': '#'
    },

    { 
      'name': 'Классико',
      'img': `${setupEnv.assetDir}/img/plitka/klassiko.jpeg`,
      'link': '#'
    },

    { 
      'name': 'Фантазия',
      'img': `${setupEnv.assetDir}/img/plitka/fantazy2.jpeg`,
      'link': '#'
    },

    { 
      'name': 'Терасса',
      'img': `${setupEnv.assetDir}/img/plitka/terassa.jpeg`,
      'link': '#'
    },

    { 
      'name': 'Еще Атлант',
      'img': `${setupEnv.assetDir}/img/plitka/atlant2.jpg`,
      'link': '#'
    },

  ]

  onMounted( async () => {
    if (!props.items) { props.items = mocks }
  })
</script>


<template>
  <div class="msnry">
    <RouterLink v-for="item in items" :key="item.ID" 
      :to="{ name: 'ctitem', params: { id: item.ID } }"
      class="msnry--item" 
    >
      <img class="msnry--itemImg" :src="item['GALLERY'][0]" alt="" />

      <div class="msnry--labelHolder transformer">
        <p class="msnry--itemLabel transformer--inner">{{ item.NAME }}</p>
      </div>
    </RouterLink>
  </div>
</template>


<style scoped>
.msnry {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;

  width: 100%; height: 100%;
}

.msnry--item {
  position: relative;
  /* flex-grow: 1; */

  border-radius: 10px;
  overflow: hidden;
  height: 200px;
  width: 28%;

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

  overflow: hidden;
  width: 50%;

  background: white;
  transition: .3s;
}

.msnry--item:hover .msnry--labelHolder {
  width: 90%;
}

.msnry--itemLabel {
  margin: 0;
  padding: 4px 0;
  font-size: 1rem;
  letter-spacing: 1px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}

@media screen and (max-width: 900px) {
  .msnry {
    padding: 80px 0px;
    justify-content: space-between;
    gap: 20px;
  }

  .msnry--item {
    width: 45%;
    height: 35dvh;
    flex-grow: 1;
  }

  .msnry--itemLabel {
    font-size: .9rem;
  }
  
}
</style>