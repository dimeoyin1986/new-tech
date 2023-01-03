// import React, { useState, useEffect } from 'react';

// const Popup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleEscKey = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('keydown', handleEscKey);

//     return () => {
//       document.removeEventListener('keydown', handleEscKey);
//     };
//   }, []);

//   return (
//     <div className={`popup ${isOpen ? 'open' : ''}`}>
//       <button onClick={() => setIsOpen(!isOpen)}>Close</button>
//       <form>
//         {/* form elements here */}
//       </form>
//     </div>
//   );
// };

// export default Popup;




  

// step1
// import React, { useState } from 'react';

// const PopUpBox: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div
//       style={{
//         display: isVisible ? 'block' : 'none',
//         opacity: isVisible ? 1 : 0,
//         transition: 'opacity 0.5s',
//       }}
//     >
//       <form>
//         {/* form elements go here */}
//       </form>
//     </div>
//   );
// };



// step2

// import React, { useState } from 'react';
// import PopUpBox from './PopUpBox';

// const Button: React.FC = () => {
//   const [isPopUpVisible, setIsPopUpVisible] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => setIsPopUpVisible(!isPopUpVisible)}
//       >
//         Show Pop-Up Box
//       </button>
//       <PopUpBox isVisible={isPopUpVisible} />
//     </>
//   );
// };
