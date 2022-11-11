import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const CardWrapper=styled.div`
    padding:0px 20px;
    height:60vh;
    margin:10vh 0;
    justify-content:center;
    img{
        width:80%;
        height:40%;
        border:1px solid red;
    }
    p{
        font-size:14px
    }
    border:1px solid grey;
    background-color: #ffffff75;
  color:#7d0bcf;
`
const Wrapper = styled.div`
  width:100%; 
  display:grid;
  grid-template-columns:repeat(4,1fr);
  margin:auto;
  justify-content:center;
  height:100vh;
  background-image:url("/assets/images.jpeg");
`
const Cart = () => {
    const cart=useSelector((state)=>{return state.appreducer.cart});
  return (
    <Wrapper>{cart.map((item,id)=>(
        
        <CardWrapper key={id}>
        <img src={item.image}/>
        <h5>{item.title}</h5>
        <p>{item.desc}</p>
        <p>{item.price} Rs</p>
        </CardWrapper>
        
    ))}</Wrapper>
  )
}

export default Cart