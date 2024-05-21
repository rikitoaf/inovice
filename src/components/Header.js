import React from 'react'

export default function Header({handlePrint, logo}) 

{

   
  return (
    <header className='flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'>
        <div>
        <img src={logo} alt="logo" className=" h-20" />
        </div>

        {/* <div>
          <ul className='flex items-center justify-between flex-wrap'>
            <li><button onClick={handlePrint} className='bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300 '>Print</button></li>
            <li className='mx-2 bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300 ' >download</li>
            <li className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 '>Send</li>
          </ul>
        </div> */}
      </header>
  )
}
