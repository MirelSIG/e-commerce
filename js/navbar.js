import { navbarTemplate } from "../components/navbar.template.js"

export const navbar = {

    id: `navbar`,
    divId: `navbarDiv`,

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
        if(output){
         output.innerHTML = this.getTemplate({count:countCarr})     
        }
      
    }

}