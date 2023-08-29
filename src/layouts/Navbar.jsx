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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/models'>Models</Link></li>
                        <li><Link to='/testimonials'>Testimonials</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
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
                        <ul className=' text-center flex flex-col gap-4 mobileL:gap-9 tablet:gap-12 my-auto'>
                            <li><Link to='/' onClick={() => setOpen('')} className='text-2xl font-normal'>Home</Link></li>
                            <li><Link to='/about' onClick={() => setOpen('')} className='text-2xl font-normal'>About</Link></li>
                            <li><Link to='/models' onClick={() => setOpen('')} className='text-2xl font-normal'>Models</Link></li>
                            <li><Link to='/testimonials' onClick={() => setOpen('')} className='text-2xl font-normal'>Testimonials</Link></li>
                            <li><Link to='/contact' onClick={() => setOpen('')} className='text-2xl font-normal'>Contact</Link></li>
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
