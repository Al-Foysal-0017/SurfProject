import React from 'react'
import Sidebar from "../components/Sidebar"
import { FaPlug } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import AfterOverview4ItemStatsPg from '../components/AfterOverview4ItemStatsPg';
import AfterQuorum4ItemStatsPg from '../components/AfterQuorum4ItemStatsPg';
import SidebarSmallScreen from '../components/SidebarSmallScreen';
import logoImg from "../images/SwerveSurf.png"
import CHART1 from "../components/ChartLockOverTime"

const Home = () => {
    const [showSidebar, setShowSoidebar] = React.useState(false)
    return (
        <>
        {/* Set Sidebar For Small Screen */}
        {showSidebar?
        <div style={{marginTop:"-60px", color:"#fff"}} onClick={()=>{setShowSoidebar(!showSidebar)}} className="w-20 ml-2 z-50 flex md:hidden">
            <img src={logoImg} alt="" style={{height:"40px", marginTop:"3px"}}/>
            <div className="ml-5 bg-dark mb-2 p-3 rounded-full border-2 border-lightDark hover:bg-white transition-all cursor-pointer">
            <ImCross style={{width:"22px", height:"22px", color:"#6772DC"}} />
            </div>
        </div>
        :
        <div style={{marginTop:"-60px", color:"#fff"}} onClick={()=>{setShowSoidebar(!showSidebar)}} className="w-20  ml-6 z-50 flex md:hidden">
            <div className="bg-dark mb-2 p-3 rounded-full border-2 border-lightDark hover:bg-white cursor-pointer">
            <GiHamburgerMenu style={{width:"22px", height:"22px", color:"#6772DC"}} />
            </div>
        </div>
        }


        <div className="flex">
           {/* For sidebar here wide also set in sidebar component */}
            <div className="hidden md:flex">
                <Sidebar/>
            </div>
            <div className={!showSidebar?"hidden":"flex md:hidden"}>
                <SidebarSmallScreen/>
            </div>


            <div className="text-white w-full bg-lightDark px-6">
                <div className="flex w-full justify-between items-center">
                    <div className="text-primary text-3xl pt-5 pb-5 tracking-wider">Overview</div>
                    <div className="hidden md:flex bg-primary flex justify-center items-center text-label pt-0.5 pb-0.5 pr-3 pl-3 rounded hover:bg-yellow transition-all">
                        <FaPlug className="mr-1"/>
                        <button>Connect Wallet</button>
                    </div>
                </div>
                
                <AfterOverview4ItemStatsPg/>

                <div className="flex w-full justify-between items-center">
                    <div className="text-label text-2xl pt-5 pb-5 tracking-wider">Quorum</div>
                </div>

                <AfterQuorum4ItemStatsPg/>
                
                <div className="mt-6">
                    <div className="bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-primary tracking-wider" style={{color:"#85F9E7"}}>Locks Over Time</div>
                    <div style={{backgroundColor:"#202526"}} className="bg-primary border-white px-3 pt-3 rounded-b-lg">
                        <CHART1/>
                        {/* <div className="text-3xl">STATS</div> */}
                    </div>


                    <div className="flex md:flex-row flex-col w-full">
                    <div className="w-full md:w-1/2 mr-0 md:mr-3">
                        <div className="bg-dark mt-6 rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-primary tracking-wider" style={{color:"#85F9E7"}}>Assets</div>
                       <div style={{backgroundColor:"#202526"}} className="bg-primary border-white px-3 pt-3 rounded-b-lg">
                        <div className="flex">
                        {/* <CHART2/> */}
                        </div>
                       </div>
                    </div>
                    <div className="w-full md:w-1/2 ml-0 md:ml-3">
                        <div className="bg-dark mt-6 rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-primary tracking-wider" style={{color:"#85F9E7"}}>Volume (Last 7 Days)</div>
                       <div style={{backgroundColor:"#202526"}} className="bg-primary border-white px-3 pt-3 rounded-b-lg">
                        <div className="flex">
                        {/* <CHART3/> */}
                        </div>
                       </div>
                    </div>
                    </div>
                    

                    <div className="bg-dark mt-6 rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-primary tracking-wider" style={{color:"#85F9E7"}}>SWRV Holders (Top 100)</div>
                    <div style={{backgroundColor:"#202526"}} className="bg-primary border-white px-3 pt-3 rounded-b-lg">
                        {/* <CHART4/> */}
                    </div>

                    <div style={{backgroundColor:"#202526", color:"#747884"}} className="flex justify-center items-center h-full mt-6 bg-primary border-white px-3 py-4 font-medium rounded-t-lg tracking-wider">
                        <div className="">
                        <span>Copyright &copy; 2021 DeFi.SURF</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
