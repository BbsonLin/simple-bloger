<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <slot name="brand"></slot>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <slot></slot>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.navbar {
  min-height: 75px;
}
</style>
