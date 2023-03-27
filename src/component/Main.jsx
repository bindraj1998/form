import React, { useState } from 'react'

const Main = () => {

  const [data,setdata]=useState({})
    //  console.log(data)
  const [form,setform]=useState([])
    // console.log(form)

     const handleformsubmit=(e)=>{
      e.preventDefault()
      
       
      if (!isValidEmail(data.email)) {
        alert('Email is invalid');
        return
      } 


      if( !(data.phone.match('[0-9]{10}')) ){
        alert('Please provide valid phone number');
        return
   }

          setform([...form,data])

     }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handlechange=(e)=>{
    let {name,value,type}=e.target

 

  
       setdata({...data,[name]:value})
  

}
  

   

  

  return (
    <div>
      
        
      


      <form onSubmit={handleformsubmit}>
        <p>Name :</p>
     <input type="text" placeholder='Text' name="Name" onChange={handlechange}/>
        <p>Phone :</p>
        <input type="number" placeholder='phone' name="phone" onChange={handlechange}/>
        <p>Email :</p>
         <input type="email" placeholder='Email' name="email" onChange={handlechange}/>
         <br></br>
         <input type="submit"/>
      </form>



 <div style={{marginTop:"10px" ,color:'black'}}>All data :
    <div>{form.map((el)=>(
      <div><p>Name  :{el.Name}</p>
      <p>Phone :{el.phone}</p>
        <p>Email : {el.email}</p>
      </div>
    ))}</div>
 </div>
      </div>
  )
}

export default Main