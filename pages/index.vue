<template>
  <div class="home-page">
    <header-cover class="text-white">
      <h1 slot="title">HOME PAGE</h1>
    </header-cover>
    <section class="container">
      <div class="row">
        <div class="col-md-4" v-for="i in 12" :key="i">
          <post-card
            id="i"
            thumbnail=""
            title="Post title"
            previewText="Post Preview"></post-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderCover from '@/components/HeaderCover';
import PostCard from '@/components/Posts/PostCard';

export default {
  components: {
    HeaderCover,
    PostCard
  }
}
</script>

<style lang="scss">
</style>
