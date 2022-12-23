import React,{useState} from 'react'
import Tech from "../components/assets/images/tech3.jpg"
import TechOne from "../components/assets/images/tech9.jpg"
import TechTwo from "../components/assets/images/tech7.jpg"

// import InputType from './InputType'
import PartSec from './PartSec'

// import MyInput from './MyInput'

const Section = () => {
 
  return (
    <div className='pt-[150px] '>
    <div className='grid sm:grid-cols-1 px-10 gap-[5rem]  md:grid-cols-2'>
          <div className=''>
              <h1 className='text-3xl font-bold ] '>Nurturing youngsters to impact the world. </h1>
              <p className=''>TechGen Africa is a platform for nurturing the next generation of innovators, towards socio-economic growth in Africa and beyond.</p>
          </div>
          
             <img src={Tech} alt="" style={{width:"500px", height:"500px"}}/>
       
          
       </div>
          <div className='grid sm:grid-cols-1 px-10 gap-3  md:grid-cols-3'>
            <div className=' w-[400px]'>
            <h6>What We Do</h6>
            {/* <MyInput/> */}
            <h1 className='text-3xl font-bold '>We Groom, We Equip,We Engage.</h1>
            <p className=''>TGA is a 10-month accelerator program with sessions on the weekends. Students in grades 7-12 apply and interview before joining. There are limited spots in each city.</p>
           </div>
          
              <img src={TechOne} alt=""style={{width:"400px", height:"400px"}} />
              <div className=''>
                  <img src={TechTwo} alt=""style={{width:"400px", height:"400px"}} />
              </div>
           
               <div>
               
               </div>
         </div>
         <div>
            {/* <InputType /> */}

        
            <PartSec/>
           
         </div>
    
    </div>
  )
}

export default Section