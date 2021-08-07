import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { RiWallet3Fill } from 'react-icons/ri';
import bootLogoImg from "../images/Boot-Logo-Horizontal-Main.png"
import bootLogoImgDrk from "../images/Boot-Logo-Horizontal-Blue.png"
import {Link} from 'react-router-dom'
import DarkMode from "../components/DarkMode/DarkMode"

const Navbar = () => {
  let dark = localStorage.getItem('theme')=== 'theme-dark';
    return (
        <>
          <div className="absolute hidden md:flex">
            <div className="flex items-center justify-center" style={{height:"69px" , width:"100px"}}>
            <Link to="/">
              {dark?
              <img className="" style={{height:"22px"}} src={bootLogoImgDrk} alt="BOOT"/>
              :
              <img className="" style={{height:"22px"}} src={bootLogoImg} alt="BOOT"/>
              }
            </Link>
            </div>
          </div>

         <div className={dark? "flex h-navHeight justify-center items-center bg-dark text-white justify-between":"flex shadow-xl border-b h-navHeight justify-center items-center bg-white text-primary justify-between"}>
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
                <FaGithub className="mr-6 cursor-pointer" style={{height:"19px", width:"19px"}}/>
              </a>
            </div>
            
            <div className="flex border-l-2">
             <div className=" mx-3 md:flex text-sm text-label"> <DarkMode/> </div>
            </div>

            <div className="flex pl-4 border-l-2">
             <RiWallet3Fill className="mr-2 cursor-pointer" style={{height:"22px", width:"22px"}}/>
             <div className="hidden flex items-center md:flex text-sm text-label">Not Connected</div>
            </div>
           </div>
         </div>
        </>
    )
}

export default Navbar
