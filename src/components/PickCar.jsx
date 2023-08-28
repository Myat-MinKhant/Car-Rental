import { useState } from 'react';
import cars from './data/CarData'

export default function PickCar({ click }) {
    const [isActive, setIsActive] = useState(1)
    const [isPick, setIsPick] = useState([cars[0]])
    const names = [...cars.reduce((s, o) => (Object.keys(o).forEach(k => s.add(k)), s), new Set)];
    const values = [...isPick.reduce((s, o) => (Object.values(o).forEach(k => s.add(k)), s), new Set)]
    const infos = names.map((x, i) => {
        return { "name": x, "value": values[i] }
    });

    // console.log(names);
    // console.log(infos);

    const handleClick = (id) => {
        setIsActive(isActive === id ? isActive : id);
        const selected = cars.filter(car => car.id === id)
        setIsPick(selected)
    };

    const coloringButton = (id) => {
        return isActive === id ? "picked" : "";
    };

    return (
        <section className=" w-full px-3 laptop:px-0 desktop:w-[100vw] mt-32">
            <div className=" text-center">
                <h3 className=" font-medium mb-3">Vehicle Models</h3>
                <h2 className=" font-bold mb-3">Our rental fleet</h2>
                <p>
                    Choose from a variety of our amazing vehicles tp rent for your next<br />
                    adventure or business trip
                </p>
            </div>
            <div className='w-full mt-16 flex flex-col gap-10 laptop:flex-row laptop:px-5 laptop:gap-0 desktop:px-20 desktop:gap-10 laptop:justify-center'>
                <div className=" flex flex-col w-full tablet:px-5 laptop:w-fit laptop:px-0" >
                    {cars.map(car => (
                        <button onClick={() => handleClick(car.id)} key={car.id} className={`pick-car-btn ${coloringButton(car.id)}`}>{car.name}</button>
                    ))}
                </div>

                <div className='flex flex-col gap-12 tablet:flex-row tablet:gap-5 tablet:px-5 desktop:pr-0 desktop:gap-10 laptop:gap-10'>
                    <div className=' w-full h-fit m-auto laptop:m-0 pt-5 tablet:pt-7 tablet:w-1/2 laptop:w-[500px] desktop:w-[700px] laptop:pt-0'>
                        <img src={isPick[0].img} alt={isPick[0].model} className='w-full tablet:h-[360px] laptop:h-[400px] desktop:h-[450px]' />
                    </div>

                    <div className=' w-full tablet:w-1/2 laptop:w-[40%]'>
                        <h3 className=' text-lg text-white bg-main rounded-t-sm py-2 pl-7 laptop:pl-5 tracking-widest tablet:tracking-normal desktop:tracking-widest desktop:pl-7'>
                            <span className=' font-bold text-2xl'> ${isPick[0].price} </span> / rent per day
                        </h3>

                        <table className=' w-full border-b-2 border-x-2 border-neutral-400'>
                            {infos?.slice(4, 11).map(info => (
                                <tr key={info.name}>
                                    <td className=' w-1/2 h-10 text-center border-b-2 border-neutral-400'>
                                        <h6 className=' font-medium capitalize border-r-2 border-neutral-400'>
                                            {info.name}
                                        </h6>
                                    </td>
                                    <td className=' w-1/2 h-10 text-center border-b-2 border-neutral-400'>
                                        <h6 className=' font-medium'>
                                            {info.value}
                                        </h6>
                                    </td>
                                </tr>
                            ))}
                        </table>

                        <button className=' w-full bg-main text-2xl font-medium text-white uppercase py-3 mt-3 hover:bg-[#f1371e]' onClick={click}>Reserve now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

//