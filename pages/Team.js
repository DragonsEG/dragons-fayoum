import React from "react";
import CardTeam from "../components/CardTeam";
import {motion} from "framer-motion";
import Lottie from "lottie-react";
import dragchil from "../public/JSON/dragchil.json";
import teamData from "../components/JSON/teamData"
import Image from "next/image";
import styles from "../styles/founders.module.css";

function Team() {

    return (
        <div className='pt-20  relative flex justify-center mx-auto flex-col '>

            <div className='grid  mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
                <div
                    className='h-[250px] z-30 rotate-90 hover:rotate-45  hidden md:block  hover:opacity-90 hover:scale-90 opacity-40 duration-500 absolute top-32 right-0 w-[250px]'>
                    <Lottie animationData={dragchil}/>{" "}
                </div>
                {" "}
                <div
                    className='rotate-45 z-10 hover:rotate-90  hidden md:block h-[250px] opacity-60 hover:opacity-90 hover:scale-90 duration-500 absolute top-16 left-0 w-[250px]'>
                    <Lottie animationData={dragchil}/>{" "}
                </div>
                {" "}
                <div>
                    <div style={{fontFamily: "interV"}}
                         className="text-5xl capitalize  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	">
                        <h1> Our <span className={" text-yellow-400 "}> Team </span></h1>
                    </div>
                    <p style={{fontFamily: "interV"}}
                       className="text-lg flex text-center  mb-16 pt-0 capitalize relative z-10 text-purple-300/50 justify-center m-auto">
                        meet our talented team that made this magic happen

                    </p>

                </div>
            </div>

            <motion.div
                initial='hidden'
                animate='visible'
                variants={{
                    hidden: {
                        scale: 1,
                        opacity: 0.0,
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.1,
                        },
                    },
                }}>
                <div className='w-full flex-wrap gap-2 mb-20 mt-12  flex mx-auto justify-center '>


                    <div className={"w-full absolute top-0 h-full "}>

                        <div
                            className={" overflow-hidden backdrop-brightness-100   -backdrop-hue-rotate-30 backdrop-contrast-125  w-full h-full opacity-5  absolute "}>

                            <Image src="/images/dragskin.jpg"
                                   className={`${"  duration-1000 rounded-[40px]   opacity-30 backdrop-saturate-150 "}${styles.animate_spin_cus}`}
                                   alt="" fill/>
                            <Image src="/images/dragskin.jpg"
                                   className={`${"  duration-1000 rounded-[40px]  opacity-10 backdrop-saturate-150 "}${styles.animate_spin_cus2}`}
                                   alt=""
                                   fill/>
                        </div>
                    </div>
                    {teamData.map((index) => (
                        <CardTeam key={index}
                                  herfFacebook={index.herfFacebook}
                                  herfLinkedIn={index.herfLinkedIn}
                                  herfGithub={index.herfGithub}
                                  name={index.name}
                                  work={index.work}
                                  image={index.image}
                                  Pos={index.Pos}
                                  isMaintainer={index.isMaintainer}
                                  isBoard={index.isFounder}

                        />

                    ))}


                </div>
                {" "}
                <div
                    className='h-[250px] rotate-180 z-30 hidden md:block hover:opacity-20 opacity-40 hover:scale-90 duration-500 absolute bottom-1 left-0 w-[250px]'>
                    <Lottie animationData={dragchil}/>{" "}
                </div>
                {" "}
            </motion.div>


        </div>
    );
}

export default Team;
