import React from 'react'
import Google from "../components/assets/images/goolelogo.jpg"
import Microsoft from "../components/assets/images/Microsft.jpg"
import Andela from "../components/assets/images/andela-social-share-default.png"
import Amazon from "../components/assets/images/myAmazon.jpg"
import Combo from "../components/assets/images/CombinatorNew.png"
import Science from "../components/assets/images/stem2.jpg"
const Partners = () => {
  return (
    <div>
      <div className='  sm:mt-[30px] text-[2.5rem] md: mt-[100px] flex justify-center items-center text-[3rem] font-bold'>
           <h1 className='mb-[30px] sm:pl-[50px]'>Organisations we have work with</h1>
      </div>
        
       <div className='pl-[30px] grid sm: grid-cols-1 md:grid-cols-3 gap-7'>
          <div>
              <img src={Google} alt="" style={{width:"400px", height:"200px"}} className="rounded-3xl"/>
            </div>
            <div>
              <img src={Microsoft} alt="" style={{width:"400px", height:"200px"}} className="rounded-3xl"/>
            </div>
            <div>
                <img src={Andela} alt="" style={{width:"400px", height:"200px"}} className="rounded-3xl"/>
            </div>
            <div>
                 <img src={Amazon} alt="" style={{width:"400px", height:"200px"}} className="rounded-3xl"/>
            </div>
            <div>
                 <img src={Combo} alt="" style={{width:"400px", height:"200px"}} className="rounded-3xl"/>
            </div>
            <div>
                 <img src={Science} alt="" style={{width:"400px", height:"200px"}} className="rounded-3xl"/>
            </div>
       </div>  

    </div>
  )
}

export default Partners