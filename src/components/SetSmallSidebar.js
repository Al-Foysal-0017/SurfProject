import React from 'react'
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import bootlogoImgDrk from "../images/Boot-Logo-Horizontal-Blue.png"
import bootlogoImg from "../images/Boot-Logo-Horizontal-Main.png"

const SetSmallSidebar = ({showSidebar, setShowSoidebar}) => {
    let dark = localStorage.getItem('theme')=== 'theme-dark';
    return (
        <>
        {showSidebar?
            <div style={{marginTop:"-60px", color:"#fff"}} className="w-20 ml-2 z-50 flex md:hidden">
                <div className="mt-2 ml-2">
                <Link to="/">
                    {dark?
                    <img className="absolute" src={bootlogoImgDrk} alt="" style={{height:"22px", marginTop:"3px"}}/>
                    :
                    <img className="absolute" src={bootlogoImg} alt="" style={{height:"22px", marginTop:"3px"}}/>
                    }
                </Link>
                </div>
                <div onClick={()=>{setShowSoidebar(!showSidebar)}} className={dark?"ml-24 bg-dark mb-2 p-3 rounded-full border-2 border-lightDark hover:bg-white cursor-pointer":"ml-24 bg-white mb-2 p-3 rounded-full border-2 border-primary cursor-pointer"}>
                <ImCross className="text-primary" style={{width:"22px", height:"22px", }} />
                </div>
            </div>
            :
            <div style={{marginTop:"-60px", color:"#fff"}} className="w-20  ml-6 z-50 flex md:hidden">
                <div onClick={()=>{setShowSoidebar(!showSidebar)}} className={dark?"bg-dark mb-2 p-3 rounded-full border-2 border-lightDark hover:bg-white cursor-pointer":"mb-2 p-3 rounded-full border-2 border-primary cursor-pointer"}>
                <GiHamburgerMenu className={dark? "text-primary":"text-primary"} style={{width:"22px", height:"22px", }} />
                </div>
            </div>
        }


        </>
    )
}

export default SetSmallSidebar
