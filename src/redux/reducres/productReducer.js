import { ActionTypes } from "../constants/action-types"

const initialState={
    products:[
        {
            id:1,
            name:"Dev",
            category:"Frontend Developer"
        }
    ]
}

export const productReducer=(state=initialState,{type,payload})=>{
   switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload}
    default:
        return state
   }
}