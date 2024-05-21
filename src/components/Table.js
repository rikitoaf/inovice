import React from 'react'


function Table({list,total } ) {
  return (
    <>
        <table width = "100%" className=' mb-10'>
            <thead className=''>
                <tr className='bg-gray-100 p-6'>
                    <td className='font-bold'> 
                        Description
                    </td>
                    <td className='font-bold'>
                        Sample Design 
                    </td>
                    <td className='font-bold'>
                        Rate
                    </td>
                    <td className='font-bold'>
                        Quantity
                    </td>
                    <td className='font-bold'>
                        Total Amount
                    </td>
                </tr>
            </thead>
        {list.map(({id,description, quantity, rate,file, amount}) => (
            <React.Fragment key={id}>
                <tbody>
                <tr >
                    <td>{description}</td>
                    <td><img src={file}  className=" h-20" alt="" /></td>
                    <td>{rate}</td>
                    <td>{quantity}</td>
                    <td>{amount}</td>
                </tr>
            </tbody>
            </React.Fragment>

        ))}
            
        </table>

        
       
        {/* <div>
          <h2 className='text-gray-800 text-2xl font-bold'>Total Amount: {convertToWords.(total)}</h2>
        </div> */}
    
    </>
  )
}

export default Table