export const headerTemplate = {

    init(obj){
        return `
            <div id="headerDiv" class="top-header">
                <div class="logo">
                    <img src="../img/Captura de pantalla de 2025-12-02 09-20-03.png" alt="logo">
                </div>

        <div class="search-bar">
            <input id="buscador-input" type="text" placeholder=" Buscar tu instrumento">
            <button id="buscador-btn"  ><i class="fas fa-search"></i></button>
        </div>
        <div id="search-results"></div>

                <div class="top-right">
                    <div class="contactanos"><a href="">CONTACTANOS</a></div>

                    <div class="separator"></div>

            <a href="#" >
                <div class="user-actions">
                    <i class="far fa-user" style="font-size: 40px;"></i> Mi cuenta <span class="cart-count">0</span>
            </a>
            <a href="#" >
                <i class="fas fa-shopping-cart" style="font-size: 40px;"></i> Carrito
                <span class="cart-count">0</span>
            </a>
        </div>
        </div>


    </header>
        `
    },

    carrito(){
        return `estructura html del carrito aqui`
    }
}