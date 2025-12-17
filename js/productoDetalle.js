// js/productoDetalle.js

import { productsController } from "./products.js";
import { detalleTemplate } from "../components/paginaDetalle.template.js";
import { cart } from "../components/cart/cart.js";

export const productoDetalleController = {
  container: document.getElementById("product-detail"),

  init() {
    // Solo ejecutamos si estamos en la página de detalle (el contenedor existe)
    if (!this.container) {
      return; // Salimos silenciosamente si no es la página correcta
    }

    // Si los datos no están cargados, los cargamos
    if (productsController.data.length === 0) {
      productsController.getData().then(() => this.render());
    } else {
      this.render();
    }
  },

  traerProductoURL() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id ? Number(id) : null;
  },

  render() {
    const id = this.traerProductoURL();

    if (!id) {
      this. verError("No se encontró el ID del producto.");
      return;
    }

    const result = productsController.getById(id);

    if (result.status && result.data.length > 0) {
      const product = result.data[0];
      this.container.innerHTML = detalleTemplate.init(product);
      this.agregarCarrito(product.id);
    } else {
      this.showError("Producto no encontrado.");
    }
  },

   agregarCarrito(productId) {
    const button = this.container.querySelector(".btn-add");
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        cart.addItem(productId);
        button.textContent = "¡Añadido!";
        button.disabled = true;
        setTimeout(() => {
          button.textContent = "Añadir al carrito";
          button.disabled = false;
        }, 1000);
      });
    }
  },

  verError(message) {
    this.container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #666;">
        <h2>Error</h2>
        <p>${message}</p>
        <a href="../index.html">Volver al catálogo</a>
      </div>
    `;
  }
};

// ¡Importante! Esto inicia el detalle AUTOMÁTICAMENTE solo en la página correcta
document.addEventListener("DOMContentLoaded", () => {
  productoDetalleController.init();
});