

<template>


  <router-view/>
</template>

<script setup>


</script>

<style lang="scss">


body{

background-image: url("@/assets/imgs/fondo1.jpg");
background-size: cover;
  background-position: center;
  background-attachment: fixed;
position: absolute;
width: 100%;
max-width: 100%;
height: 100%;
  font-size: clamp(0.5rem,1rem,2rem);
  object-fit: cover;
  box-sizing: border-box;
  margin: 0 auto;
  // overflow: hidden;
  text-decoration: none !important;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
top: 0;
left: 0;
 overflow: hidden;
 font-size: clamp(0.5rem,1rem,2rem);
}

*{

  box-sizing: border-box;
}
</style>
