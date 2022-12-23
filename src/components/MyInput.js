import React,{useState} from 'react'
import PhoneInput from 'react-phone-number-input/input'
const MyInput = () => {
    const [value, setValue] = useState("234")
  return (
    <div className='text-black px-[500px]'>
      <PhoneInput 
      country="US"
      value={value}
      onChange={setValue} />

    </div>
  )
}

export default MyInput