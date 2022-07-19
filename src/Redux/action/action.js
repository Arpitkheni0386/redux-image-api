

// import { Actiontype } from "../contants/actiontype"

export const setproduct = (product) => {
     console.log(product)
    return{
        type:"SELECT_PRODUCT",
        payload:product
    }
}