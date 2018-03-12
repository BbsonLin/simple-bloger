<template>
  <div class="side-container">
    <div class="side-backdrop"
        v-if="show"
        @click="$emit('close')"></div>
    <div class="side-navbar navbar-dark bg-dark" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.show)
  }
}
</script>


<style lang="scss">
.side-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.side-navbar {
  position: absolute;
  right: 0;
  width: 200px;
  height: 100vh;
  z-index: 10000;
  // background-color: white;
}

@media (min-width: 992px) {
  .side-navbar {
    display: none;
  }
}
</style>

