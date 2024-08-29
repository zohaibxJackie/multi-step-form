import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LeftPanel from "./components/LeftPanel";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";

const App = () => {
  const [price, setPrice] = useState(9);
  const [activeButtonBg, setActiveButtonBg] = useState(null);
  const [yearly, setYearly] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('Arcade');
  const location = useLocation();

  // These are for the third page
  const [activeBgBtn1, setActiveBgBtn1] = useState(false);
  const [activeBgBtn2, setActiveBgBtn2] = useState(false);
  const [activeBgBtn3, setActiveBgBtn3] = useState(false);
  
  useEffect(() => {

    setActiveButtonBg(location.pathname);

  }, [location])
  

  return (
    <div className='font-ff-main pt-8 md:pt-0 bg-Magnolia min-h-[100vh]'>
      <div className="flex md:relative largeScreen:max-w-[70%] p-2 md:p-0 mx-auto bg-white md:bg-transparent border rounded shadow-md h-[585px] md:!max-w-[100%] lg:!max-w-[90%] 2xl:max-w-[70%] md:flex-col md:shadow-none md:border-0">
        <LeftPanel activeButtonBg={activeButtonBg} />
        <Routes>
          <Route index element={<FirstPage />} />

          <Route path="select-plan" 
          element={<SecondPage 
            setPrice={setPrice}
            setYearly={setYearly}
            setCurrentPlan={setCurrentPlan}
            />} 
          />
          <Route path="add-ons" element={<ThirdPage 
            yearly={yearly} 
            setActiveBgBtn1={setActiveBgBtn1}
            setActiveBgBtn2={setActiveBgBtn2}
            setActiveBgBtn3={setActiveBgBtn3}
            activeBgBtn1={activeBgBtn1}
            activeBgBtn2={activeBgBtn2}
            activeBgBtn3={activeBgBtn3}
            />} 
          />
          <Route path="final-step" element={<FourthPage 
            activeBgBtn1={activeBgBtn1}
            activeBgBtn2={activeBgBtn2}
            activeBgBtn3={activeBgBtn3}
            currentPlan={currentPlan}
            yearly={yearly}
            />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App;



{/* <SecondPage />
<ThirdPage />
<FourthPage /> */}