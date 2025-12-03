import { headerTemplate } from "../components/header.template.js"

export const header = {
    
    id: `header`,
    divId: `headerDiv`,

    getTemplate(obj){
        
        try {

            return headerTemplate.init(obj)
           
        } catch (error) {
            console.error('Error al cargar el navbar:', error)
        }

    }, 

    render(){
        let output = document.querySelector(`#${this.id}`)
        output.innerHTML = this.getTemplate()
    }

}