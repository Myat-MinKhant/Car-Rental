import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div>
      <header className=" w-full h-80 pt-20 pl-5 laptop:pl-8 desktop:pl-20">
        <h2 className=" font-bold">Contact</h2>
        <div className=" flex gap-1">
          <Link to='/' className=' cursor-pointer text-[19px] font-[400] hovet:text-main'>Home</Link>
          <h4>/ Contact</h4>
        </div>
      </header>

      <main className=" tablet:px-16">
        <div className=" text-center px-5 flex flex-col laptop:flex-row laptop:text-left laptop:gap-10">
          <div className=" flex flex-col gap-5 laptop:w-1/2">
            <h1>Need additonal information?</h1>
            <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
            <div className=" mb-2">
              <i className="fa-solid fa-phone text-black mr-3"></i>
              <a href="/" className=" hover:none">(000)-456-789</a>
            </div>
            <div>
              <i className="fa-solid fa-envelope text-black mr-3"></i>
              <a href="/" className=" hover:none">carrental@gmail.com</a>
            </div>
          </div>

          <div className=" text-left laptop:flex-grow">
            <div className='w-full flex flex-col mt-7 tablet:mt-10 laptop:mt-0'>
              <label className=' font-bold pl-7'>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder='Enter your full name' className='contact-input pl-7' />
            </div>

            <div className='w-full flex flex-col mt-7 tablet:mt-10'>
              <label className=' font-bold pl-7'>
                Email <b>*</b>
              </label>
              <input type="email" placeholder='Enter your email address' className='contact-input pl-7' />
            </div>

            <div className='w-full flex flex-col mt-7  tablet:mt-10' >
              <label className=" font-bold pl-7">
                Tell us about it <b>*</b>
              </label>
              <textarea cols="30" rows="7" className=" contact-input p-7" placeholder="Write Here..." />
            </div>

            <div className="px-1">
              <button className="w-full py-5 px-12 bg-main text-white text-xl font-bold">
              <i className="fa-solid fa-paper-plane w-7 h-7 text-white mr-1"></i>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className=' mt-32 bg-[#2d2d2d] p-5 text-center flex flex-col gap-5 tablet:flex-row tablet:gap-10 tablet:p-10 tablet:items-center laptop:py-20'>
        <h2 className='text-white text-3xl font-extrabold tablet:w-[60%] laptop:w-[70%]'>Book a car by getting in touch with us</h2>
        <h3 className=' text-main text-3xl font-bold'>
          <i className="fa-solid fa-phone text-3xl text-main mr-3"></i>
          (000) 456-789
        </h3>
      </footer>
    </div>
  )
}

export default Contact