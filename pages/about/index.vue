<template>
  <div class="about-page">
    <!-- Header -->
    <HeaderCover class="text-white">
      <h1 slot="title">About Me</h1>
    </HeaderCover>
    <!-- Main -->
    <div class="d-flex flex-column justify-content-center text-center">
      <h1>Hello, <br> I'm Bobson.</h1>
      <br>
      <h1>哈囉, <br> 我是 Bobson.</h1>
    </div>
    <!-- Footer -->
  </div>
</template>

<script>
import HeaderCover from '@/components/HeaderCover'

export default {
  components: {
    HeaderCover
  }
}
</script>

<style lang="scss">
</style>
