import React from 'react'
import { FaUserAltSlash, FaUserCheck, FaFlagCheckered } from 'react-icons/fa';

const AfterOverview4Item = () => {
    let dark = localStorage.getItem('theme')=== 'theme-dark';
    return (
        <>
            <div className="grid grid-flow-row grid-col-1 grid-rows-4 md:grid-flow-col md:grid-col-2 md:grid-rows-2 lg:grid-flow-col lg:grid-col-4 lg:grid-rows-1 gap-4 w-full">
                            <div className={dark?"border-blue border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"shadow-lg border-blue border-l-4 bg-white flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}> 
                                <div className={dark?"text-white":"text-label"}>
                                <div className="text-blue text-sm font-bold">DEADWEIGHT VESWRV</div>
                                <div className="text-2xl font-bold">294,280</div>
                                <div className="text-label pr-3 pt-2 text-sm">Mercenary veSWRV not participating in governance.</div>
                                </div>
                                <div className={dark?"text-white":"text-label"}><FaUserAltSlash style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className={dark?"border-green border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"shadow-lg border-green border-l-4 bg-white flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>
                                <div className={dark?"text-white":"text-label"}>
                                <div className="text-green text-sm font-bold">ACTIVE VESWRV <span className="invisible">XXXX</span></div>
                                <div className="text-2xl font-bold">1,115,654</div>
                                <div className="text-label pr-3 pt-2 text-sm">veSWRV excluding dead-weight.</div>
                                </div>
                                <div className={dark?"text-white":"text-label"}><FaUserCheck style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className={dark?"border-secondary border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"shadow-lg border-secondary border-l-4 bg-white flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>    
                                <div className={dark?"text-white":"text-label"}>
                                <div className="text-secondary text-sm font-bold">15% QUORUM <span className="invisible">XXXXXXX</span></div>
                                <div className="text-2xl font-bold">18.96 %</div>
                                <div className="text-label pr-3 pt-2 text-sm">Participation needed of active veSWRV.</div>
                                </div>
                                <div className={dark?"text-white":"text-label"}><FaFlagCheckered style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className={dark?"border-yellow border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"shadow-lg border-yellow border-l-4 bg-white flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>    
                                <div className={dark?"text-white":"text-label"}>
                                <div className="text-yellow text-sm font-bold">30% QUORUM <span className="invisible">XXXXXXX</span></div>
                                <div className="text-2xl font-bold">37.91 %</div>
                                <div className="text-label pr-3 pt-2 text-sm">Participation needed of active veSWRV.</div>
                                </div>
                                <div className={dark?"text-white":"text-label"}><FaFlagCheckered style={{height:"35px", width:"35px"}}/></div>
                            </div>
                        </div>
        </>
    )
}

export default AfterOverview4Item
