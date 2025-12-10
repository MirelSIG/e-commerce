import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "../components/cart/cart.js"
import { productsController } from "./products.js"

await productsController.getData()
header.init()
navbar.render()
footer.render()

/* no borrar esto: evento para llamar al carrito */
const btnCart = document.querySelector(`#${cart.idBtnCart}`)
if (btnCart) {
    btnCart.addEventListener("click", function(e){
        e.preventDefault()
        cart.toggle()
    })   
}
/* fin de evento: no borrar */

/* solo para hacer test con el carrito */
cart.addItem(13)
cart.addItem(13)
cart.addItem(20)
cart.addItem(20)
cart.addItem(10)
/* se puede borrar */