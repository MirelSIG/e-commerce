import { productsController } from "../../js/products.js"

export const cartController = {
    cartCount: 0,
    data:[],
    addItem(id){
        let product = productsController.getById(id)
        if (product.status) {
            this.data.push(product.data[0])
            this.cartCount = this.data.length
        }
    },
    getData(){
        return {data: this.data, countProducts: this.cartCount}
    }
}