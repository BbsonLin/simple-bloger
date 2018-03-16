<template>
  <article class="text-center">
    <h1>{{ title }} (ID: {{ id }})</h1>
    <p>{{ previewText }}</p>
  </article>
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
    }
  }
}
</script>
