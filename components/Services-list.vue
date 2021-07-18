<template>
  <div>
    <ul class="services">
      <li class="services__li" v-for="item in menuItemsUkr" :key="item.id">
        <div
          class="services__text"
          ref="servicesText"
          :style="popoverEffect(item.id)"
        >
          {{ item.description }}
        </div>
        <span
          class="services__item"
          :style="item.isHover ? { color: item.hoverColor } : ''"
          @mouseenter="hoverEffect(item.id)"
          @mouseleave="hoverEffect(item.id)"
        >
          {{ item.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDescription: "",
      descriptionWidth: [],

      menuItemsUkr: [
        {
          id: 0,
          name: "дизайн",
          hoverColor: "#6f00ff",
          isHover: false,
          description:
            "Дизайнимо сайти та застосунки для смартфонів. Створюємо візуальну айдентику для бізнесу або редизайнимо її. Упаковуємо продукт та оформляємо усі носії дизайну. Анімуємо та малюємо ілюстрації",
        },

        {
          id: 1,
          name: "програмування",
          hoverColor: "#c7d401",
          isHover: false,
          description:
            "Створюємо застосунки для смартфонів та веб-сайти: лендінги, онлайн-портали, інтернет-магазини",
        },
        {
          id: 2,
          name: "фото/вiдео",
          hoverColor: "#ff6058",
          isHover: false,
          description:
            "Створюємо рекламні відео. Фотографуємо вас, ваш продукт та бізнес",
        },
        {
          id: 3,
          name: "маркетинг",
          hoverColor: "#f3a0ba",
          isHover: false,
          description:
            "Допомагаємо з позиціонуванням. Знаходимо ідеї, як відбудуватись конкурентів та як стати зручним сервісом для клієнтів. Упаковуємо продукт та просуваємо його. Створюємо та налаштуємо рекламу.",
        },
      ],

      menuItemsEng: ["design", "programming", "photo/video", "marketing"],
    };
  },

  methods: {
    hoverEffect(itemId) {
      this.menuItemsUkr[itemId].isHover = !this.menuItemsUkr[itemId].isHover;
      this.currentDescription = this.menuItemsUkr[itemId].description;
    },

    popoverEffect(itemId) {
      const descriptionStyle = {};
      if (this.menuItemsUkr[itemId].isHover) {
        descriptionStyle["backgroundColor"] =
          this.menuItemsUkr[itemId].hoverColor;
        descriptionStyle["visibility"] = "visible";
      }

      return descriptionStyle;
    },
  },

  computed: {},
};
</script>

<style lang="scss">
.services {
  display: flex;
  flex-direction: column;
}

.services__li {
  position: relative;
}

.services__text {
  position: absolute;
  bottom: -5px;
  right: calc(100% + 20px);

  min-width: 815px;
  //height: 270px;
  padding: 67.5px 72px;

  visibility: hidden;

  text-transform: uppercase;

  font-size: 29px;
  font-weight: 700;
  line-height: 27px;
  color: #fff;
}

.services__item {
  font-size: 73px;
  font-weight: 700;
  line-height: 87px;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
}
</style>
