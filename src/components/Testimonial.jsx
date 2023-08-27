import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import StartQuote from '../assets/quotation1.png';
import EndQuote from '../assets/quotation2.png';
import 'swiper/css';
import 'swiper/css/pagination';
import reviews from './ReviewData';
export default function Testimonial() {
    return (
        <section className=" w-[80vw] m-auto pb-20 relative text-center mt-32">
            <img src={StartQuote} alt='start-quote' className='hidden tablet:block absolute tablet:-left-16 laptop:top-20 laptop:-left-24 z-[999]' />
            <img src={EndQuote} alt='start-quote' className='hidden tablet:block absolute tablet:-bottom-10 tablet:-right-16 laptop:-bottom-5 laptop:-right-24 z-[999]' />
            <h4 className='uppercase text-text-gray mb-1' >Reviewed by People</h4>
            <h2 className=' font-bold mb-7'>{`Client's Testimonials`}</h2>

            <Swiper
                style={{
                    "--swiper-pagination-color": "#ff4d30",
                }}
                slidesPerView={1}
                pagination={{ clickable: true, }}
                modules={[Pagination]}
                className=" w-full"
            >
                {reviews.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className=' w-full tablet:w-[90%] min-h-[300px] mt-12 m-auto py-10 px-5 tablet:px-10 rounded-xl text-left bg-zinc-200'>
                            <p className=' text-2xl text-black mb-8 leading-relaxed'>
                                {review.review}
                            </p>
                            <div className='flex items-center gap-2 tablet:gap-5'>
                                <img src={review.img} alt={`${review}'review`} className=' w-14 h-14 rounded-full' />
                                <div>
                                    <p className=' text-black font-bold'>{review.name}</p>
                                    <span className=' text-xs'>{review.address}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    )
}
