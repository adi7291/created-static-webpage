import React from 'react'

import './center.css'
import group from "../../images/group.png"
function Center() {
  return (
       <section className='hero'>
        <img src={group} alt="" className='image'  />
        <h1 className='hero-title'>Online Experiences</h1>
        <p className='hero-desc'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
       </section>
  )
}

export default Center