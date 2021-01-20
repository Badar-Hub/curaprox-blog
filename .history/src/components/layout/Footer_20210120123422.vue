<template>
  <div>
    <footer>
      <div class="footer-af">
        <div class="footer-after">
          <div class="footer-after-inner">
            <div class="footer-after-inner-text">
              <p style="font-size: 16px">© Curaprox.PK - All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer-af {
  background-color: #002440;
  color: white;
}
.footer-after {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}
.footer-after .footer-after-inner {
  display: flex;
  flex-direction: column;
  background-color: #002440;
  text-align: left;
}
.footer-after .footer-after-inner ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  color: white;
}
.footer-after .footer-after-inner a {
  color: white;
}
.footer-af p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
