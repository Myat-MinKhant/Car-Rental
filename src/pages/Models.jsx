import { Link } from "react-router-dom"
import carsData from '../components/data/CarData'
const Models = () => {
  return (
    <section>
      <header className=" w-full h-56 pt-20 pl-5 laptop:pl-8 desktop:pl-20">
        <h2 className=" font-bold">Car Models</h2>
        <div className=" flex gap-1">
          <Link to='/' className=' cursor-pointer text-[19px] font-[400] hovet:text-main'>Home</Link>
          <h4>/ Car Models</h4>
        </div>
      </header>

      <main className="grid grid-cols-1 gap-5 tablet:grid-cols-2 px-5 tablet:px-5 laptop:grid-cols-3 laptop:px-12  desktop:grid-cols-4 desktop:px-20">
        {carsData.map(carData => (
          <div key={carData.id} className="w-76 h-[405px] p-5 mb-7 mx-auto shadow-xl rounded-xl laptop:w-full">
            <h3 className=" font-[500]">{carData.name}</h3>

            <div className=" flex h-11 mt-3">
              <span className=" self-start">$&nbsp;</span>
              <h3 className=" text-3xl font-[600] self-center">{carData.price}</h3>
              <span className=" self-end">/days</span>
            </div>

            <div className=" w-56 h-fit mx-auto mobileM:w-[18rem] laptop:w-[17rem]">
              <img src={carData.img} alt="" className=" w-full h-52" />
            </div>

            <div className=" flex items-center justify-center gap-12 mobileM:gap-20 laptop:gap-[68px] desktop:gap-16 mt-3">
              <div className=" text-center">
                <i className="fa-solid fa-car-side text-violet-900"></i>
                <p>{carData.transmission}</p>
              </div>
              <div className=" text-center">
                <i className="fa-solid fa-gear text-orange-500"></i>
                <p>{carData.year}</p>
              </div>
              <div className=" text-center">
                <i className="fa-solid fa-gas-pump text-green-400"></i>
                <p>{carData.fuel}</p>
              </div>
            </div>
          </div>
        ))
        }
      </main>

      <div className=" w-full px-5 laptop:px-12 desktop:px-20 mt-5 mx-auto tablet:w-1/2 tablet:mt-10">
        <Link to='/'>
          <button type="button" className="w-full py-5 h-fit bg-main text-white text-xl rounded-sm hover:bg-[#f1371e]">
            Rental Now
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Models