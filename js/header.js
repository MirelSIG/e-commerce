import { headerTemplate } from "../components/header.template.js"
import { cart } from "./cart.js"

export const header = {
    
    id: `header`,
    divId: `headerDiv`,
    cartCount: cart.cartCount,

    init(){
        let exist = document.querySelector(`#${this.divId}`) ? true : false

        if(!exist){
            this.render();
        }
    },

    getTemplate(obj){
        
        try {

            return headerTemplate.init(obj)
           
        } catch (error) {
            console.error('Error al cargar el header:', error)
        }

    },

    render(){
        let output = document.querySelector(`#${this.id}`)
        output.innerHTML = this.getTemplate({cartCount:this.cartCount})
    }

}