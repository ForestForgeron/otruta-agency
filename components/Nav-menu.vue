<template>
  <div class="menu">
    <div class="menu__languages">
      <NuxtLink to="#" class="lang"> укр </NuxtLink>
      <NuxtLink to="#" class="lang"> en </NuxtLink>
    </div>

    <ul class="menu__list">
      <li class="menu__list-item">
        <NuxtLink to="services" class="menu__link"> послуги </NuxtLink>
      </li>
      <li class="menu__list-item">
        <NuxtLink to="portfolio" class="menu__link"> роботи </NuxtLink>
      </li>
      <li class="menu__list-item">
        <NuxtLink to="team" class="menu__link"> команда </NuxtLink>
      </li>
      <li class="menu__list-item">
        <NuxtLink to="contacts" class="menu__link"> контакти </NuxtLink>
      </li>
      <div class="triangle start-home"></div>
    </ul>
    <div
      :class="isClosed ? 'menu__socials menu__socials_column' : 'menu__socials'"
    >
      <a href="" class="menu__socials-link">inst</a>
      <a href="" class="menu__socials-link">fb</a>
      <a href="" class="menu__socials-link">be</a>
      <a href="" class="menu__socials-link">yt</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isNavbarClosed"],

  data() {
    return {
      isClosed: this.isNavbarClosed,
    };
  },
};
</script>

<style lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11%;

  width: 495px;
  //min-width: 375px;
  height: 100vh;
  min-height: 710px;

  padding: 50px 0 75px;
  background-color: #000;

  text-transform: uppercase;
}

.menu__languages {
  //margin-bottom: 34%;
}

.menu__list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18%;

  width: 100%;
  height: 67%;

  align-items: center;
  justify-content: flex-start;
}

.menu__list-item {
  //margin-bottom: 45%;

  &:nth-last-child(-n + 1) {
    //margin-bottom: 0;
  }
}

.menu__languages {
  display: flex;
  gap: 115px;
}

.menu__socials {
  display: flex;
  gap: 40px;

  &_column {
    flex-direction: column;
  }
}

.menu__socials-link {
  font-size: 41px;
}

.lang,
.menu__socials-link {
  color: #fff;

  font-weight: 700;

  transition: all 0.3s ease 0s;

  &:hover {
    color: #ff6058;
    cursor: pointer;
  }
}

.lang {
  font-size: 38px;
}

.menu__link {
  font-size: 50px;
  font-weight: 700;

  color: #fff;

  transition: all 0.3s ease 0s;

  &:focus,
  &:hover {
    color: #ff6058;
    cursor: pointer;
  }
}

.triangle {
  position: absolute;
  right: 0;
  top: 0;

  width: 0;
  height: 0;

  border-top: 42px solid transparent;
  border-right: 54px solid #fdfeff;
  border-bottom: 42px solid transparent;

  transition: all 0.5s ease 0s;
}

.menu__list .start-about,
li:nth-child(1):hover ~ .triangle {
  top: 0;
}

.menu__list .start-about,
li:nth-child(2):hover ~ .triangle {
  top: 160px;
}

.menu__list .start-about,
li:nth-child(3):hover ~ .triangle {
  top: 330px;
}

.menu__list .start-about,
li:nth-child(4):hover ~ .triangle {
  top: 490px;
}
</style>