import React from 'react'
import {NavLink} from  "react-router-dom"
import styled from "styled-components";
import Logo from './Logo';
import Search from "../assets/Search.png"
import Buy from "../assets/Buy.png"
const HeaderContainer = styled.header`
    background-color: lightgray;
    & nav ul{
        display: flex;
        list-style: none;
        gap: 2%;
    }
    & div{
        padding: 2.5%;
        align-items: center;
        display: flex;
        justify-content: space-between;

    }
    


`
const Header = () => {
  return (
    <HeaderContainer>
        
        <div>
            <Logo/>
            <input type="search" name="Pesquisar" id="" />
            <span><img src={Search} alt="Pesquisa" /></span>
            <a href="">Cadastrar-se</a>
            <button type="button">entrar </button>
            <a href="http://" target="_blank"><img src={Buy} alt="Carrinho de compras" /></a>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Produtos</a>
                </li>
                <li>
                    <a href="">Categorias</a>
                </li>
                <li>
                    <a href="">Meus pedidos</a>
                </li>
            </ul>
        </nav>


        
    </HeaderContainer>
  )
}

export default Header
