
const LeftPanel = () => {
  return (
    <aside className="bg-[url('./assets/images/bg-sidebar-desktop.svg')] text-white">
      <div className="flex gap-4 items-center">
        <span className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center">1</span>
        <div>
          <p className="text-Cool-gray">Step 1</p>
          <p>Your info</p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <span>2</span>
        <div>
          <p className="text-Cool-gray">Step 2</p>
          <p>Select plan</p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <span>3</span>
        <div>
          <p className="text-Cool-gray">Step 3</p>
          <p>Add-ons</p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <span>4</span>
        <div>
          <p className="text-Cool-gray">Step 4</p>
          <p>Summary</p>
        </div>
      </div>  
    </aside>
  )
}

export default LeftPanel