import React from 'react'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { IoLinkSharp } from 'react-icons/io5';
import {Link} from 'react-router-dom'

const Sidebar = () => {
    let dark = localStorage.getItem('theme')=== 'theme-dark';
    const [showMenu, setShowMenu] = React.useState(false)
    const [showMenuVote, setShowMenuVote] = React.useState(false)
    const [showMenuLinks, setShowMenuLinks] = React.useState(false)
    const [sideshowDB, setSideshowDB] = React.useState(false)
    const [sideshowVote, setSideshowVote] = React.useState(false)
    const [sideshowLinks, setSideshowLinks] = React.useState(false)
    return (
        <>
        <div className={dark?"w-24 bg-dark border-r border-dark":"w-24 bg-white border-r"}>
                {/* DASHBOARD */}
                <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-center text-center cursor-pointer">
                    <div className="border-b-2 border-label"></div>
                    <div className="pt-6 text-xs text-label w-full pl-3 flex">STATS</div>
                    <div className="pt-3 pb-3 font-bold w-full flex flex-col justify-between items-center text-center cursor-pointer">
                    <div className={dark? "flex w-full justify-between text-white flex-wrap justify-center items-center":"flex w-full justify-between text-dark flex-wrap justify-center items-center"}>
                        <div onClick={()=>{setSideshowDB(!sideshowDB) || setSideshowVote(false) || setSideshowLinks(false) }} className="flex flex-col items-center">
                            <FaChartLine className="mr-2 mb-1 mt-1"/>
                            <span className="text-sm">Dashboard</span>
                        </div>
                        <div className="" onClick={()=>{setShowMenu(!showMenu)}}>
                        {showMenu?
                        <div className="hidden"><FaAngleDown style={{height:"20px" , width:"20px"}}/></div>
                        :
                        <div onClick={()=>{setShowMenuLinks(false) || setShowMenuVote(false)}} className="hidden"><FaAngleRight style={{height:"20px" , width:"20px"}}/></div>
                        }
                        </div>
                    </div>

                        {/* Dashboard sideshow when small Sidebar */}
                        <div className={sideshowDB ?"z-10":"hidden z-10"}>
                        <div style={{marginTop:"-65px", marginLeft:"44px"}} className={dark?"absolute pr-6 text-label mt-2 text-md font-light rounded-lg bg-dark py-4":"absolute pr-6 text-white mt-2 text-md font-light rounded-lg bg-violet py-4"}>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <Link to="/">Stats</Link>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <Link to="/browse">Browse</Link>
                                </span>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* VOTE LOCKING */}
                <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-center text-center cursor-pointer">
                    <div className="pt-3 pb-3 font-bold w-full flex flex-col justify-between items-center text-center cursor-pointer">
                    <div className={dark?"flex w-full justify-between text-white flex-wrap justify-center items-center":"flex w-full justify-between text-dark flex-wrap justify-center items-center"}>
                        <div onClick={()=>{setSideshowVote(!sideshowVote) || setSideshowDB(false) || setSideshowLinks(false)}} className="flex flex-col items-center">
                            <FaLock className="mr-2 mb-1 mt-1"/>
                            <span className="text-sm">Vote-Locking</span>
                        </div>
                        <div className="" onClick={()=>{setShowMenuVote(!showMenuVote)}}>
                        {showMenuVote?
                        <div className="hidden"><FaAngleDown style={{height:"20px" , width:"20px"}}/></div>
                        :
                        <div onClick={()=>{setShowMenu(false) || setShowMenuLinks(false)}} className="hidden"><FaAngleRight style={{height:"20px" , width:"20px"}}/></div>
                        }
                        </div>
                    </div>
                    

                    {/* Vote-Locking sideshow when small Sidebar */}
                    <div className={sideshowVote ?"z-10":"hidden z-10"}>
                        <div style={{marginTop:"-65px", marginLeft:"44px"}} className={dark?"absolute pr-10 text-label mt-2 text-md font-light rounded-lg bg-dark py-6":"absolute pr-10 text-white mt-2 text-md font-light rounded-lg bg-violet py-6"}>
                            <div className="w-full flex px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                {/* Come */}
                                <Link to="/stats">Stats</Link>
                                </span>
                            </div>
                            {/* <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                Back
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                Later
                                </span>
                            </div> */}
                            </div>
                    </div>

                    </div>
                </div>

                {/* OFFICIAL LINKS */}
                <div className="pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-center text-center cursor-pointer">
                    <div className="border-b-2 border-label"></div>
                    <div className="pt-6 pb-1 text-xs text-label w-full flex">
                        RESOURCES
                    </div>
                    <div className="font-bold w-full flex flex-col justify-between items-center text-center cursor-pointer">
                    <div className={dark?"flex w-full justify-between text-white flex-wrap justify-center items-center":"flex w-full justify-between text-dark flex-wrap justify-center items-center"}>
                        <div onClick={()=>{setSideshowLinks(!sideshowLinks) || setSideshowDB(false) || setSideshowVote(false)}} className="flex flex-col items-center">
                            <IoLinkSharp className="mr-2 mb-1 mt-1"/>
                            <span className="text-sm ">Official Links</span>
                        </div>
                        <div className="" onClick={()=>{setShowMenuLinks(!showMenuLinks)}}>
                        {showMenuLinks?
                        <div className="hidden"><FaAngleDown style={{height:"20px" , width:"20px"}}/></div>
                        :
                        <div onClick={()=>{setShowMenu(false) || setShowMenuVote(false)}} className="hidden"><FaAngleRight style={{height:"20px" , width:"20px"}}/></div>
                        }
                        </div>
                    </div>
                   

                    {/* OfficialLinks sideshow when small Sidebar */}
                        <div className={ sideshowLinks?"z-10":"hidden z-10"}>
                        <div style={{marginTop:"-120px", marginLeft:"44px"}} className={dark?"absolute pr-10 text-label mt-2 text-md font-light rounded-lg bg-dark py-4":"absolute pr-10 text-white mt-2 text-md font-light rounded-lg bg-violet py-4"}>
                            <div className="w-full flex px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://swerve.fi" >Website</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://gov.swerve.community/">Forum</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://snapshot.page/#/swerve">Snapshot Voting</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://github.com/SwerveFinance">GitHub</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                            <span className={dark?"text-sm text-white text-white pt-1 px-4 flex rounded-md w-full":"text-sm text-label pt-1 px-4 flex rounded-md w-full"}>
                                Social
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://discord.gg/vkhw8Av">Discord</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://t.me/swervefi">Telegram</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://twitter.com/SwerveFinance">Twitter</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                            <span className={dark?"text-sm text-white text-white pt-1 px-4 flex rounded-md w-full":"text-sm text-label pt-1 px-4 flex rounded-md w-full"}>
                                Trade
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://uniswap.info/token/0xb8baa0e4287890a5f79863ab62b7f175cecbd433">Uniswap</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://balancer.exchange/#/swap/0xb8baa0e4287890a5f79863ab62b7f175cecbd433">Balancer</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://www.huobi.com/en-us/exchange/?s=swrv_usdt">Huobi</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://www.bithumb.pro/en-us/exchange/professional?q=SWRV-USDT">Bitthumb</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://www.okex.com/markets/spot?product=swrv_usdt">OkEx</a>
                                </span>
                            </div>
                            <div className="w-full px-4">
                                <span className="py-1 px-4 flex rounded-md w-full hover:bg-primary ">
                                <a href="https://www.binance.com/en/trade/SWRV_BUSD?layout=pro">Binance</a>
                                </span>
                            </div>
                            </div>
                    </div>

                    </div>
                </div>


                {/* Sidebar Bottom */}
                <div className="text-white pb-3 pr-4 pl-4 font-bold w-full flex flex-col justify-between cursor-pointer" >
                    <div className="border-b-2 border-label"></div>
                </div>
                <div className="p-3 w-full text-center" ></div>
                <div className="p-3 w-full text-center cursor-pointer pb-10" ></div>

            </div>
            </>
    )
}

export default Sidebar
