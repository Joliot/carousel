import React from 'react'

import PreviousImg from '../../assets/previous.svg'


const Previous = ({ onPrevious, isActive }) => {
  return (
    <div className={isActive ? 'arrow' : 'arrow arrow-passive'} onClick={() => onPrevious()}>
      <img src={PreviousImg} role='presentation' className={isActive ? 'arrow__image-previous' : 'arrow__image-previous passive'}/>
    </div>
  )
}

export default Previous
