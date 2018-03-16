<template>
  <div class="blog-page">
    <HeaderCover class="text-white"></HeaderCover>
    <section class="container">
      <PostList />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import HeaderCover from '@/components/UI/AppHeaderCover'

export default {
  components: {
    PostList,
    HeaderCover
  }
}
</script>

<style lang="scss">
</style>
