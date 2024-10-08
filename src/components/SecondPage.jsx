import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SecondPage = ({setPrice, setYearly, setCurrentPlan, setTotalPrice, totalPrice}) => {

  // monthly and yearly price variables
  const [arcadePrice, setArcadePrice] = useState(9);
  const [advancedPrice, setAdvancedPrice] = useState(12);
  const [proPrice, setProPrice] = useState(15);

  const [isChecked, setIsChecked] = useState(false);

  // with the help of this variable, we will activate the background on carts
  const [activeBg, setActiveBg] = useState(9);
 
  //Render the free offer on yearly basis
  const [freeOffer, setFreeOffer] = useState(false);

  // set the monthly price, we will call other function for yearly
  const handlePrice = (e) => {
    let selectedPrice = 0;
    if (e === 'cart1') {
      // with the help of setCurrentPlan, we will render the title on the basis of plan chosen
      setCurrentPlan('Arcade')
      selectedPrice = arcadePrice;
      setActiveBg(activeBg === 9 ? 90 : 9)
    } else if (e === 'cart2') {
      setCurrentPlan('Advanced')
      selectedPrice = advancedPrice;
      setActiveBg(activeBg === 12 ? 120 : 12)
    } else if (e === 'cart3') {
      setCurrentPlan('Pro')
      selectedPrice = proPrice;
      setActiveBg(activeBg === 15 ? 150 : 15)
    }
    setPrice(selectedPrice)
    setTotalPrice(selectedPrice);
  }

  useEffect(() => {    
    if (isChecked) {
      setArcadePrice(90);
      setAdvancedPrice(120);
      setProPrice(150);
      setPrice(90);
      // setActiveBg(90);
      setFreeOffer(true);
      setYearly(prev => !prev);
      setTotalPrice(prev => prev * 10)
    } else {
      setArcadePrice(9);
      setAdvancedPrice(12);
      setProPrice(15);
      setPrice(9);
      // setActiveBg(9); 
      setFreeOffer(false);
      setYearly(prev => !prev);
      setTotalPrice(prev => prev / 10)
    }
  }, [isChecked])

  // Logic behind the working of dynamically changing price with the button
  // we will initialize the values when the page is refreshed i.e, set the monthly price of every variable
  // now, whenever someone clicks on the cart, the price will be updated but only monthly
  // To set the pricing for monthly, we will have to change the price in every variable
  // But the issue was that, even when the price is updated in every variable for yearly, after clicking on
  // the pricing button, user have to click on the cart to updated it which we can not afford.
  // So we will reset the variable to yearly pricing by moving to the first cart
  

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  }

  useEffect(() => {
    setTotalPrice(9);
    setYearly(false);
  }, [])

  return (
    <main className="flex flex-grow md:w-full md:absolute md:top-[18%] md:left-[0%] h-400:relative md:bg-white md:rounded-md md:shadow-md">
      <div className="w-[80%] mx-auto mt-20 md:mt-4 relative md:static">
        <h1 className="font-fw-700 text-3xl text-marine-blue">Select your plan</h1>
        <p className="text-Cool-gray">You have the option of monthly or yearly billing.</p>


        {/* cart section */}
        <div className='flex gap-4 my-8 md:flex-col'>
          {/* cart one */}
          <button onClick={() => handlePrice('cart1')} className={`flex flex-col gap-10 p-3 flex-1 rounded-md ${activeBg === 9 || activeBg === 90 ? 'bg-Pastel-blue border-marine-blue' : 'bg-white border-Light-gray'} outline-marine-blue border-[1.5px] border-solid hover:border-marine-blue md:flex-row`}>
            <div>
              <img src={iconArcade} alt="Arcade icon" />
            </div>
            <div>
              <h2>Arcade</h2>
              <p>${arcadePrice}/mo</p>
              <p>{freeOffer ? '2 months free' : ''}</p>
            </div>
          </button>

          {/* cart two */}
          <button onClick={() => handlePrice('cart2')} className={`flex flex-col gap-10 p-3 flex-1 border-[1.5px] rounded-md ${activeBg === 12 || activeBg === 120 ? 'bg-Pastel-blue border-marine-blue' : 'bg-white border-Light-gray'} hover:border-marine-blue md:flex-row`}>
            <div>
              <img src={iconAdvanced} alt="Arcade icon" />
            </div>
            <div>
              <h2>Advanced</h2>
              <p>${advancedPrice}/mo</p>
              <p>{freeOffer ? '2 months free' : ''}</p>
            </div>
          </button>

          {/* cart three */}
          <button onClick={() => handlePrice('cart3')} className={`flex flex-col gap-10 p-3 flex-1 border-[1.5px] rounded-md ${activeBg === 15 || activeBg === 150 ? 'bg-Pastel-blue border-marine-blue' : 'bg-white border-Light-gray'} hover:border-marine-blue md:flex-row`}>
            <div>
              <img src={iconPro} alt="Arcade icon" />
            </div>
            <div>
              <h2>Pro</h2>
              <p>${proPrice}/mo</p>
              <p>{freeOffer ? '2 months free' : ''}</p>
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
          />
          <label htmlFor="planBox" className='cursor-pointer'>yearly</label>
        </div>

        {/* navigation buttons */}
        <div className="absolute md:fixed sm:!relative md:left-0 md:bottom-0 bottom-4 w-full md:bg-white md:p-4">
          <div className="flex justify-between">
            <Link to={'/multi-step-form'}>
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