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
            const obj = {}
            let items =``
            cartController.data.forEach(function(value, index){
                items+=cartTemplate.item(value)
            })
            obj.cartCount = cartController.cartCount
            obj.items = items            

            return cartTemplate.init(obj)
        } catch (error) {
            console.error('Error al cargar el carrito:', error)
        }
    },

    draw(){
        let outputToDraw = document.querySelector(`#${this.idToDraw}`)
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
    },

    remove(){
        let cartElement = document.querySelector(`#${this.id}`)
        cartElement.remove()
        this.statusVisible = false
    },

    updateCartCount() {
        const cartCount = document.querySelector(`#${this.idCartCount}`)
        cartCount.textContent = cartController.cartCount
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

        if(this.statusVisible && this.exists()){
            const product = productsController.getById(id)
            const itemHtml = product.status ? cartTemplate.item(product.data[0]) : ``
            const outputToDraw = document.querySelector(`#${this.idToDrawItems}`)
            outputToDraw.innerHTML += itemHtml
        }        
    },

    render(items) {
  // Actualiza los datos del controlador
  cartController.data = items;
  cartController.cartCount = items.length;

  // Si el carrito ya está visible, lo redibuja
  if (this.statusVisible && this.exists()) {
    this.draw();
  }
}

}