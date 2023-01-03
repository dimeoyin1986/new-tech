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
          <div className=' '>
       
             <h1 className=''>Over 1500 classes booked in the last 24 hours</h1>
             <h2 className=''>Over 10k students have been trained</h2>
               <p className=''>Call us at +2349033990183</p>
            </div>
            <div className=''>
                 <h1 className=''>Organizations We've Worked With</h1>
                 <div className=''>
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