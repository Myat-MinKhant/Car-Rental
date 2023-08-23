import { Swiper, SwiperSlide } from 'swiper/react';
import StartQuote from '../assets/quotation1.png';
import EndQuote from '../assets/quotation2.png';
import 'swiper/css';
// import './swiper.css';
import reviews from './ReviewData';
export default function Testimonial() {
    return (
        <section className=" w-[80vw] m-auto pb-20 relative text-center mt-32">
            <img src={StartQuote} alt='start-quote' className=' absolute top-20 -left-24 z-[999]' />
            <img src={EndQuote} alt='start-quote' className=' absolute bottom-5 -right-24 z-[999]' />
            <h4 className='uppercase text-text-gray mb-1' >Reviewed by People</h4>
            <h2 className=' font-bold mb-7'>{`Client's Testimonials`}</h2>

            <Swiper
                slidesPerView={2}
                className=" w-full h-[400px]"
            >
                {reviews.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className='w-[90%] min-h-[272px] mt-12 m-auto py-10 px-10 rounded-xl shadow-xl text-left bg-zinc-200'>
                            <p className=' text-2xl text-black mb-8 leading-relaxed'>
                                {review.review}
                            </p>
                            <div className='flex gap-5 items-center'>
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
        </section>
    )
}
