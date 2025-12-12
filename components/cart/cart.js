import { cartView } from "./view.js"

export const cart = {
    idBtnCart: cartView.idBtnCart,
    idBtnCloseCart: cartView.idBtnCloseCart,
    toggle(){
        cartView.toggle()
    },
    addItem(id){
        cartView.addItem(id)
    }
};