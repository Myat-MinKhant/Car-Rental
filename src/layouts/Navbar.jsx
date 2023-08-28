import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const showButton = () => {
        return isVisible === true ? 'show-scroll' : '';
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    return (
        <nav className='w-screen h-20 flex flex-wrap items-center px-3 laptop:px-7 justify-between desktop:px-20'>
            <div className={` scroll-up hidden ${showButton()}`} onClick={scrollToTop}>
            <i className="fa-solid fa-chevron-up text-white z-30" />
            </div>
            <Link to='/'>
                <div className=' flex gap-3 mt-3 cursor-pointer'>
                    <img src={logo} alt="logo" width={80} />
                    <div className=' mt-2'>
                        <h4 className=' text-2xl font-bold uppercase'>Car</h4>
                        <span className=' text-lg'>Rental</span>
                    </div>
                </div>
            </Link>

            <div>
                <div>
                    <ul className='mobile:hidden laptop:flex items-center gap-5'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/'>Models</a></li>
                        <li><a href='/testimonials'>Testimonials</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>

                <div>
                    <div onClick={() => setOpen('open-nav')} className=' laptop:hidden'>
                        <i className="fa-solid fa-bars text-black text-3xl mt-5"></i>
                    </div>
                    <div className={`${open} mobile-navbar`}>
                        <div onClick={() => setOpen('')}>
                            <i className="fa-solid fa-xmark text-black text-4xl absolute top-9 right-7"></i>
                        </div>
                        <ul className=' text-center flex flex-col gap-4 tablet:gap-10 my-auto'>
                            <li><a href='/' className='text-2xl font-normal'>Home</a></li>
                            <li><a href='/about' className='text-2xl font-normal'>About</a></li>
                            <li><a href='/' className='text-2xl font-normal'>Models</a></li>
                            <li><a href='/testimonials' className='text-2xl font-normal'>Testimonials</a></li>
                            <li><a href='/contact' className='text-2xl font-normal'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='mobile:hidden laptop:flex items-center gap-5'>
                <p className=' signin-btn'>Sign in</p>
                <button className=' register-btn '>Register</button>
            </div>
        </nav >
    )
}
