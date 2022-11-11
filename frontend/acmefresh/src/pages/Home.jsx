import React from 'react'
import styled from 'styled-components';
import Section from '../components/Section';

const Container = styled.div`
  height:100vh;
`

const Home = () => {
  return (
    <Container>
      <Section
        title="AcmeFresh | Hydroponic Systems"
        description="A website that makes purchase and installation  of  hydroponic systems online"
        backgroundImg="hydro-1.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Agriculture, Plant Science & Data"
        description="Get advanced Equipments for cost effective prices"
        backgroundImg="hydro-2.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Purchase Hydroponic Plants, System and Accessories"
        description=""
        backgroundImg="images.jpeg"
        leftBtnText="Shop Now"
        rightBtnText=""
      />
    </Container>
  )
}

export default Home