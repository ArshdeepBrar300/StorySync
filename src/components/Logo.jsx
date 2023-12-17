import React from 'react'
import logo from '../assets/logo.png'
function Logo({ height }) {

  return (
    <div >
      {console.log(height)}
      <img src={logo} style={{ height }} />
    </div>
  )
}

export default Logo