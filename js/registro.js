import { registroTemplate } from "../components/registro.template.js"

export const registro = {

    f () {
        let di = document.querySelector("#registro-section")
        if (di) {
        
        di.innerHTML= registroTemplate.init()
    
        } 
            
        
    }


}