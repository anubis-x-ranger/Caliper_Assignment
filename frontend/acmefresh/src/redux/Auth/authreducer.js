
import * as types from "./actionTypes"


const initialState={
    isAuth:false,
    isLoading:false,
    isError:false,
    token:"",
    details:[]
}


export const authreducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.USER_LOGIN_REQUEST:
            return {
                ...state,isLoading:true
            }
        case types.USER_LOGIN_SUCCESS:
            return{
                ...state,isAuth:true,token:payload,isLoading:false
            }
        case types.USER_LOGIN_FAILURE:
            return {
                ...state,isError:true,isLoading:false
        }

        case types.USER_LOGOUT_REQUEST:
            return {
                ...state,isLoading:true
            }
        case types.USER_LOGOUT_SUCCESS:
            return {
                ...state,isLoading:false,isAuth:false,token:""
            }
        case types.USER_LOGOUT_FAILURE:
            return {
                ...state,isError:true
            }
        case types.USER_SIGNUP_REQUEST:
            return {
                ...state,isLoading:true
            }
        case types.USER_SIGNUP_SUCCESS:
            return{
                ...state,isLoading:false,details:payload
            }
        case types.USER_SIGNUP_FAILURE:
            return {
                ...state,isError:true
        }
        default:
            return state;
    }
    
}