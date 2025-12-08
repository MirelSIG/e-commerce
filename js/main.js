import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "../components/cart/cart.js"
import { productsController } from "./products.js"

await productsController.getData()
header.init()
navbar.render()
footer.render()

const btnCart = document.querySelector(`#${cart.idBtnCart}`)
btnCart.addEventListener("click", function(e){
    e.preventDefault()
    cart.toggle()
})

cart.addItem(13)
cart.addItem(14)
cart.addItem(20)
cart.addItem(2)
cart.addItem(10)