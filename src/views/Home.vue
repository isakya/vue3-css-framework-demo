<template>
  <div class="home">
    <header>CSSjiagou</header>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {

  },
}
</script>
<style lang="scss" scoped>
header {
  width: 200px;
  height: 200px;
  background: rgba($color: #000000, $alpha: .4);
  color: #fff;
  @include box-center(center, center);
}
</style>
