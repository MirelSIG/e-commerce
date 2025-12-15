export const navbarTemplate = {

    init(obj) {
        return `
            <div id="navbarDiv" class="main-menu">
                <ul>
                    <li><a href="#" data-idioma="navbar.guitar">Guitarra</a></li>
                    <li><a href="#" data-idioma="navbar.amplification">Amplificación</a></li>
                    <li><a href="#" data-idioma="navbar.effects">Efectos</a></li>
                    <li><a href="#" data-idioma="navbar.bass">Bajos</a></li>                
                </ul>
            </div>
        `
    }

}