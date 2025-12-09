import { cartView } from "./view.js"

export const cart = {
    idBtnCart: cartView.idBtnCart,
    idBtnCloseCart: cartView.idBtnCloseCart,
    toggle(){
        cartView.toggle();
    },
    addItem(id){
        cartView.addItem(id)
    },
     addItem(id) {
    cartView.addItem(id);
  },

  add(producto) {
    const existente = this.items.find(p => p.id === producto.id);
    if (existente) {
      existente.qty += 1;
    } else {
      this.items.push({ ...producto, qty: 1 });
    }

    // Actualiza la vista del carrito
    cartView.render(this.items);

    // Opcional: notificar que el carrito cambió
    document.dispatchEvent(new CustomEvent("cart:updated", {
      detail: { items: this.items }
    }));
  },

  init() {
    const btnCart = document.getElementById(this.idBtnCart);
    if (btnCart) {
      btnCart.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggle();
      });
    }
    // Escucha el evento personalizado emitido desde el catálogo
    document.addEventListener("cart:add-item", (ev) => {
      const { id } = ev.detail;
      this.addItem(id);
    });
}
};