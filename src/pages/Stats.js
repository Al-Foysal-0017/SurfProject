import React from 'react'
import Sidebar from "../components/Sidebar"
import { FaPlug } from 'react-icons/fa';
import AfterOverview4ItemStatsPg from '../components/AfterOverview4ItemStatsPg';
import AfterQuorum4ItemStatsPg from '../components/AfterQuorum4ItemStatsPg';
import SidebarSmallScreen from '../components/SidebarSmallScreen';
import CHART1 from "../components/AllCharts/ChartLockOverTime"
import CHART5 from "../components/AllCharts/ChartVESWRV"
import CHART2 from "../components/AllCharts/DistrubutionAllLocksChart"
import CHART3 from "../components/AllCharts/DistributionActiveChart"
import CHART4 from "../components/AllCharts/ActiveLocksSWRVTop10"
import CHART6 from "../components/AllCharts/NewLocks7days"
import CHART7 from "../components/AllCharts/SWRVLocks7days"
import Footer from '../components/Footer';
import SetSmallSidebar from '../components/SetSmallSidebar';

const Home = () => {
    const [showSidebar, setShowSoidebar] = React.useState(false)
    let dark = localStorage.getItem('theme')=== 'theme-dark';
    return (
        <>
        <SetSmallSidebar showSidebar={showSidebar} setShowSoidebar={setShowSoidebar}/>

        <div className="flex">
            <div className="hidden md:flex">
                <Sidebar/>
            </div>
            <div className={!showSidebar?"hidden":"flex md:hidden"}>
                <SidebarSmallScreen/>
            </div>


            <div className={dark?"text-white w-full bg-lightDark px-6":"text-white w-full bg-bgLight px-6"}>
                <div className="flex w-full justify-between items-center">
                    <div className="text-primary text-3xl font-semibold pt-5 pb-5 tracking-wider">Overview</div>
                    <div className={dark?"hidden md:flex bg-primary flex justify-center items-center text-white pt-0.5 pb-0.5 pr-3 pl-3 border border-primary rounded hover:bg-white hover:text-primary trans":"hidden md:flex bg-white flex justify-center items-center text-primary pt-0.5 pb-0.5 pr-3 pl-3 border border-primary rounded hover:bg-primary hover:text-white trans"}>    
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
                    <div className={dark? "bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>    
                        Locks Over Time
                    </div>
                    <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-white px-3 pt-3 rounded-b-lg"}>
                        <CHART1/>
                    </div>


                    <div className="flex md:flex-row flex-col w-full">
                    <div className="w-full md:w-1/2 mr-0 md:mr-3">
                    <div className={dark? "mt-6 bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"mt-6 bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>
                            Distribution (All Locks)
                        </div>
                        <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-white px-3 pt-3 rounded-b-lg"}>
                        <div className="flex">
                        <CHART2/>
                        </div>
                       </div>
                    </div>
                    <div className="w-full md:w-1/2 ml-0 md:ml-3">
                    <div className={dark? "mt-6 bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"mt-6 bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>
                            Distribution (Active Locks)
                        </div>
                        <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-white px-3 pt-3 rounded-b-lg"}>
                        <div className="flex">
                        <CHART3/>
                        </div>
                       </div>
                    </div>
                    </div>



                    <div className="flex md:flex-row flex-col w-full">
                    <div className="w-full md:w-1/2 mr-0 md:mr-3">
                    <div className={dark? "mt-6 bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"mt-6 bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>
                            Top 10 Active Locks (SWRV)
                        </div>
                        <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-white px-3 pt-3 rounded-b-lg"}>
                        <div className="flex">
                        <CHART4/>
                        </div>
                       </div>
                    </div>
                    <div className="w-full md:w-1/2 ml-0 md:ml-3">
                        <div className={dark? "mt-6 bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"mt-6 bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>
                            Top 10 Active Locks (veSWRV)
                        </div>
                        <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-white px-3 pt-3 rounded-b-lg"}>
                        <div className="flex">
                        <CHART5/>
                        </div>
                       </div>
                    </div>
                    </div>

                    <div className="flex md:flex-row flex-col w-full">
                    <div className="w-full md:w-1/2 mr-0 md:mr-3">
                        <div className={dark? "mt-6 bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"mt-6 bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>
                            New Locks (Last 7 Days)
                        </div>
                        <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-white px-3 pt-3 rounded-b-lg"}>
                        <div className="flex">
                        <CHART6/>
                        </div>
                       </div>
                    </div>
                    <div className="w-full md:w-1/2 ml-0 md:ml-3">
                    <div className={dark? "mt-6 bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-secondary tracking-wider":"mt-6 bg-label rounded-t-lg py-3 pl-5 text-white text-lg font-bold border-b-2 border-label tracking-wider"}>
                            SWRV Locks (Last 7 Days)
                        </div>
                        <div className={dark ? "bg-dark border-white px-3 pt-3 rounded-b-lg" : "bg-white shadow-xl border-white px-3 pt-3 rounded-b-lg"}>
                        <div className="flex">
                        <CHART7/>
                        </div>
                       </div>
                    </div>
                    </div>


                    <Footer/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
