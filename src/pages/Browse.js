import React from 'react'
import Sidebar from "../components/Sidebar"
import { FaPlug, FaDownload } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import SidebarSmallScreen from '../components/SidebarSmallScreen';
import logoImg from "../images/SwerveSurf.png"
import gitcoinlogo from "../images/gitcoinlogo.png"
// import { Link } from 'react-router-dom';

const Home = () => {
    const [showSidebar, setShowSoidebar] = React.useState(false);
    const [showMsg, setShowMsg] = React.useState(true);
    return (
        <div>
        {/* Set Sidebar For Small Screen */}
        {showSidebar?
        <div style={{marginTop:"-60px", color:"#fff"}} onClick={()=>{setShowSoidebar(!showSidebar)}} className="w-20 ml-2 z-50 flex md:hidden">
            <img src={logoImg} alt="" style={{height:"50px"}}/>
            <div className="ml-5 bg-dark mb-2 p-3 rounded-full border-2 border-lightDark hover:bg-white transition-all cursor-pointer">
            <ImCross style={{width:"22px", height:"22px", color:"#6772DC"}} />
            </div>
        </div>
        :
        <div style={{marginTop:"-60px", color:"#fff"}} onClick={()=>{setShowSoidebar(!showSidebar)}} className="w-20  ml-6 z-50 flex md:hidden">
            <div className="bg-dark mb-2 p-3 rounded-full border-2 border-lightDark hover:bg-white cursor-pointer">
            <GiHamburgerMenu style={{width:"22px", height:"22px", color:"#6772DC"}} />
            </div>
        </div>
        }


        <div className="flex">
           {/* For sidebar here wide also set in sidebar component */}
            <div className="hidden md:flex">
                <Sidebar/>
            </div>
            <div className={!showSidebar?"hidden":"flex md:hidden"}>
                <SidebarSmallScreen/>
            </div>

            <div style={{height:"110vh"}} className="flex flex-col justify-between text-white w-full bg-lightDark px-6">
                <div>
                <div className="mt-6"></div>
                <div className="flex w-full justify-between items-center">
                    <div style={{backgroundColor:"#D2F4E8"}} className={showMsg? "mb-3 py-3 px-6 w-full flex justify-between cursor-pointer rounded-lg":"hidden"}>
                    <div className="flex">
                    <img src={gitcoinlogo} alt="" style={{height:"25px", width:"25px"}} />
                    <div className="ml-2 text-blue text-lg">Support DeFi SURF on Gitcoin Grants!</div>
                    </div>
                    <div onClick={()=>{setShowMsg(false)}} className="text-lightDark flex items-center hover:text-black"><ImCross/></div>
                    </div>
                </div>

                <div className="flex bg-dark w-full justify-between items-center">
                    <div className="tracking-wide bg-lightDark w-full flex justify-between cursor-pointer">
                    <div className="flex">
                    <div className="text-primary text-3xl text-semibold">Browse Historical TVL Data</div>
                    </div>
                    <div className="text-lightDark flex items-center hover:text-black">
                    <div className="hidden md:flex bg-primary flex justify-center items-center text-label pt-0.5 pb-0.5 pr-3 pl-3 rounded hover:bg-yellow transition-all">
                        <FaPlug className="mr-1"/>
                        <button>Connect Wallet</button>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="mt-3 flex bg-dark w-full justify-between items-center">
                    <div className="tracking-wide bg-lightDark w-full flex justify-between cursor-pointer">
                    <div className="flex bg-green items-center text-lightDark px-3 py-1 rounded">
                    <FaDownload/>
                    <div className="pl-2 text-md text-semibold">Download JSON</div>
                    </div>
                    </div>
                </div>

                <div className="mt-5"></div>
                <div className="mt-6">
                    <div className="bg-dark rounded-t-lg py-3 pl-5 text-blue text-md font-bold tracking-wider">All Data</div>
                    <div className="bg-white text-black px-3 pt-3 rounded-b-lg">
                        {/* <div className="">tr</div> */}
                        <table class="border-collapse table-auto">
  <thead>
    <tr>
      <th class="border border-green-600">Title</th>
      <th class="border border-green-600">Author</th>
      <th class="border border-green-600">Views</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-green-600">Intro to CSS</td>
      <td>Adam</td>
      <td>858</td>
    </tr>
    <tr class="bg-emerald-200">
      <td class="border border-green-600">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td>Adam</td>
      <td>112</td>
    </tr>
    <tr>
      <td>Intro to JavaScript</td>
      <td>Chris</td>
      <td>1,280</td>
    </tr>
  </tbody>
</table>
                    </div>
                </div>
                </div>


                <div className="mt-6">
                    <div style={{backgroundColor:"#202526", color:"#747884"}} className="flex justify-center items-center h-full mt-6 bg-primary border-white px-3 py-4 font-medium rounded-t-lg tracking-wider">
                        <div className="">
                        <span>Copyright &copy; 2021 DeFi.SURF</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home
