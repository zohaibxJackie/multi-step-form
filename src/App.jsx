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
  const location = useLocation();
  
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
            />} 
          />
          <Route path="add-ons" element={<ThirdPage />} />
          <Route path="final-step" element={<FourthPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;



{/* <SecondPage />
<ThirdPage />
<FourthPage /> */}