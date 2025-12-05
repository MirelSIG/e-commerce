import { cartTemplate } from "../components/cart.template.js"

export const cart = {    
    id: `cart`,
    divId: `cartDiv`,
    idToDraw: `app`,
    idBtnCart: `btnCart`,
    idCartCount: `cartCount`,
    cartCount: 0,
    statusVisible: false,
    
    exists(){
        return document.querySelector(`#${this.id}`) ? true : false
    },

    init(){
        if(!this.exists()){
            this.draw()
        }
    },

    getTemplate(obj){        
        try {
            return cartTemplate.init(obj)           
        } catch (error) {
            console.error('Error al cargar el carrito:', error)
        }
    },

    draw(){
        let outputToDraw = document.querySelector(`#${this.idToDraw}`)
        outputToDraw.innerHTML = this.getTemplate({cartCount: this.cartCount})
        this.statusVisible = true
    },

    remove(){
        let cartElement = document.querySelector(`#${this.id}`)
        cartElement.remove()
        this.statusVisible = false
    },

    updateCartCount() {
        const cartCount = document.querySelector(`#${this.idCartCount}`)
        cartCount.textContent = this.cartCount
    },

    toogle(){
        if(this.statusVisible && this.exists()){
            this.remove()
        }
        else{
            this.init()
        }
    }
}