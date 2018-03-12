<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <slot name="brand"></slot>
      <slot name="toggle"></slot>

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
