import React from 'react'
import Service from '../images/service.jpeg'

function Services() {
  return (
    <>
        <strong className="text-2xl font-sans mb-4 ">Services</strong>

      <img src={Service} alt="" className='w-[95%] rounded-xl mt-8 shadow-2xl z-50 mb-5'/>
    </>
  )
}

export default Services
