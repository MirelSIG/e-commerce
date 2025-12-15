import { cartTemplate } from "./template.js"
import { cartController } from "./controller.js"

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
            this.addListeners()
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

        if (this.statusVisible) {
            this.draw()
        }

        /* if(this.statusVisible && this.exists()){
            const product = productsController.getById(id)
            const itemHtml = product.status ? cartTemplate.item(product.data[0]) : ``
            const outputToDraw = document.querySelector(`#${this.idToDrawItems}`)
            outputToDraw.innerHTML += itemHtml
        }  */       
    },

    removeItem(id){
        cartController.removeItem(id)
        this.updateCartCount()
        this.draw()      
    },

    changeQuantity(id, elementHtml, msgElement){
        if (elementHtml){
            let quantity = Number(elementHtml.value)
            const product = cartController.getItemById(id).status ? cartController.getItemById(id).data[0] : cartController.getItemById(id).status
            let regex = /^\d+$/;            
            if (regex.test(quantity) && quantity !== '') {
                if (quantity > 0 && quantity <= product.stock) {
                    console.log(`true::: cantidad:${quantity} correcta`);
                    msgElement.textContent = ``
                }
                else {
                    msgElement.textContent = `La cantidad debe estar entre 1 y ${product.stock}`
                    quantity = 1
                }
            }
            else{
                quantity = 1
                elementHtml.value = quantity                        
            }

            /* cartController.changeQuantity(id, quantity)
            this.updateCartCount() */
        }
    },

    addListeners(){
        const thisArg = this
        const btnCloseCart = document.querySelector(`#${this.idBtnCloseCart}`)
        if (btnCloseCart) {
            btnCloseCart.addEventListener("click", function(e){
                e.preventDefault()
                thisArg.toggle()
            })
        }
        const btnsRemoveItem = document.querySelectorAll(".cartRemoveItemBtn")
        if (btnsRemoveItem) {
            btnsRemoveItem.forEach(function(value, index){
                const bntElement = value
                let id = Number(value.dataset.id)
                bntElement.addEventListener("click", function(e){
                    e.preventDefault()
                    thisArg.removeItem(id)
                })                
            })                        
        } else {
            console.log(`no se encontraron los botones de eliminar items del carrito`);                        
        }
        const inputsQuantityItem = document.querySelectorAll(".cartItemQuantityInput")
        const msgQuantityItem = document.querySelectorAll(".cartQuantityMsg")
        if (inputsQuantityItem) {
            inputsQuantityItem.forEach(function(value, index){
                const inputElement = value
                const msgElement = msgQuantityItem[index]
                let id = Number(value.dataset.id)
                inputElement.addEventListener("input", function(e){
                    e.preventDefault()
                    thisArg.changeQuantity(id, inputElement, msgElement)
                })                
            })                        
        } else {
            console.log(`no se encontraron los inputs de cantidad de items del carrito`);                        
        }

    }

}