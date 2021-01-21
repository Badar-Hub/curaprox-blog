<template>
  <div>
    <Header />
    <div class="blog-main-wrapper q-pa-md">
      <div @click="braces()" style="cursor:pointer" class="grid-row q-my-xl q-mx-auto">
        <div>
          <img class="bg-img-page" src="@/assets/img/blog/need-ortho-cover-800x480.jpg" />
        </div>
        <div class="q-pl-lg q-mb-xl">
          <span>
            Teeth, Care
          </span>
          <h4 class="text-h4-sp q-my-md">
            HOW DO I LOOK AFTER MY BRACES? THE ULTIMATE GUIDE
          </h4>
        </div>
      </div>
      <div class="grid-row q-my-xl q-mx-auto">
        <div @click="gumCare()" style="cursor:pointer" class="q-pa-sm q-mx-auto">
          <img
            class="img-small"
            src="@/assets/img/blog/need-gumcare-800x480.jpg"
          />
          <br />
          <span>Gum, Care</span>
          <br />
          <h2 class="q-my-xs">TAKING CARE OF YOUR GUMS: THE ULTIMATE GUIDE</h2>
        </div>
        <div @click="teethWhitening()" style="cursor:pointer" class="q-pa-sm q-mx-auto">
          <img
            class="img-small"
            src="@/assets/img/blog/need-replace-toothbrush-thumbnail-new-800x480.jpg"
          />
          <br />
          <span>Teeth, Care</span>
          <br />
          <h2 class="q-my-xs">HOW OFTEN SHOULD YOU REPLACE YOUR TOOTHBRUSH?</h2>
        </div>
        <div @click="cleanTeeth()" style="cursor:pointer" class="q-pa-sm q-mx-auto">
          <img
            class="img-small"
            src="@/assets/img/blog/need-post-cleen-teeth-lily-1-800x480.jpg"
          />
          <br />
          <span>Teeth, Care</span>
          
          <h2 class="q-my-xs">CLEAN TEETH: THE ULTIMATE GUIDE</h2>
        </div>
      </div>
      <div class="row container-blog">
        <div class="col col-sm-4 sidebar q-pa-md">
         <div class="sticky">
         <h3>Topics</h3>
          <ul>
            <li><a href="#">Gum</a></li>
            <li><a href="#">Sensitivity</a></li>
            <li><a href="#">Implant</a></li>
            <li><a href="#">Teeth</a></li>
            <li><a href="#">Whitening</a></li>
            <li><a href="#">Care</a></li>
            <li><a href="#">Baby</a></li>
          </ul>
          </div>
        </div>
        <div class="col col-sm-8 col-xs-12 q-pa-md">
          <h3>Featured Posts</h3>
          <br />
          <div @click="teethWhitening()" style="cursor:pointer" class="row">
            <div class="col col-xs-12 col-sm-4">
              <img
                src="@/assets/img/blog/need-post-whitening-new-800x480-web.jpg"
              />
            </div>
            <div class="col col-xs-12 col-sm-8 blog-pad">
              <span>Teeth, Whitening</span>
              <h2 class="q-my-xs">TEETH WHITENING TOOTHPASTE</h2>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <img
                src="@/assets/img/blog/need-soother-800x480.jpg"
              />
            </div>
            <div class="col col-xs-12 col-sm-8 blog-pad">
              <span>Baby</span>
              <h2 class="q-my-xs">DUMMIES, SOOTHERS, PACIFIERS: THE ULTIMATE GUIDE</h2>
            </div>
          </div>
          <br />
          <div @click="sensitiveTeeth()" style="cursor:pointer" class="row">
            <div class="container-image">
              <img title="Sensitive Teeth: The Ultimate Guide" src="@/assets/img/blog/need-post-sensitive-teeth-florian-1-800x480.jpg"/>
              <div class="center">
              <span style="color:white">
                Sensitive, Teeth
              </span>
               <h2 class="q-my-xs" style="text-transform: uppercase">Sensitive Teeth: The <br /> Ultimate Guide</h2>
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <img
                src="@/assets/img/blog/need-babys-header-800x480.jpg"
              />
            </div>
            <div class="col col-xs-12 col-sm-8 blog-pad">
              <span>Teeth, Care, Baby</span>
              <h2 class="q-my-xs">HOW DO I TAKE CARE OF MY CHILD'S TEETH?</h2>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <img
                src="@/assets/img/blog/curaprox-need-fresh-breath-800x480.jpg"
              />
            </div>
            <div class="col col-xs-12 col-sm-8 blog-pad">
              <span>Teeth, Care</span>
              <h2 class="q-my-xs">HOW DO I GET RID OF BAD BREATH? THE ULTIMATE GUIDE</h2>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="container-image">
              <img title="Sensitive Teeth: The Ultimate Guide" src="@/assets/img/blog/need-pragnancy-800x480.jpg"/>
              <div class="center-second">
              <span style="color:white">
                Sensitive, Teeth
              </span>
               <h2 class="q-my-xs" style="text-transform: uppercase">How Do I Look After My <br />Oral Health During <br />Pregnancy – The Ultimate <br /> Guide</h2>
              </div>
            </div>
          </div>
          <br />
          <div @click="implant()" style="cursor:pointer" class="row">
            <div class="col-xs-12 col-sm-4">
              <img
                src="@/assets/img/blog/need-implant-800x480.jpg"
              />
            </div>
            <div class="col col-xs-12 col-sm-8 blog-pad">
              <span>Implant, Care</span>
              <h2 class="q-my-xs">HOW DO I LOOK AFTER MY DENTAL IMPLANTS? THE ULTIMATE GUIDE</h2>
            </div>
          </div>
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
  methods: {
    braces() {
      this.$router.push("braces")
    },
    gumCare(){
      this.$router.push("gum-care")
    },
    cleanTeeth(){
      this.$router.push("clean-teeth")
    },
    sensitiveTeeth(){
      this.$router.push("sensitive-teeth")
    },
    teethWhitening(){
      this.$router.push("teeth-whitening")
    },
    implant(){
      this.$router.push("implant")
    }
  }
};
</script>

<style lang="scss">
.blog-main-wrapper {
  max-width: 1200px;
  margin: auto;
  .container-image {
    position: relative;
    img { 
      width: 100%;
      height: auto;
      filter: brightness(70%);
    }
    .center {
      position: absolute;
      top: 40%;
      width: 100%;
      text-align: center;
      font-size: 18px;
      color: white;
      @media(max-width: 599px) {
        top: 25%;
      }
    }
    .center-second {
      position: absolute;
      top: 30%;
      width: 100%;
      text-align: center;
      font-size: 18px;
      color: white;
      @media(max-width: 599px) {
        top: 13%;
      }
    }
  }
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    padding: 5px;
  }
  .grid-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  .text-h4-sp{
    @media (max-width: 599px) {
      font-size: 34px!important;
    }
  }
  .bg-img-page {
    width: 100%
  }
  .blog-pad {
    padding-left: 20px;
    @media (max-width: 599px) {
      padding-left: 0px;
    }
  }
  .sidebar {
    @media(max-width: 599px) {
      display:none
    }
  }
  span {
    font-size: 18px;
    color: #ff8484;
  }
  h2 {
    font-size: 35px;
    line-height: initial;
  }
  h3 {
    font-size: 30px;
    font-family: info-light!important;
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
  .img-small {
    max-width: 380px;
    width: 100%;
    height: 227px;
  }
  ul{
    padding: 0
  }
  li{
    list-style-type: none;
    padding: 9px 0;

  }
  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }
}
</style>
