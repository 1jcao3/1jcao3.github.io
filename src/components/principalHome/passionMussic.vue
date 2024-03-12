<template >
    <div class="divi" v-ocultary>
<h1 class="h1">Music</h1>
    <div id="img" class="contenedor" v-mostrarTexto1:der>

        <div  class="contenedor-imagen">
            <img src="@/assets/imgs/dj.jpg" alt="img">
        </div>

        <div class="texto">
            <h2>Music</h2>

            <p>Music is something special. I come alive when I feel a song; usually, 
                a song expresses something, and if you identify with it, you feel a connection. 
                It's something beautiful.
                 I create some beats, so if you want to see more, click here.
            </p>

            <button class="boton"><router-link to="/" class="boton1">Go</router-link></button>
        </div>
    </div>
</div>
</template>

<script setup>



</script>

<style scoped lang="scss">

.divi{
    display: inline-block;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 100%;
margin: 0px !important;

}
.contenedor {

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 80%;

}


.contenedor-imagen {
    position: absolute;
    border-radius: 50%;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;

    img {
        display: block;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
}

.texto {
    opacity: 0;
    position: relative;
    display: none;
    width: 40%;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        display: flex;
  

    }

    p {


        display: flex;
        font-size: 20px;
    }

    .boton {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        font-size: 1.4rem;
        height: 50px;
        text-align: center;
       
        background-color: $primario;
border-style: none;
    }
    .boton1{
        text-decoration: none !important;

width: 100%;
height: 100%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
    }
    .boton:hover{

        background-color: $secundario;
    }
}


@media(max-width: 768px){

.texto{

    width: 100%;
padding-bottom: 20px;
}
h2{

    padding-top:70px;
}
}

@media(min-width:1024px) {


    p {

        font-size: 20px;
    }

    .contenedor-imagen{

        width: 300px;
        height: 300px;
    }


}
</style>