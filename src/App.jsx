import LeftPanel from "./components/LeftPanel";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";

const App = () => {
  return (
    <div className='font-ff-main mt-8'>
      <div className="flex max-w-[70%] p-2 mx-auto border rounded shadow-md h-[585px]">
        <LeftPanel />
        <FirstPage />
      </div>
    </div>
  )
}

export default App;



{/* <SecondPage />
<ThirdPage />
<FourthPage /> */}