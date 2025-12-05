import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "./cart.js"
import { products } from "./products.js"

await products.getData()
header.init()
navbar.render()
footer.render()

const btnCart = document.querySelector(`#${cart.idBtnCart}`)
btnCart.addEventListener("click", function(){
    cart.toogle()
})

