export const navbarTemplate = {

    init(obj){
        return `
            <nav class="main-menu">
                <ul>
                    <li><a href="#">Guitarra</a></li>
                    <li><a href="#">Amplificación</a></li>
                    <li><a href="#">Efectos</a></li>
                    <li><a href="#">Bajos</a></li>
                    <li><a href="#">contador carrito = ${obj.count}</a></li>
                
                </ul>
            </nav>
        `
    }
}