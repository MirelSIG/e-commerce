import { navbarTemplate } from "../components/navbar.template.js"

export const navbar = {

    getTemplate(name){
        
        try {

            return navbarTemplate.init(name)
           
        } catch (error) {
            console.error('Error al cargar el navbar:', error)
        }

    }, 

    render(){
        let name ="yoandres"
        let output = document.querySelector("#navbar")
        output.innerHTML = this.getTemplate(name)
    }

}