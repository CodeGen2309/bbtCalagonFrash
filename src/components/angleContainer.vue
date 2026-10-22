<script></script>


<template>
  <div class="angle angle-right">
    <div class="angle--transformer">
      <div class="angle--content">
        <slot>Декоративный конетйнер</slot>
      </div>
    </div>
  </div>
</template>



<style>
.angle {}

.angle--transformer {
  background-color: white;
}

.angle-right .angle--transformer {
  transform: skewX(40deg);
}

.angle-right .angle--content {
  transform: skewX(-40deg);
}

.angle-left .angle--transformer{
  transform: skewX(-40deg);
}

.angle-left .angle--content {
  transform: skewX(40deg);
}

.angle--content {
  padding: 10px 20px;
}


</style>