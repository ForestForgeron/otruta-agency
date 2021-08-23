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
  gap: 75px;

  width: 100%;
  height: 568px;

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

.lang,
.menu__socials-link {
  color: #fff;

  font-size: 36px;
  font-weight: 700;

  transition: all 0.3s ease 0s;

  &:hover {
    color: #ff6058;
    cursor: pointer;
  }
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

  border-top: 27px solid transparent; //42
  border-right: 40px solid #fdfeff; //54
  border-bottom: 27px solid transparent; //42

  transition: all 0.5s ease-in 0s;
}

.menu__list .start-services,
li:nth-child(1):hover ~ .triangle {
  top: 15px;
}

.menu__list .start-portfolio,
li:nth-child(2):hover ~ .triangle {
  top: 150px;
}

.menu__list .start-team,
li:nth-child(3):hover ~ .triangle {
  top: 285px; //31.5vh;
}

.menu__list .start-contacts,
li:nth-child(4):hover ~ .triangle {
  top: 415px; //47vh;
}

@media screen and(max-height: 800px) {
  .lang,
  .menu__socials-link {
    font-size: 30px;
  }
  .menu__link {
    font-size: 40px;
  }

  .triangle {
    border-top: 27px solid transparent; //42
    border-right: 40px solid #fdfeff; //54
    border-bottom: 27px solid transparent; //42

    transition: all 0.5s ease-in 0s;
  }

  .menu__list .start-services,
  li:nth-child(1):hover ~ .triangle {
    top: 15px;
  }

  .menu__list .start-portfolio,
  li:nth-child(2):hover ~ .triangle {
    top: 150px;
  }

  .menu__list .start-team,
  li:nth-child(3):hover ~ .triangle {
    top: 285px; //31.5vh;
  }

  .menu__list .start-contacts,
  li:nth-child(4):hover ~ .triangle {
    top: 415px; //47vh;
  }
}

@media screen and(max-height: 650px) {
  .menu__list {
    gap: 50px;
  }
  .lang,
  .menu__socials-link {
    font-size: 26px;
  }
  .menu__link {
    font-size: 35px;
  }

  .triangle {
    border-top: 22px solid transparent; //42
    border-right: 35px solid #fdfeff; //54
    border-bottom: 22px solid transparent; //42
  }

  .menu__list .start-services,
  li:nth-child(1):hover ~ .triangle {
    top: 0;
  }

  .menu__list .start-portfolio,
  li:nth-child(2):hover ~ .triangle {
    top: 95px;
  }

  .menu__list .start-team,
  li:nth-child(3):hover ~ .triangle {
    top: 190px; //31.5vh;
  }

  .menu__list .start-contacts,
  li:nth-child(4):hover ~ .triangle {
    top: 290px; //47vh;
  }
}
</style>