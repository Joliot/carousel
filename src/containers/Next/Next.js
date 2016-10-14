import React from 'react'


const Next = ({ onNext }) => {
  return (
    <div className='Next' onClick={() => onNext()}>
      Next
    </div>
  )
}

export default Next
