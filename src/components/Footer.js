import React from 'react'

function Footer({name,email,website,address, phone, bankname, bankaccountnumber,clientname}) {
  return (
    
    <footer className='footer border-t-2 border-gray-300 pt-'>
    <ul className='flex flex-wrap items-center justify-center'>
      <li><span className='font-bold'>your name:</span> {name}</li>
      <li><span className='font-bold'>your email:</span> {email}</li>
      <li><span className='font-bold'>phone number:</span>{phone}</li>
      <li><span className='font-bold'>Bank:</span>{bankname}</li>
      <li><span className='font-bold'>Account holder name:</span> {clientname}</li>
      <li><span className='font-bold'>Account Number:</span> {bankaccountnumber}</li>
      <li><span className='font-bold'> website:</span> <a href={website} target='_blank' rel='noopenner noreferrer'></a>{website}</li>
    </ul>
  </footer>
  )
}

export default Footer