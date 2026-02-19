import React from 'react'
import {NavLink} from  "react-router-dom"
import styled from "styled-components";
import Logob from '../assets/logoBranca.png';
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
const FooterContainer = styled.footer`

  background-color: var(--dark-gray);
  font-family: inter;
  padding-inline: 5%;
  padding-top: 5%;
  letter-spacing: 0.75px;
  color: var(--white);
  justify-content: flex-start;
  & .principal{
    display: flex;
  }
  & .resumo {
    width: 30%;
  }
  & .resumo h3{
    display: flex;
    padding: 2% 2% 2% 2%;
    margin-bottom: 5%;
    margin-top: 5%;
    font-weight: 400;
  }
  & .redes {
    display: flex;
    gap: 5%;
  }
  & .tudo{
    display: flex;
    justify-content: space-around;
    width: 80%;
  }
  & .informação{
    padding: 2% 2% 2% 2%;
  } 
  & .categorias{
    padding: 2% 10% 2% 2%;
  }
  & .contato{
    padding: 2% 2% 2% 2%;
    width: 20%;
  }
  & .listass {
    list-style: none;
    margin-bottom: 15%;
    font-weight: 400;
  }
  & .listas1 {
    list-style: none;
    margin-bottom: 5%;
    font-weight: 400;
  }
  & .links{ 
    text-decoration: none;
    color: var(--white);
  }
  & .links:hover { 
    color: var(--primary);
  }
  & .titulo{
    margin-bottom: 30%;
  }
  & .ultimo {
    display: flex;
    justify-content: center;
    padding: 2% 2% 2% 2%;
  }
  `
const informacao = [
  {
    text: "Sobre Drip Store",
    link: "#"
  },
  {
    text: "Segurança",
    link: "#"
  },
  {
    text: "Wishlist",
    link: "#"
  },
  {
    text: "Blog",
    link: "#"
  },
  {
    text: "Trabalhe Conosco",
    link: "#"
  },
  {
    text: "Meus Pedidos",
    link: "#"
  }
]

const categorias = [
  {
    text: "Camisetas",
    link: "#"
  },
  {
    text: "Calças",
    link: "#"
  },
  {
    text: "Bonés",
    link: "#"
  },
  {
    text: "Headphones",
    link: "#"
  },
  {
    text: "Tênis",
    link: "#"
  }
]

const contato = [
  {
    text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
    num: "(85) 3051-3411"
  }
]

function ListaInformacoes() {
  return (
    <ul>
      {informacao.map((item, index) => (
        <li key={index} className="listass">
          <NavLink to={item.link} className="links">
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function ListaContato() {
  return (
    <ul>
      {contato.map((item, index) => (
        <><li key={index} className="listas1">
          {item.text}
        </li>
        <li className="listas1">
            {item.num}
          </li></>
      ))}
    </ul>
  );
}

function ListaCategorias() {
  return (
    <ul>
      {categorias.map((item, index) => (
        <li key={index} className="listass">
          <NavLink to={item.link} className="links">
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

const Footer = () => {
  return (
    <FooterContainer>
        <div className="principal">
          <div className="resumo">
            <figure>
              <img src={Logob} alt="Logo da loja" />
            </figure>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
            <div className="redes">
              <a href="#"><img src={facebook} alt="Facebook da loja" /></a>
              <a href="#"><img src={instagram} alt="Instagram da loja" /></a>
              <a href="#"><img src={twitter} alt="Twitter da loja" /></a>
            </div>
          </div>
          <div className="tudo">
          <div className="informação">
            <div className="titulo">
              <h3>Informação</h3>
            </div>
            <div className="topico">
              <ListaInformacoes/>
            </div>
          </div>
          <div className="categorias">
            <div className="titulo">
              <h3>Categorias</h3>
            </div>
            <div className="topico">
              <ListaCategorias/>
            </div>
          </div>
          <div className="contato">
            <div className="titulo">
              <h3>Contato</h3>
            </div>
            <div className="topico">
              <ListaContato/>
            </div>
          </div>
        </div>
          </div>
        <hr/>
        <div className="ultimo">
          <h5>@ 2026 Digital Store</h5>
        </div>
    </FooterContainer>
  )
}

export default Footer;