import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import MenuItem from './MenuItem'
import TechGen from "../components/assets/images/techgen.png"
const NavBar = () => {
  const [toggleNav, setToggleNav] = useState<React.SetStateAction<boolean>>(false)
  const funcToggle = (): void => setToggleNav(!toggleNav)
  return (
    <div className="nav fixed w-full h-[80px] flex justify-between p-12 items-center bg-[white]  border-[3px] drop-shadow-lg ">
      <div className=" ">
        <img src={TechGen} alt="" style={{ width: "50px", height: "50px" }} />
      </div>
      <div className='flex gap-7'>



        <div className='absolute mt-2 right-6 md:hidden'>
          <button className='p-[10px] bg-[#ececff] drop-shadow-lg border-[2px] rounded-full hover:bg-[orange] hover:animate-bounce '>
            <FaBars onClick={funcToggle} />
          </button>

        </div>

        <ul className='hidden md:flex gap-8 p-7 font-bold text-[#2595df]'>
          <li><Link className='' to={"/"}>TechGen</Link></li>
          <li><Link to={"/about"}>About us</Link></li>
          <li><Link to={"/scholars"}>Techgen scholars</Link></li>
          <li><Link to={"/program"}>Programs</Link></li>
          <li><Link to={"/blog"}>Blog</Link></li>cd
          <li><Link to={"/contact"}>Contact us</Link></li>

        </ul>
        <div className='flex justify-center items-center'>
          <button className=' flex items-center border-[3px] p-6 rounded-3xl bg-[#2595df] hover:bg-[#ff8533] font-bold h-7 text-center pr-[30px] drop-shadow-lg  text-[white]'>Get started</button>
        </div>
        <MenuItem funcToggle={funcToggle} toggleNav={toggleNav} />
      </div>



    </div>
  )
}

export default NavBar