import React, {useState} from 'react'

const Gallery = ({className, width, height, radius, showThumbs, images}) => {
  const [currentId, setCurrentId] = useState(0);

  const nextSlide = () => {
    if(currentId < images.length - 1) setCurrentId(currentId + 1);
  };

  const prevSlide = () => {
    if(currentId > 0) setCurrentId(currentId - 1);
  };


  return (
    <>
        <div className={className}>


            <div style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto',position: 'relative', width: `${width}px`, height: `${height}px`, borderRadius: radius, overflow: 'hidden'}}>


                <div style={{display: 'flex', height: '100%', transition: 'all 0.5s ease', transform: `translateX(-${currentId * 100}%)`,zIndex: '0'}}>
                    {images.map((image, id) => (
                        <img key={id}  src={image.src} alt={`Slide ${id}`} style={{width: '100%', height: '100%', objectFit: 'cover', flexShrink: '0'}}/>
                    ))}
                </div>



                <button onClick={nextSlide} disabled={currentId === images.length - 1} style={{position:'absolute', right: 35, top: '50%',zIndex: '1', background:  'none', border: 'none', cursor: 'pointer'}}>
                    <img src="../src/assets/arrow-right.svg" alt="next" />       
                </button>

                <button onClick={prevSlide} disabled={currentId === 0} style={{position:'absolute', left: 35, top: '50%', zIndex: '1', background:  'none', border: 'none', cursor: 'pointer'}}>
                    <img src="../src/assets/arrow-left.svg" alt="back"/>       
                </button>
            </div>

            {showThumbs &&(
                <div style={{display: 'flex', justifyContent: 'center',gap: '10px'}}>
                    {images.map((image, id) =>(
                        <img key={id}  src={image.src} alt={`thumb ${id}`} onClick={() => setCurrentId(id)} style={{width: '117px', height: '95px', marginTop: '10px',gap:'10px', borderRadius: radius, objectFit:'cover', border: currentId === id ? '2px solid var(--primary)' : 'none', cursor:  'pointer'}}/>
                    ))}
                </div>
            )}

        </div>
     
    </>
  )
}

export default Gallery
