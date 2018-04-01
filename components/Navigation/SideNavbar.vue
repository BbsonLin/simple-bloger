<template>
    <div class="side-container">
      <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
        <div class="side-backdrop"
            v-if="show"
            @click="$emit('close')"></div>
      </transition>
      <transition
          enter-active-class="animated slideInRight"
          leave-active-class="animated slideOutRight">
        <div class="side-navbar navbar-dark bg-dark" v-if="show">
          <slot></slot>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
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

