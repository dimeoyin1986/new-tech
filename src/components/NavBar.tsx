import React,{useState} from 'react'
import {Link} from "react-router-dom"
import{FaBars} from "react-icons/fa"
import MenuItem from './MenuItem'
import TechGen from "../components/assets/images/techgen.png"
const NavBar = () => {
  const [toggleNav, setToggleNav] = useState<React.SetStateAction<boolean>>(false)
  const funcToggle = ():void =>setToggleNav(!toggleNav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between p-6 items-center  drop-shadow-lg text-white">
        <div className=" ">
           <img src={TechGen} alt="" style={{width:"50px", height:"50px"}} />
        </div>
        <div className='flex gap-8'>
          <div className='flex justify-center items-center'>
          <button className=' flex items-center border-[3px] p-6  h-7 text-center bg-[navy] '>Get started</button>
          </div>
          

          <div className='absolute mt-2 right-7 md:hidden'>
             <FaBars onClick={funcToggle}/>
          </div>
          
          <ul className='hidden md:flex gap-8 p-7  bg-[navy]'>
          <li><Link className='' to={"/"}>TechGen</Link></li>
          <li><Link to={"/about"}>About us</Link></li>
          <li><Link to={"/scholars"}>Techgen scholars</Link></li>
          <li><Link to={"/program"}>Programs</Link></li>
          <li><Link to={"/blog"}>Blog</Link></li>
          <li><Link to={"/contact"}>Contact us</Link></li>
         
        </ul>
         <MenuItem funcToggle ={funcToggle} toggleNav={toggleNav}/>
        </div>
        


    </div>
  )
}

export default NavBar