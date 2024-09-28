import React from 'react'

const Landing = () => {
  return (
    <section className="h-screen">
      <div className="bg-white opacity-95 h-full overflow-hidden">
      <header className='flex h-32 px-28 border-b-2  border-black'>
        <img className=''  src="./images/logo-black.png"  alt="" />

        <ul className='flex flex-1 text-[#02040F] justify-center gap-28 items-center '>
          <a className='font-semibold text-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:underline hover:text-orange-600 duration-300 hover:scale-110 hover:underline-offset-4 active:text-orange-600' href="#"><li>Membership</li></a>
          <a className='font-semibold text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:underline hover:text-orange-600 duration-300 hover:scale-110 hover:underline-offset-4 active:text-orange-600' href="#"><li>Classes</li></a>
          <a className='font-semibold text-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:underline hover:text-orange-600 duration-300 hover:scale-110 hover:underline-offset-4 active:text-orange-600' href="#"><li>Coaches</li></a>
          <a className='font-semibold text-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:underline hover:text-orange-600 duration-300 hover:scale-110 hover:underline-offset-4 active:text-orange-600' href="#"><li>Stories</li></a>
        </ul>

        <div className='place-content-center' >
        <button className='btn-getStarted bg-[#235789] p-2 items-center text-white font-medium rounded-lg transition hover:brightness-150 duration-300 hover:scale-110 ease-in-out  delay-100 active:brightness-200 '>Get started</button>
        </div>
      </header>

        <div className='h-full flex flex-row'>
          <div className='flex-1 flex justify-center items-center'>
            <img src="./images/landing-1.png" alt="man running pic" />
            </div>

          <div>
          <div className='px-14 flex-1 h-full flex flex-col justify-center  content-center '  >
        <div className='leading-4 text-right '>
        <h1 className='text-[#02040F] font-semibold  text-6xl mb-2'>Transnform Today</h1>
        <h2 className='text-[#FF6700] font-medium  text-4xl'>Begin your fitness journey</h2> <br />
        <h2 className='text-[#FF6700] font-medium  text-4xl'>with <span className='text-[#FF6700]  font-sans font-bold text-5xl'>KEVfit</span></h2>
      </div>
      
        </div>
          </div>
        </div>
      
      </div>
      <div className='bg-white h-full '>
        <div>
          <h1 className='font-semibold mt-28 text-[#FF6700] text-4xl '>Choose a plan that <br />  works for you</h1>

        </div>
      </div>
      
    </section>
  )
}

export default Landing