import React from 'react'

import NextImg from '../../assets/next.svg'


const Next = ({ onNext, isActive}) => {
  return (
    <div className={isActive ? 'arrow' : 'arrow arrow-passive'} onClick={() => onNext()}>
      <img src={NextImg} role='presentation' className={isActive ? 'arrow__image-next' : 'arrow__image-next passive'}/>
    </div>
  )
}

export default Next
