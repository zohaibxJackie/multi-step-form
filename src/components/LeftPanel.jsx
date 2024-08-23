import DesktopImage from '../assets/images/bg-sidebar-desktop.svg'

const LeftPanel = () => {
  return (
    <aside className="text-white relative bg-red-500 rounded-md ">
      <img src={DesktopImage} alt="Background Image" />
      <div className="absolute top-0 left-0 flex flex-col gap-4 md:flex-row md:justify-center md:items-center">
        <div className="flex gap-4 items-center">
          <span className="w-10 h-10 bg-Light-blue border-Pastel-blue border text-marine-blue rounded-full flex items-center justify-center">1</span>
          <div className="ml-1 md:hidden">
            <p className="text-Cool-gray text-sm">Step 1</p>
            <p className="uppercase">Your info</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-10 h-10 rounded-full border-Pastel-blue border flex items-center justify-center">2</span>
          <div className="md:hidden">
            <p className="text-Cool-gray text-sm">Step 2</p>
            <p className="uppercase">Select plan</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-10 h-10 rounded-full border-Pastel-blue border flex items-center justify-center">3</span>
          <div className="md:hidden">
            <p className="text-Cool-gray text-sm">Step 3</p>
            <p className="uppercase">Add-ons</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-10 h-10 rounded-full border-Pastel-blue border flex items-center justify-center">4</span>
          <div className="md:hidden">
            <p className="text-Cool-gray text-sm">Step 4</p>
            <p className="uppercase">Summary</p>
          </div>
        </div> 
      </div> 
    </aside>
  )
}

export default LeftPanel