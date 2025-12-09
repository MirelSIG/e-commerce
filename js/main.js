import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "../components/cart/cart.js"
import { productsController } from "./products.js"


await productsController.getData()



productsController.getData()
header.init()
navbar.render()
footer.render()


    
    const input = document.getElementById("buscador-input");

    if (!input) {
        console.error("No se encontró el input del buscador");
       
    } else{

    input.addEventListener("keyup", async () => {
        const texto = input.value.trim();

        if (texto === "") {
            document.getElementById("search-results").innerHTML = "";
            return;
        }

        const resultados = await header.buscarInstrumentos(texto);
        header.mostrarResultados(resultados); 
    });
}



const btnCart = document.querySelector(`#${cart.idBtnCart}`)
btnCart.addEventListener("click", function(e){
    e.preventDefault()
    cart.toggle()
})
cart.addItem(13)
cart.addItem(14)


/*import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "../components/cart/cart.js"
import { productsController } from "./products.js"

await productsController.getData()
header.init()
navbar.render()
footer.render()


cart.addItem(13)
cart.addItem(14)
cart.addItem(20)
cart.addItem(2)
cart.addItem(10) */