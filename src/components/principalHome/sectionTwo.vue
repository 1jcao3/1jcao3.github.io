<template>
  <section>
  <div class="contenedor" >

    <h2 v-mostrar >About me</h2>
<p  class="texto"  v-mostrar > Hello my name is Julian Ayala , and this is my blog,
  where you can see all about me . some passions like code , muisc or sport , i hope u enyoy this  </p>

  </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">

section {

display: flex;
width: 100%;
height: 90vh;
background-color: rgb(255, 255, 255);
margin: 0 auto;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 1rem;

.contenedor{
margin: 50px;
    display: flex;
    height: 100%;
    width: 80%;
    background:linear-gradient(to left, #ffffff00,#ffffff72 50%,#ffffff00);
    text-align: center;
    justify-content: center;
flex-direction: column;
}
h2{

opacity: 0;
font-size: 30px;
}
.texto{

opacity: 0;
font-size: 25px;
}
.mostrar{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
opacity: 1;
transition: opacity 2s ease-in-out;

}

@media(min-Width:1025px){

.mostrar{

  font-size: 35px;
}
}

}

</style>