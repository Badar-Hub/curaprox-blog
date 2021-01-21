<template>
  <router-view />
</template>

<script>
export default {
  name: "LayoutDefault",

  components: {},

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: futura-light;
  src: url("./assets/fonts/curaprox/futurapro/futurapro_light/curaprox-font-futura_light.otf");
}
@font-face {
  font-family: futura-medium;
  src: url("./assets/fonts/curaprox/futurapro/futurapro_medium/curaprox-font-futurapro_medium.otf");
}
@font-face {
  font-family: futura-bold;
  src: url("./assets/fonts/curaprox/futurapro/futurapro_bold/curaprox-font-futura_bold.otf");
}

@font-face {
  font-family: info-light;
  src: url("./assets/fonts/curaprox/infodisplaypro/curaprox-font-infodisplaypro_book.otf");
}
@font-face {
  font-family: info-medium;
  src: url("./assets/fonts/curaprox/infodisplaypro/curaprox-font-infodisplaypro_semibold.otf");
}
@font-face {
  font-family: info-bold;
  src: url("./assets/fonts/curaprox/infodisplaypro/curaprox-font-infodisplaypro_bold.otf");
}

.font-futura {
  font-family: "futura-light" !important;
  font-weight: 300 !important;
  letter-spacing: 2px;
  &-semi-medium {
    font-family: "futura-medium" !important;
    font-weight: 400 !important;
    letter-spacing: 2px;
  }
  &-medium {
    font-family: "futura-medium" !important;
    font-weight: 500 !important;
    letter-spacing: 2px;
  }
  &-semi-bold {
    font-family: "futura-bold" !important;
    font-weight: 600 !important;
    letter-spacing: 2px;
  }
  &-bold {
    font-family: "futura-bold" !important;
    font-weight: 700 !important;
    letter-spacing: 2px;
  }
}

.font-info {
  font-family: "info-light" !important;
  font-weight: 300 !important;
  letter-spacing: 2px;
  &-semi-medium {
    font-family: "info-medium" !important;
    font-weight: 400 !important;
    letter-spacing: 2px;
  }
  &-medium {
    font-family: "info-medium" !important;
    font-weight: 500 !important;
    letter-spacing: 2px;
  }
  &-semi-bold {
    font-family: "info-bold" !important;
    font-weight: 600 !important;
    letter-spacing: 2px;
  }
  &-bold {
    font-family: "info-bold" !important;
    font-weight: 700 !important;
    letter-spacing: 2px;
  }
}

body {
  padding: 0;
  margin: 0;

  h2 {
    font-family: futura-light, sans-serif;;
  }
  h3 {
    font-family: futura-light;
  }
  h4 {
    font-family: futura-light;
  }
  p,
  li {
    font-family: info-light !important;
  }

  a {
    font-family: info-light !important;
  }

  ul {
    margin: auto 0 !important;
  }

}
</style>
