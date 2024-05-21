import React from 'react'

export default function Dates({invoicenumber, invoicedate, duedate}) {
  return (
    <article className='mt-10 mb-20 flex  items-end justify-end'>
        <ul>
          <li className='p-1'><span className='font-bold'>Invoice number:</span>{invoicenumber}</li>
          <li className='p-1 bg-gray-100'><span className='font-bold'>Invoice Data:</span>{invoicedate}</li>
          <li className='p-1'><span className='font-bold'>Due Date:</span>{duedate}</li>
        </ul>
      </article>
  )
}
