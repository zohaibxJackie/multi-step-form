import { useState } from "react";
import { Link } from "react-router-dom";

const ThirdPage = (props) => {
  const {yearly, activeBgBtn1, activeBgBtn2, activeBgBtn3, setActiveBgBtn1, setActiveBgBtn2, setActiveBgBtn3} = props;

  const boxCheck = (btn) => {
    if (btn === 'chk1') {
      setActiveBgBtn1((prev) => !prev);
    } else if (btn === 'chk2') {
      setActiveBgBtn2((prev) => !prev);
    } else if (btn === 'chk3') {
      setActiveBgBtn3((prev) => !prev);
    } else {
      console.error('Something went wrong');
    }
  };

  const handleCheckboxClick = (e, btn) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the button
    boxCheck(btn); // Toggle the background and checked state
  };

  return (
    <main className="flex flex-grow md:w-full md:absolute md:top-[18%] md:left-[0%] md:bg-white md:rounded-md md:shadow-md">
      <div className="w-[80%] md:w-[90%] mx-auto mt-20 md:mt-4 relative md:static">
        <h1 className="font-fw-700 text-3xl text-marine-blue">Pick add-ons</h1>
        <p className="text-Cool-gray min-w-max md:min-w-[initial]">Add-ons help enhance your gaming experience.</p>

        {/* Cart section */}
        <div className="flex gap-4 my-8 flex-col">
          {/* Cart one */}
          <button
            onClick={() => boxCheck('chk1')}
            className={`flex justify-between items-center gap-10 md:gap-2 py-3 flex-1 rounded-md outline-marine-blue border-[1.5px] border-solid hover:border-marine-blue md:flex-row ${activeBgBtn1 ? 'bg-Pastel-blue border-marine-blue' : ''}`}
          >
            <div className="flex">
              <input
                type="checkbox"
                id="chk1"
                className="cursor-pointer mx-2 min-w-4"
                checked={activeBgBtn1}
                onClick={(e) => handleCheckboxClick(e, 'chk1')}
                onChange={() => {}}
              />
              <div className="text-left">
                <p className="text-marine-blue font-bold">Online services</p>
                <p className="text-Cool-gray text-[0.9rem]">Access to multiple games</p>
              </div>
            </div>
            <div className="mr-6 text-Purplish-blue">
              <p>+${`${yearly ? '10' : '1'}`}/mo</p>
            </div>
          </button>

          {/* Cart two */}
          <button
            onClick={() => boxCheck('chk2')}
            className={`flex justify-between items-center gap-10 md:gap-2 py-3 flex-1 rounded-md outline-marine-blue border-[1.5px] border-solid hover:border-marine-blue md:flex-row ${activeBgBtn2 ? 'bg-Pastel-blue border-marine-blue' : ''}`}
          >
            <div className="flex">
              <input
                type="checkbox"
                id="chk2"
                className="cursor-pointer mx-2 min-w-4"
                checked={activeBgBtn2}
                onClick={(e) => handleCheckboxClick(e, 'chk2')}
                onChange={() => {}}
              />
              <div className="text-left">
                <p className="text-marine-blue font-bold">Larger Storage</p>
                <p className="text-Cool-gray text-[0.9rem]">Extra 1TB of cloud save</p>
              </div>
            </div>
            <div className="mr-6 text-Purplish-blue">
              <p>+${`${yearly ? '20' : '2'}`}/mo</p>
            </div>
          </button>

          {/* Cart three */}
          <button
            onClick={() => boxCheck('chk3')}
            className={`flex justify-between items-center gap-10 md:gap-2 py-3 flex-1 rounded-md outline-marine-blue border-[1.5px] border-solid hover:border-marine-blue md:flex-row ${activeBgBtn3 ? 'bg-Pastel-blue border-marine-blue' : ''}`}
          >
            <div className="flex">
              <input
                type="checkbox"
                id="chk3"
                className="cursor-pointer mx-2 min-w-4"
                checked={activeBgBtn3}
                onClick={(e) => handleCheckboxClick(e, 'chk3')}
                onChange={() => {}}
              />
              <div className="text-left">
                <p className="text-marine-blue font-bold">Customization profile</p>
                <p className="text-Cool-gray text-[0.9rem]">Custom theme on your profile</p>
              </div>
            </div>
            <div className="mr-6 text-Purplish-blue">
              <p>+${`${yearly ? '20' : '2'}`}/mo</p>
            </div>
          </button>
        </div>

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
  );
};

export default ThirdPage;
