<template>
    <header id="header">

        <h1> <a href="/">JUCA</a></h1>
        <nav>
            
                <router-link to="sport" class="router">
                    <h1>Sport</h1>
                </router-link>
            
           
                <router-link to="code" class="router">
                    <h1>Code</h1>
                </router-link>
           
            
                <router-link to="music" class="router">
                    <h1>Music</h1>
                </router-link>
            
        </nav>
    </header>
</template>

<script setup>
</script>

<style scoped lang="scss">


#header {

    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    height: 80px;
    width: 100%;
    display: grid;
    background-color: black;


a:hover{
color: $primario;
    
}
a{

    color: white;
    text-decoration: none;
}

    h1 {
        display: flex;
        justify-content: center;
        grid-column: 1/2;
        color: rgb(253, 253, 253);

    }
    

    nav {

        grid-column: 2/3;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row: 1;
        justify-items: center;
      




        .router {
display: flex;
            background-color: $primario;
            width: 100%;
           text-decoration: none;
      align-items: center;
      justify-content: center;
       

            h1 {
                text-align: center;
                color: rgb(255, 255, 255);
                
               
            }
           
        }
        .router:hover {

            background-color: $secundario;
            
        }
        @media(max-width:500px){

            h1{

                font-size:20px;
            }
        }
    }

}


</style>