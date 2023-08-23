import playstore from '../assets/playstore.svg'
import appstore from '../assets/appstore.svg'
import hero_car from '../assets/header-car.png'
import hero_bg from '../assets/hero-bg.png'
export default function Hero() {
    return (
        <section className=" w-[95vw] h-[40vw] ml-32 flex">
            <div className=" w-4/12 h-full pt-32">
                <h1 className=" mb-5">Find, book and <br />
                    rental car in <span className=' text-main underline underline-offset-4'>Easy</span>
                    <br />steps.</h1>
                <p>Get a car whatever and whenever you need it with your <br /> iOS or Android device.</p>
                <div className=' flex gap-3 mt-5'>
                    <div className=' min-w-[140px]'>
                        <button>
                            <img src={playstore} alt="playstore-btn" width={135} className=' hover:w-[140px] transition-all' />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={appstore} alt="appstore-btn" width={135} className=' hover:w-[140px] transition-all' />
                        </button>
                    </div>
                </div>
            </div>

            <div className=' flex-auto relative overflow-hidden'>
                <img src={hero_bg} alt="hero-bg" className=' absolute w-[400px] right-10 -top-5' />
                <img src={hero_car} alt="hero-car" className=' absolute w-[550px] bottom-24 left-10 ' />
            </div>
        </section>
    )
}
