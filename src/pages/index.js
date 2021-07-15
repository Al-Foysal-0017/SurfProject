import React, {useState} from 'react'
import Sidebar from "../components/Sidebar"
import { FaPlug } from 'react-icons/fa';
import AfterOverview4Item from '../components/AfterOverview4Item';

const Home = ({isOpen}) => {
    const [longSidebar, setLongSidebar] = useState(false)
    return (
        <>
        <div className="h-screen flex bg-lightDark fullHeight">
        <Sidebar longSidebar={longSidebar} setLongSidebar={setLongSidebar}/>
            <div className={longSidebar?"w-56 hidden md:flex":"w-24 hidden md:flex"}></div>
            <div className="flex flex-col  items-center w-full">
                <div className={longSidebar ?"hidden md:flex flex flex-col justify-between items-center justify-center text-white fullWidth-14" : "hidden md:flex flex flex-col text-white fullWidth-6"}>
                    <div className="flex w-full justify-between items-center">
                        <div className="text-primary text-3xl pt-5 pb-5 tracking-wider">Overview</div>
                        <div className="hidden md:flex bg-primary flex justify-center items-center text-label pt-0.5 pb-0.5 pr-3 pl-3 rounded-md hover:bg-yellow hover:transition hover:duration-300 hover:ease-in-out">
                            <FaPlug className="mr-1"/>
                            <button>Connect Wallet</button>
                        </div>
                    </div>
                    <div className="flex justify-between text-white w-full">
                    <AfterOverview4Item/>
                    </div>
                </div>
                
                
                <div className={isOpen?"md:hidden flex flex-col justify-between items-center text-white fullWidth-5":"md:hidden flex flex-col justify-between items-center text-white fullWidth-3"}>
                    <div className="flex w-full justify-between items-center">
                        <div className="text-primary text-3xl pt-5 pb-5 tracking-wider">Overview</div>
                        <div className="hidden md:flex bg-primary flex justify-center items-center text-label pt-0.5 pb-0.5 pr-3 pl-3 rounded-md hover:bg-yellow hover:transition hover:duration-300 hover:ease-in-out">
                        </div>
                    </div>
                    <div className="flex justify-between justify-center text-white w-full">
                        <AfterOverview4Item/>
                    </div>
                </div>
            </div> 
        </div>
        </>
    )
}

export default Home
