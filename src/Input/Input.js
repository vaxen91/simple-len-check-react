import React from 'react'

const input = (props) => {
  return (
    <div className='Person'>
      <p>{props.name}</p>
      <input type='text' onChange={props.change} value={props.name} />
    </div>
  )
}

export default input
