export default function Footer() {
    return (
        <>
            <section className=" w-full laptop:w-[90vw] desktop:w-[90vw] text-center tablet:text-left px-5 m-auto mt-32 pt-10 pb-32 tablet:flex tablet:flex-wrap laptop:flex-nowrap laptop:gap-5 desktop:gap-10 border-t-zinc-500 border-b-2 border-b-main">
                <div className=" w-full tablet:w-1/2 laptop:w-[600px]">
                    <h3><span className=" font-bold">Car</span> Rental</h3>
                    <p className="mt-5 mb-7">We offers a wide range of vehicles for all your driving need.We have the perfect car to meet your needs</p>

                    <div className=" mb-2">
                        <i className="fa-solid fa-phone text-black mr-3"></i>
                        <a href="/" className=" hover:none">(000)-456-789</a>
                    </div>
                    <i className="fa-solid fa-envelope text-black mr-3"></i>
                    <a href="/" className=" hover:none">carrental@gmail.com</a>
                </div>
                <div className=" w-full mt-14 tablet:w-1/2 laptop:w-[400px] tablet:pl-6 laptop:pl-0 tablet:mt-0">
                    <h3 className=" uppercase font-bold mb-3">Company</h3>
                    <ul>
                        <li className="mb-2"><a href="/" className=" footer-link">Help Center</a></li>
                        <li className="mb-2"><a href="/" className=" footer-link">Community</a></li>
                        <li className="mb-2"><a href="/" className=" footer-link">Support</a></li>
                        <li className="mb-2"><a href="/" className=" footer-link">Mobile</a></li>
                        <li><a href="/" className=" footer-link">How we work</a></li>
                    </ul>
                </div>
                <div className=" w-full mt-14 tablet:w-1/2 laptop:mt-0 laptop:w-[400px]">
                    <h3 className=" uppercase font-bold mb-3">About</h3>
                    <ul>
                        <li className="mb-2"><a href="/" className=" footer-link">Services</a></li>
                        <li className="mb-2"><a href="/" className=" footer-link">Pricing</a></li>
                        <li className="mb-2"><a href="/" className=" footer-link">Contact</a></li>
                        <li className="mb-2"><a href="/" className=" footer-link">Careers</a></li>
                    </ul>
                </div>
                <div className=" w-full mt-14 tablet:w-1/2 laptop:mt-0 laptop:w-[600px] tablet:pl-6 laptop:pl-0">
                    <h3 className=" uppercase font-bold mb-5">Subscription</h3>
                    <p className=" mb-7">Subcribe your email address for lastest news & updates</p>
                    <input type="email" placeholder="Enter your email" className=" border-0 w-full h-10 mb-3 pl-5 rounded-sm bg-zinc-200 text-[16px]" />
                     <br />
                    <button className=" w-full bg-main text-white rounded-sm py-3">Submit</button>
                </div>
            </section>
            <div className=" w-full tablet:w-[80vw] m-auto flex justify-center tablet:justify-end mt-5 mb-20">
                <div className=" flex items-center gap-3">
                    <a href="/" className=" policy-link">Terms</a>
                    <i className="fa-solid fa-circle text-black text-[4px]"></i>
                    <a href="/" className=" policy-link">Privacy Policy</a>
                    <i className="fa-solid fa-circle text-black text-[4px]"></i>
                    <a href="/" className=" policy-link">Cookies</a>
                </div>
            </div>
        </>
    )
}

