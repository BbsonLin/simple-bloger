<template>
  <div class="card mb-5">
    <img class="card-img-top" :src="thumbnail" :alt="title+' image'">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ previewText }}</p>
      <nuxt-link class="btn btn-primary" :to="postLink">Read it</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    postLink () {
      return this.isAdmin ? '/admin/' + this.id : '/post/' + this.id
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  transition-duration: .5s;

  &:hover {
    box-shadow: 0px 12px 19px -7px rgba(0, 0, 0, 0.3);
  }
}
</style>
