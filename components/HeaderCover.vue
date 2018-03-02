<template>
  <div class="jumbotron image-cover rounded-0" :style="{backgroundImage: coverImage}">
    <slot name="title"></slot>
    <slot name="slogan"></slot>
  </div>
</template>

<script>
import socialImage from '~/assets/images/background/Otaru_canal.jpg'

export default {
  props: {
    coverImage: {
      type: String,
      default: socialImage
    }
  }
}
</script>

<style lang="scss">
.image-cover {
  height: 50vh;
  background-image: url('~assets/image/background/Otaru_canal.jpg');
  background-size: cover;
  background-position: 50% 100%;
  background-attachment: fixed;
}
</style>
