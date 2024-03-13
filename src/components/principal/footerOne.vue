<template>

  <footer>

    <div class="container">
      <h3>Contac me!</h3>

      <a href="mailto:correo@ejemplo.com?subject=Asunto del correo">juliankamilo6@gmail.com</a>

      <div class="iconos">
        <a href="https://www.facebook.com/1jcao3/"><i  class="bi bi-facebook color"></i></a>
       <a href="https://wa.me/+573133746649"> <i class="bi bi-whatsapp color"></i></a>
       <a href="https://www.instagram.com/1jcao3/"><i class="bi bi-instagram color"></i></a>
      </div>
    </div>
  </footer>

</template>

<script setup>
</script>

<style scoped lang="scss">
footer {
  width: 100%;
display: flex;
  height: 20vh;
  background-color: black;
align-items: center;
justify-content: center;

  .container {

    width: 80%;
    display: flex;
align-items: center;
justify-content: center;
    flex-direction: column;
color: aliceblue;

.iconos{

  display: flex;

  color: aliceblue;

i{
margin: 10px;
  color: aliceblue;
  display: block;
  font-size: 20px;
}
}
.color{
  color: aliceblue;
}
.color:hover{

color:$primario;
transition: color 0.3s ease;
}

  }

  a:hover{

color: $primario;
}

i:hover{

  color: $primario;
}

a{
color: aliceblue;
text-decoration: none !important;
}
}



</style>