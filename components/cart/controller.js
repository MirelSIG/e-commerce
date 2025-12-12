import { productsController } from "../../js/products.js"

export const cartController = {
    cartCount: 0,
    items:[],
    subTotalIva: 0,
    subTotalItems: 0,
    totalOrder: 0,
    addItem(id){
        const product = productsController.getById(id)
        if (product.status) {
            const itemExists = this.getItemById(id)            
            const item = itemExists.status ? itemExists.data[0] : product.data[0]
            item.quantity = itemExists.status ? item.quantity + 1 : 1
            item.totalIvaPriceItem = ((item.precio * item.IVA) / 100) * item.quantity
            item.totalPriceItem = (item.precio * item.quantity)            
            itemExists.status ? this.items[itemExists.indexItem] = item : this.items.unshift(item)
            this.subTotalIva += item.totalIvaPriceItem
            this.subTotalItems += item.totalPriceItem
            this.totalOrder += item.totalPriceItem + item.totalIvaPriceItem
            this.cartCount++            
        }
    },
    removeItem(id){
        let item = this.getItemById(id)
        if (item.status) {
            this.items.splice(item.indexItem, 1);
            this.cartCount -= item.data[0].quantity     
        }
    },
    changeQuantity(id){

    },
    getItemById(id){
        const result = {}
        if (this.items.length > 0) {
            result.data = this.items.filter(function(value, index){
                if (value.id === id) {                    
                    result.indexItem = index
                    return value
                }
            })
            if (result.data.length > 0) {
                result.status = true 
            }
            else{
                result.status = false
                result.mensaje = `No existe un item en el carrito con el id: ${id}`
            }
        }
        else {
            result.status = false
            result.mensaje = `No hay items en el carrito para buscar el id` 
        }
        return result
    },
    getData(){
        return {
            items: this.items, 
            cartCount: this.cartCount,
            subTotalIva: this.subTotalIva,
            subTotalItems: this.subTotalItems,
            totalOrder: this.totalOrder
        }
    }
}