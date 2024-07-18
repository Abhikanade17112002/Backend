import { useState } from 'react'
import FormInput from './Components/FormInput'
import './App.css'

function App() {
 


  const [ formValues , setFormValues ] = useState({
    username: "",
    email: "",
    dateofbirth:"" ,
    password: "",
   confirmpassword: ""

  })

  

  const inputs = [
    {
      id: 1,
      name:"username",
      type: "text",
      placeholder: "Enter your name",
      label: "Name",
      required:true ,
      pattern:"^[a-zA-Z0-9]{3,16}$" ,
      errormessage: "Username should be 3-16 characters and should not include any special character!",

    },
    {
      id: 2,
      name:"email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      required:true ,
      pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" ,
      errormessage: "It should be a valid email address!",

    }
    ,
    {
      id: 3,
      name:"dateofbirth",
      type: "date",
      placeholder: "Enter your Birth Date",
      label: "DOB",
      required:true ,
      pattern:"^\\d{2}-\\d{2}-\\d{4}$" ,
      errormessage: "It should be a valid date!",

    }
    ,
    {
      id: 4,
      name:"password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      required:true ,
      pattern:"^(?=.*[A-Za-z])[A-Za-z\\d]{8,20}$" ,
      errormessage: "Password should be 8-20 characters and include at least 1 letter"

    },
    {
      id: 6,
      name:"confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required:true ,
      pattern:formValues.password ,
     errormessage: "Passwords Should Match"

    }
  ]


  const handleOnchange =(e)=>{
  

    setFormValues((prevState)=>({...prevState,[e.target.name]:e.target.value}));
  
   }
   const handleFormSubmit = () =>{
     console.log(formValues);
   }


  

  return (
    <div className='form-container'>
      {
        inputs.map((input)=><FormInput 
        key={input.id}
        input={input}
        onChange={handleOnchange}
       
        value={formValues[input.name]} ></FormInput>,
        
        )
      }

      <div className="form-buttons">
        <button className="btn"
        
        onClick={handleFormSubmit}
        >Submit</button>
        
      </div>
    </div>
  )
}

export default App
