import React from 'react'
import { FaDollarSign, FaCoins, FaUserLock } from 'react-icons/fa';

const AfterOverview4Item = () => {
    let dark = localStorage.getItem('theme')=== 'theme-dark';
    return (
        <>
            <div className="grid grid-flow-row grid-col-1 grid-rows-4 md:grid-flow-col md:grid-col-2 md:grid-rows-2 lg:grid-flow-col lg:grid-col-4 lg:grid-rows-1 gap-4 w-full">
                            <div className={dark?"border-blue border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"shadow-lg border-blue border-l-4 bg-white flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>
                                <div className={dark?"text-white":"text-violet"}>
                                <div className="text-blue text-sm font-bold">LOCKS <span className="invisible">XXXXXXXXXXXX</span> </div>
                                <div className="text-2xl font-bold">7,045</div>
                                </div>
                                <div className={dark?"text-white":"text-violet"}><FaUserLock style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className={dark?"border-green border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"shadow-lg border-green border-l-4 bg-white flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>    
                                <div className={dark?"text-white":"text-violet"}>
                                <div className="text-green text-sm font-bold">SWRV LOCKED <span className="invisible">XXXXXX</span></div>
                                <div className="text-2xl font-bold">1,530,580</div>
                                </div>
                                <div className={dark?"text-white":"text-violet"}><FaDollarSign style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className={dark?"border-secondary border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"shadow-lg border-secondary border-l-4 bg-white flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>    
                                <div className={dark?"text-white":"text-violet"}>
                                <div className="text-secondary text-sm font-bold">VALUE VOTE-LOCKED</div>
                                <div className="text-2xl font-bold">$ 950,634</div>
                                </div>
                                <div className={dark?"text-white":"text-violet"}><FaDollarSign style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className={dark?"border-yellow border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"shadow-lg border-yellow border-l-4 bg-white flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>
                                <div className={dark?"text-white":"text-violet"}>
                                <div className="text-yellow text-sm font-bold">VESWRV <span className="invisible">XXXXXXXXXXX</span> </div>
                                <div className="text-2xl font-bold">1,409,934</div>
                                </div>
                                <div className={dark?"text-white":"text-violet"}><FaCoins style={{height:"35px", width:"35px"}}/></div>
                            </div>
                        </div>
        </>
    )
}

export default AfterOverview4Item
