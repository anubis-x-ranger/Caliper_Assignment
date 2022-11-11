import axios from "axios"
import * as types from "./actionsTypes"

export const getproductdata=()=>(dispatch)=>{
    dispatch({type:types.GET_PRODUCT_REQUEST});
    axios.get("http://localhost:5000/api/products")
    .then((res)=>dispatch({type:types.GET_PRODUCT_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:types.GET_PRODUCT_FAILURE}));
}