import { Link } from "react-router-dom"

const ThirdPage = () => {
  return (
    <main className="flex flex-grow md:w-full md:absolute md:top-[18%] md:left-[0%] md:bg-white md:rounded-md md:shadow-md">
    <div className="w-[80%] mx-auto mt-20 md:mt-4 relative md:static">
      <h1 className="font-fw-700 text-3xl text-marine-blue">Pick add-ons</h1>
      <p className="text-Cool-gray">Add-ons help enhance your gaming experience.</p>


      {/* cart section */}
      <div className='flex gap-4 my-8 flex-col'>
        {/* cart one */}
        <button className={`flex justify-between items-center gap-10 py-3 flex-1 rounded-md   outline-marine-blue border-[1.5px] border-solid   hover:border-marine-blue md:flex-row`}>
          <div className="flex">
            <input type="checkbox" id="" className="mx-6" />
            <div className="text-left">
              <p className="text-marine-blue font-bold">Online services</p>
              <p className="text-Cool-gray text-[0.9rem]">Access to multiple games</p>
            </div>
          </div>
          <div className="mr-6 text-Purplish-blue">
            <p>+$1/mo</p>
          </div>
        </button>

        {/* cart two */}
        <button className={`flex justify-between items-center gap-10 py-3 flex-1 rounded-md   outline-marine-blue border-[1.5px] border-solid   hover:border-marine-blue md:flex-row`}>
          <div className="flex">
            <input type="checkbox" id="" className="mx-6" />
            <div className="text-left">
              <p className="text-marine-blue font-bold">Larger Storage</p>
              <p className="text-Cool-gray text-[0.9rem]">Extra 1TB of clound save</p>
            </div>
          </div>
          <div className="mr-6 text-Purplish-blue">
            <p>+$2/mo</p>
          </div>
        </button>

        {/* cart three */}
        <button className={`flex justify-between items-center gap-10 py-3 flex-1 rounded-md   outline-marine-blue border-[1.5px] border-solid   hover:border-marine-blue md:flex-row`}>
          <div className="flex">
            <input type="checkbox" id="" className="mx-6" />
            <div className="text-left">
              <p className="text-marine-blue font-bold">Customization profile</p>
              <p className="text-Cool-gray text-[0.9rem]">Custome theme on your profile</p>
            </div>
          </div>
          <div className="mr-6 text-Purplish-blue">
            <p>+$2/mo</p>
          </div>
        </button>
      </div>

      {/* navigation buttons */}
      <div className="absolute md:fixed md:left-0 md:bottom-0 bottom-4 w-full md:bg-white md:p-4">
        <div className="flex justify-between">
          <Link to={'/select-plan'}>
            <button className="py-2 px-4 rounded-md text-Cool-gray">Go Back</button>
          </Link>
          <Link to={'/final-step'}>
            <button className="bg-marine-blue text-white py-2 px-4 rounded-md">Next Step</button>
          </Link>
        </div>
      </div>
    </div>
  </main>
  )
}

export default ThirdPage