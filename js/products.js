export const productsController = {
    data:[],
    async getData(){
        try {
            const response = await fetch("data/products.json")
            if (!response.ok) {
                throw new Error('La red respondió con un error.')
            }
            const data = await response.json()
            this.data = data
        }
        catch (error) {
            console.error('Hubo un problema con la petición fetch:', error);
        }
    },
    getById(id){
        const result = {}
        if (this.data.length > 0) {
            result.data = this.data.filter(function(value, index){
                if (value.id === id) {
                    return value                    
                }
            })
            if (result.data.length > 0) {
                result.status = true 
            }
            else{
                result.status = false
                result.mensaje = `No existe un producto con el id: ${id}`
            }
        }
        else {
            result.status = false
            result.mensaje = `No hay productos en la data para buscar el id` 
        }
        return result
    },
    getByCategory(category) {
        const result = {}
        if (this.data.length > 0) {
            result.data = this.data.filter(function(value, index){
                if (value.categoria.toLowerCase() === category.toLowerCase()) {
                    return value                    
                }
            })
            if (result.data.length > 0) {
                result.status = true 
            }
            else{
                result.status = false
                result.mensaje = `No existe un producto con la categoria: ${category}`
            }
        }
        else {
            result.status = false
            result.mensaje = `No hay data para filtrar la categoria`  
        }
        return result
    },
    searchString(q) {
        const result = {}
        if (this.data.length > 0) {
            result.data = this.data.filter(function(value, index){
                if(value.nombre.toLowerCase().includes(q.toLowerCase()) || 
                    value.categoria.toLowerCase().includes(q.toLowerCase()) ||
                    value.descripcion.toLowerCase().includes(q.toLowerCase())
                ){
                    return value
                }
            })
            if (result.data.length > 0) {
                result.status = true 
            }
            else{
                result.status = false
                result.mensaje = `No existe un producto con el string: ${q}`
            }
        }
        else {
            result.status = false
            result.mensaje = `No hay data para filtrar la busqueda` 
        }
        return products     //Revisar el retorno de esta función: result//
    },
render() {
  // 1) Precondiciones
  if (!this.data || this.data.length === 0) {
    console.warn("No hay productos para renderizar.");
    return;
  }

  const contenedorGeneral = document.getElementById("catalogo-container");
  if (!contenedorGeneral) {
    console.error("No se encontró el contenedor #catalogo-container");
    return;
  }

  // 2) Limpieza del contenedor para evitar duplicados en re-render
  contenedorGeneral.innerHTML = '';

  // 3) Agrupación de productos por categoría
  const categorias = {};
  this.data.forEach(producto => {
    const cat = (producto.categoria || '').trim();
    if (!categorias[cat]) categorias[cat] = [];
    categorias[cat].push(producto);
  });

  // 4) Renderización de secciones por categoría
  for (const [categoria, productos] of Object.entries(categorias)) {
    const categoriaId = categoria.toLowerCase().replace(/\s+/g, "-");

    const seccion = document.createElement("section");
    seccion.id = categoriaId;

    const titulo = document.createElement("h2");
    titulo.textContent = categoria;
    seccion.appendChild(titulo);

    const grid = document.createElement("div");
    grid.className = "catalogo";

    // Delegación de eventos (uso de 'this' en función flecha para acceder al controlador)
    grid.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".producto__btn--add");
      if (!btn) return;

      const id = Number(btn.dataset.productId);
      const productoSeleccionado = this.data.find(p => p.id === id);
      if (!productoSeleccionado) {
        console.warn("Producto no encontrado para id:", id);
        return;
      }

      // Evento personalizado para el carrito
      const event = new CustomEvent("cart:add-item", {
        detail: { id: productoSeleccionado.id },
        bubbles: true
      });
      btn.dispatchEvent(event);
    });

    // 5) Tarjetas
    productos.forEach(producto => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "producto";
      tarjeta.id = `producto-${producto.id}`;

      const imagen = (producto.imagenes && producto.imagenes[0]) ? producto.imagenes[0] : "img/placeholder.jpg";

      tarjeta.innerHTML = `
        <figure class="producto__media">
          <img src="${imagen}" alt="${producto.nombre}">
        </figure>
        <h3 class="producto__titulo">${producto.nombre}</h3>
        <p class="producto__categoria">Categoría: ${producto.categoria}</p>
        <p class="producto__precio">Precio: €${Number(producto.precio).toFixed(2)}</p>
        <button
          type="button"
          class="producto__btn producto__btn--add"
          data-product-id="${producto.id}">
          Seleccionar
        </button>
      `;

      grid.appendChild(tarjeta);
    });

    seccion.appendChild(grid);
    contenedorGeneral.appendChild(seccion);
  }
}
};