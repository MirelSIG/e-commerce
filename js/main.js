import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"

header.render()
navbar.render()
footer.render()

const prueba = document.querySelector("#buscador-input")
prueba.addEventListener("keyup", function(){
  const busqueda =  prueba.value;
  header.buscarInstrumentos(busqueda);
});
