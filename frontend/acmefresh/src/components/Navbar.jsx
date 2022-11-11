import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0px 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
    p{
    font-weight:600;
    text-decoration:none;
    text-transform:uppercase;
    padding:0px 10px;
    }
    background-color:#B6E2A1;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    p{
        font-weight:600;
        text-transform:uppercase;
        padding:0px 10px;
        flex-wrap:nowrap;
        color:black;
    }
    p:hover{
        background-color:#F7A4A4;
    }
    @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    button{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    }
`
const CustomMenu= styled(AiOutlineMenu)`
    cursor:pointer;
`

const HamBurgerMenu=styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.2s ease-in;

`

const CloseWrapper=styled.div`
    display: flex;
    justify-content: end;
`

const Close=styled(AiOutlineClose)`
    cursor:pointer;
`

const Navbar = () => {
    const links=[
                    {to:"/",title:"Home"},
                    {to:"/products",title:"Products"},
                    {to:"/clients",title:"Clients"},
                    {to:"/about",title:"About us"}
                ]

    const [rMenuStatus,setRMenuStatus]=useState(false);


  return (
    <Container>

        <p>AcmeFresh</p>
        <Menu>
            {links.map((item,id)=>(
                <NavLink to={item.to} key={id}><p>{item.title}</p></NavLink>
            ))}
        </Menu>
        <RightMenu>
            <button>Signup/Login</button>
            <CustomMenu onClick={()=>setRMenuStatus(!rMenuStatus)}/>
        </RightMenu>
        <HamBurgerMenu show={rMenuStatus}>
            <CloseWrapper>
                <Close onClick={()=>setRMenuStatus(!rMenuStatus)}/>
            </CloseWrapper>
            {links.map((item,id)=>(
                <NavLink to={item.to} key={id}><p>{item.title}</p></NavLink>
            ))}
        </HamBurgerMenu>
    </Container>
  )
}

export default Navbar