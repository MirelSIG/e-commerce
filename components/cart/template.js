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
                                <p>${obj.cartCount} Artículos</p>
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
        <div class="cartItem" id="${obj.id}">
            <div class="cartItemTitle">
                <h3>${obj.nombre}</h3>
            </div>
            <div class="cartItemContent">
                <div class="cartItemImg">
                    <img src="${obj.imagen}" alt="${obj.nombre}">
                </div>
                <div class="cartItemDetails">
                    <div class="cartItemPrice">
                        <p>Precio Unidad:</p>
                        <p>€${obj.precio}</p>
                    </div>
                    <div class="cartItemIva">
                        <p>IVA ${obj.IVA}%:</p>
                        <p>€${((obj.precio * obj.IVA)/100).toFixed(2)} </p>
                    </div>                    
                    <div class="cartItemQuantity">
                        <p>Cantidad:</p>
                        <div class="cartQuantityControls">    
                            <a href="#" class="cartDecreaseItemBtn" data-id="${obj.id}"><i class="fa fa-minus"></i></a>
                            <input type="text" class="cartItemQuantityInput" data-id="${obj.id}" value="${obj.quantity}" min="1" max="${obj.stock}"/>
                            <a href="#" class="cartIncreaseItemBtn" data-id="${obj.id}"><i class="fa fa-plus"></i></a>
                        </div>
                    </div>
                    <div class="cartItemTotalPrice">
                        <p>Total:</p>
                        <p>€${((obj.precio + (obj.precio * obj.IVA)/100) * obj.stock).toFixed(2)}</p>
                    </div>
                </div> 
            </div>
            <div class="cartItemFooter">
                <a class="cartRemoveItemBtn" data-id="${obj.id}"><i class="fa fa-trash"></i> Eliminar</a>
            </div>
        </div>
        `
    },
    isEmpty(){
        return`
            <div class="cartEmpty">
                <h3>Tu carrito está vacío. Explora nuestros productos y añade algo.</h3>
            </div>
        `
    }
}