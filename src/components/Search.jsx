import { useState } from "react";
import PopUpModal from "./Modal";
import carsData from "./data/CarData";
import { Alert } from "flowbite-react";
import moment from 'moment';

export default function Search() {
    const [openModal, setOpenModal] = useState();
    const [selectedCar, setSelectedCar] = useState('Select your car type')
    const [pickUpDate, setPickUpDate] = useState('')
    const [dropOffDate, setDropOffDate] = useState('')
    const [selectedCarData, setSelectedCarData] = useState([])
    const [alert, setAlert] = useState('hidden')
    const [reserve, setReserve] = useState('hidden')

    const handleSelectCar = (e) => {
        e.preventDefault()
        setSelectedCar(e.target.value);
    }

    const handlePickUpDate = (e) => {
        e.preventDefault()
        setPickUpDate(e.target.value);
    }

    const handleDropOffDate = (e) => {
        e.preventDefault()
        setDropOffDate(e.target.value);
    }

    const handleSearch = () => {
        const selectCarData = carsData.filter(carData => carData.name === selectedCar);
        setSelectedCarData(selectCarData);

        if (selectedCar !== 'Select your car type' && pickUpDate.length && dropOffDate.length) {
            setOpenModal('pop-up');
            setAlert('hidden');
        } else {
            setAlert('block');
        }
    }

    return (
        <section className=" w-full shadow-2xl rounded-md mt-32">
            <h2 className="font-bold pl-5 text-3xl tablet:pl-10 laptop:pl-7 pt-10 laptop:mb-3">Search your car</h2>
            <Alert className={`${alert} bg-red-200 w-[93%] m-auto mt-3 font-medium relative py-5`}>
                <span>
                    <p>
                        <h4 className=" text-red-900">
                            All fields required!
                            <button aria-label="Close" className="absolute right-4 bottom-5 text-red-900" type="button" onClick={() => setAlert('hidden')}>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </h4>
                    </p>
                </span>
            </Alert>
            <Alert className={`${reserve} bg-green-200 w-[93%] m-auto mt-3 font-medium relative py-5`}>
                <span>
                    <p>
                        <h4 className=" text-green-700">
                            Check your email to confirm an order.
                            <button aria-label="Close" className="absolute right-4 bottom-8 tablet:right-4 tablet:bottom-5 text-green-700" type="button" onClick={() => setReserve('hidden')}>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </h4>
                    </p>
                </span>
            </Alert>
            <form className="w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-10 laptop:gap-6 content-center px-5 tablet:px-10 pt-7 pb-10 laptop:px-6">
                <div className=" flex flex-col">
                    <label>
                        <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                        Type <b>*</b>
                    </label>
                    <select value={selectedCar} className=" border border-neutral-300 rounded-sm pl-2 py-3" onChange={handleSelectCar}>
                        <option>Select your car type</option>
                        <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                        <option value="VW Golf 6">VW Golf 6</option>
                        <option value="Toyota Camry">Toyota Camry</option>
                        <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                        <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                        <option value="VW Passat CC">VW Passat CC</option>
                    </select>
                </div>

                <div className=" flex flex-col">
                    <label htmlFor="pick-up-date">
                        <i className="fa-regular fa-calendar-days "></i> &nbsp;
                        Pick-up <b>*</b>
                    </label>
                    <input
                        id="pick-up-date"
                        type="date"
                        className=" h-12 border-0 min-w-full"
                        value={pickUpDate}
                        onChange={handlePickUpDate}
                        min={moment().toISOString().split("T")[0]}
                        max={moment().add(1, 'M').toISOString().split("T")[0]}
                    />
                </div>

                <div className=" flex flex-col">
                    <label htmlFor="return-date">
                        <i className="fa-regular fa-calendar-days "></i> &nbsp;
                        Drop-of <b>*</b>
                    </label>
                    <input
                        id="return-date"
                        type="date"
                        className=" h-12 border-0 min-w-full"
                        value={dropOffDate}
                        onChange={handleDropOffDate}
                        min={pickUpDate ? pickUpDate : null}
                        max={pickUpDate ? moment(pickUpDate).add(1, 'y').toISOString().split("T")[0] : null}
                        disabled={pickUpDate ? false : true}
                    />
                </div>

                <button onClick={handleSearch} type="button" className=" py-5 h-fit tablet:py-3 tablet:mt-9 laptop:mt-5 laptop:h-[80%] desktop:h-[90%] desktop:mt-2 bg-main text-white text-xl rounded-sm hover:bg-[#f1371e]">
                    Search
                </button>
                <PopUpModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    pickUpDate={pickUpDate}
                    dropOffDate={dropOffDate}
                    selectedCarData={selectedCarData}
                    setReserve={setReserve}
                />
            </form>
        </section>
    )
}
