<template>
  <div class="home-page">
    <top-navbar class="navbar-dark bg-transparent fixed-top">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </top-navbar>
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
import TopNavbar from '@/components/TopNavbar';
import HeaderCover from '@/components/HeaderCover';
import PostCard from '@/components/Posts/PostCard';

export default {
  components: {
    TopNavbar,
    HeaderCover,
    PostCard
  }
}
</script>

<style lang="scss">
</style>
