<template>
    <section>
  
      <div class="contenedor">
  
  
        <h1>Sport</h1>
        <div class="contenedor-imagen">
          <img src="@/assets\imgs\sport.jpg">
        </div>
      </div>
  
  
  
  
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped lang="scss">
  section {
    display: flex;
    width: 100vw;
    height: 100vh;
  
    .contenedor {
  
      background-color: rgba(247, 246, 246, 0.244);
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
  
      h1 {
  
  
        color: azure;
        font-size: 50px;
        margin: 20px;
  
      }
  
      .contenedor-imagen {
  
  
        margin: 30px;
  
        display: flex;
        border-radius: 50%;
  
        width: 300px;
        height: 300px;
  
  
  
          img {
            display: block;
            border-radius: 50%;
            height: auto;
            width: 100%;
            align-items: center;
            justify-content: center;
            object-fit: cover;
          }
          
  
        }
  
        
        @media (max-width: 768px) {
  
  .contenedor-imagen {
  
  
    width: 200px;
    height: 200px;
  }
  h1{
  
    font-size: 35px;
  }
  
  
      }
  
  
  
    }
  }
    @media (max-width: 768px) {
  
      .contenedor {
  
        flex-direction: column;
      }
  
    }
  
    </style>