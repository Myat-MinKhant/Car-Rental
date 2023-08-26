import { useState } from 'react';
import cars from './CarData'

export default function PickCar() {
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
            <div className='mt-16 flex flex-col laptop:flex-row laptop:justify-between desktop:justify-end desktop:px-20 gap-10 desktop:gap-20'>

                <div className=" flex flex-col w-full tablet:px-5 laptop:w-1/4" >
                    {cars.map(car => (
                        <button onClick={() => handleClick(car.id)} key={car.id} className={`pick-car-btn ${coloringButton(car.id)}`}>{car.name}</button>
                    ))}
                </div>

                <div className=' tablet:flex tablet:gap-5 tablet:px-5 laptop:px-0 laptop:pr-5 desktop:gap-20 desktop:pr-0'>
                    <div className=' w-full laptop:w-2/3 desktop:w-[600px] pt-5 tablet:pt-7 laptop:pt-1
                    tablet:w-1/2'>
                        <img src={isPick[0].img} alt={isPick[0].model} className=' tablet:h-[360px] laptop:h-[full]'/>
                    </div>

                    <div className=' w-full laptop:w-2/4 tablet:w-1/2'>
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

                        <button className=' w-full bg-main text-2xl font-medium text-white uppercase py-3 mt-3 hover:bg-[#f1371e]'>Reserve now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

//