
const LeftPanel = () => {
  return (
    <aside className="bg-[url('./assets/images/bg-sidebar-desktop.svg')] w-[17.1rem] text-white">
      <div className="ml-[2rem] mt-8 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <span className="w-10 h-10 bg-Light-blue border-Pastel-blue border text-marine-blue rounded-full flex items-center justify-center">1</span>
          <div className="ml-1">
            <p className="text-Cool-gray text-sm">Step 1</p>
            <p className="uppercase">Your info</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-10 h-10 rounded-full border-Pastel-blue border flex items-center justify-center">2</span>
          <div>
            <p className="text-Cool-gray text-sm">Step 2</p>
            <p className="uppercase">Select plan</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-10 h-10 rounded-full border-Pastel-blue border flex items-center justify-center">3</span>
          <div>
            <p className="text-Cool-gray text-sm">Step 3</p>
            <p className="uppercase">Add-ons</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="w-10 h-10 rounded-full border-Pastel-blue border flex items-center justify-center">4</span>
          <div>
            <p className="text-Cool-gray text-sm">Step 4</p>
            <p className="uppercase">Summary</p>
          </div>
        </div> 
      </div> 
    </aside>
  )
}

export default LeftPanel