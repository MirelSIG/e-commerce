import { cartTemplate } from "./template.js"
import { cartController } from "./controller.js"
import { productsController } from "../../js/products.js"
import { cart } from "./cart.js"

export const cartView = {
    id: `cart`,
    divId: `cartDiv`,
    idToDraw: `drawCart`,
    idBtnCart: `btnCart`,
    idBtnCloseCart: `btnCloseCart`,
    idCartCount: `cartCount`,
    idToDrawItems: `cartItems`,
    statusVisible: false,
    
    exists(){
        return document.querySelector(`#${this.id}`) ? true : false
    },

    init(){
        if(!this.exists()){
            this.draw()
        }
    },

    getTemplate(){        
        try {
            const obj = cartController.getData()
            const html ={
                items: ``,
                footer:``
            }
            obj.items.forEach(function(value, index){
                html.items+=cartTemplate.item(value)
            })
            html.footer = cartTemplate.footer(obj)
            return cartTemplate.init(obj, html)
        } catch (error) {
            console.error('Error al cargar el template del carrito:', error)
        }
    },

    draw(){
        let outputToDraw = document.querySelector(`#${this.idToDraw}`)
        if (outputToDraw) {
            outputToDraw.innerHTML = this.getTemplate()
            this.statusVisible = true
            const btnCloseCart = document.querySelector(`#${this.idBtnCloseCart}`)
            const thisArg = this
            if (btnCloseCart) {
                btnCloseCart.addEventListener("click", function(e){
                    e.preventDefault()
                    thisArg.toggle()
                })
            }
        }
        else{
            console.log(`no existe un div con el id: "${this.idToDraw}" para renderizar el carrito`);
        }
    },

    remove(){
        let cartElement = document.querySelector(`#${this.id}`)
        cartElement.remove()
        this.statusVisible = false
    },

    updateCartCount() {
        const cartCount = document.querySelector(`#${this.idCartCount}`)
        const cartCountNumber = document.querySelector(`#cartCountNumber`)
        if (cartCount) {
            cartCount.textContent = cartController.cartCount           
        }
        if (cartCountNumber) {
            cartCountNumber.textContent = cartController.cartCount           
        }
    },

    toggle(){
        if(this.statusVisible && this.exists()){
            this.remove()
        }
        else{
            this.init()
        }
    },

    addItem(id){
        cartController.addItem(id)
        this.updateCartCount()

        this.draw()

        /* if(this.statusVisible && this.exists()){
            const product = productsController.getById(id)
            const itemHtml = product.status ? cartTemplate.item(product.data[0]) : ``
            const outputToDraw = document.querySelector(`#${this.idToDrawItems}`)
            outputToDraw.innerHTML += itemHtml
        }  */       
    }
}