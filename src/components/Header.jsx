import React from 'react'
import {NavLink} from  "react-router-dom"
import styled from "styled-components";
import Logo from './Logo';
import Search from "../assets/Search.png"
import Buy from "../assets/Buy.png"
const HeaderContainer = styled.header`
    
    font-family: inter;
    padding-inline: 5%;
    letter-spacing: 0.75px;
    & nav ul{
        display: flex;
        list-style: none;
        gap: 2%;
        padding-inline: 2.5%;
        padding-bottom: 1%;
        
        & li a{
            text-decoration: none;
            color: var(--dark-gray);
            
            &:hover{
                font-weight: bold;
                color: var(--primary);
                padding-bottom: 3%;
                border-bottom: 2px solid var(--primary);


            }
        }
    }
    & div{
        padding: 2.5%;
        align-items: center;
        display: flex;
        justify-content: space-between;
        & .cadastro{
            color: var(--dark-gray-2);
        }
        & .entrar{
            font-weight: bold;
            padding: 1%;
            padding-inline: 2%;
            text-decoration: none;
            background-color: var(--primary);
            color: var(--light-gray-3);
            border-radius: 8px;
        }
        & input{
            color: var(--dark-gray-2);
            width: 40vw;
            height: 2vw;
            padding: 2%;
            border: none;
            border-radius: 8px;
            background-color: var(--light-gray-3);
            background-image: image(Search);
            letter-spacing: 0.75px;
        }

    }
    


`
const Header = () => {
  return (
    <HeaderContainer>
        
        <div>
            <Logo/>
            <input type="search" name="Pesquisar" id="" placeholder='Pesquisar produto...'/>
            <span><img src={Search} alt="Pesquisa" /></span>
            <a href="#" className='cadastro'>Cadastrar-se</a>
            <a href='#' className='entrar'>Entrar</a>
            <a href="#" ><img src={Buy} alt="Carrinho de compras" /></a>
        </div>
        <nav>
            <ul>
                <li>
                    
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Produtos</a>
                </li>
                <li>
                    <a href="#">Categorias</a>
                </li>
                <li>
                    <a href="#">Meus pedidos</a>
                </li>
            </ul>
        </nav>


        
    </HeaderContainer>
  )
}

export default Header
