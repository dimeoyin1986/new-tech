import React from 'react'
import Enrol from "../components/assets/images/enrolment3.jpg"
import Grad from "../components/assets/images/graduants.jpg"
import Call from "../components/assets/images/calling2.jpg"
const Article = () => {
  return (
    <div className=' sm:[30px] md:mt-[100px] pl-[40px] gap-3 my-[2rem]  text-[#990011FF] grid sm: grid-cols-1 md:grid-cols-3 font-bold'>
        <div className='border-[2px] border-[red] w-[420px] flex flex-col gap-3 justify-center items-center pt-[15px]  rounded-3xl'>
            <img src={Enrol} alt="" style={{width:"335px", height :"207.5px"}} className="rounded-md" />
            <h2 className='px-[25px]'>Over 1500 classes have been booked in the last 24 hours</h2>
        </div >
        <div  className='border-[2px] border-[red] w-[420px] flex flex-col gap-3 justify-center items-center pt-[15px]  rounded-3xl'>
            <img src={Grad} alt="" style={{width:"335px", height :"207.5px"}} className="rounded-md"/>
            <h2 className='px-[25px]'>Over 10000 students have been trained</h2>
        </div>
        <div  className='border-[2px] border-[red] w-[420px] flex flex-col gap-3 justify-center items-center pt-[15px] rounded-3xl'>
             <img src={Call} alt="" style={{width:"335px", height :"207.5px"}} className="rounded-md"/>
             <h2 className='px-[25px]'>call or dm us through +2349033990183</h2>
        </div>
    </div>
  )
}

export default Article