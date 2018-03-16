<template>
  <div class="jumbotron image-cover rounded-0" :style="{backgroundImage: coverImage}">
    <slot name="title"></slot>
    <slot name="slogan"></slot>
  </div>
</template>

<script>

export default {
  props: {
    coverImage: {
      type: String,
      default: './assets/image/background/Otaru_canal.jpg'
    }
  }
}
</script>

<style lang="scss">
.image-cover {
  padding-top: 75px;
  height: 50vh;
  background-image: url('~assets/image/background/Otaru_canal.jpg');
  background-size: cover;
  background-position: 50% 100%;
  background-attachment: fixed;
}
</style>
