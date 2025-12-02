export const HeaderTemplate = {

    init(obj){
        return `
            <header class="top-header">
        <div class="logo">
            <img src="../img/Captura de pantalla de 2025-12-02 09-20-03.png" alt="logo">
        </div>

        <div class="search-bar">
            <input type="text" placeholder="Buscar en AgroConnect">
            <button><i class="fas fa-search"></i></button>
        </div>

        <div class="top-right">
            <div class="contactanos"><a href="">CONTACTANOS</a></div>

            <div class="separator"></div>

            <a href="#" style="  color: #9370DB;">
                <div class="user-actions">
                    <i class="far fa-user" style="font-size: 40px;"></i> Mi cuenta <span class="cart-count">0</span>
            </a>
            <a href="#" style="  color: #9370DB;">
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