// import {Actiontype} from "../contants/actiontype"


const initialstate = {
    products : []
}


export const productreducers = (state=initialstate ,{type ,payload}) => {
    console.log(type)
    console.log(payload)
    switch (type) {
        case "SELECT_PRODUCT" :
            return {
                products : payload
            }
    
        default:
         return state;
    }
}
