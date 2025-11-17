<script setup>
  import userIcon from '/public/icons/user.svg?component'
  import cartIcon from '/public/icons/cart.svg?component'
  import chatIcon from '/public/icons/chat.svg?component'

</script>


<template>
  <ul class="ftr__panelList">
    <li class="ftr__panelItem">
      <userIcon class="ftr__icon" />
      <p class="ftr__iconText">Личный кабинет</p>
    </li>
    
    <li class="ftr__panelItem">
      <chatIcon class="ftr__icon" />
      <p class="ftr__iconText">Поддержка</p>
    </li>
    
    <li class="ftr__panelItem">
      <cartIcon class="ftr__icon"  />
      <p class="ftr__iconText">Корзина</p>
    </li>
  </ul>
</template>


<style scoped>

.ftr__panelList {
  display: flex;
  justify-content: flex-start;
  width: 100%;

  list-style: none;
  margin: 0; padding: 0;
}

.ftr__panelItem {
  display: flex;
  align-items: center;
  border-radius: 10px;

  padding: 10px 20px;
  margin: 0 10px;

  cursor: pointer;
  transition: .3s;
}

.ftr__panelItem:hover {
  background: rgba(0, 0, 0, .5);
  color: aliceblue;
}

.ftr__panelItem:hover .ftr__icon {
  fill: whitesmoke;
}



.ftr__icon {
  fill: rgba(0, 0, 0, .6);
  scale: 1;
  padding: 0px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: .3s;
}

.ftr__iconText {
  margin: 0; padding: 0;
  font-size: 1rem;
  padding-bottom: 4px;
}

</style>