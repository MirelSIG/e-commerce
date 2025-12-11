import { usuarioCreadoTemplate } from "../components/usuarioCreado.template.js"

export const usuarioCreado= {

    f () {
        let fi = document.querySelector("#usuario")
        fi.innerHTML= usuarioCreadoTemplate.init()

    }


}