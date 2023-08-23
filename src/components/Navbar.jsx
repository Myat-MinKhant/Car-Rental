import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <nav className=" w-full h-20 flex items-center justify-evenly mx-auto px-2">
            <div className=' flex gap-3 mt-3 cursor-pointer'>
                <img src={logo} alt="logo" width={80} />
                <div className=' mt-2'>
                    <h4 className=' text-2xl font-bold uppercase'>Car</h4>
                    <span className=' text-lg'>Rental</span>
                </div>
            </div>

            <div>
                <ul className=' flex items-center gap-5'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Vehical Models</a></li>
                    <li><a href='/'>Why choose us</a></li>
                    <li><a href='/'>Testimonials</a></li>
                    <li><a href='/'>FAQ</a></li>
                </ul>
            </div>

            <div className=' flex items-center gap-5'>
                <p className=' signin-btn'>Sign in</p>
                <button className=' register-btn '>Register</button>
            </div>
        </nav>
    )
}
