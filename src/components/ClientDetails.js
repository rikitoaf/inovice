import React from 'react'

export default function ClientDetails({clientname, clientaddress, clientPhone, venue, venuetype, venuedate}) {
  return (


    <div className='flex justify-between' >

    
        <section className='  items-start w-2/3'>
        <h2 className='text-2xl uppercase font-bold mb-1'>Quotation For:</h2>
        <h2 className=' uppercase font-bold mb-1'>{clientname}</h2>
        <p>{clientaddress}</p>
        <p>{clientPhone}</p>
        </section>

        <section className=' mb-20 flex  items-end w-1/3'>
        <ul>
          <li className='p-1  bg-gray-100'><span className='font-bold'>Venue: </span>{venue}</li>
          <li className='p-1'><span className='font-bold'>Program Type: </span>{venuetype}</li>
          <li className='p-1'><span className='font-bold'>Program Date: </span>{venuedate}</li>
        </ul>
        </section>
      </div>
  )
}
