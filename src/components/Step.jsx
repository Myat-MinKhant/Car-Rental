import date from '../assets/icon2.png'
import car from '../assets/icon1.png'
import drive from '../assets/icon3.png'

export default function Step() {
    return (
        <section className=" w-[80vw] mx-auto mt-32">
            <div className=" text-center mb-20">
                <h4 className=" uppercase text-text-gray mb-8">How it works</h4>
                <h2 className=" font-bold">Rentgo following 3 working Steps</h2>
            </div>

            <div className=" grid grid-cols-3">
                <div className=" text-center">
                    <div className=' w-[320px] h-[320px] m-auto mb-5 shadow-2xl hover:scale-[1.03] transition-all'>
                        <div className=' w-40 h-40 m-auto mb-5 pt-10 mt-5'>
                            <img src={car} alt="icon_img" className='date m-auto w-[85px]' />
                        </div>
                        <div className='px-10'>
                            <h3 className=" font-bold mb-2">Select Car</h3>
                            <p>
                                We offers a big range of vehicles for all your driving needs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" text-center">
                    <div className=' w-[320px] h-[320px] m-auto mb-5 shadow-2xl hover:scale-[1.03] transition-all'>
                        <div className=' w-40 h-40 m-auto mb-5 pt-16 mt-5'>
                            <img src={date} alt="icon_img" className=' m-auto w-16' />
                        </div>
                        <div className=' px-10'>
                            <h3 className=" font-bold mb-2">Pick-up date</h3>
                            <p>
                                Select your pick up date and time to book your car.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" text-center">
                    <div className=' w-[320px] h-[320px] m-auto mb-5 shadow-2xl hover:scale-[1.03] transition-all'>
                        <div className=' w-40 h-40 m-auto mb-5 pt-10 mt-5'>
                            <img src={drive} alt="icon_img" className='m-auto w-[85px]' />
                        </div>
                        <div className=' px-10'>
                            <h3 className=" font-bold mb-2">{`Let's Drive`}</h3>
                            <p>
                                {` We've got you covered with our wide range of cars hitting the open road.`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
