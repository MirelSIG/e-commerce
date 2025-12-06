import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "../components/cart/cart.js"
import { productsController } from "./products.js"
// import { cartController } from "../components/cart/controller.js"



document.addEventListener("DOMContentLoaded", async () => {
await productsController.getData()
header.init()
navbar.render()
footer.render()
productsController.render();

    
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

const btnCart = document.querySelector(`#${cart.idBtnCart}`)
btnCart.addEventListener("click", () => cart.toogle());

cart.addItem(13)
cart.addItem(14)
});