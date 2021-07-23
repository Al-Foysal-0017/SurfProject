import React from 'react'
import { FaDollarSign, FaCoins, FaUserLock } from 'react-icons/fa';

const AfterOverview4Item = () => {
    return (
        <>
            <div className="grid grid-flow-row grid-col-1 grid-rows-4 md:grid-flow-col md:grid-col-2 md:grid-rows-2 lg:grid-flow-col lg:grid-col-4 lg:grid-rows-1 gap-4 w-full">
                            <div className="border-blue border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg">
                                <div>
                                <div className="text-blue text-sm font-bold">LOCKS</div>
                                <div className="text-2xl font-bold">7,045</div>
                                </div>
                                <div><FaUserLock style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className="border-green border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg">
                                <div>
                                <div className="text-green text-sm font-bold">SWRV LOCKED</div>
                                <div className="text-2xl font-bold">1,530,580</div>
                                </div>
                                <div><FaDollarSign style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className="border-secondary border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg">
                                <div>
                                <div className="text-secondary text-sm font-bold">VALUE VOTE-LOCKED</div>
                                <div className="text-2xl font-bold">$ 950,634</div>
                                </div>
                                <div><FaDollarSign style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className="border-yellow border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg">
                                <div>
                                <div className="text-yellow text-sm font-bold">VESWRV</div>
                                <div className="text-2xl font-bold">1,409,934</div>
                                </div>
                                <div><FaCoins style={{height:"35px", width:"35px"}}/></div>
                            </div>
                        </div>
        </>
    )
}

export default AfterOverview4Item
