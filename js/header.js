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

   
async  buscarInstrumentos(buscar) {
    const respuesta = await fetch("/data/products.json");
    const instrumento = await respuesta.json(); 
    
    const resultados = instrumento.filter(function(item) {
        return item.nombre.toLowerCase().includes(buscar.toLowerCase());
    });

    console.log(resultados);
    return resultados;
},

     mostrarResultados(resultados) {
    const contenedor = document.getElementById("search-results");
    contenedor.innerHTML = ""; // limpiar

    if (resultados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron resultados</p>";
        return;
    }

    resultados.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("resultado-item");

        div.innerHTML = `
            <p>${item.nombre}</p>
        `;

        // 👉 Si el usuario hace clic en un resultado
        div.addEventListener("click", () => {
            window.location.href = `/producto.html?id=${item.id}`;
        });

        contenedor.appendChild(div);
    });
}

}