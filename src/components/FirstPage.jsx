import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleBlur = (field) => {
    if (!formData[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: false,
      }));
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const formValidation = () => {
    // Ensure all fields are validated
    const updatedErrors = {
      name: !formData.name,
      email: !formData.email,
      phone: !formData.phone,
    };

    setErrors(updatedErrors);

    // Only navigate if there are no errors
    if (!updatedErrors.name && !updatedErrors.email && !updatedErrors.phone) {
      navigate('/select-plan');
    }
  };

  return (
    <main className="flex flex-grow md:w-full md:absolute md:top-[18%] md:left-[0%] md:bg-white md:rounded-md md:shadow-md">
      <div className="w-[80%] mx-auto mt-20 md:mt-4 md:mb-4 relative">
        <h1 className="font-fw-700 text-3xl text-marine-blue">Personal info</h1>
        <p className="text-Cool-gray">Please provide your name, email address, and phone number.</p>
        <form className="flex flex-col justify-around gap-[1.3rem] mt-8">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="name" className="uppercase text-marine-blue font-fw-500">Name</label>
              {errors.name && <p className="text-Strawberry-red font-bold items-center text-sm">This field is required</p>}
            </div>
            <input
              type="text"
              id="name"
              className={`border py-2 pl-4 rounded-md text-marine-blue font-fw-500 outline-marine-blue ${errors.name ? 'border-Strawberry-red' : ''}`}
              placeholder='e.g. Stephen King'
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              required
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="email" className="uppercase text-marine-blue font-fw-500">Email Address</label>
              {errors.email && <p className="text-Strawberry-red font-bold items-center text-sm">This field is required</p>}
            </div>
            <input
              type="email"
              id="email"
              className={`border py-2 pl-4 rounded-md text-marine-blue font-fw-500 outline-marine-blue ${errors.email ? 'border-Strawberry-red' : ''}`}
              placeholder='e.g. stephenking@lorem.com'
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              required
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="phone" className="uppercase text-marine-blue font-fw-500">Phone Number</label>
              {errors.phone && <p className="text-Strawberry-red font-bold items-center text-sm">This field is required</p>}
            </div>
            <input
              type="number"
              id="phone"
              className={`border py-2 pl-4 rounded-md text-marine-blue font-fw-500 outline-marine-blue ${errors.phone ? 'border-Strawberry-red' : ''}`}
              placeholder='e.g. +1 234 567 890'
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur('phone')}
              required
            />
          </div>

          {/* navigation */}
          <div className="absolute bottom-4 w-full md:fixed md:left-0 md:bottom-0 md:bg-white md:p-4">
            <div className="flex justify-end ">
              <button className="bg-marine-blue text-white py-2 px-4 rounded-md" onClick={formValidation}>Next Step</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FirstPage;
