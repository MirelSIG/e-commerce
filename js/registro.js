import { registroTemplate } from "../components/registro.template.js"

export const registro = {

    f () {
        let di = document.querySelector("#registro-section")
        di.innerHTML= registroTemplate.init()

    }


}