export const cartTemplate = {

    init(obj, html){
        return `
            <aside id="cart" class="cart">
                <div id="cartDiv" class="cartDiv">
                    <div class="cartHeader">
                        <h2>Tu carrito</h2>
                        <a id="btnCloseCart" class="btnCloseCart" href="#">
                            <i class="fa-solid fa-xmark"></i>
                        </a>
                    </div>                    
                    <div id="cartItems" class="cartBody">
                        <div class="cartCoutItems">
                            <h3><span id="cartCountNumber" class="cartCountNumber">${obj.cartCount}</span> Artículos</h3>
                        </div>
                        ${html.items ? html.items : this.isEmpty()}
                    </div>
                    ${html.items ? html.footer : ``}

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
                        <p>€${obj.precio.toFixed(2)}</p>
                    </div>
                    <div class="cartItemQuantity">
                        <p>Cantidad:</p>
                        <div class="cartQuantityControls">    
                            <a href="#" class="cartDecreaseItemBtn" data-id="${obj.id}"><i class="fa fa-minus"></i></a>
                            <input type="text" class="cartItemQuantityInput" data-id="${obj.id}" value="${obj.quantity}" min="1" max="${obj.stock}"/>
                            <a href="#" class="cartIncreaseItemBtn" data-id="${obj.id}"><i class="fa fa-plus"></i></a>
                        </div>
                    </div>
                    <div class="cartItemIva">
                        <p>IVA:</p>
                        <p>€${obj.totalIvaPriceItem.toFixed(2)} </p>
                    </div>
                    <div class="cartItemTotalPrice">
                        <p>Total:</p>
                        <p>€${obj.totalPriceItem.toFixed(2)}</p>
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
    },
    footer(obj){
        return `
            <div class="cartFooter">
                <div class="cartTotalRow">
                    <div class="cartSubTotal">Subtotal IVA:</div>
                    <div class="cartSubTotalPrice">€${obj.subTotalIva.toFixed(2)}</div>
                </div>
                <div class="cartTotalRow">
                    <div class="cartSubTotal">Subtotal Productos:</div>
                    <div class="cartSubTotalPrice">€${obj.subTotalItems.toFixed(2)}</div>
                </div>
                <div class="cartTotalRow">
                    <div class="cartSubTotal">Total:</div>
                    <div class="cartSubTotalPrice">€${obj.totalOrder.toFixed(2)}</div>
                </div>
                <div class="">
                    <a class="cartCheckoutBtn">Finalizar compra</a>
                </div>
            </div>
        `
    }
}