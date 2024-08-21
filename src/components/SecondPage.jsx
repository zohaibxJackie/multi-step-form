import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const SecondPage = (props) => {
  const {price, setPrice} = props
  const [isChecked, setIsChecked] = useState(false);
  // set the monthly price, we will call other function for yearly
  const handlePrice = (e) => {
    setPrice(e);
  }


  const handleChange = (e) => {
    setIsChecked(e.target.event);
    if (price === 9) {
      setPrice(90);
    } else if (price === 12) {
      setPrice(120);
    } else if (price === 15) {
      setPrice(180);
    } else {
      console.error("Something went wrong");
    }
    console.log(price);
    
  }
  
  return (
    <main className="flex flex-grow">
      <div className="w-[80%] mx-auto mt-20 relative">
        <h1 className="font-fw-700 text-3xl text-marine-blue">Select your plan</h1>
        <p className="text-Cool-gray">You have the option of monthly or yearly billing.</p>


        {/* cart section */}
        <div className='flex gap-4 my-8'>
          {/* cart one */}
          <button onClick={() => handlePrice(9)} className={`flex flex-col gap-10 p-3 flex-grow rounded-md ${price === 9 ? 'bg-Pastel-blue' : 'bg-white'} outline-marine-blue border-[2px] border-solid ${price === 9 || price === 90 ? 'border-marine-blue' : 'border-transparent'} hover:border-marine-blue`}>
            <div>
              <img src={iconArcade} alt="Arcade icon" />
            </div>
            <div>
              <h2>Arcade</h2>
              <p>$9/mo</p>
            </div>
          </button>

          {/* cart two */}
          <button onClick={() => handlePrice(12)} className={`flex flex-col gap-10 p-3 flex-grow border-[2px] rounded-md ${price === 12 ? 'bg-Pastel-blue' : 'bg-white'} ${price === 12 || price === 120 ? 'border-marine-blue' : 'border-transparent'} hover:border-marine-blue`}>
            <div>
              <img src={iconAdvanced} alt="Arcade icon" />
            </div>
            <div>
              <h2>Advanced</h2>
              <p>$12/mo</p>
            </div>
          </button>

          {/* cart three */}
          <button onClick={() => handlePrice(15)} className={`flex flex-col gap-10 p-3 flex-grow border-[2px] rounded-md ${price === 15 ? 'bg-Pastel-blue' : 'bg-white'} ${price === 15 || price === 150 ? 'border-marine-blue' : 'border-transparent'} hover:border-marine-blue`}>
            <div>
              <img src={iconPro} alt="Arcade icon" />
            </div>
            <div>
              <h2>Pro</h2>
              <p>$15/mo</p>
            </div>
          </button>
        </div>

        {/* choose plan */}
        <div className='bg-Alabaster p-3 flex justify-center items-center gap-3'>
          <label htmlFor="planBox" className='cursor-pointer'>monthly</label>
          <input type="checkbox" 
          id='planBox' 
          className='w-[2.73rem] h-6 relative cursor-pointer appearance-none bg-marine-blue align-middle before:content-["⚪"] before:absolute before:block before:translate-x-0 checked:before:translate-x-full checked:before:content-["⚪"] rounded-full inline-block' 
          onChange={handleChange}
          checked={isChecked}
          value={'price'}
          />
          <label htmlFor="planBox" className='cursor-pointer'>yearly</label>
        </div>

        {/* navigation buttons */}
        <div className="absolute bottom-4 w-full">
            <div className="flex justify-between ">
              <Link to={'/'}>
                <button className="py-2 px-4 rounded-md text-Cool-gray">Go Back</button>
              </Link>
              <Link to={'/add-ons'}>
                <button className="bg-marine-blue text-white py-2 px-4 rounded-md">Next Step</button>
              </Link>
            </div>
        </div>
      </div>
    </main>
  )
}

export default SecondPage