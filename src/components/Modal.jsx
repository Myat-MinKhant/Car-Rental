import { Modal } from 'flowbite-react';

export default function PopUpModal(props) {
    const {
        openModal,
        setOpenModal,
        pickUpDate,
        dropOffDate,
        selectedCarData,
        setReserve } = props;

    return (
        <Modal show={openModal === 'pop-up'} size="4xl" popup onClose={() => setOpenModal(null)}>
            <Modal.Body className=' p-[4px]'>
                <div role='rental-info' className=' border-b border-zinc-400'>
                    <h3 className=' text-white uppercase bg-main font-bold text-3xl py-3 pl-5 
            mobileM:pr-[54px] tablet:pl-7 relative'>Complete reservation
                        <button aria-label="Close" className="absolute right-2 bottom-9 mobileM:bottom-9
                        mobileL:bottom-4 tablet:right-3 tablet:bottom-4 text-white hover:text-gray-200" type="button" onClick={() => setOpenModal(undefined)}>
                            <svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </h3>
                    <div className=' px-5 tablet:px-10 py-5 bg-orange-100'>
                        <h4 className=' text-main font-medium text-xl mb-5'>
                            <i className="fa-solid fa-info bg-main rounded-full w-7 h-7 text-center text-white pt-1"></i>
                            &nbsp; Upon completing this reservation enquiry, you will receive:
                        </h4>
                        <p className=' text-lg text-zinc-700 font-medium'>Your rental voucher to produce an arrival at the rental desk and a toll-free customer support number.</p>
                    </div>
                    <div className=' w-full tablet:flex pt-7 tablet:pl-10'>
                        <div className=' w-full text-center laptop:w-1/2 tablet:w-2/3 tablet:text-left'>
                            <h4 className=' text-main font-bold text-xl mb-5'>Location & Date</h4>
                            
                            <div role='pick-up-date' className=' mb-8'>
                                <div className=' flex items-center tablet:items-start gap-3 w-2/3 m-auto tablet:m-0'>
                                    <i className="fa-solid fa-clock hidden tablet:block tablet:mt-1 text-zinc-500"></i>
                                    <p className=' text-black font-medium text-lg '>
                                        Pick-up Date & Time
                                        <small className='text-xs text-zinc-500'> (9:00 AM to 5:00 PM)</small>
                                    </p>
                                </div>
                                <div className=' flex items-center justify-center gap-2 tablet:justify-start tablet:ml-[30px] tracking-wider'>
                                    <p>{pickUpDate} /</p>
                                    <input
                                        type="time"
                                        className='h-7 rounded-sm mt-1 pl-2 p-0'
                                    />
                                </div>
                            </div>

                            <div role='drop-off-date' className=' mb-8'>
                                <div className=' flex items-center tablet:items-start gap-3 w-2/3 m-auto tablet:m-0'>
                                    <i className="fa-solid fa-clock hidden tablet:block tablet:mt-1 text-zinc-500"></i>
                                    <p className=' text-black font-medium text-lg'>
                                        Drop-Off Date & Time
                                        <small className='text-xs text-zinc-500'> (9:00 AM to 5:00 PM)</small>
                                    </p>
                                </div>
                                <div className=' flex items-center justify-center gap-2 tablet:justify-start tablet:ml-[30px] tracking-wider'>
                                    <p>{dropOffDate} /</p>
                                    <input type="time" className='h-7 rounded-sm mt-1 pl-2 p-0' />
                                </div>
                            </div>

                            <div role='pick-up-location' className=' mb-8'>
                                <div className=' flex items-center gap-3 w-2/3 m-auto tablet:m-0'>
                                    <i className="fa-solid fa-location-dot text-xl hidden tablet:block text-zinc-500"></i>
                                    <p className=' text-black font-medium text-lg'>Pick-Up Location</p>
                                </div>
                                <select className="w-56 border border-neutral-300 rounded-sm pl-2 py-1 tablet:ml-[25px] mt-1">
                                    <option>Select pick-up location</option>
                                    <option>Bahan</option>
                                    <option>South Oakkalapa</option>
                                    <option>North Dagon</option>
                                    <option>Insein</option>
                                    <option>Than Lyin</option>
                                    <option>Hlaing Thar Yar</option>
                                </select>
                            </div>

                            <div role='drop-off-location' className=' mb-8'>
                                <div className=' flex items-center gap-3 w-2/3 m-auto tablet:m-0'>
                                    <i className="fa-solid fa-location-dot text-xl hidden tablet:block text-zinc-500"></i>
                                    <p className=' text-black font-medium text-lg'>Drop-Off Location</p>
                                </div>
                                <select className="w-56 border border-neutral-300 rounded-sm pl-2 py-1 tablet:ml-[25px] mt-1">
                                    <option>Select drop-off location</option>
                                    <option>Bahan</option>
                                    <option>South Oakkalapa</option>
                                    <option>North Dagon</option>
                                    <option value="BMW 320 ModernLine">Insein</option>
                                    <option>Than Lyin</option>
                                    <option>Hlaing Thar Yar</option>
                                </select>
                            </div>
                        </div>

                        <div className=' w-full laptop:w-2/3 mt-10 tablet:mt-0'>
                            <h4 className=' text-main font-bold text-xl ml-5 tablet:ml-7'>
                                <span className=' text-black font-medium'>Car - </span>
                                {selectedCarData.map(carData => carData.name)}
                            </h4>
                            <img src={selectedCarData.map(carData => carData.img)} alt="" className='w-full h-[250px] tablet:w-[350px] tablet:h-[300px] tablet:ml-7 laptop:h-[360px] my-7' />
                        </div>
                    </div>
                </div>

                <div role='person-info' className=' px-5 tablet:pl-10 mt-10 pb-10'>
                    <h4 className=' text-main font-bold text-xl my-5 uppercase mb-10'>Personal informational</h4>

                    <form action="submit" className='w-full flex items-center flex-wrap '>
                        <div className=' flex flex-col w-full tablet:w-1/2'>
                            <label className=' font-medium'>
                                First Name <b>*</b>
                            </label>
                            <input type="text" placeholder='Enter your first name' className='person-info-input' />
                        </div>

                        <div className=' flex flex-col w-full mt-7 tablet:mt-0 tablet:w-1/2'>
                            <label className=' font-medium'>
                                Last Name <b>*</b>
                            </label>
                            <input type="text" placeholder='Enter your last name' className='person-info-input' />
                        </div>

                        <div className=' flex flex-col w-full mt-7 tablet:w-1/2 tablet:mt-10'>
                            <label className=' font-medium'>
                                Phone Number <b>*</b>
                            </label>
                            <input type="number" placeholder='Enter your phone number' className='person-info-input' />
                        </div>

                        <div className=' flex flex-col w-full mt-7 tablet:w-1/2 tablet:mt-10'>
                            <label className=' font-medium'>
                                Age <b>*</b>
                            </label>
                            <input type="number" placeholder='Enter your age' className='person-info-input' />
                        </div>

                        <div className='w-full flex flex-col mt-7 tablet:mt-10'>
                            <label className=' font-medium'>
                                Email <b>*</b>
                            </label>
                            <input type="email" placeholder='Enter your email address' className='person-info-email' />
                        </div>

                        <div className='w-full flex flex-col mt-7 tablet:mt-10'>
                            <label className=' font-medium'>
                                Address <b>*</b>
                            </label>
                            <input type="text" placeholder='Enter your street address' className='person-info-email' />
                        </div>

                        <div className=' flex flex-col w-full mt-7 tablet:w-1/2 tablet:mt-10'>
                            <label className=' font-medium'>
                                City <b>*</b>
                            </label>
                            <input type="text" placeholder='Enter your city' className='person-info-input' />
                        </div>

                        <div className=' flex flex-col w-full mt-7 tablet:w-1/2 tablet:mt-10'>
                            <label className=' font-medium'>
                                Zip Code <b>*</b>
                            </label>
                            <input type="number" placeholder='Enter your zip code' className='person-info-input' />
                        </div>

                        <div className=' w-full laptop:w-1/2 mt-10 flex items-center gap-4'>
                            <input type="checkbox" className=' w-5 h-5 checked:outline-none checked:bg-main' />
                            <p className=' text-lg'>Please send me latest news and updates</p>
                        </div>
                    </form>
                </div>

                <div className=' w-full h-28 bg-neutral-300 tablet:text-right pt-5 text-center tablet:pr-5'>
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