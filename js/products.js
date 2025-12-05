export const productsController = {
    data:[],
    async getData(){
        try {
            const response = await fetch("../data/test.json")
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
        return products
    }
}