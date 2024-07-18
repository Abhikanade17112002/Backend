import React, { useState } from 'react'
import "../index.css"
const FormInput = ({input,onChange,value}) => {
  const [focused, setFocused] = useState(false);
 const handleFocusedInput = () =>{
  setFocused(true);
 }
  return (
    <div className='input-field'>
        <label htmlFor="">{input.label}</label>
        <input type={input.type} value={value}
        required={input.required}
        name={input.name}
        placeholder={input.placeholder}
        onBlur={handleFocusedInput}
        focused={focused.toString()}
       pattern={input.pattern}
       onFocus={() =>
        input.name === "confirmpassword" && setFocused(true)
      }
        onChange={onChange}/>
        <span className="error-message">
          {input.errormessage}
        </span>
    </div>
  )
}

export default FormInput