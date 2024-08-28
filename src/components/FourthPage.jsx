import { Link } from "react-router-dom"

const FourthPage = () => {
  return (
    <main className="flex flex-grow md:w-full md:absolute md:top-[18%] md:left-[0%] md:bg-white md:rounded-md md:shadow-md">
      <div className="w-[80%] md:w-[90%] mx-auto mt-20 md:mt-4 relative md:static">
        <h1 className="font-fw-700 text-3xl text-marine-blue">Finishing up</h1>
        <p className="text-Cool-gray min-w-max md:min-w-[initial]">Double-check everything looks OK before confirming.</p>

        {/* summary section */}
        <section>
          <div>
            <div>
              <p>Arcade (monthly)</p>
              <p>$9/mo</p>
            </div>
            <div>
              change
            </div>
            <div>
              <p>Online service</p>
              <p>+$1/mo</p>
            </div>
            <div>
              <p>Larger storage</p>
              <p>+2$/mo</p>
            </div>
          </div>
          <div>
            <p>Total (per month)</p>
            <p>+12$/mo</p>
          </div>
        </section>

        {/* Navigation buttons */}
        <div className="absolute md:fixed sm:!relative md:left-0 md:bottom-0 bottom-4 w-full md:bg-white md:p-4">
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

export default FourthPage