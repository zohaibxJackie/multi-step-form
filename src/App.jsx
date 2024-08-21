import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LeftPanel from "./components/LeftPanel";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";


const App = () => {
  const [price, setPrice] = useState(9);

  return (
    <div className='font-ff-main mt-8'>
      <div className="flex max-w-[70%] p-2 mx-auto border rounded shadow-md h-[585px]">
        <LeftPanel />
        <Routes>
          <Route index element={<FirstPage />} />
          <Route path="select-plan" element={<SecondPage price={price} setPrice={setPrice} />} />
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