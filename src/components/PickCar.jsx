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
        <section className=" w-[80vw] h-[50vw] mt-32 mx-auto">
            <div className=" text-center">
                <h3 className=" font-medium mb-3">Vehicle Models</h3>
                <h2 className=" font-bold mb-3">Our rental fleet</h2>
                <p>
                    Choose from a variety of our amazing vehicles tp rent for your next<br />
                    adventure or business trip
                </p>
            </div>
            <div className='mt-16 flex justify-between gap-10'>

                <div className=" flex flex-col w-1/4 " >
                    {cars.map(car => (
                        <button onClick={() => handleClick(car.id)} key={car.id} className={`pick-car-btn ${coloringButton(car.id)}`}>{car.name}</button>
                    ))}
                </div>

                <div className=' w-[450px] pt-5'>
                    <img src={isPick[0].img} alt={isPick[0].model} />
                </div>

                <div className=' w-1/4'> 
                    <h3 className=' text-lg text-white bg-main rounded-t-sm py-2 pl-7 tracking-widest'>
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
        </section>
    )
}

//