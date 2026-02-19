import React from 'react'
import Layout from './Layout'
import {NavLink, Route, Routes} from  "react-router-dom"
import styled from "styled-components";
import AppRoutes from '../router/AppRoutes';





const ProductListingPage = () => {
  return (
    
    <Layout>
      <div>
        <NavLink to="/product">Produto</NavLink>
      </div>
    </Layout>
    
  )
}

export default ProductListingPage
