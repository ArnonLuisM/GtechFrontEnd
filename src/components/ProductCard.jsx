import React from 'react'
import '../components/App.css';

const ProductCard = ({name, price, priceDiscount, image}) => {
  return (
    <>
        <div style={{width: '300px', height: '400px'}}>

            <img src={image} alt="Imagem do produto" style={{width:'292px', height:'321px', display: 'block', margin: '0 auto'}} />    
            <h4 style={{textAlign: 'left', margin: '0px', paddingLeft: '20px', fontSize: '24px'}}>
                {name}
            </h4>

            <div className="prices" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontSize: '24px', gap: '15px',  paddingLeft: '20px'}}>
                <span style={{color: priceDiscount? 'var(--light-gray)' : 'black', textDecoration: priceDiscount ? 'line-through' : 'none'}}>
                    {price}
                </span>
                {priceDiscount && (

                    <span style={{color: 'var(dark-gray)'}}>
                        {priceDiscount}
                    </span>
                )}
            </div>
          
        </div>
    </>
  )
}

export default ProductCard
