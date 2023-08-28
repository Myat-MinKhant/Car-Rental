import { Link } from 'react-router-dom'
import main_img from '../assets/about/about-main.jpg'
import icon1 from '../assets/about/icon1.png'
import icon2 from '../assets/about/icon2.png'
import icon3 from '../assets/about/icon3.png'
import Step from '../components/Step'
const About = () => {
  return (
    <div>
      <header className=" w-full h-80 pt-20 pl-5 laptop:pl-8 desktop:pl-20">
        <h2 className=" font-bold">About</h2>
        <div className=" flex gap-1">
          <Link to='/' className=' cursor-pointer text-[19px] font-[400] hovet:text-main'>Home</Link>
          <h4>/ About</h4>
        </div>
      </header>

      <main className=' px-6 tablet:px-12 laptop:px-5 desktop:px-20'>
        <div className=' flex flex-col gap-12 laptop:flex-row'>
          <img src={main_img} alt="about-img" />
          <div className=' text-center'>
            <h3 className=' mb-2'>About Company</h3>
            <h1>You start the engine and your adventure begins</h1>
            <p className=' mt-5 mb-10'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
            <div className=' flex flex-col gap-10 tablet:flex-row tablet:justify-center tablet:gap-16 laptop:gap-10'>
              <div>
                <img src={icon1} alt="icon1" className=' mx-auto mb-5 tablet:mx-0' />
                <div className=' tablet:flex tablet:items-start gap-5'>
                  <h1 className='mb-5 font-bold'>20</h1>
                  <p className=' w-1/3'>Car Types</p>
                </div>
              </div>
              <div>
                <img src={icon2} alt="icon2" className=' mx-auto mb-5 tablet:mx-0' />
                <div className=' tablet:flex tablet:items-start gap-5'>
                  <h1 className='mb-5 font-bold'>85</h1>
                  <p className=' w-1/2'>Rental Outlets</p>
                </div>
              </div>
              <div>
                <img src={icon3} alt="icon3" className=' mx-auto mb-5 tablet:mx-0' />
                <div className=' tablet:flex tablet:items-start gap-5'>
                  <h1 className='mb-5 font-bold'>75</h1>
                  <p className='w-1/2'>Repair Shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Step />
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

export default About