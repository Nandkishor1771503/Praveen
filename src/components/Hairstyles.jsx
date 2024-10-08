import React from 'react'

function Hairstyles() {
  return (
    <>
      <div className='grid grid-cols-2 gap-1 mt-8'>
        <div className='text-center text-xl'>
          <img src="https://www.realmenrealstyle.com/wp-content/uploads/2023/03/Undercut-2.jpg" alt="" className='w-[85%] m-4 rounded-full shadow-xl z-50'/>
          <h2>Classic</h2>
        </div>
        <div className='text-center text-xl'>
          <img src="https://tse4.mm.bing.net/th?id=OIP.YFT_1uyhRrTpFdaZV6T7jwHaIM&pid=Api&P=0&h=180" alt="" className='w-[70%] m-4 rounded-full shadow-xl z-50'/>
          <h2>Step cut</h2>
        </div>
        <div className='text-center text-xl'>
          <img src="https://tse1.mm.bing.net/th?id=OIP.-TW0TGHd3qCAxgM7T4CmIAHaHa&pid=Api&P=0&h=180" alt="" className='w-[85%] m-4 rounded-full shadow-xl z-50'/>
          <h2>Mullet</h2>
        </div>
        <div className='text-center text-xl'>
          <img src="https://i.pinimg.com/originals/11/6f/16/116f1628176ef0e868d87177e3b6f455.jpg" alt="" className='w-[70%] m-4 rounded-full shadow-xl z-50'/>
          <h2>Buzz cut</h2>
        </div>
        <div>
          <img src="" alt="" className='w-[85%] m-4 rounded-full shadow-xl z-50'/>
          <h2></h2>
        </div>
        <div>
          <img src="" alt="" className='w-[85%] m-4 rounded-full shadow-xl z-50'/>
          <h2></h2>
        </div>
      </div>
    </>
  )
}

export default Hairstyles
