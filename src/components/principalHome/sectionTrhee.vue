<template>
 

    <section>
        <h1>Passions</h1>
<div  class="contenedor" v-mostrar>
    

<PassionSport v-mostrar class="post"></PassionSport>

<passionCode v-mostrar  class="post" ></passionCode>

<passionMussic v-mostrar  class="post"></passionMussic>
</div>
    </section>
</template>

<script setup>
import passionCode from './passionCode.vue';
import passionMussic from './passionMussic.vue';
import PassionSport from './passionSport.vue';

</script>

<style scoped lang="scss">

section {

display: flex;

width: 100%;
height: 300vh;
max-height: 1500px;

margin: 0 auto;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 1rem;
background-color: rgb(255, 255, 255);

.contenedor{

display: flex;
height: 100%;
opacity: 0;
width: 80%;
background-color: rgb(255, 255, 255);
text-align: center;
justify-content: center;
flex-direction: column;
margin : 0 auto;

}
.mostrar{

opacity: 1;
transition: opacity 2s ease-in-out;

}
h1{
display: flex;
color: black;
font-size: 30px;
justify-content: baseline;
align-items: baseline;
margin-bottom: 50px;
}
}
.post{



    margin: 20px;
}

</style>