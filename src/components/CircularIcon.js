// import React,{useState} from 'react'
// import {SiCkeditor4} from "react-icons/si"
// import {RiMiniProgramFill} from "react-icons/ri"
// import {GrWorkshop, GrDashboard} from "react-icons/gr"
// import{HiUserGroup} from "react-icons/hi"
// const arrayOfIcons = [SiCkeditor4,RiMiniProgramFill,GrDashboard,GrWorkshop,HiUserGroup]
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Circle from './Circle'

// const CircularIcon = ({ icon, paragraph, ...props }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [isClicked, setIsClicked] = useState(false);
//   return (
//      <Circle>
//           onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={() => setIsClicked(!isClicked)}
//       className="text-gray-500 hover:text-gray-900"
//       {...props}
//     >
//       {isClicked || isHovered ? (
//         <Paragraph className="text-center">Web-based Coding Editor</Paragraph>
//       ) : (
//         <FontAwesomeIcon icon={icon} />
//       )}
//      </Circle>
//   )
// }

// export default CircularIcon