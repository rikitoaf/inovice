
import './App.css';
import {useState, useRef} from "react";
import logo from "./assets/festivida.png";
import ClientDetails from './components/ClientDetails';
import Dates from './components/Dates';
import Footer from './components/Footer';
import Header from './components/Header';
import MainDetails from './components/MainDetails';
import Notes from './components/Notes';
import Table from './components/Table';
import TableForm from './components/TableForm';
import ReactToPrint from 'react-to-print';
import Bill from './components/Bill';

function App() {

  const [showInvoice, setShowInvoice] = useState(false)
  const handlePrint = () => {
    window.print()
  }


  const [name, setName] = useState("Abdul Fattah Rakib")
  const [address, setAddress] = useState("101/2/A pulpar, mohammadpur")
  const [email, setEmail] = useState("abdulfattahrakib@gamail.com")
  const [phone, setPhone] = useState("+880 1626154884")
  const [bankname, setBankName] = useState("Premiere Bank")
  const [website, setWebsite] = useState("agventureconsultancy.com")
  const [bankaccountnumber, setBankAccountNumber] = useState("1234 456 789")
  const [clientname, setClientName] = useState("Thomas Edison")
  const [clientaddress, setClientAddress] = useState("460/A, Road 7, Avenue 6, Mirpur DOHS")
  const [invoicenumber, setInvoiceNumber] = useState("1341 036546 2315")
  const [invoicedate, setInvoiceDate] = useState("")
  const [duedate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")

  // table content
  const [description, setDescription] = useState("")
  const [file, setFile] = useState();
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)

  const componentRef = useRef()

    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }


  return (
   <main className='m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl xl:mx-auto bg-white rounded shadow' > 
      
      {showInvoice ? 
      
      <>

      <ReactToPrint trigger={()=> <button onClick={handlePrint} className='pl-5 bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300 '>Print/Download</button>} content={()=> componentRef.current}/>
      <div ref = {componentRef} className='p-8'>
      <Header handlePrint={handlePrint} logo= {logo}/>

      <MainDetails name= {name} address = {address} file= {file}/>

     
      <ClientDetails clientname = {clientname} clientaddress = {clientaddress}/>
     

      <Dates invoicenumber = {invoicenumber} invoicedate = {invoicedate} duedate = {duedate}/>

      <Bill  total={total} />
      
          
      <Table description = {description }rate= {rate} quantity= {quantity } amount=  { amount }  file = {file} handleFileChange= {handleChange} list = {list} setList = {setList} total = {total} setTotal= {setTotal}/>

     
      <Notes notes = {notes}/>
      <Footer name={name} address= {address} website = {website} email = {email} phone = {phone} bankname = {bankname} bankaccountnumber= {bankaccountnumber}  clientname = {clientname} />

      
      </div>
      <button onClick = {()=> setShowInvoice(false)} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5'>Edit Information</button>
      </>
      : (
        <>
           {/* name, address, email, phone, bankname, website, bankaccountnumber, clientname, clientaddress,
        invoicenumber, invoicedate, duedate, notes */}
       
       <div className='flex flex-col justify-center'> 

        <article className="md:grid grid-cols-2 gap-10">

          <div className="flex flex-col"> 
            <label htmlFor="name">  Name</label>
            <input type="text" name = "text" id = "name" placeholder=' name' autoComplete='off'
            value={name} onChange={(e) => setName(e.target.value)}/>

          </div>


          <div className="flex flex-col">
            <label htmlFor="address">  Address</label>
            <input type="text" name = "text" id = "address" placeholder=' address' autoComplete='off'
            value={address} onChange={(e) => setAddress(e.target.value)}/>
          </div>
        </article>

        <article className="md:grid grid-cols-3 gap-10">

          
          
          <div className="flex flex-col"> 

          <label htmlFor="email">Email</label>
          <input type="email" name = "email" id = "email" placeholder=' email' autoComplete='off'
          value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="flex flex-col"> 
          <label htmlFor="phone">  Phone</label>
          <input type="text" name = "text" id = "phone" placeholder=' phone' autoComplete='off'
          value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>

          <div className="flex flex-col"> 

            <label htmlFor="website">  Website</label>
            <input type="url" name = "website" id = "website" placeholder=' Website' autoComplete='off'
            value={website} onChange={(e) => setWebsite(e.target.value)}/>

        </div>

        </article>


        <article className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col"> 
          <label htmlFor="bankname">  Bank Name</label>
          <input type="text" name = "text" id = "bankname" placeholder=' Bank Name' autoComplete='off'
          value={bankname} onChange={(e) => setBankName(e.target.value)}/>
        </div>
        <div className="flex flex-col"> 
          <label htmlFor="bankaccountnumber">  Bank Account Number</label>
          <input type="text" name = "text" id = "bankaccountnumber" placeholder=' Bank Account Number' autoComplete='off'
          value={bankaccountnumber} onChange={(e) => setBankAccountNumber(e.target.value)}/>
        </div>
       
        </article>

        <article className="md:grid grid-cols-2 gap-10 md:mt-16">
          <div className="flex flex-col">
          <label htmlFor="clientname">  Client Name</label>
          <input type="text" name = "text" id = "clientname" placeholder=' clientname' autoComplete='off'
          value={clientname} onChange={(e) => setClientName (e.target.value)}/>
          </div>

          <div className="flex flex-col">
            
            <label htmlFor="clientaddress">  Client Address</label>
            <input type="text" name = "clientaddress" id = "clientaddress" placeholder=' clientaddress' autoComplete='off'
            value={clientaddress} onChange={(e) => setClientAddress(e.target.value)}/>

          </div>

        </article>


        <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col"> 

            
          <label htmlFor="invoicenumber">  Invoice Number</label>
          <input type="text" name = "text" id = "invoicenumber" placeholder=' invoicenumber' autoComplete='off'
          value={invoicenumber} onChange={(e) => setInvoiceNumber(e.target.value)}/>

          </div>

          <div className="flex flex-col"> 

          <label htmlFor="invoicedate">  Invoice Date</label>
          <input type="date" name = "text" id = "invoicedate" placeholder=' invoicedate' autoComplete='off'
          value={invoicedate} onChange={(e) => setInvoiceDate(e.target.value)}/>
          </div>

          <div className="flex flex-col"> 
          <label htmlFor="duedate">  Due Date</label>
          <input type="date" name = "text" id = "duedate" placeholder=' duedate' autoComplete='off'
          value={duedate} onChange={(e) => setDueDate(e.target.value)}/>

          </div>

        </article>
       

       
       
      <article>
        <TableForm description= {description} setDescription = {setDescription} rate = {rate} setRate= {setRate} quantity= {quantity} setQuantity= {setQuantity} amount = {amount} setAmount={setAmount} file = {file} setFile = {setFile} handleChange = {handleChange} list = {list}setList = {setList} total = {total} setTotal= {setTotal}/>
      </article>

      
       

        <label htmlFor="notes">  notes</label>
        <input type="notes" cols = "30" rows = "10" name = "text" id = "notes" placeholder='Aditional notes to the client' autoComplete='off'
        value={notes} onChange={(e) => setNotes(e.target.value)}/>

       
       
        
        <button onClick= {(e)=> setShowInvoice(true)}className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Preview Invoice</button>
       </div>
        </>)
      }
   </main>);
}

export default App;
