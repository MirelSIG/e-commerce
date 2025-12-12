export const headerTemplate = {

    init(obj) {
        return `
            <div id="headerDiv" class="top-header">
                <div class="logo">
                    <img src="../img/logos/logo Symphony store.png" alt="logo">
                </div>

                <div class="search-bar">
                    <input id="buscador-input" type="text" placeholder=" Buscar tu instrumento">
                    <button id="buscador-btn"  ><i class="fas fa-search"></i></button>
            
        
                     <div id="search-results"></div>
                </div>

                <div class="top-right">
                    <div class="contactanos"><a href="../pages/contacto.html">CONTACTANOS</a></div>

                    <div class="separator"></div>

                    <div class="user-actions">

                        <a href="#" style="  color: #9370DB;">
                                <i class="far fa-user" style="font-size: 40px;"></i> Mi cuenta 
                        </a>
                        <a id="btnCart" href="#" style="  color: #9370DB;">
                            <i class="fas fa-shopping-cart" style="font-size: 40px;"></i> Carrito
                            <span id="cartCount" class="cart-count">${obj.cartCount ? obj.cartCount : 0}</span>
                        </a>
                    </div>
                </div>
            </div>
        `
    },

    carrito() {
        return `estructura html del carrito aqui`
    },

    itemSearch(obj) {
        return `
        aqui el html que se repetira${obj.nombre}
        aqui el html que se repetira${obj.description}
        `
    }
}