/* import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"

header.render()
navbar.render()
footer.render()

const prueba = document.querySelector("#buscador-input")
prueba.addEventListener("keyup", function(){
  const busqueda =  prueba.value;
  const arr = header.buscarInstrumentos(busqueda);
});

 */


import { header } from "./header.js";
import { navbar } from "./navbar.js";
import { footer } from "./footer.js";

header.render();
navbar.render();
footer.render();

setTimeout(() => {
    const input = document.getElementById("buscador-input");

    if (!input) {
        console.error("El header NO se renderizó correctamente.");
        return;
    }

    input.addEventListener("input", async () => {
        const texto = input.value.trim();

        if (texto === "") {
            document.getElementById("search-results").innerHTML = "";
            return;
        }

        const resultados = await header.buscarInstrumentos(texto);
        header.mostrarResultados(resultados);
    });
}, 50);