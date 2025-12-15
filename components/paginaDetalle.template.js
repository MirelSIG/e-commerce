export const detalleTemplate = {

    init(obj){
        return `
         <section class="product-detail">
      <div class="product-detail__image">
        <img src="${product.imagen}" alt="${product.nombre}">
      </div>

      <div class="product-detail__info">
        <h1>${product.nombre}</h1>
        <p class="category">Categoría: ${product.categoria}</p>
        <p class="description">${product.descripcion}</p>
        <p class="price">€${product.precio}</p>

        <button class="btn-add" data-id="${product.id}">
          Añadir al carrito
        </button>
      </div>
    </section>
        `
    }
    
}