<template>
  <div>
      <Header />
      <div class="row blog-main-wrapper">
          <div class="col col-sm-5">
              <img src="@/assets/img/cover/need-ortho-cover.jpg" />
          </div>
          <div class="col col-sm-7">
              <span>
                  Teeth, Care
              </span>
              <h4>
                  HOW DO I LOOK AFTER MY BRACES? THE ULTIMATE GUIDE
              </h4>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Footer from '../components/layout/Footer.vue'
import Header from '../components/layout/Header.vue'
export default {
  components: { Header, Footer },

}
</script>

<style lang="scss">
.blog-main-wrapper{
    span {
        font-size: 18px;
    }
    h4 {
        font-size: 57px;
    }
    img {
        width: 100%;
    }
}
</style>