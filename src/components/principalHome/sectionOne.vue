<template>
    <section>
        <div class="contenedor" v-mostrarTexto>

            <h1>¡Hello World!</h1>
            <div class="contenedor-imagen">
                <img src="@/assets/imgs/fotoPrincipal.jpg" alt="img" class="imagen-circular" v-colorImagen="'#FFFFFF'" >
            </div>

            <p >some people do it some people stay stop</p>
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
    background-color: rgba(0, 255, 255, 0);
    margin: 0 auto;
    margin-top: 80px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    .contenedor {

        display: flex;
        width: 80%;
        height: 80%;
        align-items: center;
        justify-content: center;
        margin: auto;
        background-color: rgba(255, 255, 255, 0);
        flex-direction: column;


        p{
            opacity: 0;
text-align: center;
         color: aliceblue;  
         transition: opacity 1s ease-in-out; 
        }

        .mostrar{
transition: opacity 1s ease-in-out;
            opacity: 1;
        }
        h1 {
            font-size: 30px;
            color: rgb(253, 253, 253);
        }

        .contenedor-imagen {

            border-radius: 50%;
            display: block;
            width: 200px;
            height: 200px;
            padding: 10px;



            .imagen-circular {
                border-radius: 50%;
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;

            }
        }

        @media (min-width:481px) {

            .contenedor-imagen {

                width: 250px;
                height: 250px;
            }

            h1 {

                font-size: 35px;
            }
        }

        @media (min-width:769px) {

            .contenedor-imagen {

                width: 300px;
                height: 300px;
            }

            h1 {

                font-size: 40px;
            }

        }
            
        @media (min-width:1025px) {


            .contenedor-imagen {

                width: 300px;
                height: 300px;
            }

            h1 {

                font-size: 50px;
            }
        }


    }

}
</style>