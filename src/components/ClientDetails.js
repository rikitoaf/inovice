import React from 'react'

export default function ClientDetails({clientname, clientaddress, clientPhone}) {
  return (
        <section className=''>
        <h2 className='text-2xl uppercase font-bold mb-1'>{clientname}</h2>
        <p>{clientaddress}</p>
        <p>{clientPhone}</p>
      </section>
  )
}
