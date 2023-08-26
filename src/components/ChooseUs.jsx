import bestprice from '../assets/best-price.png'
import driver from '../assets/driver.png'
import clock from '../assets/24-hours.png'
import chat from '../assets/chat.png'
import car from '../assets/choose-us-car.png'
export default function ChooseUs() {
    return (
        <section className=" w-full desktop:w-[90vw] laptop:flex mt-32 px-3">
            <div className=" w-full tablet:w-2/3 tablet:m-auto laptop:w-1/2 relative laptop:m-0">
                <img src={car} alt="car-img" className=' laptop:absolute laptop:h-[500px] desktop:h-[70%] laptop:top-5 laptop:-left-24'/>
            </div>

            <div className=" w-full mt-5 text-center tablet:m-auto tablet:w-2/3 laptop:text-left ">
                <h4 className=" uppercase text-text-gray mb-1">Why choose us</h4>
                <h2 className=" font-bold mb-7">We offer the best experience with our rental deals</h2>

                <div className=" w-full flex flex-col mt-20 gap-20 laptop:w-[75%] tablet:gap-7  tablet:pl-7 laptop:pl-0 laptop:gap-10">
                    <div className=" tablet:flex items-center gap-7">
                        <img src={bestprice} alt="price-icon" width={70} className=' m-auto mb-7' />
                        <div>
                            <h3 className=" font-bold">Best price guaranteed</h3>
                            <p>{`Find a lower price? We'll refund you 100% of the difference.`}</p>
                        </div>
                    </div>

                    <div className=" tablet:flex items-center gap-7">
                        <img src={driver} alt="driver-icon" className=' m-auto mb-7'/>
                        <div>
                            <h3 className=" font-bold">Experience driver</h3>
                            <p>{`Don't have a driver? Don't worry, we have many experienced driver for you.`}</p>
                        </div>
                    </div>

                    <div className=" tablet:flex items-center gap-7">
                           <img src={clock} alt="24/7-icon" width={60} className=' m-auto mb-7'/>
                        <div>
                            <h3 className=" font-bold">24-hour car delivery</h3>
                            <p>{`Book you car anytime and we will deliver it directly to you.`}</p>
                        </div>
                    </div>

                    <div className=" tablet:flex items-center gap-7">
                        <img src={chat} alt="contact-icon" width={60} className=' m-auto mb-7'/>
                        <div>
                            <h3 className=" font-bold">24-hour technical support</h3>
                            <p>{`Have a question? Contact CarRental support anytime when you have problem. `}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
