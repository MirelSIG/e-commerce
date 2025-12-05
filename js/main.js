import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "../components/cart/cart.js"
import { productsController } from "./products.js"
import { cartController } from "../components/cart/controller.js"

products.render()

await productsController.getData()
header.init()
navbar.render()
footer.render()

const btnCart = document.querySelector(`#${cart.idBtnCart}`)
btnCart.addEventListener("click", function(){
    cart.toogle()
})

cart.addItem(13)
cart.addItem(14)
console.log(cartController.getData());

