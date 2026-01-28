import React from 'react'
import '../components/App.css';

const Section = ({title, titleAlign = 'left', link, children}) => {
  return (
    <>
        <div style ={{ display: 'flex', alignItems: 'center', justifyContent: titleAlign === 'center' ? 'center' : 'space-between' , position: 'relative', marginBottom: '20px'}}>

            <h2 style={{ color: 'var(--dark-gray-2)', fontSize: '24px', paddingLeft: '30px',textAlign: titleAlign}}>
                {title}
            </h2>
            
            {link  && (
                <a href={link.href} style={{color: 'var(--primary)', fontSize: '18px', position: 'absolute', right: 35}}>
                {link.text}
                </a>
            )}

        </div>


        <div>
            {children}
        </div>
    </>
  )
}

export default Section
