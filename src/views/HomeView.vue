<template>
  <main>
   

      <PrincipalHeader></PrincipalHeader>
    
 
      <sectionOne></sectionOne>
     
      <sectionTwo></sectionTwo>

      <SectionTrhee></SectionTrhee>

     <footerOne></footerOne>
   
  </main>
</template>

<script setup>
import PrincipalHeader from '@/components/principal/PrincipalHeader.vue';
import footerOne from '@/components/principal/footerOne.vue';
import sectionOne from '@/components/principalHome/sectionOne.vue';
import SectionTrhee from '@/components/principalHome/sectionTrhee.vue';
import sectionTwo from '@/components/principalHome/sectionTwo.vue';

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
