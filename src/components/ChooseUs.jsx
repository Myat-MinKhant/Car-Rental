import bestprice from '../assets/best-price.png'
import driver from '../assets/driver.png'
import clock from '../assets/24-hours.png'
import chat from '../assets/chat.png'
import car from '../assets/choose-us-car.png'
export default function ChooseUs() {
    return (
        <section className=" w-[90vw] h-[50vw] flex mt-32">
            <div className=" w-2/3 relative">
                <img src={car} alt="car-img" className=' absolute h-[70%] top-5 -left-32'/>
            </div>

            <div className=" w-2/3">
                <h4 className=" uppercase text-text-gray mb-1">Why choose us</h4>
                <h2 className=" font-bold mb-7">We offer the best experience with our rental deals</h2>

                <div className=" w-[75%] flex flex-col gap-7">
                    <div className="flex items-center gap-7">
                        <img src={bestprice} alt="price-icon" width={70} />
                        <div>
                            <h3 className=" font-bold">Best price guaranteed</h3>
                            <p>{`Find a lower price? We'll refund you 100% of the difference.`}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-7">
                        <img src={driver} alt="driver-icon"/>
                        <div>
                            <h3 className=" font-bold">Experience driver</h3>
                            <p>{`Don't have a driver? Don't worry, we have many experienced driver for you.`}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-7">
                        <img src={clock} alt="24/7-icon" width={60}/>
                        <div>
                            <h3 className=" font-bold">24-hour car delivery</h3>
                            <p>{`Book you car anytime and we will deliver it directly to you.`}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-7">
                        <img src={chat} alt="contact-icon" width={60} />
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
