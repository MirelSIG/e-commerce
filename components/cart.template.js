export const cartTemplate = {

    init(obj){
        return `
            <aside id="cart" class="cart">
                <div id="cartDiv">
                    <header class="cart-header">
                        <div class="">
                            <a id="btnCloseCart" class="btnCloseCart" href="#">
                                <i class="fa-solid fa-xmark"></i>
                            </a>
                        </div>
                        <div class="divTitle">
                            <h2>Tu carrito</h2>
                            <div class="subTitle">
                                <p>3 artículos</p>
                            </div>
                        </div>
                    </header>
                    <div class="cartBody">
                        ${obj.items}
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
            <div>item del carrito</div>
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