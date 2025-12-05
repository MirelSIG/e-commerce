import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "../components/cart/cart.js"
import { productsController } from "./products.js"
import { cartController } from "../components/cart/controller.js"

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {


products.getData()
products.render()

=======
await productsController.getData()
>>>>>>> 4f24de3c639cf3e139498bbc57af41b5c52fef10
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

<<<<<<< HEAD
=======
cart.addItem(13)
cart.addItem(14)
console.log(cartController.getData());
>>>>>>> 4f24de3c639cf3e139498bbc57af41b5c52fef10

