import React from 'react'
// import { FaPlug } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { IoLinkSharp } from 'react-icons/io5';

const Sidebar = () => {
    const [longSidebar, setLongSidebar] = React.useState(false)
    const [showMenu, setShowMenu] = React.useState(false)
    return (
        <div className={longSidebar ? "w-60 bg-dark" : "w-24 bg-dark"}>
                
                <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-center text-center bg-dark cursor-pointer">
                    <div className="border-b-4 border-label"></div>
                    <div className=" pt-6 text-xs text-label">STATS</div>
                    <div className="pt-3 pb-3 font-bold w-full flex flex-col justify-between items-center text-center bg-dark cursor-pointer">
                    <div className="flex w-full justify-between text-white flex-wrap justify-center items-center">
                        <div className={longSidebar?"flex px-3 items-center":"flex flex-col items-center"}>
                        <FaChartLine className="mr-2 mb-1 mt-1"/>
                        <span className="text-sm ">Dashboard</span>
                        </div>
                        <div className="" onClick={()=>{setShowMenu(!showMenu)}}>
                        {showMenu?
                        <div className={longSidebar?"text-label":"hidden"}><FaAngleDown style={{height:"20px" , width:"20px"}}/></div>
                        :
                        <div className={longSidebar?"text-label":"hidden"}><FaAngleRight style={{height:"20px" , width:"20px"}}/></div>
                        }
                        </div>
                    </div>
                    </div>
                </div>
                <div className="text-white pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-between  bg-dark cursor-pointer" >
                    <div className="pt-3 pb-3  font-bold w-full flex justify-center items-center text-center bg-dark cursor-pointer">
                    <div className="flex flex-col items-center"><FaLock className="mr-2"/><span className="text-sm">Vote-Locking</span></div>
                    </div>
                    <div className="border-b-2 border-label"></div>
                </div>
                <div className="text-white pt-3 font-bold w-full flex flex-col justify-between bg-dark cursor-pointer" >
                    <div className="pt-2 text-xs text-label text-center">RESOURCES</div>
                    <div className="pt-3 pb-3  font-bold w-full flex justify-center items-center text-center bg-dark cursor-pointer">
                    <div className="flex flex-col items-center">
                        <IoLinkSharp className="mr-2"/>
                        <span className="text-sm pr-2 pl-2">Official Links
                        </span>
                    </div>
                    </div>
                </div>
                <div className="p-3 w-full text-center bg-dark pb-10" ></div>
                <div className="flex bg-dark justify-center text-center w-full">
                    <span onClick={()=>{setLongSidebar(!longSidebar)}} className="hidden cursor-pointer md:inline p-3 mt-14 bg-lightDark rounded-full">
                    {longSidebar ? <FaAngleLeft/>:<FaAngleRight/> }
                    </span>
                </div>
                <div className="p-3 w-full text-center bg-dark cursor-pointer pb-10" ></div>

            </div>
    )
}

export default Sidebar
