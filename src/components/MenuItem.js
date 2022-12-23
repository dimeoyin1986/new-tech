
import { Link } from 'react-router-dom'
import{FaTimes} from "react-icons/fa"
const MenuItem = ({funcToggle,toggleNav}) => {
  return (
        <div>
            <div></div>
          <ul className={toggleNav ? " flex-col flex items-center fixed inset-0 left-1/4 h-screen justify-around w-screen border-[2px] bg-white text-black md:hidden" : "hidden"}>
           <FaTimes onClick={funcToggle}/>
          <li><Link className='' to={"/"}>TechGen</Link></li>
          <li><Link to={"/about"}>About us</Link></li>
          <li><Link to={"/scholars"}>Techgen scholars</Link></li>
          <li><Link to={"/program"}>Programs</Link></li>
          <li><Link to={"/blog"}>Blog</Link></li>
          <li><Link to={"/contact"}>Contact us</Link></li>
         
        </ul>
    </div>

  )
}

export default MenuItem