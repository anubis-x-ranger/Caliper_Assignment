import * as types from "./actionTypes"
import axios from "axios";
export const setAuth=(params)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_REQUEST});
      return axios({
        url:"http://localhost:5000/api/auth/login",
        method:"post",        
        })
        .then((res)=>{
            dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.data})
            
        })        
        
    
    .catch((err)=>dispatch({type:types.USER_LOGIN_FAILURE}))
}       
    
 // to be implemented    
// export const logout=()=>(dispatch)=>{

// }

// export const signup=()=>(dispatch)=>{

// }


