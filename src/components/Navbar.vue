<template>
  <nav style="background: #883ca3;">
    <div class="nav-wrapper" style="background: #883ca3;">
      <router-link to="/" class="brand-logo">
        <img class="barLogo" src="@/assets/logo1.png" alt="">
      </router-link>
      <ul class="right hide-on-med-and-down">
        <router-link
        tag="li"
        to="/"
        exact
        active-class="active"
        >
            <a href="#">Create</a>
        </router-link>
        <router-link
        tag="li"
        to="/list"
        active-class="active"
        >
            <a href="#">List of tasks</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}

.barLogo {
    height: 60px;
}
</style>