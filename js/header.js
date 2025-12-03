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

    },

async  buscarInstrumentos (buscar) {
    const respuesta = await fetch("/data/products.json");
    const instrumento = await respuesta.json(); 
    

/* resultados = instrumento.filter(inst => 
    inst.nombre.toLowerCase().includes(buscar.toLowerCase())
)  */
//return resultados; 
const resultados = instrumento.filter(function(value,index){ 
    index.nombre.toLowerCase()
    if (){
        
    }

} 
   
) 
console.log(resultados);

}
    


}