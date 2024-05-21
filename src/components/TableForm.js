import React from 'react'
import { useEffect, useState } from 'react'
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid';

export default function TableForm({description, setDescription , rate , setRate,quantity, setQuantity, amount ,setAmount,file, setFile,handleChange, list, setList, total, setTotal}) {
  const [isEditing, setEditing] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newItems = {
       id :uuidv4(),
       description,
       file,
       rate,
       quantity,
       amount,
    }

    setDescription("")
    setFile()
    setQuantity("")
    setRate("")
    setAmount("")
    setList([...list, newItems])
    setEditing(false)

    console.log(list)

  }
// calculate amount of each rows
  useEffect( ()=> {
  const calculateAmount = (amount) => {
    setAmount (quantity * rate)
  }

  calculateAmount(amount)
  }, [amount, rate, quantity, setAmount])

// delete rows
  const deleteRow = (id)=> setList(list.filter((row) => row.id !=id))


// Editing each rows
  const editRow = (id)=> {
    const editingRow = list.find ((row)=> row.id ===id)
    setList(list.filter((row)=> row.id != id))
    setEditing(true)
    setDescription(editingRow.description)
    setRate(editingRow.rate)
    setQuantity(editingRow.quantity)
    setFile(editingRow.file)
  }

  // calculate total amount
  let rows = document.querySelectorAll(".amount")
  let sum = 0


  useEffect(()=> {
    for (let i =0; i<rows.length; i++){
      if (rows[i].className ==="amount"){
        sum+= isNaN(rows[i].innerHTML) ? 0: parseInt(rows[i].innerHTML)
  
      }
    }
    setTotal(sum)
    console.log(sum)
  },)

  
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
            <label htmlFor="description">Item description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Item description"
              maxLength={96}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
      </div>

      <div className='md:grid grid-cols-3 gap-10'>
        <div className="flex flex-col ">
              <label htmlFor="rate">Rate</label>
              <input
                type="text"
                name="rate"
                id="rate"
                placeholder="Item rate"
                maxLength={96}
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
        </div>
      <div className="flex flex-col ">
              <label htmlFor="description">Item quantity</label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Item quantity"
                maxLength={96}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
        </div>
      <div className="flex flex-col ">
              <label htmlFor="description"> Amount</label>
              <p>{amount}</p>
        </div>
          
        </div>
      
      <div className="flex flex-col ">
      <label htmlFor="image"> Enter your image</label>
      
          <input type="file" onChange={handleChange} />
              
      </div>
      <button className= "bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 my-5"type='submit'>{isEditing ? "Editing Item" : "Add Table Item"}</button>
      </form>

      <table width = "100%" className=' mb-10'>
            <thead>
                <tr className='bg-gray-100 p-1'>
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
                         Amount
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
                    <td className= "amount">{amount}</td>
                    <td><button className= "text-red-500 font-bold text-xl"onClick={()=> deleteRow(id)}><AiOutlineDelete/></button></td>
                    <td><button className= "text-green-500 font-bold text-xl" onClick={() => editRow(id)}><AiOutlineDelete/></button></td>
                </tr>
            </tbody>
            </React.Fragment>

        ))}
            
        </table>

        <div>
          <h2 className='flex items-end justify-end text-gray-800 text-4xl font-bold'>Total Amount: {total.toLocaleString()}</h2>
        </div>
    </>
  
  )
}
