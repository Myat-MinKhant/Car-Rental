import playstore from '../assets/playstore.svg'
import appstore from '../assets/appstore.svg'
import hero_car from '../assets/header-car.png'
import hero_bg from '../assets/hero-bg.png'
export default function Hero() {
    return (
        <section className=" w-full flex tablet:w-[600px] tablet:m-auto tablet:mt-5 laptop:w-[95vw]">
            <div className=" w-full text-center pt-16 laptop:text-left laptop:w-5/12 laptop:pt-32">
                <h1 className="font-bold mb-7 laptop:mb-5 laptop:text-5xl laptop:font-medium ">
                    Find, book and rental car with
                    <span className=' text-main underline underline-offset-4'> Easy</span>
                    &nbsp; steps
                </h1>
                <p className=' px-5 tablet:px-24 laptop:px-0'>Get a car whatever and whenever you need it with your iOS or Android device.</p>
                <div className=' mt-7 gap-1 tablet:flex tablet:justify-center tablet:gap-5 laptop:justify-start laptop:mt-5'>
                    <div className=' mb-7 tablet:w-1/3'>
                        <button>
                            <img src={playstore} alt="playstore-btn" />
                        </button>
                    </div>
                    <div className=' tablet:w-1/3'>
                        <button>
                            <img src={appstore} alt="appstore-btn" />
                        </button>
                    </div>
                </div>
            </div>

            <div className=' hidden relative overflow-hidden laptop:flex laptop:flex-auto'>
                <img src={hero_bg} alt="hero-bg" className=' absolute w-[400px] right-10 -top-5 laptop:-right-20 laptop:-top-12 desktop:-right-5 desktop:-top-7'/>
                <img src={hero_car} alt="hero-car" className=' absolute w-[550px] bottom-24 left-10 laptop:-bottom-5 laptop:left-0' />
            </div>
        </section>
    )
}
