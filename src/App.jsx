import LeftPanel from "./components/LeftPanel";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";

const App = () => {
  return (
    <div className='font-ff-main'>
      <div className="flex max-w-[80%] bg-red-700 mx-auto">
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