import React from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { IoLinkSharp } from 'react-icons/io5';

const Dropdown = ({toggle, isOpen, longSidebar, setLongSidebar}) => {
    return (
        <div className="">
        <div className={isOpen?"flex flex-col justify-center absolute w-24":"hidden"}>
            <div className="h-screen bg-dark text-white fullHeight" >
            <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-center text-center bg-dark cursor-pointer" onClick={toggle}>
                <div className="border-b-4 border-label"></div>
                <div className=" pt-6 text-xs text-label">STATS</div>
                <div className="pt-3 pb-3 font-bold w-full flex flex-col justify-between items-center text-center bg-dark cursor-pointer">
                <div className="flex flex-col items-center"><FaChartLine className="mr-2"/><span className="text-sm">Dashboard</span></div>
                </div>
            </div>
            <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-between  bg-dark cursor-pointer" onClick={toggle}>
                <div className="pt-3 pb-3  font-bold w-full flex justify-between items-center text-center bg-dark cursor-pointer">
                <div className="flex flex-col items-center"><FaLock className="mr-2"/><span className="text-sm">Vote-Locking</span></div>
                </div>
                <div className="border-b-2 border-label"></div>
            </div>
            <div className="pt-3 font-bold w-full flex flex-col justify-between bg-dark cursor-pointer" onClick={toggle}>
                <div className="pt-2 text-xs text-label text-center">RESOURCES</div>
                <div className="pt-3 pb-3  font-bold w-full flex justify-between items-center text-center bg-dark cursor-pointer">
                <div className="flex flex-col items-center">
                    <IoLinkSharp className="mr-2"/>
                    <span className="text-sm pr-2 pl-2">Official Links
                    </span>
                </div>
                </div>
            </div>
            <div className="p-3 w-full text-center bg-dark cursor-pointer pb-10" onClick={toggle}>
            </div>
            </div>
        </div>

        <div className={longSidebar ? "hidden":"hidden md:flex flex flex-col justify-center absolute w-24"}>
            <div className="h-screen bg-dark text-white fullHeight" >
            <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-center text-center bg-dark cursor-pointer" onClick={toggle}>
                <div className="border-b-4 border-label"></div>
                <div className=" pt-6 text-xs text-label">STATS</div>
                <div className="pt-3 pb-3 font-bold w-full flex flex-col justify-between items-center text-center bg-dark cursor-pointer">
                <div className="flex flex-col items-center"><FaChartLine className="mr-2"/><span className="text-sm">Dashboard</span></div>
                </div>
            </div>
            <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-between  bg-dark cursor-pointer" onClick={toggle}>
                <div className="pt-3 pb-3  font-bold w-full flex justify-between items-center text-center bg-dark cursor-pointer">
                <div className="flex flex-col items-center"><FaLock className="mr-2"/><span className="text-sm">Vote-Locking</span></div>
                </div>
                <div className="border-b-2 border-label"></div>
            </div>
            <div className="pt-3 font-bold w-full flex flex-col justify-between bg-dark cursor-pointer" onClick={toggle}>
                <div className="pt-2 text-xs text-label text-center">RESOURCES</div>
                <div className="pt-3 pb-3  font-bold w-full flex justify-between items-center text-center bg-dark cursor-pointer">
                <div className="flex flex-col items-center">
                    <IoLinkSharp className="mr-2"/>
                    <span className="text-sm pr-2 pl-2">Official Links
                    </span>
                </div>
                </div>
            </div>
            <div className="p-3 w-full text-center bg-dark cursor-pointer pb-10" onClick={toggle}>
            <div className="flex justify-center text-center w-full">
            <span onClick={()=>{setLongSidebar(!longSidebar)}} className="p-3 mt-14 bg-lightDark rounded-full">
                <FaAngleRight/>
            </span>
            </div>
            </div>
            </div>
        </div>


        <div className={longSidebar ? "hidden md:flex flex flex-col justify-center absolute w-56":"hidden"}>
            <div className="h-screen bg-dark text-white fullHeight" >
            <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-between  bg-dark cursor-pointer" onClick={toggle}>
                <div className="border-b-4 border-label"></div>
                <div className=" pt-6 text-xs text-label">STATS</div>
                <div className="pt-3 pb-3  font-bold w-full flex justify-between items-center text-center bg-dark cursor-pointer">
                <div className="flex items-center"><FaChartLine className="mr-2"/><span className="text-sm">Dashboard</span></div>
                <FaAngleRight className="text-label"/>
                </div>
            </div>
            <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-between  bg-dark cursor-pointer" onClick={toggle}>
                <div className="pt-3 pb-3  font-bold w-full flex justify-between items-center text-center bg-dark cursor-pointer">
                <div className="flex items-center"><FaLock className="mr-2"/><span className="text-sm">Vote-Locking</span></div>
                <FaAngleRight className="text-label"/>
                </div>
                <div className="border-b-2 border-label pt-6 pl-20 pr-20"></div>
            </div>
            <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-between  bg-dark cursor-pointer" onClick={toggle}>
                <div className=" pt-2 text-xs text-label">RESOURCES</div>
                <div className="pt-3 pb-3  font-bold w-full flex justify-between items-center text-center bg-dark cursor-pointer">
                <div className="flex items-center"><IoLinkSharp className="mr-2"/><span className="text-sm">Official Links</span></div>
                <FaAngleRight className="text-label"/>
                </div>
            </div>
            <div className="p-3 w-full text-center bg-dark cursor-pointer pb-10" onClick={toggle}>
            <div className="flex justify-center text-center w-full">
            <span onClick={()=>{setLongSidebar(!longSidebar)}} className="p-3 mt-14 bg-lightDark rounded-full">
                <FaAngleLeft/>
            </span>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Dropdown
