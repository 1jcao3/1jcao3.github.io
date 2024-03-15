<template>
         <tr>
            <td>
              <div class="contenedor-imagen">

                <img src="@/assets/imgs/logos/html.png"><p>HTML</p>  
                  
              </div>

              
            </td>
            <td>
              
              <div class="base-porcentaje">
<div class="porcentaje"></div>
               

              </div>
              
            </td>
          </tr>
</template>

<script setup>
</script>

<style scoped lang="scss">


tr{

    background-color: rgba(135, 119, 162, 0.177);
    border-radius: 200%;
}
td{

    border-radius: 2rem;
padding: 20px;
  .base-porcentaje{
    display: flex;
    width: 100%;
  height: 20px;
  background-color: rgb(249, 250, 250);
  border-radius: 2em;
  padding-right: 20px;
  padding-right: 20px;
.porcentaje{

  padding-left: 10px;
  padding-right: 10px;
display: flex;

  width: 90%;
  height: 20px;
  background-color: rgb(227, 102, 44);
  border-radius: 2em;
}
}
p{

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px;
  margin: 0;
  margin-left: 30px;
}
@media(max-width: 760px){

p{

  font-size: 20px;
  margin-left: 10px;
}
}
}
.contenedor-imagen{
display: flex;
width: 70px;
height: 70px;
border-radius: 50px;

  img{

border-radius: 50%;
width: 100%;
height: auto;
object-fit: contain;
  }
}
@media(max-width: 760px){

.contenedor-imagen{

  width: 30px;
  height: 30px;
  
}
}

</style>