import ChooseUs from "../components/ChooseUs"
import FAQ from "../components/FAQ"
import Header from "../components/Header"
import PickCar from "../components/PickCar"
import Step from "../components/Step"
import Testimonial from "../components/Testimonial"

const Landing = () => {
    return (
        <>
            <Header />
            <Step />
            <PickCar />
            <ChooseUs />
            <Testimonial />
            <FAQ />
        </>
    )
}

export default Landing