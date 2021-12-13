<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-item">
        About
      </div>
      <div class="top-bar-login top-bar-item">
        Login
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    document.body.classList.add('body_style')
  },
}
</script>

<style>
.top-bar {
  width: 100%;
  height: 30px;
  background-color: rgba(255, 194, 102, 0.8);
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 0;
  padding: 0;
  opacity: 0.9;
}
.top-bar-item {
  line-height: 30px;
  margin: 0 8px 0 8px;
  display: inline-block;
}
.top-bar-login {
  float: right;
}
body {
  
}
</style>