<template>
  <div class="blog-page">
    <HeaderCover class="text-white"></HeaderCover>
    <section class="container">
      <PostList :posts="loadedPosts"/>
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
  },
  computed: {
    loadedPosts () {
      return this.$store.getters.getLoadedPosts
    }
  }
}
</script>

<style lang="scss">
</style>
