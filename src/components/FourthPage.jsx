import { Link } from "react-router-dom"

const FourthPage = ({activeBgBtn1, activeBgBtn2, activeBgBtn3, currentPlan, yearly}) => {
  return (
    <main className="flex flex-grow md:w-full md:absolute md:top-[18%] md:left-[0%] md:bg-white md:rounded-md md:shadow-md">
      <div className="w-[80%] md:w-[90%] mx-auto mt-20 md:mt-4 relative md:static">
        <h1 className="font-fw-700 text-3xl text-marine-blue">Finishing up</h1>
        <p className="text-Cool-gray min-w-max md:min-w-[initial]">Double-check everything looks OK before confirming.</p>

        {/* summary section */}
        <section className="mt-8">
          <div className="bg-Pastel-blue p-4 rounded-md">
            <div className="flex justify-between">
              <p className="font-bold text-marine-blue">{currentPlan} ({`${yearly ? 'yearly' :'monthly'}`})</p>
              <p className="font-bold text-marine-blue">${yearly ? 12 : 9}/mo</p>
            </div>
            <div className="mb-8">
              <Link to={'/select-plan'} className="text-Cool-gray underline text-sm">change</Link>
            </div>
            <hr />
            <div className="flex gap-2 flex-col">
              {activeBgBtn1 ? <div className="flex justify-between mb-2">
                <p className="text-Cool-gray text-sm">Online service</p>
                <p className="text-marine-blue">+$1/mo</p>
              </div> : ''}
              {activeBgBtn2 ? <div className="flex justify-between">
                <p className="text-Cool-gray text-sm">Larger storage</p>
                <p className="text-marine-blue">+2$/mo</p>
              </div> : ''}
              {activeBgBtn3 ? <div className="flex justify-between">
                <p className="text-Cool-gray text-sm">Customizable profile</p>
                <p className="text-marine-blue">+2$/mo</p>
              </div> : ''}
            </div>
          </div>
          <div className="flex justify-between p-4">
            <p className="text-Cool-gray text-sm">Total (per month)</p>
            <p className="text-Purplish-blue font-bold">+12$/mo</p>
          </div>
        </section>

        {/* Navigation buttons */}
        <div className="absolute md:fixed sm:!relative md:left-0 md:bottom-0 bottom-4 w-full md:bg-white md:p-4">
          <div className="flex justify-between">
            <Link to={'/add-ons'}>
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

export default FourthPage