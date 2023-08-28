import { Link } from "react-router-dom"
import Testimonial from "../components/Testimonial"

const Testimonials = () => {
  return (
    <div>
      <header className=" w-full h-48 pt-20 pl-5 laptop:pl-8 desktop:pl-20">
        <h2 className=" font-bold">Testimonials</h2>
        <div className=" flex gap-1">
          <Link to='/' className=' cursor-pointer text-[19px] font-[400] hovet:text-main'>Home</Link>
          <h4>/ Testimonials</h4>
        </div>
      </header>

      <main className=" desktop:px-20">
        <Testimonial className=" desktop:px-20"/>
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

export default Testimonials