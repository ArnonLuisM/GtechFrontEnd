import React from 'react'
import '../components/App.css';

const ProductCard = ({name, price, priceDiscount, image}) => {
  return (
    <>
        <div style={{width: '300px', height: '400px'}}>

            <img src={image} alt="Imagem do produto" style={{width:'292px', height:'321px', display: 'block', marginBottom: '10px'}} />
                
            <span style={{display: 'block', whiteSpace: 'nowrap',textAlign: 'left', marginBottom: '10px', fontSize: '24px', color: 'var(--dark-gray-2)', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {name}
            </span>

            <div className="prices" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontSize: '24px', fontWeight: 'bold',gap: '15px'}}>
                <span style={{color: priceDiscount? 'var(--light-gray)' : 'black', textDecoration: priceDiscount ? 'line-through' : 'none'}}>
                    R${price}
                </span>
                {priceDiscount && (

                    <span style={{color: 'var(dark-gray)'}}>
                        R${priceDiscount}
                    </span>
                )}
            </div>
          
        </div>
    </>
  )
}

export default ProductCard
