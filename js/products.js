export const products = {
    data:[],
    async getData(){
        try {
            const response = await fetch("../data/products.json")
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
        let product
        if (this.data.length > 0) {
            product = this.data.filter(function(value, index){
                if (value.id === id) {
                    return value                    
                }
            })
            if (!(product.length > 0)) {
                product = false
            }
        }
        else {
            product = false  
        }
        return product
    },
    getByCategory(category) {
        let products
        if (this.data.length > 0) {
            products = this.data.filter(function(value, index){
                if (value.categoria.toLowerCase() === category.toLowerCase()) {
                    return value                    
                }
            })
            if (!(products.length > 0)) {
                products = false
            }
        }
        else {
            products = false  
        }
        return products
    },
    searchString(q) {
        let products
        if (this.data.length > 0) {
            products = this.data.filter(function(value, index){
                if(value.nombre.toLowerCase().includes(q.toLowerCase()) || 
                   value.categoria.toLowerCase().includes(q.toLowerCase()) ||
                   value.descripcion.toLowerCase().includes(q.toLowerCase())
                ){
                    return value
                }
            })
            if (!(products.length > 0)) {
                products = false
            }
        }
        else {
            products = false  
        }
        return products
    },
   render() {
  const contenedor = document.getElementById("catalogo-container");
  if (!contenedor || this.data.length === 0) return;

  // Agrupar productos por categoría
  const categorias = {};
  this.data.forEach(producto => {
    const cat = producto.categoria;
    if (!categorias[cat]) categorias[cat] = [];
    categorias[cat].push(producto);
  });

  // Crear secciones por categoría
  for (const [categoria, items] of Object.entries(categorias)) {
    const seccion = document.createElement("section");
    seccion.id = categoria.toLowerCase().replace(/\s+/g, "-");

    const titulo = document.createElement("h2");
    titulo.textContent = categoria;
    seccion.appendChild(titulo);

    const grid = document.createElement("div");
    grid.className = "catalogo";

    items.forEach(producto => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "producto";
      tarjeta.id = `producto-${producto.id}`;

      const imagen = producto.imagenes?.[0] || "";

      tarjeta.innerHTML = `
        <figure>
          <img src="${imagen}" alt="${producto.nombre}">
          <figcaption>${producto.nombre}</figcaption>
        </figure>
        <h3>${producto.nombre}</h3>
        <p>Precio: €${producto.precio.toFixed(2)}</p>
      `;

      grid.appendChild(tarjeta);
    });

    seccion.appendChild(grid);
    contenedor.appendChild(seccion);
  }
} 
}