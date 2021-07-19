import React from 'react'
import Sidebar from "../components/Sidebar"
import { FaPlug } from 'react-icons/fa';
import AfterOverview4Item from '../components/AfterOverview4Item';
import CHART1 from "../components/TVLCHART"
import CHART2 from "../components/ASSETCHART"
import CHART3 from "../components/VOLUMECHART"
import CHART4 from "../components/SWRVCHART"

const Home = ({isOpen}) => {
    return (
        <>
        <div className="flex">

           {/* For sidebar here wide also set in sidebar component */}
            <div className={isOpen?"flex":"hidden md:flex"}>
                <Sidebar/>
            </div>


            <div className="text-white w-full bg-lightDark px-6">
                <div className="flex w-full justify-between items-center">
                    <div className="text-primary text-3xl pt-5 pb-5 tracking-wider">Overview</div>
                    <div className="hidden md:flex bg-primary flex justify-center items-center text-label pt-0.5 pb-0.5 pr-3 pl-3 rounded hover:bg-yellow transition-all">
                        <FaPlug className="mr-1"/>
                        <button>Connect Wallet</button>
                    </div>
                </div>
                
                <AfterOverview4Item/>
                
                <div className="mt-6">
                    <div className="bg-dark rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-primary tracking-wider" style={{color:"#85F9E7"}}>Total Value Locked</div>
                    <div style={{backgroundColor:"#202526"}} className="bg-primary border-white px-3 pt-3 rounded-b-lg">
                        <CHART1/>
                    </div>


                    <div className="flex md:flex-row flex-col w-full">
                    <div className="w-full md:w-1/2 mr-0 md:mr-3">
                        <div className="bg-dark mt-6 rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-primary tracking-wider" style={{color:"#85F9E7"}}>Assets</div>
                       <div style={{backgroundColor:"#202526"}} className="bg-primary border-white px-3 pt-3 rounded-b-lg">
                        <div className="flex">
                        <CHART2/>
                        </div>
                       </div>
                    </div>
                    <div className="w-full md:w-1/2 ml-0 md:ml-3">
                        <div className="bg-dark mt-6 rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-primary tracking-wider" style={{color:"#85F9E7"}}>Volume (Last 7 Days)</div>
                       <div style={{backgroundColor:"#202526"}} className="bg-primary border-white px-3 pt-3 rounded-b-lg">
                        <div className="flex">
                        <CHART3/>
                        </div>
                       </div>
                    </div>
                    </div>
                    

                    <div className="bg-dark mt-6 rounded-t-lg py-3 pl-5 text-secondary text-lg font-bold border-b-2 border-primary tracking-wider" style={{color:"#85F9E7"}}>SWRV Holders (Top 100)</div>
                    <div style={{backgroundColor:"#202526"}} className="bg-primary border-white px-3 pt-3 rounded-b-lg">
                        <CHART4/>
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
