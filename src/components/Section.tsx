 import React,{} from 'react'
 import Student from "../components/assets/images/studentcom.jpg"
  import {SiCkeditor4} from "react-icons/si"
  import {SiSemanticuireact} from "react-icons/si"
  import {GrWorkshop, GrDashboard} from "react-icons/gr"
  import{HiUserGroup} from "react-icons/hi"
// import Advert from './Advert'
import "../components/assets/stylesheets/Circle.css"
// import ParentDiv from './ParentDiv'

 
 const Section = () => {
 
   return (
   
     <div className='w-full h-full bg-[#dee2e3] md:pt-[150px] sm: pt-[70px]  '>
        <div className='w-[full] grid  sm:grid-cols-1 gap-0  md:grid-cols-2  pt-[50px] '>
           <div className=' md:mb-[10px]  sm:mb-[70px]  '>
             <h1 className='kunle  sm:flex flex-row text-3xl gap-1 pb-[0.5rem] md:text-[57px] text-[#ff8533]  w-[100%] pl-[30px] flex flex-col font-bold'><span>Preparing your kids</span> for the future of <span></span><span>work and society</span> </h1>
             <p className=' pl-[30px] pb-[2rem] text-[#990011FF] flex flex-col sm:text-[20px] md:text-[27px]'>TechGen Africa is a platform for nurturing the next generation of innovators, towards socio-economic growth in Africa and beyond.
              </p>

             <div className='flex justify-center items-center pt-[1rem]'>
                 <button className='btn h-[70px]  w-[440px]  bg-[#00203f] text-[#FCF6F5FF] font-bold text-[20px] shadow-xl capitalize'> Let us start coding</button>
                 
             </div>
                  
           </div>
           <div className='flex relative justify-center sm:right-[-150px]  relative md:right-[-200px] top-[-30px] '>
                <img className='rounded-full  ' src={Student} alt="student" style={{width:"400px", height:"400px"}}  />
                <div className='div1 relative'>
                   <SiCkeditor4 className='editor '/>
                   
                   {/* <p className='sm: text-[0.8rem]'>
                    <span>We facilitate kids learning</span>
                     <span>through interactive text editor</span>
                   </p> */}

                  <div className=' d1 flex flex-col justify-center items-center border-[2px] rounded-full border-[#910115] h-[300px] w-[300px] pl-[20px] gap-2 bg-[#980011] text-[#fbf5f4] font-bold '>
                     <SiCkeditor4 className='text-[3rem]'/>
                     <p className='px-[15px] text-[1rem]'>Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live</p>
             </div>
            </div>
                <div className='div2 relative '>
                  <SiSemanticuireact className='react text-[3.5rem] pl-[7px] pt-[-15px] '/>
                 <div className='d2 flex flex-col justify-center items-center border-[2px] rounded-full border-[#910115] h-[300px] w-[300px] pl-[20px] gap-2 bg-[#980011] text-[#fbf5f4] font-bold '>
                     <SiSemanticuireact className='text-[3rem]'/>
                        <p className='px-[15px] text-[1rem]'>Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live</p>
                  </div> 
                </div>
                <div className='div3 relative '>
                 
                   <GrWorkshop className='work text-[3rem] pl-[7px] pt-[-5px]'/>
                   <div className='d3 flex flex-col justify-center items-center border-[2px] rounded-full border-[#910115] h-[300px] w-[300px] pl-[20px] gap-2 bg-[#980011] text-[#fbf5f4] font-bold '>
                        <GrWorkshop  className='text-[4rem] text-[white] '/>
                        <p className='px-[15px] text-[1rem]'>Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live</p>
                   </div>
                </div>
               

                <div className='div4 w-[60px] h-[60px] p-[20px]  relative right-[550px] top-[300px]'>
                  <GrDashboard className='text-[4rem] pl-[7px] pt-[-15px]'/>
                </div>
              
                <div className='div5 w-[60px] h-[60px] p-[20px]   relative right-[260px] top-[120px]'>
                  <div>
                  <HiUserGroup className='text-[4rem] pl-[10px] pr-[10px] py-[15px] border-[#251454] '/>
                  </div>
                  
                </div>

           </div>
           
      
        </div>
        <p className='pl-[30px] text-[1.5rem] w-[100%] mr-[30px] border-[3px] text-[#910115]'>We have the proven world-class roadmap to develop your Youngsters into Coding Ninjas. Subscribe to our newsletter to get it and so much more.</p>
          {/* <ParentDiv/> */}
      </div>
      
   
   )
 }
 
 export default Section