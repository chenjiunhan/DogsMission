<template>
  <div class="content_area">
    <router-link to="/choose_character">
      <img src="../assets/dogs_mission.png" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<style scoped>
.content_area{
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
}
</style>