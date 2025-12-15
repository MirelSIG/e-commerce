import { productsController } from "./products.js"
import { detalleTemplate } from "../components/paginaDetalle.template.js"

export const detalleProducto = {
  container: document.getElementById("product-detail"),

  getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search)
    const id = Number(params.get("id"))
    
    return id
  },

   renderProductDetail() {

    const id = this.getProductIdFromURL()

    const product = productsController.getById(id)    

    if (product.status) {

      console.log(product.data);
      
     /*  const product = product.data[0]
      this.container.innerHTML = detalleTemplate.init(product) */
    }
    else{
      this.container.innerHTML = `<p>${result.mensaje}</p>`
    }

    
/* 
    document.querySelector(".btn-add").addEventListener("click", () => {
      cart.addItem(product.id)
    }) */
  }
}

