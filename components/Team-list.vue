<template>
  <div class="team">
    <div class="team__list" ref="scroll_container" @mousewheel="scrollX">
      <carousel
        :perPage="4"
        :paginationEnabled="false"
        ref="slider"
        class="team__carousel"
      >
        <slide v-for="person in teamList" :key="person.id" class="team__slide">
          <div
            class="team__item"
            @mouseenter="hoverEffect(person.id)"
            @mouseleave="hoverEffect(person.id)"
          >
            <div
              class="team__description"
              ref="teamDescription"
              :style="popoverEffect(person.id)"
            >
              {{ currentDescription }}
            </div>

            <img
              src="~/assets/eagle.webp"
              alt="photo of the team"
              class="team__photo"
              :style="
                person.isHover
                  ? {
                      outlineColor: person.hoverColor,
                      transition: 'all 0.3s ease 0s',
                      cursor: 'pointer',
                    }
                  : ''
              "
            />
            <div class="team__name">
              {{ person.name }}
            </div>
            <div
              class="team__field"
              :style="
                person.isHover
                  ? {
                      color: person.hoverColor,
                      transition: 'all 0.3s ease 0s',
                      cursor: 'pointer',
                    }
                  : ''
              "
            >
              {{ person.field }}
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDescription: "",
      descriptionWidth: [],

      teamList: [
        {
          id: "0",
          name: "катя",
          field: "дизайн",
          photo: "",
          hoverColor: "#6f00ff",
          isHover: false,
          description:
            "Convallis nunc vitae diam lacrpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvinar ac neque bendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvinar ac n.",
        },
        {
          id: "1",
          name: "юра",
          field: "програмування",
          photo: "",
          hoverColor: "#c7d401",
          isHover: false,
          description:
            "Convallis nunc vitae diam lacus dc gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fer ac neque eget euismod.",
        },
        {
          id: "2",
          name: "стас",
          field: "фото\\вiдео",
          photo: "",
          hoverColor: "#ff6058",
          isHover: false,
          description:
            "Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvinar ac neque bendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvinar ac neque eg eget euismod.",
          position: "0",
        },
        {
          id: "3",
          name: "макс",
          field: "реклама",
          photo: "",
          hoverColor: "#f3a0ba",
          isHover: false,
          description:
            "Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod.",
          position: "0",
        },
        {
          id: "4",
          name: "Иштван",
          field: "квантовая цитология",
          photo: "",
          hoverColor: "#f3a0ba",
          isHover: false,
          description:
            "Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod.",
        },
        {
          id: "5",
          name: "Хидео Кодзима",
          field: "геймдев",
          photo: "",
          hoverColor: "#f3a0ba",
          isHover: false,
          description:
            "Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod.",
        },
        {
          id: "6",
          name: "Параска",
          field: "надои молока",
          photo: "",
          hoverColor: "#f3a0ba",
          isHover: false,
          description:
            "Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod.",
          position: "0",
        },
        {
          id: "7",
          name: "Гена",
          field: "добрый крокодил",
          photo: "",
          hoverColor: "#f3a0ba",
          isHover: false,
          description:
            "Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod.",
          position: "0",
        },
        {
          id: "8",
          name: "Jason Lee",
          field: "marketing",
          photo: "",
          hoverColor: "#f3a0ba",
          isHover: false,
          description:
            "Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod.",
        },
        {
          id: "9",
          name: "Mary Sue",
          field: "witch bitch",
          photo: "",
          hoverColor: "#f3a0ba",
          isHover: false,
          description:
            "Convallis nunc vitae diam lacus duis. Tortor volutpat libero dictum enim habitasse nulla mattis. Turpis ac gravida dolor viverra bibendum vel. Fringilla nulla malesuada sed ipsum ante. Varius non odio ut est ipsum fermentum blandit. Senectus pulvit euismod.",
        },
      ],
    };
  },

  mounted() {
    this.getWidth();
    console.log(this.$refs.slider);
    document.addEventListener("wheel", (e) => {
      //document.getElementById('scroll_container').scrollLeft += e.deltaY;
      this.$nextTick(() => {
        if (e.wheelDelta > 0) {
          const lol = this.$refs.slider.getPreviousPage();
          this.$refs.slider.goToPage(lol);
        } else {
          const kek = this.$refs.slider.getNextPage();
          this.$refs.slider.goToPage(kek);
        }
      });

      // console.log(this.$refs.slider);
    });
  },

  methods: {
    scrollX(e) {
      this.$refs["scroll_container"].scrollLeft += e.deltaY;
    },

    hoverEffect(itemId) {
      this.teamList[itemId].isHover = !this.teamList[itemId].isHover;
      this.currentDescription = this.teamList[itemId].description;
    },

    getWidth() {
      this.descriptionWidth = this.$refs.teamDescription.map((item) => {
        return item.clientWidth;
      });
    },

    popoverEffect(itemId) {
      const descriptionStyle = {};
      if (this.teamList[itemId].isHover) {
        descriptionStyle["backgroundColor"] = this.teamList[itemId].hoverColor;
        descriptionStyle["visibility"] = "visible";
        descriptionStyle["transition"] = "all 0.3s ease 0s";
      }

      if (this.teamList[itemId].position == "0") {
        descriptionStyle["right"] = "100%";
      } else {
        descriptionStyle["left"] = "100%";
      }

      return descriptionStyle;
    },
  },
};
</script>

<style lang="scss">
.team {
  &__list {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;

    max-width: 92vw;
    max-height: 77.5vh;

    overflow: hidden;
  }
  &__item {
    position: relative;

    display: flex;
    flex-direction: column;

    //max-height: 655px;
    //max-width: 365px;
    //width: 19vw;

    font-size: calc(34px + 12 * (100vw / 1920));

    font-weight: 700;
  }

  &__photo {
    //width: 18vw;
    height: 55.5vh;
    outline: 3px transparent solid;
    object-fit: cover;
  }

  &__description {
    position: absolute;
    visibility: hidden;
    z-index: 2;
    top: 30px;

    //width: 25vw;
    //height: 45vh;

    min-width: 600px;

    //padding: 8.3vh 1vw 8.3vh 1.75vw;
    padding: 81px 18px 81px 33px;

    font-size: calc(20px + 12 * (100vw / 1920));
    line-height: 27px;
    font-weight: 700;

    color: #fff;
  }

  &__name {
    line-height: 50px;
  }

  &__field {
    line-height: 60px;
  }

  &__carousel {
    width: 100%;
  }
  &__slide {
    width: 370px;
    margin-right: 75px;
    flex-grow: unset;
    flex-shrink: unset;
    padding: 3px;
  }
}
</style>