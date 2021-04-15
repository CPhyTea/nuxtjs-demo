<template>
  <div class="container">
      <div v-swiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="url" v-for="url in bannerUrls">
            <a class="slide-link" :href="url" target="_blank">
              <div class="slide-box" :style="`background-image: url('${url}')`" />
            </a>
          </div>
        </div>
        <div class="custom-swiper-pagination banner-swiper-pagination" />
      </div>
  </div>
</template>

<script lang="ts" src="./home.ts">
</script>

<style scoped lang="scss" src="./style.scss">

</style>
