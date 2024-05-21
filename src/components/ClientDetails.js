import React from 'react'

export default function ClientDetails({clientname, clientaddress}) {
  return (
        <section className='mt-10'>
        <h2 className='text-2xl uppercase font-bold mb-1'>{clientname}</h2>
        <p>{clientaddress}</p>
      </section>
  )
}
