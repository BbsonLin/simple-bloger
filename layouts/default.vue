<template>
  <div>
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
    <nuxt/>
  </div>
</template>

<script>
import TopNavbar from '@/components/Navigation/TopNavbar';

export default {
  components: {
    TopNavbar
  }
}
</script>


<style>
</style>
