<script setup>
  import userIcon from '/public/icons/user.svg?component'
  import cartIcon from '/public/icons/cart.svg?component'
  import chatIcon from '/public/icons/chat.svg?component'

</script>


<template>
  <ul class="ftr--panelList">
    <li class="ftr--panelItem">
      <userIcon class="ftr--icon" />
      <p class="ftr--iconText">Личный кабинет</p>
    </li>
    
    <li class="ftr--panelItem">
      <chatIcon class="ftr--icon" />
      <p class="ftr--iconText">Чат с менеджером</p>
    </li>
    
    <li class="ftr--panelItem">
      <cartIcon class="ftr--icon"  />
      <p class="ftr--iconText">Корзина</p>
    </li>
  </ul>
</template>


<style scoped>

.ftr--panelList {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  list-style: none;
  margin: 0; padding: 0;
}

.ftr--panelItem {
  display: flex;
  align-items: center;

  padding: 15px 20px;
  border-radius: 10px;
  /* background: hsl(190 10% 100%); */
  background: white;
  font-weight: 400;

  cursor: pointer;
  transition: .3s;
}

.ftr--panelItem:hover {
  background: hsl(190 10% 40%);
  color: aliceblue;
}

.ftr--panelItem:hover .ftr--icon {
  fill: whitesmoke;
}



.ftr--icon {
  fill: rgba(0, 0, 0, .6);
  scale: 1;
  padding: 0px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: .3s;
}

.ftr--iconText {
  margin: 0; padding: 0;
  font-size: 1rem;
  padding-bottom: 4px;
}

</style>