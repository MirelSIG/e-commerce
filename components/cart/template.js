export const cartTemplate = {

    init(obj){
        return `
            <aside id="cart" class="cart">
                <div id="cartDiv" class="cartDiv">
                    <header class="cart-header">
                        <div class="divBtnClose">
                            <a id="btnCloseCart" class="btnCloseCart" href="#">
                                <i class="fa-solid fa-xmark"></i>
                            </a>
                        </div>
                        <div class="divTitle">
                            <h2>Tu carrito</h2>
                            <div class="subTitle">
                                <p>${obj.cartCount} artículos</p>
                            </div>
                        </div>
                    </header>
                    <div id="cartItems" class="cartBody">
                        ${obj.items ? obj.items : this.isEmpty()}
                    </div>
                    <footer class="cartFooter">
                        <div class="totalRow">
                            <div class="subTotal" style="font-weight:600">Subtotal</div>
                            <div style="font-weight:800">€153.49</div>
                        </div>
                        <div class="" style="display:flex;flex-direction:column;gap:10px;">
                            <button class="checkout-btn">Finalizar compra</button>
                        </div>
                    </footer>
                </div>
            <aside>
        `
    },
    item(obj){
        return`
            <div>ID: ${obj.id}</div>
            <div>Nombre: ${obj.nombre}</div>
        `
    },
    isEmpty(){
        return`
            <div class="cart-empty">
                <p>Tu carrito está vacío. Explora nuestros productos y añade algo.</p>
            </div>
        `
    }
}