import { navbarTemplate } from "../components/navbar.template.js"

export const navbar = {

    getTemplate(obj){
        
        try {

            return navbarTemplate.init(obj)
           
        } catch (error) {
            console.error('Error al cargar el navbar:', error)
        }

    }, 

    render(){
        let countCarr = 10
        let output = document.querySelector("#navbar")
        output.innerHTML = this.getTemplate({count:countCarr})
    }

}