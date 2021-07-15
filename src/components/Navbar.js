import React from 'react'
import { ImCross } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { RiWallet3Fill } from 'react-icons/ri';
// import { Link } from 'react-router-dom'

const Navbar = ({toggle, isOpen}) => {
    return (
        <>
         <div className="flex h-navHeight justify-center items-center bg-dark text-white justify-between">
           <div className=" flex">
             <div >
             </div>
             <div  className={isOpen?"ml-5 flex justify-center items-center":"ml-8 flex justify-center items-center"}>
              <div className="flex pt-5  pb-5 border-label ">
                {isOpen?<div className="pl-2.5">SURF</div>:""}
                <div className="hidden md:flex">
                  SURF
                </div>
              </div>
              {isOpen ?
              <ImCross onClick={toggle} className="cursor-pointer w-6 h-6 flex items-end md:hidden ml-12"/>
              :
              <svg onClick={toggle} className="cursor-pointer w-6 h-6 flex items-end md:hidden mr-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              }
             </div>  
           </div>
           <div className="mr-8 flex">
            <div className="flex">
            <FaTwitter className="mr-6 cursor-pointer" style={{height:"20px", width:"20px"}}/>
             <SiDiscord className="mr-6 cursor-pointer" style={{height:"19px", width:"19px"}}/>
             <FaGithub className="mr-10 cursor-pointer" style={{height:"19px", width:"19px"}}/>
            </div>
            <div className="flex pl-4 border-l-2">
             <RiWallet3Fill className="mr-2 cursor-pointer" style={{height:"22px", width:"22px"}}/>
             <div className="hidden md:flex text-sm text-label">Not Connected</div>
            </div>
           </div>
         </div>
        </>
    )
}

export default Navbar
