<template>
  <div>
    <Header />
    <div class="blog-main-wrapper">
      <div class="row justify-between q-my-xl">
        <div class="col col-sm-5">
          <img src="@/assets/img/cover/need-ortho-cover.jpg" />
        </div>
        <div class="col col-sm-7 q-pl-lg q-mb-xl">
          <span>
            Teeth, Care
          </span>
          <h4 class="q-my-md">
            HOW DO I LOOK AFTER MY BRACES? THE ULTIMATE GUIDE
          </h4>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/layout/Footer.vue";
import Header from "../components/layout/Header.vue";
export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
.blog-main-wrapper {
  max-width: 1200px;
  margin: auto;
  span {
    font-size: 18px;
    color: ff8484;
  }
  h4 {
    font-size: 57px;
    line-height: initial;
    font-weight: 300;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
