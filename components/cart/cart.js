import { cartView } from "./view.js"

export const cart = {
    idBtnCart: cartView.idBtnCart,
    toogle(){
        cartView.toogle()
    },
    addItem(id){
        cartView.addItem(id)
    }
}