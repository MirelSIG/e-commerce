
import { productsController } from "./products.js"
import { detalleTemplate  } from "../components/paginaDetalle.template.js"
import { cart } from "../components/cart/cart.js"


export const registro = {

   const container = document.getElementById("product-detail")

const getProductIdFromURL = () => {
  const params = new URLSearchParams(window.location.search)
  return Number(params.get("id"))
},

const renderProductDetail = async () => {
  await productsController.getData()

  const id = getProductIdFromURL()
  const result = productsController.getById(id)

  if (!result.status) {
    container.innerHTML = `<p>${result.mensaje}</p>`
    return
  }

  const product = result.data[0]
  container.innerHTML = detalleTemplate(product)

  document
    .querySelector(".btn-add")
    .addEventListener("click", () => {
      cart.addItem(product.id)
    })
},

renderProductDetail()

}