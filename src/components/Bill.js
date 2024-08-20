import React from 'react'

export default function Bill( {total, discount}) {
    const numberToWords  = require('number-to-words');
                 let inWords = numberToWords.toWords(total)
   
  return (
    <>
    <div className='py-10 flex flex-col sm:flex-row justify-between '>
      <div className='flex flex-col'>
            <h2 className='flex items-start justify-start text-gray-800 text-4xl font-bold'>Total Amount: {total.toLocaleString()} BDT</h2>
            <p className='flex items-start justify-start text-gray-800 text-xl font-bold'> In words: {
          
          inWords
    }      </p>
            
      </div>

      <div className='flex flex-col items-end w-1/3'>
        <h2 className='flex items-start justify-start text-gray-800 text-2xl font-bold'>Discount Amount: {discount} BDT</h2>
      </div>


    </div>
        

        
    
    </>
  )
}
