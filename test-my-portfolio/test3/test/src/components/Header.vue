<template>
  <div
    :class="[
      'container d-flex justify-content-between',
      { init: active, fixed: active },
    ]"
  >
    <div class="brand">
      <h1>Kenneth's Portfolio</h1>
    </div>
    <nav class="nav">
      <ul
        class="
          social-media-list
          d-flex
          align-items-center
          justify-content-around
        "
      >
        <a href="https://www.linkedin.com/in/kenneth-tuan-1533321a0/"
          ><li class="list-item pointer">
            <i class="fab fa-linkedin-in"></i></li
        ></a>
        <a href="https://github.com/Kenneth-Tuan"
          ><li class="list-item pointer"><i class="fab fa-github"></i></li
        ></a>
        <a href="mailto:kenneth9417@gmail.com"
          ><li class="list-item pointer"><i class="fas fa-envelope"></i></li
        ></a>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.active = window.scrollY > 80 ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base";
@import "../assets/scss/reset";
.container {
  position: fixed;
  top: 0;
  height: 120px;
  width: 100%;
  background-color: #fff;
  opacity: 0.8;
  transition: all 0.2s ease-out;
}
.pointer {
  cursor: pointer;
}
a,
a:hover,
a:focus,
a:visited {
  color: #000;
}
.brand {
  padding-left: 6vw;
  height: 100%;
  h1 {
    height: 100%;
    @include font-setting("Robot", normal, 700, 32px, 120px, #000);
    transition: all 0.2s ease-out;
  }
}
.nav {
  padding-right: 6vw;
  height: 100%;
  .social-media-list {
    height: 100%;
    width: 10vw;
    transition: all 0.5s ease-out;
  }
}
.init {
  height: 0px;
}
.fixed {
  // position: fixed;
  z-index: 10;
  top: 0;
  height: 80px;
}
.fixed .brand {
  h1 {
    line-height: 80px;
  }
}
.fixed .nav {
  .social-media-list {
    height: 100%;
  }
}
// transition
</style>