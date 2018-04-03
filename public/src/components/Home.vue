<template>
  <div class="home">
    <div class="container is-fluid">
      <div class="notification">
        <h1>{{ msg }}</h1>
        This container is
        <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Sphere"
    };
  }
};
</script>