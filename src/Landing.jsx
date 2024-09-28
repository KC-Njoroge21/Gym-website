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

          <h1 className='font-semibold mt-28 ml-14 mb-8 text-[#FF6700] text-5xl '>Choose a plan that <br />  works for you</h1>

          <div className='flex'>



            <div className='bg-gradient-to-bl  from-[#401F3E] to-[#3F2E56] text-white w-1/4 p-8 rounded-xl flex flex-col m-auto hover:shadow-md hover:shadow-[#FF6700] transition ease-in-out delay-100 hover:scale-110 duration-500 cursor-pointer'>
              <h3 className='font-semibold text-2xl'>Free</h3>
              <h2 className='font-bold text-4xl '>FREE</h2>
              <p className='font-light text-md mb-6'>forever free for individuals and small teams up to 3</p>

              <div className='mb-6'> 
              <ul className='flex flex-col gap-1'>
                <li><span><i class='bx bx-check'></i></span>Free Meal Plan</li>
                <li><span><i class='bx bx-check'></i></span>Free Talks</li>
                <li><span><i class='bx bx-check'></i></span>1 User</li>
                <li><span><i class='bx bx-check'></i></span>Limited Merchandise</li>
              </ul>
              </div>
              <div className='flex justify-center'>
              <button className='bg-white transition ease-in-out flex items-center gap-14 py-1 transform hover:-translate-y-2 delay-75 duration-300  px-4 text-[#401F3E] font-medium hover: text-md rounded-full text-left'> Start for free <div className='h-8 flex justify-center items-center text-xl w-8 rounded-full bg-[#401F3E]'><i class='bx bx-right-arrow-alt text-white font-semibold ' ></i></div></button>
              </div>
            </div>

            <div className='bg-gradient-to-bl  from-[#401F3E] to-[#3F2E56] text-white border-2 border-black w-1/4 p-8 rounded-xl flex flex-col m-auto hover:shadow-md hover:shadow-[#FF6700] transition ease-in-out delay-100 hover:scale-110 duration-500 cursor-pointer'>
              <h3 className='font-semibold text-2xl'>Free</h3>
              <h2 className='font-bold text-4xl mb-2'>$25</h2>
              
              <p className='font-light text-md mb-6'>forever free for individuals and small teams up to 3</p>

              <div className='mb-6'> 
              <ul className='flex flex-col gap-1'>
                <li><span><i class='bx bx-check'></i></span>Free Meal Plan</li>
                <li><span><i class='bx bx-check'></i></span>Free Talks</li>
                <li><span><i class='bx bx-check'></i></span>1 User</li>
                <li><span><i class='bx bx-check'></i></span>Limited Merchandise</li>
              </ul>
              </div>
              <div className='flex justify-center'>
              <button className='bg-white transition ease-in-out flex items-center gap-14 py-1 transform hover:-translate-y-2 delay-75 duration-300  px-4 text-[#401F3E] font-medium hover: text-md rounded-full text-left'> Start for free <div className='h-8 flex justify-center items-center text-xl w-8 rounded-full bg-[#401F3E]'><i class='bx bx-right-arrow-alt text-white font-semibold ' ></i></div></button>
              </div>
            </div>

            <div className='bg-gradient-to-bl  from-[#401F3E] to-[#3F2E56] text-white border-2 border-black w-1/4 p-8 rounded-xl flex flex-col m-auto hover:shadow-md hover:shadow-[#FF6700] transition ease-in-out delay-100 hover:scale-110 duration-500 cursor-pointer'>
              <h3 className='font-semibold text-2xl'>Free</h3>
              <h2 className='font-bold text-4xl mb-2'>$25</h2>
              <p className='font-light text-md mb-6'>forever free for individuals and small teams up to 3</p>

              <div className='mb-6'> 
              <ul className='flex flex-col gap-1'>
                <li><span><i class='bx bx-check'></i></span>Free Meal Plan</li>
                <li><span><i class='bx bx-check'></i></span>Free Talks</li>
                <li><span><i class='bx bx-check'></i></span>1 User</li>
                <li><span><i class='bx bx-check'></i></span>Limited Merchandise</li>
              </ul>
              </div>
              <div className='flex justify-center'>
              <button className='bg-white transition ease-in-out flex items-center gap-14 py-1 transform hover:-translate-y-2 delay-75 duration-300  px-4 text-[#401F3E] font-medium hover: text-md rounded-full text-left'> Start for free <div className='h-8 flex justify-center items-center text-xl w-8 rounded-full bg-[#401F3E]'><i class='bx bx-right-arrow-alt text-white font-semibold ' ></i></div></button>
              </div>
            </div>

            
          </div>




          

        </div>
        
      </div>
      
    </section>
  )
}

export default Landing