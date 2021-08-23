<template>
  <div class="default-layout">
    <div
      :class="
        isNavbarClosed
          ? chooseNav + ' navbarMainClosed'
          : chooseNav + ' navbarMainOpen'
      "
      @mouseenter="moveNav"
      @mouseleave="moveNav"
    >
      <Nav-menu />
    </div>
    <div class="content">
      <div
        class="small-logo-wrapper"
        :style="this.$route.path == '/portfolio' ? 'display: none;' : ''"
      >
        <Small-logo />
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarClosed: true,
    };
  },

  methods: {
    moveNav() {
      this.isNavbarClosed = !this.isNavbarClosed;
    },
  },

  computed: {
    chooseNav() {
      if (this.$route.path == "/") {
        return "navbarMain";
      } else {
        return "navbar";
      }
    },
  },
};
</script>

<style lang="scss">
@import url("static/fonts/EngraversGothic/style.css");
@import url("static/fonts/EngraversGothic-Bold/style.css");

* {
  box-sizing: border-box;
  font-family: "Engravers Gothic", Arial, sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

html,
body,
p,
ul,
li,
button,
input,
textarea {
  margin: 0;
  padding: 0;
  border-width: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

.default-layout {
  display: flex;
}

.container {
}

.navbar,
.navbarMain {
  //width: 26%;
  width: 495px;
  height: 100vh;

  left: 0;

  transition: all 1s ease-in-out 0.3s;
}

.navbar {
  position: absolute;
  z-index: 3;
}

.navbarMain {
  position: relative;
}

.navbarMainOpen {
  margin-right: 11.5vw;
}

.navbarMainClosed {
  left: -450px;

  //width: 26%;
}
.small-logo-wrapper {
  position: absolute;
  top: 5vh;
  right: 5vw;
}
</style>
