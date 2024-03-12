import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

app.directive("colorImagen", (el, binding) => {
  el.addEventListener("mouseenter", () => {
    el.style.boxShadow = "0px 0px 40px" + binding.value;
    el.style.transition = "box-shadow 0.7s ease-in-out";
  }),
    el.addEventListener("mouseleave", () => {
      el.style.boxShadow = "none";
    });
});

const verificarPosicion = (el) => {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
    el.classList.add("mostrar");
  } else {
    el.classList.remove("mostrar");
  }
};

app.directive("mostrar", {
  mounted(el) {
    window.addEventListener("scroll", () => verificarPosicion(el));

    verificarPosicion(el);
  },

  unmounted(el) {
    window.removeEventListener("scroll", () => verificarPosicion(el));
  },
});

app.directive("mostrarTexto", (el) => {
  const parrafo = el.querySelector("p");
  const img = el.querySelector(".contenedor-imagen");

  img.addEventListener("mouseenter", () => {
    parrafo.classList.add("mostrar");
  });

  img.addEventListener("mouseleave", () => {
    parrafo.classList.remove("mostrar");
  });
});
app.directive('ocultary', (el) => {

  
  const zona = el.querySelector(".contenedor");
  const h1=el.querySelector(".h1");
  const isMobile = window.innerWidth < 768;
  zona.addEventListener("mouseenter", () => {
  
    if (isMobile) {
      h1.style.opacity = "0";
      h1.style.transition = "opacity 0.7s ease-in-out";
    }
  });
  zona.addEventListener("mouseleave", () => {

    if (isMobile) {

      setTimeout(()=>{
        h1.style.opacity = "1";
        h1.style.transition = "opacity 0.7s ease-in-out";
      },900

       
      )
      
    }
  });
});

app.directive("mostrarTexto1", (el, binding) => {
  let activado;
  let mover;
  let isDesktop;
  let isMobile;
  isDesktop = window.innerWidth > 768;
  isMobile = window.innerWidth < 768;
  // const cImg=el.querySelector('.contenedor-imagen');
  const img = el.querySelector(".contenedor-imagen");
  const texto = el.querySelector(".texto");


  switch (binding.arg) {
    case "der":
      if (isDesktop) {
        mover = "translateX(280px)";
        texto.style.marginRight = "400px";
      }
      if (isMobile) {
        mover = "translateY(-180px)";
        texto.style.marginTop = "100px";
      }
      break;
    case "izq":
      if (isDesktop) {
        mover = "translateX(-280px)";
        texto.style.marginLeft = "400px";
      }
      if (isMobile) {
        mover = "translateY(-180px)";
        texto.style.marginTop = "100px";
      }
      break;
  }

  img.addEventListener("mouseenter", () => {
    img.style.transition = "transform 1s ease-in-out";
    img.style.transform = mover;
    texto.style.display = "flex";

    setTimeout(() => {
      texto.style.transition = "opacity 1s ease-in-out";
      texto.style.opacity = "1";
    }, 500);

    activado = true;
  });
  el.addEventListener("mouseleave", () => {
    texto.style.opacity = "0";
    texto.style.transition = "opacity 1s ease-in-out";
    img.style.transform = "translate(0px)";
    activado = false;
    var value = img.style.transform.value;
    setTimeout(() => {
      if (value == 0 || !activado) texto.style.display = "none";
      activado = false;
    }, 700);
  });
});
window.addEventListener("resize", function () {
  location.reload();
});

app.use(router);
app.mount("#app");
