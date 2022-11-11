import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { setAuth } from '../redux/Auth/actions';

const Container=styled.div`
  margin:auto;
  justify-content:center;
  align-items:center;
  border:1px solid grey;
  border-radius:10px;
`
const Login = () => {
  const [email, setEmail] = useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email && password){
            dispatch(setAuth({email,password})).then((r)=>{
                navigate("/");
            });
        }
    }
  return (
    <Container>
      {/* Not Implemented */}
      <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="email" name='email' placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" name="password"  placeholder='enter password' onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" />
      </form>
    </Container>
  )
}

export default Login