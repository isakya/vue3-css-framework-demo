<template>
  <div class="home">
    <header>CSSjiagou</header>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
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
