<template>
  <div class="default-layout">
    
    <div
      
      :class="isNavbarClosed ? chooseNav + ' navbarMainClosed' : chooseNav + ' navbarMainOpen' "
      @mouseenter="moveNav"
      @mouseleave="moveNav"
      
    >
      <Nav-menu  />
    </div>
    <div class="content">
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
    classNav() {
      return {
        navbarMain: this.$route.path == '/',
        navbar: this.$route.path != '/',
        navbarMainClosed: this.isNavbarClosed,
        
      }
    },

    chooseNav() {
      if (this.$route.path == '/') {
        return 'navbarMain';
      } else {
        return 'navbar';
      }
      
    }
  },

  mounted() {
    console.log(this.$route)
  }
  
}
  

</script>

<style lang="scss">

@import url('static/fonts/EngraversGothic/style.css');
@import url('static/fonts/EngraversGothic-Bold/style.css');

* {
  box-sizing: border-box;
  font-family: 'Engravers Gothic', Arial, sans-serif;
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
  width: 26%;
  height: 100vh;

  left: 0;


  transition: all 1s ease-in-out;
}

.navbar {
  position: absolute;

  
}

.navbarMain {
  position: relative;

  

}

.navbarMainOpen {
  margin-right: 11.5vw;
}

.navbarMainClosed {
  //position: relative;
  left: -22%;

  width: 26%;
  //padding-right: 100px;
  //margin-right: 21vw;

    
}


</style>
