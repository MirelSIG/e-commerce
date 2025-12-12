import { cartView } from "./view.js"

export const cart = {
    idBtnCart: cartView.idBtnCart,
    idBtnCloseCart: cartView.idBtnCloseCart,
    toggle(){
        cartView.toggle()
    },
    addItem(id){
        cartView.addItem(id)
    },
    removeItem(id){
        cartView.removeItem(id)
    },
    changeQuantity(id, typeChange){
        cartView.changeQuantity(id, typeChange)
    }
};