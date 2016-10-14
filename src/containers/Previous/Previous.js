import React from 'react'


const Previous = ({ onPrevious }) => {
  return (
    <div className='previous' onClick={() => onPrevious()}>
      Previous
    </div>
  )
}

export default Previous
