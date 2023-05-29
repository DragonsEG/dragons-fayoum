import React from 'react'
import Image from "next/image"
import styles from "../styles/founders.module.css";


function foundersCard(props) {
    return (
        <div className='flex justify-center mx-auto flex-col '>

            <div className="h-[280px] w-[250px] rounded-full z-30  relative ">


                <div
                    className={`${'border-4   border-x-black border-gray-200  overflow-hidden grid place-items-center relative rounded-[40px] h-[250px] w-[250px] '}`}>
                    <div className='absolute bottom-0  z-40 h-[30px] w-[30px] duration-700'>
                        <Image className='z-20' src="/Identity/test.svg" alt="" fill/>
                    </div>
                    <div
                        className={"bg-purple-900/40 backdrop-brightness-100   -backdrop-hue-rotate-30 backdrop-contrast-125 rounded-[40px] w-full h-full z-40   absolute "}></div>
                    <Image src={props.image}
                           className={"opacity-40 hover:opacity-60 duration-300  cursor-pointer z-40 "}
                           alt="" fill/>
                    <Image src="/images/dragskin.jpg"
                           className={`${"  duration-1000 rounded-[40px]   opacity-30 backdrop-saturate-150 "}${styles.animate_spin_cus}`}
                           alt="" fill/>
                    <Image src="/images/dragskin.jpg"
                           className={`${"  duration-1000 rounded-[40px]  opacity-10 backdrop-saturate-150 "}${styles.animate_spin_cus2}`}
                           alt=""
                           fill/>
                </div>
            </div>
            <div className="grid place-items-center" style={{fontFamily: "interv"}}>
                <h3 className='text-2xl font-bold pl-2 p-1'>{props.name}</h3>
                <p className=' text-sm text-gray-200/50  font-bold pl-2 p-1 pt-0'>{props.Pos}</p>

            </div>
        </div>
    )
}

export default foundersCard

