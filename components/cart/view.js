import { cartTemplate } from "./template.js"
import { cartController } from "./controller.js"
import { productsController } from "../../js/products.js"

export const cartView = {
    id: `cart`,
    divId: `cartDiv`,
    idToDraw: `drawCart`,
    idBtnCart: `btnCart`,
    idBtnCloseCart: `btnCloseCart`,
    idCartCount: `cartCount`,
    idToDrawItems: `cartItems`,
    statusVisible: false,

    exists() {
        return document.querySelector(`#${this.id}`) ? true : false
    },

    init() {
        if (!this.exists()) {
            this.draw()
        }
    },

    getTemplate() {
        try {
            const obj = cartController.getData()
            let itemsHtml = ``
            obj.items.forEach(function (value, index) {
                itemsHtml += cartTemplate.item(value)
            })
            obj.itemsHtml = itemsHtml
            console.log(obj);


            return cartTemplate.init(obj)
        } catch (error) {
            console.error('Error al cargar el template del carrito:', error)
        }
    },

    draw() {
        let outputToDraw = document.querySelector(`#${this.idToDraw}`)
        if (outputToDraw) {
            outputToDraw.innerHTML = this.getTemplate()
            this.statusVisible = true
            const btnCloseCart = document.querySelector(`#${this.idBtnCloseCart}`)
            const thisArg = this
            if (btnCloseCart) {
                btnCloseCart.addEventListener("click", function (e) {
                    e.preventDefault()
                    thisArg.toggle()
                })
            }

            // NO BORRAR: Traduce el carrito al abrirlo
            if (window.idioma) {
                window.idioma.translatePage();
            }
        }
        else {
            console.log(`no existe un div con el id: "${this.idToDraw}" para renderizar el carrito`);
        }
    },

    remove() {
        let cartElement = document.querySelector(`#${this.id}`)
        cartElement.remove()
        this.statusVisible = false
    },

    updateCartCount() {
        const cartCount = document.querySelector(`#${this.idCartCount}`)
        if (cartCount) {
            cartCount.textContent = cartController.cartCount
        }
    },

    toggle() {
        if (this.statusVisible && this.exists()) {
            this.remove()
        }
        else {
            this.init()
        }
    },

    addItem(id) {
        cartController.addItem(id)
        this.updateCartCount()

        if (this.statusVisible && this.exists()) {
            const product = productsController.getById(id)
            const itemHtml = product.status ? cartTemplate.item(product.data[0]) : ``
            const outputToDraw = document.querySelector(`#${this.idToDrawItems}`)
            outputToDraw.innerHTML += itemHtml

            // NO BORRAR: Traduce el nuevo item agregado al carrito
            if (window.idioma) {
                window.idioma.translatePage();
            }
        }
    }
}