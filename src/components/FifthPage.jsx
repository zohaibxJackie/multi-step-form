import thanks from '../assets/images/icon-thank-you.svg'
const FifthPage = () => {
  return (
    <main className="flex flex-grow md:w-full md:absolute md:top-[18%] md:left-[0%] md:bg-white md:rounded-md md:shadow-md">
      <div className="w-[80%] md:w-[90%] mx-auto mt-20 md:mt-4 relative md:static">
        <div className='flex justify-center items-center flex-col'>
            <img src={thanks} alt="thank-you icon" />
            <h1 className='text-marine-blue font-bold text-2xl'>Thank You!</h1>
            <p className='text-Cool-gray text-sm text-center'>Thanks for confirming your subscription! we hope you have fun using our platform.<br /> If you need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
      </div>
    </main>
  )
}

export default FifthPage