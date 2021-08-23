<template>
  <div class="projects">
    <div class="projects__list">
      <carousel
        class="projects__carousel"
        :perPage="5"
        :paginationEnabled="true"
        :scrollPerPage="true"
      >
        <slide
          class="projects__slide"
          v-for="project in projectsList"
          :key="project.id"
        >
          <div class="projects__slide-inner-wrapper">
            <div class="projects__img-wrapper">
              <img
                :src="project.src1"
                alt="project image"
                class="projects__img"
              />
              <span class="projects__img-mask"></span>
            </div>
            <div class="projects__img-wrapper">
              <img
                :src="project.src2"
                alt="project image"
                class="projects__img"
              />
              <span class="projects__img-mask"></span>
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
      projectsList: [
        {
          id: "0",
          src1: "/img/image3.png",
          src2: "/img/image6.png",
        },
        {
          id: "1",
          src1: "/img/image7.png",
          src2: "/img/image5.png",
        },
        {
          id: "2",
          src1: "/img/image4.png",
          src2: "/img/image7.png",
        },
        {
          id: "3",
          src1: "/img/image6.png",
          src2: "/img/image3.png",
        },
        {
          id: "4",
          src1: "/img/image5.png",
          src2: "/img/image7.png",
        },
        {
          id: "5",
          src1: "/img/image4.png",
          src2: "/img/image7.png",
        },
        {
          id: "6",
          src1: "/img/image5.png",
          src2: "/img/image3.png",
        },
        {
          id: "7",
          src1: "/img/image6.png",
          src2: "/img/image4.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.projects {
  &__list {
    margin-left: 100px;
    margin-top: 28px;
  }

  &__carousel {
  }

  &__slide {
    margin-right: 20px;
    flex-grow: unset;
    flex-shrink: unset;
  }

  &__slide-inner-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__img-wrapper {
    position: relative;
  }
  &__img {
    width: 29.5vw;
    height: 23vw; //445px;

    object-fit: cover;
  }

  &__img-mask {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    transition: all 0.3s ease 0s;

    //opacity: 0;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
  }
}
</style>
