export const registro = {
  container: document.getElementById("product-detail"),

  getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search)
    return Number(params.get("id"))
  },

  async renderProductDetail() {
    await productsController.getData()

    const id = this.getProductIdFromURL()
    const result = productsController.getById(id)

    if (!result.status) {
      this.container.innerHTML = `<p>${result.mensaje}</p>`
      return
    }

    const product = result.data[0]
    this.container.innerHTML = detalleTemplate(product)

    document.querySelector(".btn-add").addEventListener("click", () => {
      cart.addItem(product.id)
    })
  }
}

// ejecutar
registro.renderProductDetail()
