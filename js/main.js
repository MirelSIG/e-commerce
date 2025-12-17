import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "../components/cart/cart.js"
import { productsController } from "./products.js"
import { registro } from "./registro.js"
import { usuarioCreado } from "./usuarioCreado.js"
import { login } from "./login.js"
import { detalleProducto  } from "./productoDetalle.js";

await productsController.getData()    
header.init()
navbar.render()
footer.render()
productsController.render()
/* no borrar: cart.init() funcion para inicializar el estado del carrito */
await cart.init();
/* no borrar lo de arriba no borrar cart.init() */

// Scroll suave y manejo de hash hacia las secciones del catálogo
(function enableCategoryNav(){
  // Scroll suave al hacer clic en el navbar
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.addEventListener("click", (e) => {
      const link = e.target.closest("a[href^='#']");
      if (!link) return;
      const targetId = link.getAttribute("href").slice(1); // sin '#'
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${targetId}`);
      }
      // Si aún no existe (por cualquier razón), dejamos que el navegador gestione el hash.
      // Cuando la sección aparezca, el bloque de hashchange se ocupará.
    });
  }

  // Si la URL ya trae un hash (o el usuario clicó antes de que se renderice),
  // navegamos cuando el DOM tenga la sección.
  const navigateToHash = () => {
    const hash = window.location.hash;
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Intento inmediato por si ya está renderizado:
  navigateToHash();

  // Reintento tras el render del catálogo (por si se llamó después):
  // Este setTimeout es no invasivo y evita dependencias internas.
  setTimeout(navigateToHash, 0);

  // Además, reaccionamos a cambios de hash (navegación manual del usuario):
  window.addEventListener("hashchange", navigateToHash);
})()

/* De manera atenta se les notifica la importancia de la presente; no alteren la naturaleza del codigo que parte desde la linea posterior a este comentario
dicha modificacion significaria la interrupcion de la sincronia y repercutiria como desencadenante de posiles fallos en el desarrollo del proyecto  
(funcion de la barra del header) */
const input = document.getElementById("buscador-input");
if (!input) {
    console.error("No se encontró el input del buscador");
}
else {

    input.addEventListener("keyup", async () => {
        const texto = input.value.trim();
        if (texto === "") {
            document.getElementById("search-results").innerHTML = "";
            return;
        }
        const resultados = await header.buscarInstrumentos(texto);
        header.mostrarResultados(resultados);
    });

};
// Fin de la funcion de la barra del buscador en el header.

 const inpt = document.querySelector("#registro-section");
  if (inpt) {
   registro.f()
    }


  const inp = document.querySelector("#usuario");
  if (inp) {
    usuarioCreado.f()
    }

/* no borrar esto: evento para llamar al carrito */
const btnCart = document.querySelector(`#${cart.idBtnCart}`)
if (btnCart) {
    btnCart.addEventListener("click", function(e){
        e.preventDefault()
        cart.toggle()
    })   
}
/* fin de evento para llamar al carrito: no borrar */

// pdetalle
detalleProducto.renderProductDetail()
// fin de pdetalle

/*Login */
 login.loginF()
/*Seguimiento no borrar */