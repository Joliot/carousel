import React from 'react'


const CarouselItem = ({ name, images, perex, url}) => {
  const location = 'https://www.bonami.cz/' + url
  const handleRedirect = () => {window.location.href = location}
  return (
    <div className='item' onMouseDown={handleRedirect}>
      <img src={images['homepage-retina']} role="presentation" className='item__image'/>
      <div className='item__description'>
        <div className='item__name'>
          {name}
        </div>
        <div className='item__perex'>
          {perex}
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
