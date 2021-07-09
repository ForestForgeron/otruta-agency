<template>
  <div>
    <div class="small-logo-wrapper">
      <Small-logo />
    </div>
    
    <div class="services-list-wrapper">
      <Services-list />
    </div>

  </div>
</template>

<script>
import SmallLogo from '../components/Small-logo.vue'
export default {
  
}
</script>

<style l
SmallLogoang="scss">

  .services-list-wrapper {
    position: absolute;
    bottom: 13vh;
    right: 8vw;
  }

  .small-logo-wrapper {
    position: absolute;
    top: 5vh;
    right: 5vw;
  }
</style>