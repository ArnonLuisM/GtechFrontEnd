import React from 'react'
import Layout from './Layout'
import Gallery from '../components/Gallery'
import Section from '../components/Section'
import ProductCard from '../components/ProductCard'
import ProductListing from '../components/ProductListing'

const HomePage = () => {
    const galleryImages = [
        {src: 'home-slide-1.jpeg'},
        {src: 'home-slide-2.jpeg'},
        {src: 'home-slide-3.jpeg'},
        {src: 'home-slide-4.jpeg'},
        {src: 'home-slide-5.jpeg'},
        {src: 'home-slide-6.jpeg'},
        {src: 'home-slide-7.jpeg'},
        {src: 'home-slide-8.jpeg'}
    ]

   const productsList = [
        {
            name: "Tênis Air Jordan 1 Mid Chicago",
            image: "product-thumb-1.jpeg",
            price: 299.99,
            priceDiscount: 149.99
        },
        {
            name: "Tênis Nike Court Vision Mid",
            image: "product-thumb-2.jpeg",
            price: 439.99
        },
        {
            name: "Tênis Vans Old Skool Brown",
            image: "product-thumb-3.jpeg",
            price: 399.99,
            priceDiscount: 216.99
        },
        {
            name: "Tênis Adidas ZX 750 Green",
            image: "product-thumb-4.jpeg",
            price: 129.99
        },
        {
            name: "Tênis Nike Revolution 6 Lime",
            image: "product-thumb-5.jpeg",
            price: 399.99,
            priceDiscount: 179.99
        },
        {
            name: "Tênis Air Jordan 1 Mid Chicago",
            image: "product-thumb-1.jpeg",
            price: 299.99,
            priceDiscount: 149.99
        },
        {
            name: "Tênis Nike Court Vision Mid",
            image: "product-thumb-2.jpeg",
            price: 439.99
        },
        {
            name: "Tênis Vans Old Skool Brown",
            image: "product-thumb-3.jpeg",
            price: 399.99,
            priceDiscount: 216.99
        },
    ];

  return (
    <>
      <Layout>
        <div style={{background: '#f9f8fe'}}>

            <div style={{marginBottom: '200px' }}>
                <Gallery width={1440} height={681} radius={8} showThumbs images={galleryImages} />
            </div>

            <div style={{marginBottom: '200px'}}>

                <Section title={'Coleções em destaque'} titleAlign='center'>
                    <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                        <img src='collection-1.png' alt='' />
                        <img src='collection-2.png' alt='' />
                        <img src='collection-3.png' alt='' />
                    </div>
                </Section>
            
            </div>

                
            <div style={{ maxWidth: '1260px', margin: '0px auto', padding: '0 20px 200px' }}>
                <Section title={'Produtos em alta'} link={{text: 'Ver todos', href: '#'}}>
                    <ProductListing products={productsList}/>
                </Section>
            </div>

        </div>

      </Layout>
    </>
  )
}

export default HomePage
