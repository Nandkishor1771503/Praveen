import React from 'react'
import one from "../images/one.jpeg"
import two from "../images/two.jpeg"
import three from "../images/three.jpeg"
import four from "../images/four.jpeg"

function Customer() {
  return (
    <>
      <div className='grid grid-cols-2 gap-4 m-6'>
        <div>
            <img src={one} alt="" className='rounded-xl'/>
        </div>
        <div>
            <img src={two} alt="" className='rounded-xl'/>
        </div>
        <div>
            <img src={three} alt="" className='rounded-xl'/>
        </div>
        <div>
            <img src={four} alt="" className='rounded-xl'/>
        </div>
      </div>
    </>
  )
}

export default Customer
