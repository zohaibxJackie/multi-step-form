import DesktopImage from '../assets/images/bg-sidebar-desktop.svg'
import MobileImage from '../assets/images/bg-sidebar-mobile.svg'

const LeftPanel = (props) => {
  const {activeButtonBg} = props

  return (
    <aside className="text-white relative rounded-md md:fixed md:min-w-full md:top-0 md:left-0">
      <img src={DesktopImage} alt="Background Image" className='md:hidden block min-h-full object-center object-cover' />
      <img src={MobileImage} alt="Background Image" className='hidden md:block w-full h-[10rem] object-cover object-center' />
      <div className="absolute top-[10%] left-[10%] md:top-[35%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] flex flex-col gap-4 md:flex-row md:justify-center md:items-center">
        <div className="flex gap-4 items-center">
          <span className={`w-10 h-10 ${activeButtonBg === '/multi-step-form' ? 'bg-Light-blue text-marine-blue' : 'text-white'} border-Pastel-blue border  rounded-full flex items-center justify-center`}>1</span>
          <div className="ml-1 md:hidden">
            <p className="text-Cool-gray text-sm uppercase">Step 1</p>
            <p className="uppercase">Your info</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className={`w-10 h-10 ${activeButtonBg === '/select-plan' ? 'bg-Light-blue text-marine-blue' : 'text-white'} border-Pastel-blue border  rounded-full flex items-center justify-center`}>2</span>
          <div className="md:hidden">
            <p className="text-Cool-gray text-sm uppercase">Step 2</p>
            <p className="uppercase">Select plan</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className={`w-10 h-10 ${activeButtonBg === '/add-ons' ? 'bg-Light-blue text-marine-blue' : 'text-white'} border-Pastel-blue border  rounded-full flex items-center justify-center`}>3</span>
          <div className="md:hidden">
            <p className="text-Cool-gray uppercase text-sm">Step 3</p>
            <p className="uppercase">Add-ons</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className={`w-10 h-10 ${activeButtonBg === '/final-step' ? 'bg-Light-blue text-marine-blue' : 'text-white'} border-Pastel-blue border  rounded-full flex items-center justify-center`}>4</span>
          <div className="md:hidden">
            <p className="text-Cool-gray text-sm uppercase">Step 4</p>
            <p className="uppercase">Summary</p>
          </div>
        </div> 
      </div> 
    </aside>
  )
}

export default LeftPanel