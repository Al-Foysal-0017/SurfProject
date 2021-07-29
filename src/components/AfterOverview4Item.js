import React from 'react'
import { FaDollarSign, FaCoins, FaChartLine, FaFunnelDollar } from 'react-icons/fa';

const AfterOverview4Item = () => {
    let dark = localStorage.getItem('theme')=== 'theme-dark';
    return (
        <>
            <div className="grid grid-flow-row grid-col-1 grid-rows-4 md:grid-flow-col md:grid-col-2 md:grid-rows-2 lg:grid-flow-col lg:grid-col-4 lg:grid-rows-1 gap-4 w-full">
                            <div className={dark?"border-blue border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"border-blue border-l-4 bg-white shadow-xl text-label flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>
                                <div>
                                <div className="text-blue text-sm font-bold">TVL</div>
                                <div className="text-2xl font-bold">$ 13,580,894</div>
                                </div>
                                <div><FaFunnelDollar style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className={dark?"border-green border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"border-green border-l-4 bg-white shadow-xl text-label flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>
                                <div>
                                <div className="text-green text-sm font-bold">PRICE</div>
                                <div className="text-2xl font-bold">$ 0.624313</div>
                                </div>
                                <div><FaDollarSign style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className={dark?"border-secondary border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"border-secondary border-l-4 bg-white shadow-xl text-label flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>
                                <div>
                                <div className="text-secondary text-sm font-bold">24H VOLUME</div>
                                <div className="text-2xl font-bold">$ 2,995,771</div>
                                </div>
                                <div><FaChartLine style={{height:"35px", width:"35px"}}/></div>
                            </div>
                            <div className={dark?"border-yellow border-l-4 bg-dark flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg":"border-yellow border-l-4 bg-white shadow-xl text-label flex justify-between items-center pt-7 pb-7 pr-5 pl-5 rounded-lg"}>
                                <div>
                                <div className="text-yellow text-sm font-bold">MARKET CAP</div>
                                <div className="text-2xl font-bold">$ 8,588,558</div>
                                </div>
                                <div><FaCoins style={{height:"35px", width:"35px"}}/></div>
                            </div>
                        </div>
        </>
    )
}

export default AfterOverview4Item
