import React from 'react'

const Footer = () => {
    let dark = localStorage.getItem('theme')=== 'theme-dark';
    return (
        <>
           <div className={dark? "flex justify-center items-center h-full mt-6 text-label bg-dark border-white px-3 py-4 font-medium rounded-t-lg tracking-wider" : "flex justify-center items-center h-full mt-6 text-label bg-white shadow-2xl border  px-3 py-4 font-medium rounded-t-lg tracking-wider"}>
                <div className="">
                    <span>Copyright &copy; 2021 DeFi.SURF</span>
                </div>
            </div> 
        </>
    )
}

export default Footer
