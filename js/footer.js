import { footerTemplate } from "../components/footer.template.js"

export const footer = {

    id: `footer`,
    divId: `footerDiv`,

    getTemplate(obj){
        
        try {

            return footerTemplate.init()
           
        } catch (error) {
            console.error('Error al cargar el footer:', error)
        }

    }, 

    render(){
        let output = document.querySelector(`#${this.id}`)
        output.innerHTML = this.getTemplate()
    }

}