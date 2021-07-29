import React from 'react'
import Sidebar from "../components/Sidebar"
import { FaPlug } from 'react-icons/fa';
import AfterOverview4Item from '../components/AfterOverview4Item';
import CHART1 from "../components/AllCharts/TVLCHART"
import CHART2 from "../components/AllCharts/ASSETCHART"
import CHART3 from "../components/AllCharts/VOLUMECHART"
import CHART4 from "../components/AllCharts/SWRVCHART"
import SidebarSmallScreen from '../components/SidebarSmallScreen';
import Footer from '../components/Footer';
import SetSmallSidebar from '../components/SetSmallSidebar';

const Home = () => {
    const [showSidebar, setShowSoidebar] = React.useState(false);
    let dark = localStorage.getItem('theme')=== 'theme-dark';
    return (
        <>
        {/* Set Sidebar For Small Screen */}
        <SetSmallSidebar showSidebar={showSidebar} setShowSoidebar={setShowSoidebar}/>
        
        <div className="flex">
            <div className="hidden md:flex">
                <Sidebar/>
            </div>
            <div className={!showSidebar?"hidden":"flex md:hidden"}>
                <SidebarSmallScreen/>
            </div>


            <div className={dark? "text-white w-full bg-lightDark px-6":"text-white w-full bg-bgLight px-6"}>
                <div className="flex w-full justify-between items-center">
                    <div className="text-primary text-3xl font-semibold pt-5 pb-5 tracking-wider">Overview</div>
                    <div className={dark?"hidden md:flex bg-primary flex justify-center items-center text-white pt-0.5 pb-0.5 pr-3 pl-3 border border-primary rounded hover:bg-white hover:text-primary trans":"hidden md:flex bg-white flex justify-center items-center text-primary pt-0.5 pb-0.5 pr-3 pl-3 border border-primary rounded hover:bg-primary hover:text-white trans"}>
                        <FaPlug className="mr-1"/>
                        <button>Connect Wallet</button>
                    </div>
                </div>
                
                <AfterOverview4Item/>
                
                <div className="mt-6">
                    <div className={dark? "bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>
                        Total Value Locked
                    </div>
                    <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-label px-3 pt-3 rounded-b-lg"}>
                        <CHART1/>
                    </div>


                    <div className="flex md:flex-row flex-col w-full">
                    <div className="w-full md:w-1/2 mr-0 md:mr-3">
                        <div className={dark? "mt-6 bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"mt-6 bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>   
                            Assets
                        </div>
                       <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-white px-3 pt-3 rounded-b-lg"}>
                        <div className="flex">
                        <CHART2/>
                        </div>
                       </div>
                    </div>
                    <div className="w-full md:w-1/2 ml-0 md:ml-3">
                        <div className={dark? "mt-6 bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"mt-6 bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>      
                            Volume (Last 7 Days)
                        </div>
                       <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-white px-3 pt-3 rounded-b-lg"}> 
                        <div className="flex">
                        <CHART3/>
                        </div>
                       </div>
                    </div>
                    </div>
                    
                    <div className={dark? "mt-6 bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"mt-6 bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>
                        SWRV Holders (Top 100)
                    </div>
                    <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-white px-3 pt-3 rounded-b-lg"}>   
                        <CHART4/>
                    </div>

                    <Footer/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
