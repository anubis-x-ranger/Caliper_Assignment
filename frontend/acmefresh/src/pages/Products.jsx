import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import ProductCard from '../components/ProductCard';
import { getproductdata } from '../redux/App/actions'
import styled from 'styled-components';


const Wrapper = styled.div`
  width:100%; 
  display:grid;
  grid-template-columns:repeat(4,1fr);
  margin:auto;
  justify-content:center;
  height:100vh;
  background-image:url("/assets/images.jpeg");


`
const Products = () => {

  const dispatch=useDispatch();
  const products=useSelector((state)=>{return state.appreducer.products});

  useEffect(() => {
    dispatch(getproductdata());
  }, [dispatch])
  
  return (
    <Wrapper>
      {products.map((item,id)=>(
        <ProductCard item={item} key={id}/>
      ))}
    </Wrapper>
  )
}

export default Products