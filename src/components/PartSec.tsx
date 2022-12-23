import React from 'react'
import Google from "../components/assets/images/google.jpg"
import Destiny from "../components/assets/images/destinytwo.png"
import Microsoft from "../components/assets/images/microsoft.png"
import Stem from "../components/assets/images/stem.png"
import Gdg from "../components/assets/images/ggdone.png"
import Acad from "../components/assets/images/acad.png"
import Unknown from "../components/assets/images/unknown.png"

const PartSec = () => {
  return (
    <div>
          <div className='flex justify-center item-center gap-8 pt-[3rem] '>
       
             <h1 className='px-9 border-[3px] border-[black] h-[3.5rem] flex justify-center items-center'>Over 1500 classes booked in the last 24 hours</h1>
             <h2 className='px-9 border-[3px] border-[black] flex justify-center items-center'>Over 10k students have been trained</h2>
               <p className='px-9 border-[3px] border-[black] flex justify-center items-center'>Call us at +2349033990183</p>
            </div>
            <div className='pl-[100px]'>
                 <h1 className='w-[300px] text-3xl  px-9 pt-[2rem]'>Organizations We've Worked With</h1>
                 <div className='grid sm:grid-cols-1 md:grid-cols-3'>
                     <img src={Google} alt=""style={{width:"300px", height:"150px"}} className="hover:scale-110 duration-700"/>
                     <img src={Destiny} alt="" style={{width:"300px", height:"150px"}} className="hover:scale-110 duration-700"/>
                     <img src={Microsoft} alt=""  style={{width:"300px", height:"150px"}} className="hover:scale-110 duration-700"/>
                     <img src={Stem} alt="" style={{width:"300px", height:"150px"}} className="hover:scale-110 duration-700" />
                     <img src={Gdg} alt="" style={{width:"300px", height:"150px"}} className="hover:scale-110 duration-700" />
                     <img src={Unknown} alt="" style={{width:"300px", height:"150px"}} className="hover:scale-110 duration-700"/>
                     <img src={Acad} alt="" style={{width:"300px", height:"150px"}} className="hover:scale-110 duration-700" />
                 </div>
                 
            </div>

            

     </div>
  )
}

export default PartSec