import { productsController } from "../../js/products.js"

export const cartController = {
    cartCount: 0,
    items:[],
    subTotalIva: 0,
    subTotalItems: 0,
    totalOrder: 0,
    addItem(id){
        let product = productsController.getById(id)
        if (product.status) {
            const item = product.data[0]
            if (this.items[id]) {
                item.quantity += 1
            }
            else{
                item.quantity = 1
            }
            item.ivaPrice = ((item.precio * item.IVA) / 100) * item.quantity
            item.totalPriceItem = (item.precio + item.ivaPrice) * item.quantity
            this.items[id] = item
            this.subTotalIva += item.ivaPrice
            this.subTotalItems += item.totalPriceItem
            this.totalOrder += item.totalPriceItem
            this.cartCount++
        }
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