import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'
// import PhoneInput from 'react-phone-number-input/input'

const InputType = () => {
    const [value, setValue] = useState<string | undefined>()
    

  return (
    <div className='ml-[7rem] w-[500px] h-[200px] border-[3px]'>
    <PhoneInput 
      placeholder='enter your phone number'
      value={value}
      onChange={setValue}/>
      {value}
    </div>
  )
}

export default InputType