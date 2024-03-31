const boton = document.getElementById("contenedor_icono");
const boton2 = document.getElementById("contenedor_icono_sol");
const icono = document.getElementById("icono_sol");
const pedido_accion = document.getElementById("pedido_accion");
const contenedor_luna = document.getElementById("contenedor_boton");
const contenedor_sol = document.getElementById("contenedor_boton_sol");
const listaNavegacion = document.getElementById("lista_navegacion");
const imagen = document.getElementById("img_logo");
const ventanaAncho = window.innerWidth;
const h4 = document.getElementById("h4");
const h6 = document.getElementById("h6");
const precio = document.getElementById("precio");
const titulo = document.getElementsByClassName("title")
const pedido = document.getElementById("pedido");
const icono_pedido = document.getElementById("icono_pedido");

boton.addEventListener('click', function() {
    const elementos = document.querySelectorAll("*");
  
    elementos.forEach(elemento => {
    const backgroundColor = window.getComputedStyle(elemento).backgroundColor;
    const color = window.getComputedStyle(elemento).color;

    if (backgroundColor === "rgb(255, 255, 255)") {
        elemento.style.backgroundColor = "black";
    }

    if (color === "rgb(42, 42, 42)") {
        elemento.style.color = "white";
    }
    if (color === "rgb(42, 42, 42)" && listaNavegacion.contains(elemento) || color === "rgb(56, 182, 33)" && listaNavegacion.contains(elemento)) {
        elemento.style.color = "white";
    }

    if (ventanaAncho < 500) {
        icono.style.color = "black";
    }
    else {
        icono.style.color = "white";

    }
    });

    contenedor_luna.style.display = "none";
    contenedor_sol.style.display = "flex";
    imagen.src = "assets/images/logo_kaizen_blanco.webp";
});

boton2.addEventListener('click', function() {
    const elementos = document.querySelectorAll("*");
    elementos.forEach(elemento => {
        const backgroundColor = window.getComputedStyle(elemento).backgroundColor;
        const color = window.getComputedStyle(elemento).color;

        if (backgroundColor === "rgb(0, 0, 0)") {
            elemento.style.backgroundColor = "rgb(255, 255, 255)";
        }

        if (color === "rgb(255, 255, 255)") {
            elemento.style.color = "rgb(42, 42, 42)";
        }
        if (color === "rgb(255, 255, 255)" && listaNavegacion.contains(elemento) || color === "rgb(56, 182, 33)" && listaNavegacion.contains(elemento)) {
            elemento.style.color = "rgb(42, 42, 42)";
        }
        })

    contenedor_luna.style.display = "flex";
    contenedor_sol.style.display = "none";
    imagen.src = "assets/images/logo_kaizen.webp";
    h4.style.color = "#ffffff";
    h6.style.color = "#ffffff";
    });


