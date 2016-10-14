import React from 'react'

import CarouselItem from '../../components/carousel/CarouselItem'

const Carousel = ({ campaigns }) => {
  const items = campaigns.map((item) => {
    return <CarouselItem key={item.niceUrl} name={item.name} images={item.images}/>
  })
  return (
    <div className='carousel'>
      {items}
    </div>
  )
}

export default Carousel
