import React from 'react'


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

        
       
        {/* <div>
          <h2 className='text-gray-800 text-2xl font-bold'>Total Amount: {convertToWords.(total)}</h2>
        </div> */}
    
    </>
  )
}

export default Table