import React from 'react'
import Sidebar from "../components/Sidebar"
import TableBrowsePg from '../components/TableBrowsePg';
import { FaPlug, FaDownload } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import SidebarSmallScreen from '../components/SidebarSmallScreen';
import gitcoinlogo from "../images/gitcoinlogo.png"
import SetSmallSidebar from '../components/SetSmallSidebar';
import Footer from '../components/Footer';

const Home = () => {
    let dark = localStorage.getItem('theme')=== 'theme-dark';
    const [showSidebar, setShowSoidebar] = React.useState(false);
    const [showMsg, setShowMsg] = React.useState(true);
    const [toggle, setToggle] = React.useState(false);
    const [valueEntries, setValueEntries] = React.useState(10);
    return (
        <div>
        {/* Set Sidebar For Small Screen */}
        <SetSmallSidebar showSidebar={showSidebar} setShowSoidebar={setShowSoidebar}/>

        <div className="flex">
            <div className="hidden md:flex">
                <Sidebar/>
            </div>
            <div className={!showSidebar?"hidden":"flex md:hidden"}>
                <SidebarSmallScreen/>
            </div>

            <div className={dark?"flex flex-col justify-between text-white w-full bg-lightDark px-6":"flex flex-col justify-between text-white w-full bg-bgLight px-6"}>
                <div>
                <div className="mt-6"></div>
                <div className="flex w-full justify-between items-center">
                    <div style={{backgroundColor:"#D2F4E8"}} className={showMsg? "border mb-3 py-3 px-6 w-full flex justify-between cursor-pointer rounded-lg":"hidden"}>
                    <div className="flex">
                    <img src={gitcoinlogo} alt="" style={{height:"25px", width:"25px"}} />
                    <div className="ml-2 text-blue text-lg">Support Boot Finance on Gitcoin Grants!</div>
                    </div>
                    <div onClick={()=>{setShowMsg(false)}} className="text-lightDark flex items-center hover:text-black"><ImCross/></div>
                    </div>
                </div>

                <div className="flex w-full justify-between items-center">
                    <div className="tracking-wide w-full flex justify-between cursor-pointer">
                    <div className="flex">
                    <div className="text-primary text-3xl text-semibold">Browse Historical TVL Data</div>
                    </div>
                    <div className="text-lightDark flex items-center hover:text-black">
                    <div className={dark?"hidden md:flex bg-primary flex justify-center items-center text-white pt-0.5 pb-0.5 pr-3 pl-3 border border-primary rounded hover:bg-white hover:text-primary trans":"hidden md:flex bg-white flex justify-center items-center text-primary pt-0.5 pb-0.5 pr-3 pl-3 border border-primary rounded hover:bg-primary hover:text-white trans"}>  
                        <FaPlug className="mr-1"/>
                        <button>Connect Wallet</button>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="mt-3 flex w-full justify-between items-center">
                    <div className="tracking-wide w-full flex justify-between cursor-pointer">
                    <div className="flex bg-green items-center text-lightDark px-3 py-1 rounded">
                    <FaDownload/>
                    <div className="pl-2 text-md text-semibold">Download JSON</div>
                    </div>
                    </div>
                </div>

                <div className="mt-5"></div>
                <div className="mt-6 text-underlinecl shadow-2xl">
                    <div className={dark?"bg-dark rounded-t-lg py-3 pl-5 text-blue text-md font-bold tracking-wider":"bg-violet rounded-t-lg py-3 pl-5 text-white text-md font-bold tracking-wider"}>
                        All Data
                    </div>
                    <div className="bg-white overflow-x-auto pb-5 text-black px-5 pt-3 rounded-b-lg">
                    <div className="flex justify-between pb-3 pt-2">
                        <div className="flex items-center">
                            <div className="text-lg text-gray-500 pr-2">Show</div>
                            <div onClick={()=>{setToggle(!toggle)}} className="flex border items-center py-1 px-2 rounded">
                                <div className="text-lg text-gray-500 pr-2 cursor-pointer">
                                    {(valueEntries===10 && <span>10</span>) || (valueEntries===25 && <span>25</span>) || (valueEntries===50 && <span>50</span>) || (valueEntries===100 && <span>100</span>)}
                                </div> 
                                <div className="text-gray-500 cursor-pointer">
                                    <div><BsFillCaretUpFill style={{height:"13px"}}/></div>
                                    <div><BsFillCaretDownFill style={{marginTop:"-4px", height:"13px"}}/></div>
                                </div>
                            </div>
                            <div className="text-lg text-gray-500 pl-2">entries</div>
                        </div>
                        {toggle?
                            <div className="text-lg ml-12 px-2 mt-8 rounded py-2 bg-white border shadow-2xl text-gray-500 cursor-pointer absolute">
                            <div className="flex flex-col items-center">
                                <div onClick={()=>{setToggle(!toggle) || setValueEntries(10)}} className={valueEntries===10 ? "bg-primary px-6 rounded":"hover:bg-primary px-6 rounded"}>10</div>
                                <div onClick={()=>{setToggle(!toggle) || setValueEntries(25)}} className={valueEntries===25 ? "bg-primary px-6 rounded":"hover:bg-primary px-6 rounded"}>25</div>
                                <div onClick={()=>{setToggle(!toggle) || setValueEntries(50)}} className={valueEntries===50 ? "bg-primary px-6 rounded":"hover:bg-primary px-6 rounded"}>50</div>
                                <div onClick={()=>{setToggle(!toggle) || setValueEntries(100)}} className={valueEntries===100 ? "bg-primary px-6 rounded":"hover:bg-primary px-6 rounded"}>100</div>
                            </div>
                            </div>:""
                        }
                        <div className="flex items-center text-gray-500">
                            <div className="text-lg text-gray-500 pr-2">Search:</div>
                            <input className="border cursor-pointer rounded py-1 px-2"/>
                        </div>
                    </div>
                    <TableBrowsePg/>
                    <div className="flex justify-between pt-4">
                        <div className="flex items-center">
                            <div className="text-xl text-gray-500">Showing 0 to 0 of 0 entries ( filtered from 1,191 total entries )</div>
                        </div>
                        <div className="flex items-center text-gray-500">
                            <div className="text-xl rounded-l text-gray-500 border py-1 px-2 cursor-pointer">Previous</div>
                            <div className="text-xl border py-1 px-3 text-white bg-blue border-blue cursor-pointer">1</div>
                            <div className="text-xl border py-1 px-3 text-blue cursor-pointer">2</div>
                            <div className="text-xl border py-1 px-3 text-blue cursor-pointer">3</div>
                            <div className="text-xl border py-1 px-3 text-blue cursor-pointer">4</div>
                            <div className="text-xl border py-1 px-3 text-blue cursor-pointer">5</div>
                            <div className="text-xl rounded-r text-blue border py-1 px-2 cursor-pointer">Next</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="mt-6">
                    <Footer/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home
