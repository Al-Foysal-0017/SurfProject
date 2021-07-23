import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { RiWallet3Fill } from 'react-icons/ri';
import LogoImg from "../images/SwerveSurf.png"
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
          <div className="absolute hidden md:flex">
            <div className=" flex items-center justify-center" style={{height:"69px" , width:"97px"}}>
            <Link to="/">
              <img className="" style={{height:"40px" , width:"70px"}} src={LogoImg} alt="SURF"/>
            </Link>
            </div>
          </div>

         <div className="flex h-navHeight justify-center items-center bg-dark text-white justify-between">
           <div className="flex"></div>
           <div className="mr-8 flex">
            <div className="flex">
              <a href="https://twitter.com/defisurf">
                <FaTwitter className="mr-6 cursor-pointer" style={{height:"20px", width:"20px"}}/>
              </a>
              <a href="https://discord.gg/5UmrPNftzQ">
                <SiDiscord className="mr-6 cursor-pointer" style={{height:"19px", width:"19px"}}/>
              </a>
              <a href="https://github.com/defisurf/web">
                <FaGithub className="mr-10 cursor-pointer" style={{height:"19px", width:"19px"}}/>
              </a>
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
