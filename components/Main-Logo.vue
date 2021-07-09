<template>
  <div class="mainLogo">
    <img
      src="~/assets/logo-big.svg"
      alt="lol"
      class="mainLogo__img"
    >
    
    <div class="slogan">
      <img
        src="~/assets/heart.svg"
        alt="heart"
        class="heart"
      >
      <span class="text">
        OTRUTA - зачіпає центральну нервову систему і твоє сердечко
      </span>
    </div>
  </div>
  
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .mainLogo {
    padding-top: 1.5vw;
   

    &__img {
      width: 50vw;
      height: 70vh;
    }
  }

  .slogan {
    
    display: flex;
    gap: 10px;
    justify-content: center;

    min-width: 50vw;

    margin-top: 13vh;
  }

  .heart {
    max-width: 38px;
    max-height: 50px;
  }

  .text {
    margin-bottom: 10px;

    font-size: 33px;
    font-weight: 700;

    text-align: center;
  }
  
</style>