<template>


  <section>
    

    <div class="contenedor">

      <table>
        <thead>
          <tr>
            <th>SKILL</th>
            <th>LEVEL</th>
          </tr>
        </thead>
        <tbody>

     <htmlLevel></htmlLevel>
     <cssLevel></cssLevel>
     <jsLevel></jsLevel>
     <vueLevel></vueLevel>
     <javaLevel></javaLevel>
     <pythonLevel></pythonLevel>
     <gitLevel></gitLevel>
          
        </tbody>


      </table>
    </div>
  </section>
</template>

<script setup>
import cssLevel from './cssLevel.vue';
import htmlLevel from './htmlLevel.vue';
import javaLevel from './javaLevel.vue';
import jsLevel from './jsLevel.vue';
import pythonLevel from './pythonLevel.vue';
import vueLevel from './vueLevel.vue';
import gitLevel from './gitLevel.vue';
</script>

<style scoped lang="scss">

section{


background-color: aliceblue;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 200vh;

.contenedor{


display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: auto;

table{

display: inline-block;

width: 80%;
height: auto;
font-size: 50px;
border-style: none;
background-color: rgba(149, 126, 186, 0.382);
padding: 20px;
border-radius: 2rem;
th{

width: 100vw;

border-radius: 2rem;


}
@media(max-width:760px){

  table{
    width: 100%;
font-size: 30px;
  }
  th{

    font-size: 30px;
  }
}


}
}
}



</style>