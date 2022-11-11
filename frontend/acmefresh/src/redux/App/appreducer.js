import * as types from "./actionsTypes"
const initialState={
   cart:[],
   products:[],
   isLoading:false,
   isError:false,
}


export const appreducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_PRODUCT_REQUEST:
            return {
                ...state,isLoading:true
            }
        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,isLoading:false,products:payload
            }
        case types.GET_PRODUCT_FAILURE:
            return {
                ...state,isLoading:false,isError:true
            }
        default:
            return state;
    }
    
}