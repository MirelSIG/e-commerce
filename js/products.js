export const products = {
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
    }
}