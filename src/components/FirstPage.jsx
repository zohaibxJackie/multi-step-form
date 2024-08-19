import { Link } from "react-router-dom"

const FirstPage = () => {
  return (
    <main className="flex flex-grow">
      <div className="w-[80%] mx-auto mt-20 relative">
        <h1 className="font-fw-700 text-3xl text-marine-blue">Personal info</h1>
        <p className="text-Cool-gray">Please provide your name, email address, and phone number.</p>
        <form className="flex flex-col justify-around gap-[1.3rem] mt-8">
          <div className="flex flex-col">
            <label htmlFor="inp1" className="uppercase text-marine-blue font-fw-500">name</label>
            <input type="text" id='inp1' className="border py-2 pl-4 rounded-md text-marine-blue font-fw-500 outline-marine-blue" placeholder='e.g. Stephen King' />
          </div>

          <div className="flex flex-col">
            <label htmlFor="inp2" className="uppercase text-marine-blue font-fw-500">Email Address</label>
            <input type="email" id='inp2' className="border py-2 pl-4 rounded-md text-marine-blue font-fw-500 outline-marine-blue" placeholder='e.g. stephenking@lorem.com' />
          </div>

          <div className="flex flex-col">
            <label htmlFor="inp3" className="uppercase text-marine-blue font-fw-500">phone number</label>
            <input type="number" id='inp3' className="border py-2 pl-4 rounded-md text-marine-blue font-fw-500 outline-marine-blue" placeholder='e.g. +1 234 567 890' />
          </div>

          <div className="absolute bottom-4 w-full">
            <div className="flex justify-end ">
              <Link to={'/select-plan'}>
                <button className="bg-marine-blue text-white py-2 px-4 rounded-md">Next Step</button>
              </Link>
            </div>
          </div>

        </form>

      </div>
    </main>
  )
}

export default FirstPage