import { useRef } from "react"
import ChooseUs from "../components/ChooseUs"
import FAQ from "../components/FAQ"
import Header from "../components/Header"
import PickCar from "../components/PickCar"
import Step from "../components/Step"
import Testimonial from "../components/Testimonial"


const Landing = () => {
    const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const search = useRef()

    return (
        <>
            <Header reference={search}/>
            <Step />
            <PickCar click={()=> scrollToDiv(search)}/>
            <ChooseUs />
            <Testimonial />
            <FAQ />
        </>
    )
}

export default Landing