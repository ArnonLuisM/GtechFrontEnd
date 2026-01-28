import React from 'react'
import ProductCard from './ProductCard'

const ProductListing = ({products}) => {
  return (
    <>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start', width: '80%'}}>
            {products.map((product, id) => (
                <ProductCard key={id} name={product.name}  price={product.price} priceDiscount={product.priceDiscount} image={product.image}  />
            ))}
        </div>    
    </>
  )
}

export default ProductListing
