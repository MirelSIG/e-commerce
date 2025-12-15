export const detalleTemplate = {
    init(product) {
        // Protección: si no hay imágenes, usa una por defecto o vacío
        const primeraImagen = (product.imagenes && product.imagenes.length > 0) 
            ? product.imagenes[0] 
            : 'https://via.placeholder.com/400x400?text=Sin+Imagen'; // o deja '' si prefieres

        return `
         <section class="product-detail">
      <div class="product-detail__image">
      <img src="${(product.imagenes && product.imagenes[0]) ? '../' + product.imagenes[0] : ''}" alt="${product.nombre}">
      </div>

      <div class="product-detail__info">
        <h1>${product.nombre}</h1>
        <p class="category">Categoría: ${product.categoria}</p>
        <p class="description">${product.descripcion || 'Sin descripción disponible'}</p>
        <p class="price">€${Number(product.precio).toFixed(2)}</p>

        <button class="btn-add" data-id="${product.id}">
          Añadir al carrito
        </button>
      </div>
    </section>
        `;
    }
};