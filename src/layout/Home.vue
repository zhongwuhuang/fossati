<template>
  <div class="home">
    <div class="header">
      <router-link to="/index">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.header{
  height: 70px;
  border: 1px solid red;
}
</style>