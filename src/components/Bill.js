import React from 'react'

export default function Bill( {total}) {
    const numberToWords  = require('number-to-words');
                 let inWords = numberToWords.toWords(total)
   
  return (
    <>
        <div>
          <h2 className='flex items-start justify-start text-gray-800 text-4xl font-bold'>Total Amount: {total.toLocaleString()}</h2>
        </div>

        <div className='mb-10'>
            <p className='flex items-start justify-start text-gray-800 text-xl font-bold'> In words: {
        
                 inWords
            }</p>
        </div>
    
    </>
  )
}
