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
    justify-content: space-between;
  }
  & .resumo h3{
    display: flex;
    padding: 2% 10% 2% 2%;
    padding: 5%;
  }
  & .redes {
    display: flex;
    gap: 5%;
  }
  & .informação{
    padding: 2% 2% 2% 2%;
  } 
  & .categorias{
    padding: 2% 2% 2% 2%;
  }
  & .contato{
    padding: 2% 2% 2% 2%;
  }
  & .ultimo {
    display: flex;
    justify-content: center;
    padding: 2% 2% 2% 2%;
  }
  
`

const Footer = () => {
  return (
    <FooterContainer>
        <div className="principal">
          <div className="resumo">
            <figure>
              <img src={Logob} alt="Logo da loja" />
            </figure>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
            <div className="redes">
              <a href="#"><img src={facebook} alt="Facebook da loja" /></a>
              <a href="#"><img src={instagram} alt="Instagram da loja" /></a>
              <a href="#"><img src={twitter} alt="Twitter da loja" /></a>
            </div>
          </div>
          <div className="informação">
            
          </div>
          <div className="categorias">
            
          </div>
          <div className="contato">
            
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