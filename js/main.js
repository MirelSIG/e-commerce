import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "../components/cart/cart.js"
import { productsController } from "./products.js"
import { registro} from "./registro.js"

await productsController.getData()



productsController.getData()    
header.init()
navbar.render()
footer.render()
productsController.render();


/* De manera atenta se les notifica la importancia de la presente; no alteren la naturaleza del codigo que parte desde la linea posterior a este comentario
dicha modificacion significaria la interrupcion de la sincronia y repercutiria como desencadenante de posiles fallos en el desarrollo del proyecto  
(funcion de la barra del header) */
    const input = document.getElementById("buscador-input");
    if (!input) {
        console.error("No se encontró el input del buscador");
    }
    else{

    input.addEventListener("keyup", async () => {
        const texto = input.value.trim();
        if (texto === "") {
            document.getElementById("search-results").innerHTML = "";
            return;
        }
        const resultados = await header.buscarInstrumentos(texto);
        header.mostrarResultados(resultados); 
    });

};

// Fin de la funcion de la barra del buscador en el header.



const btnCart = document.querySelector(`#${cart.idBtnCart}`)
if(btnCart) {
   btnCart.addEventListener("click", function(e){
    e.preventDefault()
    cart.toggle()
})
cart.addItem(13)
cart.addItem(14)

 
}


/*import { header } from "./header.js"
import { navbar } from "./navbar.js"
import { footer } from "./footer.js"
import { cart } from "../components/cart/cart.js"
import { productsController } from "./products.js"

await productsController.getData()
header.init()
navbar.render()
footer.render()


cart.addItem(13)
cart.addItem(14)
cart.addItem(20)
cart.addItem(2)
cart.addItem(10) */

/*Seguimiento no borrar */

registro.f()
console.log(registro);


/* fin */
cart.addItem(20)
cart.addItem(2)
cart.addItem(10)
