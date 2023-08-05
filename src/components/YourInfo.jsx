import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { validateinfo } from '../features/user'
import './YourInfo.css'

function YourInfo() {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const dispatch = useDispatch()

  const validate=(val, inp)=>{
    if(inp === 'name') {
      setName((val !== ''? false: true))
    } else if(inp === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setEmail(!emailRegex.test(val))
    } else if(inp === 'phone') {
      const numberRegex = /^\+\s?\d+(\.\d+)?$/;
      setPhone(!numberRegex.test(val))
    }
    dispatch(validateinfo(!name&&!email&&!phone))
  }

  const textError = {
    display: 'block',
    animation: 'shake 1s linear .2s 1 normal both'
  }
  const validText = {
    display: 'none'
  }
  const borderError = {
    borderColor: 'var(--strawveryy-red)'
  }
  const go = {
    borderColor: 'var(--light-gray)'
  }

  return (
    <div className='personal-info'>
      
      <div className="input">
        <p className="input-label">Name <span style={name? textError:validText} className='error'>Provide name</span></p>
        <input type="text" placeholder='e.g. Silver Dave' 
        style={name? borderError: go}
        onChange={(e)=>validate(e.target.value, 'name')}
        onFocus={(e)=>validate(e.target.value,'name')}
        onBlur={validate}/>
      </div>

      <div className="input">
        <p className='input-label'>Email <span style={email? textError:validText}  className='error'>Invalid email</span></p>
        <input type="email" placeholder='e.g silverdave@lorem.com'
        style={email? borderError: go}
        onChange={(e)=>validate(e.target.value, 'email')}
        onFocus={(e)=>validate(e.target.value,'email')}
        onBlur={validate}/>
      </div>

      <div className="input">
        <p className='input-label'>Phone number <span style={phone? textError:validText} className='error'>This field is required</span></p>
        <input type="text" placeholder='e.g. +1 234 567 890'
        style={phone? borderError: go}
        onChange={(e)=>validate(e.target.value, 'phone')}
        onFocus={(e)=>validate(e.target.value,'phone')}
        onBlur={validate}/>
      </div>
      
    </div>
  )
}

export default YourInfo