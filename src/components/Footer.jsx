import React from 'react'
import {NavLink} from  "react-router-dom"
import styled from "styled-components";
import Logo from './Logo';
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
const FooterContainer = styled.footer`

  background-color: var(--dark-gray);
  font-family: inter;
  padding-inline: 5%;
  letter-spacing: 0.75px;


`

const Footer = () => {
  return (
    <FooterContainer>
        <div>
          <Logo/>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
          <a href="#"><img src={facebook} alt="" /></a>
          <a href="#"><img src={instagram} alt="" /></a>
          <a href="#"><img src={twitter} alt="" /></a>
        </div>
        <div>
          <hr/>
          <h6>@ 2026 Digital Store</h6>
        </div>
    </FooterContainer>
  )
}

export default Footer
