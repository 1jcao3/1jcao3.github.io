<template>
    <section>
    <div class="contenedor" >
  
      <h2 v-mostrar >About Code</h2>
  <p  class="texto"  v-mostrar > Since I was a child, I have been interested in technology,
     so I decided to study software engineering. I have experience in several programming languages such as Java and Python.
     I enjoy working on both the front-end and the back-end. Here are some of my abilities.   
</p>
  
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