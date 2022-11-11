import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addToCart } from '../redux/App/actions'

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

const ProductCard = (props) => {
  const dispatch=useDispatch();
  
  const handleCart=()=>{
    dispatch(addToCart(props.item))
  }
  return (
    <CardWrapper>
        <img src={props.item.image}/>
        <h5>{props.item.title}</h5>
        <p>{props.item.desc}</p>
        <p>{props.item.price} Rs</p>
        <button onClick={handleCart}>Add to Cart</button>
    </CardWrapper>
  )
}

export default ProductCard