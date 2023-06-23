import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import Styles from "./Hero.module.css"


function Hero() {


    let News = {
        id: 1,
        date: "2020-01-01",
        content: "Our AI integration just landed💯",
        link: "/blog/news",
    }


    return (
        <div style={{fontFamily: "interV"}}
             className="w-full mt-12">
            <div className="mt-28 mb-6 p-2 flex justify-center ">
                <div>
                    <Link href={News.link} passHref
                          className="flex active:scale-95 duration-200  gap-1 text-md bg-purple-400/10 shadow-gray-200/20 shadow-inner px-2 rounded-full min-w-[30px]">

                        <div className="grid place-content-center ">
                            <Image style={{fontFamily: "interV"}} src="/SVG/Stars.svg" alt="f" width={30} height={30}/>
                        </div>
                        <span className="text-purple-300 grid place-content-center font-bold">News: </span>
                        <span
                            className="text-purple-400/70 hover:underline duration-300  grid place-content-center">{News.content}</span>

                    </Link>


                </div>

            </div>

            <div>
                <div style={{fontFamily: "interV"}}
                     className="text-6xl  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	">
                    <h1> Boost Your Experiences in only <span className={" text-yellow-400 "}>6 Months </span></h1>
                </div>
                <p style={{fontFamily: "interV"}}
                   className="text-lg flex pt-6 relative z-10 text-purple-300/50 justify-center m-auto">
                    We are a team of passionate and creative people who are willing to help you to boost your career
                </p>

            </div>

            <div
                className=" max-w-[1400px]  container_3d sm:mt-10  md:mt-3 lg:-mt-20  relative  m-auto flex justify-center">
                <Image style={{fontFamily: "interV"}}
                       className={`${" absolute z-40 top-12 filter "} ${Styles.Drag3DBoubce}`}
                       src={"/Identity/Images/drag_3d_color.png"} alt='Header Image' height='1160' width='1240'
                       placeholder='blur' blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`} priority/>
                <div>
                    <div className={"mt-80"}>

                    </div>
                </div>
                <video autoPlay loop muted src="/Hero/q-c3d7becf.webm"/>
            </div>
        </div>
    )
}

export default Hero