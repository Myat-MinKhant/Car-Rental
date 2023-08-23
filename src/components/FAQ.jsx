// import { useState } from 'react';
import './styles/faq.css';
import Faq from 'react-faq-component';

export default function FAQ() {
    // const [isActive, setIsActive] = useState('')

    // const handleClick = () => {
    //     if (isActive !== 'picked') {
    //         setIsActive('picked')
    //     } else {
    //         setIsActive('')
    //     }
    // }

    return (
        <section className=" w-[55vw] m-auto mt-32 relative">
            <img src='https://www.nicepng.com/png/detail/280-2806097_car-back-right-top-new-picsart-background.png' alt="" className='absolute top-28 -left-[500px] w-[550px]' />
            <div className=" text-center mb-14 w-[48vw] m-auto">
                <h4 className=" uppercase text-text-gray mb-1">FAQ</h4>
                <h2 className=" font-bold mb-5 underline underline-offset-[12px] decoration-dotted text-main">&nbsp;Frequently Asked Questions&nbsp; </h2>
                <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website Answer to Common Concerns and Inquiries.</p>
            </div>
            <div className=' shadow-2xl py-5 relative'>
                <Faq
                    data={data}
                    styles={{
                        // bgColor: isView ? '#ff4d30' : '',
                        rowTitleColor: "black",
                        rowTitleTextSize: '17px',
                        rowContentColor: "#706f7b",
                        rowContentTextSize: '14px',
                        rowContentPaddingTop: '25px',
                        rowContentPaddingBottom: '10px',
                        rowContentPaddingLeft: '33px',
                        rowContentPaddingRight: '30px',
                        arrowColor: '#ff4d30',
                    }}
                />
            </div>
        </section >
    )
}

const data = {
    rows: [
        {
            id: 1,
            title: "1. What is special about comparing rental car deals?",
            content: "Conparing rental car deals is important as it helps find the best deal that fits your budgets and requirements, ensuring you get the most value for your money.By comparing various options, you can find deals that offer lower prices, additional services, or better car models.You can find car rental deals by researching online and comparing prices from different rental companies."
        },
        {
            id: 2,
            title: "2. Is it possible to have an additional driver?",
            content: "Car Rental allows you to add one ore more additional drivers through the paid “Additional Driver” service (check out our Fee Schedule to find out more). You can buy the service online on our websitewww.carrental.It, through Car Rental's Booking Center or directly at our rental stations when you collect the vehicle.All the other drivers must be present at the time you collect the vehicle in order to show their documents and register their driving licenses.The additional drivers must satisfy the same age and driving license requirements as the main driver."
        },
        {
            id: 3,
            title: "3. Is it possible to return the vehicle earlier than planned?",
            content: "You can go to the Car Rental station where you are due to return the vehicle in accordance with your contract and return it earlier than planned. Our staff will carry out the procedures for closing the contract.However, if you have prepaid the rental, we cannot refund any unused days."
        },
        {
            id: 4,
            title: "4. What do you have to do in the event of an accident?",
            content: "In the event of an accident we recommend that you first contact the police so they analyze the situation and check to see who is at fault.If this is not possible, you will have to complete the CAI Accident Statement form you will find in the vehicle.You will then need to send an electronic copy of the CAI form to the rental office as soon as possible(for more information on the contact details of our offices please refer to the tabs for our offices) and deliver the hard copy when you return the vehicle.If the vehicle is not drivable please contact our Roadside Assistance and follow the instructions from our operator.You can find the contact details for Roadside Assistance on your rental contract or on our dedicated web page."
        }]
}
