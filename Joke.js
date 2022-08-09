import React from 'react'

function Joke({setup ,punchline}) {
  return (
      <>
      <hr/>
      <div className='setup'> Setup:-{setup}</div>
      <p className='punchline'>Punchline:-{punchline}</p>
      <hr/>
      
      </>
  )
}

export default Joke