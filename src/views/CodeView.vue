<template>
    <main>
     
  
        <PrincipalHeader></PrincipalHeader>
      
   <firstSection></firstSection>
    
  
       <footerOne></footerOne>
     
    </main>
  </template>
  
  <script setup>
  import firstSection from '@/components/codePage/firstSection.vue';
import PrincipalHeader from '@/components/principal/PrincipalHeader.vue';
  import footerOne from '@/components/principal/footerOne.vue';

  
  </script>

<style scoped lang="scss">
main {
  display: flex;
width: 100vw;
max-width: 100%;
flex-direction: column;
margin: 0px auto;

}

@media(min-width: 320px){
 
 main{

  width: 100%;
 } 

}

@media(min-width: 1025px){
main{

  width: 100%;
}

}

</style>