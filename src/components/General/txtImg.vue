<template>
  <div>
    <div class="txtimg">
      <div class="text">
        <h2>{{h2Text}}</h2>
        <h3>{{h3Text}}</h3>
      </div>
      <div class="img">
        <img :src="`${img}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextBlockWithImg",
  props: {
    h2Text: String,
    h3Text: String,
    img: String,
  },
};
</script>

<style scoped>
.txtimg {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  max-height: 280px;
  margin: 3% auto;
  justify-content: space-between;
  background-color: #f9f9f9;
  text-align: left;
  text-transform: uppercase;
}
.text {
  max-width: 70%;
}
.img {
  max-width: 30%;
}
img {
  width: 100%;
}
h2 {
  font-size: 1.5rem;
}
h3 {
  font-size: 2rem;
  margin: 0;
}
</style>