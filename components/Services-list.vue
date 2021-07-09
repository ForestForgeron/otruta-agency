<template>
  <div>
    <ul class="services">
      <li class="services__item">дизайн</li>
      <li class="services__item">програмування</li>
      <li class="services__item">фото/вiдео</li>
      <li class="services__item">маркетинг</li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

  .services {
    
  }

  .services__item {
    font-size: 73px;
    font-weight: 700;
    line-height: 87px;

    &:hover {
      text-decoration: underline;

      padding-bottom: 2px;

      color: #6f00ff;
    }
  }
</style>