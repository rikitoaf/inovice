import React from 'react'
import './Table.css'

function Table({list,total } ) {
  return (
    <>
                <table width = "100%" className=' mb-10 table-fixed'>
            <thead className=''>
                <tr className='bg-gray-100 p-6'>
                    <td className='font-bold w-1/8'> 
                        Description
                    </td>
                    <th className='font-bold w-1/2'>
                        Sample Design 
                    </th>
                    <td className='font-bold w-1/8'>
                        Rate
                    </td>
                    <td className='font-bold w-1/8'>
                        Quantity
                    </td>
                    <td className='font-bold w-1/8'>
                        Total Amount
                    </td>
                </tr>
            </thead>
        {list.map(({id,selectedTitle,description, quantity, rate,file, amount}) => (
            <React.Fragment key={id}>
                <tbody>
                <tr >
                    <td >
                        <p className='font-semibold'>{selectedTitle}</p>
                        {description}</td>
                    <td className='flex justify-center items-center'><img src={file}  className="p-3 h-[200px] object-contain object-center" alt="" /></td>
                    <td>{rate}</td>
                    <td>{quantity}</td>
                    <td>{amount}</td>
                </tr>
            </tbody>
            </React.Fragment>

        ))}
            
        </table>


{/* <table width = "100%" className=' mb-10 mobile-only hidden'>
            <thead>
                <tr className='bg-gray-100 p-1'>
                    <td className="font-bold p-2 border">Title</td>
                    <td className="font-bold p-2 border">Description</td>
                    <td className="font-bold p-2 border">Sample Design</td>
                    <td className="font-bold p-2 border">Rate</td>
                    <td className="font-bold p-2 border">Quantity</td>
                    <td className="font-bold p-2 border">Amount</td>
                    <td className="font-bold p-2 border">Actions</td>
                </tr>
            </thead>
        {list.map(({id, selectedTitle, description, quantity, rate, file, amount}) => (
            <React.Fragment key={id}>
                <tbody>
  
                 <tr key={id} className="border">
                            <td className="p-2 border" data-label="Title">{selectedTitle}</td>
                            <td className="p-2 border" data-label="Description">{description}</td>
                            <td className="p-2 border" data-label="Sample Design"><img src={file} className="h-20" alt="" /></td>
                            <td className="p-2 border" data-label="Rate">{rate}</td>
                            <td className="p-2 border" data-label="Quantity">{quantity}</td>
                            <td className= "amount" data-label="Amount">{amount}</td>
                           
                        </tr>
            </tbody>
            </React.Fragment>

        ))}
            
        </table> */}

        
       
        {/* <div>
          <h2 className='text-gray-800 text-2xl font-bold'>Total Amount: {convertToWords.(total)}</h2>
        </div> */}
    
    </>
  )
}

export default Table