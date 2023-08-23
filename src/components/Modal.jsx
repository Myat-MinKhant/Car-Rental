import { Modal } from 'flowbite-react';

export default function PopUpModal(props) {
    const {
        openModal,
        setOpenModal,
        pickUpDate,
        dropOffDate,
        selectedCarData,
        setReserve } = props;

    const selectedCarImg = selectedCarData.map(carData => carData.img)
    const selectedCarName = selectedCarData.map(carData => carData.name)

    return (
        <Modal show={openModal === 'pop-up'} size="4xl" popup onClose={() => setOpenModal(null)}>
            <Modal.Body className=' p-[4px]'>
                <div role='rental-info' className=' border-b border-zinc-400'>
                    <h3 className=' text-white uppercase bg-main font-bold text-3xl py-3 pl-5 relative'>Complete reservation
                        <button aria-label="Close" className="absolute right-3 bottom-4 text-white hover:text-gray-200" type="button" onClick={() => setOpenModal(undefined)}>
                            <svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </h3>
                    <div className='px-10 py-5 bg-orange-100'>
                        <h4 className=' text-main font-medium text-xl mb-5'>
                            <i className="fa-solid fa-info bg-main rounded-full w-7 h-7 text-center text-white pt-1"></i>
                            &nbsp; Upon completing this reservation enquiry, you will receive:
                        </h4>
                        <p className=' text-lg text-zinc-700 font-medium'>Your rental voucher to produce an arrival at the rental desk and a toll-free customer support number.</p>
                    </div>
                    <div className=' w-full flex pt-7 pl-10'>
                        <div className=' w-1/2'>
                            <h4 className=' text-main font-bold text-xl mb-5'>Location & Date</h4>
                            <div role='pick-up-date' className=' mb-8'>
                                <div className=' flex items-center gap-3'>
                                    <i className="fa-solid fa-clock text-zinc-500"></i>
                                    <p className=' text-black font-medium text-lg'>Pick-up Date & Time</p>
                                </div>
                                <div className=' flex items-center gap-2 ml-[30px] tracking-wider'>
                                    <p>{pickUpDate} /</p>
                                    <input type="time" className='h-7 rounded-sm mt-1 pl-2 p-0' />
                                </div>
                            </div>

                            <div role='drop-off-date' className=' mb-8'>
                                <div className=' flex items-center gap-3'>
                                    <i className="fa-solid fa-clock text-zinc-500"></i>
                                    <p className=' text-black font-medium text-lg'>Drop-Off Date & Time</p>
                                </div>
                                <div className=' flex items-center gap-2 ml-[30px] tracking-wider'>
                                    <p>{dropOffDate} /</p>
                                    <input type="time" className='h-7 rounded-sm mt-1 pl-2 p-0' />
                                </div>
                            </div>

                            <div role='pick-up-location' className=' mb-8'>
                                <div className=' flex items-center gap-3'>
                                    <i className="fa-solid fa-location-dot text-xl text-zinc-500"></i>
                                    <p className=' text-black font-medium text-lg'>Pick-Up Location</p>
                                </div>
                                <input type="text-area" placeholder='Pick-up location' className=' w-56 text-sm font-medium border border-neutral-300 rounded-sm pl-2 py-1 ml-[26px] mt-1' />
                            </div>

                            <div role='drop-off-location' className=' mb-8'>
                                <div className=' flex items-center gap-3'>
                                    <i className="fa-solid fa-location-dot text-xl text-zinc-500"></i>
                                    <p className=' text-black font-medium text-lg'>Drop-Off Location</p>
                                </div>
                                <select className="w-56 border border-neutral-300 rounded-sm pl-2 py-1 ml-[25px] mt-1">
                                    <option>Select drop-off location</option>
                                    <option value="Audi A1 S-Line">Birch Hill Circle</option>
                                    <option value="VW Golf 6">Pin Oak Court</option>
                                    <option value="Toyota Camry">Brooklyn</option>
                                    <option value="BMW 320 ModernLine">
                                        8 Mountainview Road
                                    </option>
                                    <option value="Mercedes-Benz GLK">West Park Street</option>
                                    <option value="VW Passat CC">Westbury</option>
                                </select>
                            </div>
                        </div>

                        <div className=' w-2/3'>
                            <h4 className=' text-main font-bold text-xl ml-5'>
                                <span className=' text-black font-medium'>Car - </span>
                                {selectedCarName}
                            </h4>
                            <img src={selectedCarImg} alt="" className='w-full h-[360px] mt-7' />
                        </div>
                    </div>
                </div>

                <div role='person-info' className=' pl-10 mt-10 pb-10'>
                    <h4 className=' text-main font-bold text-xl my-5 uppercase mb-10'>Personal informational</h4>

                    <form action="submit" className='w-full flex items-center flex-wrap '>
                        <div className=' flex flex-col w-1/2'>
                            <label className=' font-medium'>
                                First Name <b>*</b>
                            </label>
                            <input type="text" placeholder='Enter your first name' className='person-info-input' />
                        </div>

                        <div className=' flex flex-col w-1/2'>
                            <label className=' font-medium'>
                                Last Name <b>*</b>
                            </label>
                            <input type="text" placeholder='Enter your last name' className='person-info-input' />
                        </div>

                        <div className=' flex flex-col w-1/2 mt-10'>
                            <label className=' font-medium'>
                                Phone Number <b>*</b>
                            </label>
                            <input type="number" placeholder='Enter your phone number' className='person-info-input' />
                        </div>

                        <div className=' flex flex-col w-1/2 mt-10'>
                            <label className=' font-medium'>
                                Age <b>*</b>
                            </label>
                            <input type="number" placeholder='Enter your age' className='person-info-input' />
                        </div>

                        <div className='w-full flex flex-col mt-10'>
                            <label className=' font-medium'>
                                Email <b>*</b>
                            </label>
                            <input type="email" placeholder='Enter your email address' className='person-info-email' />
                        </div>

                        <div className='w-full flex flex-col mt-10'>
                            <label className=' font-medium'>
                                Address <b>*</b>
                            </label>
                            <input type="text" placeholder='Enter your street address' className='person-info-email' />
                        </div>

                        <div className=' flex flex-col w-1/2 mt-10'>
                            <label className=' font-medium'>
                                City <b>*</b>
                            </label>
                            <input type="text" placeholder='Enter your city' className='person-info-input' />
                        </div>

                        <div className=' flex flex-col w-1/2 mt-10'>
                            <label className=' font-medium'>
                                Zip Code <b>*</b>
                            </label>
                            <input type="number" placeholder='Enter your zip code' className='person-info-input' />
                        </div>

                        <div className=' w-1/2 mt-10 flex items-center gap-4'>
                            <input type="checkbox" className=' w-5 h-5 checked:outline-none checked:bg-main' />
                            <p className=' text-lg'>Please send me latest news and updates</p>
                        </div>
                    </form>
                </div>

                <div className=' h-28 bg-neutral-300 text-right pt-5 pr-5'>
                    <button
                        className='bg-main text-white text-2xl px-5 py-3 hover:bg-[#f1371e]'
                        onClick={() => { setOpenModal(null); setReserve('block') }}
                    >
                        Reserve Now
                    </button>
                </div>
            </Modal.Body>
        </Modal >
    )
}