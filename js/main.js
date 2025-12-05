import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "./cart.js"
import { products } from "./products.js"

document.addEventListener("DOMContentLoaded", () => {


 products.getData()
header.init()
navbar.render()
footer.render()
    
    const input = document.getElementById("buscador-input");

    if (!input) {
        console.error("No se encontró el input del buscador");
        return;
    }

    input.addEventListener("keyup", async () => {
        const texto = input.value.trim();

        if (texto === "") {
            document.getElementById("search-results").innerHTML = "";
            return;
        }

        const resultados = await header.buscarInstrumentos(texto);
        header.mostrarResultados(resultados);
    });
});



const btnCart = document.querySelector(`#${cart.idBtnCart}`)
btnCart.addEventListener("click", function(){
    cart.toogle()
})


