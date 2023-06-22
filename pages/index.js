import styles from "../styles/Home.module.css";
import Sec2Summary from "../components/WhatWeDo";
import teamData from "../components/JSON/teamData"
import CardTeam from "../components/CardTeam";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import {useScroll, useTransform} from "framer-motion";
import Founders from './../components/Founders';
import Link from 'next/link';
import Hero from "../components/Hero/Hero";
import TechStack from "../components/TechStack/TechStack";
import {VideoSection} from "../components/VideoSection/VideoSection";
import {TrustedSection} from "../components/Trusted/TrustedSection";
import TracksSection from "../components/TechStack/TracksSection";
import {Numbers} from "../components/Numbers/Numbers";

export default function Home() {
    const [EmpState, setEmpState] = useState(teamData)

    function randomArrayShuffle(teamData) {
        let currentIndex = teamData.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = teamData[currentIndex];
            teamData[currentIndex] = teamData[randomIndex];
            teamData[randomIndex] = temporaryValue;
        }
        return teamData;
    }

    useEffect(() => (
        setEmpState(randomArrayShuffle(teamData).slice(0, 4))

    ), [teamData])

    const {scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <div className={`${"overflow-x-hidden"}${styles.container}`}>


            <div className='relative w-full   pt-12'>
                <Hero/>
            </div>


            <div className="relative">
                <VideoSection/>


                <div className='pt-24 w-auto  relative'>


                    <TechStack
                        MainText={[
                            <span key="coloredText" className="header text-red-400">
                Technologies
              </span>,
                            " You Will explore with us",
                        ]}
                    />
                </div>
            </div>
            <TrustedSection/>
            <Numbers/>


            <div className='-pt-20  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
                <Founders/>

            </div>
            <div className='w-full flex-wrap gap-2 mb-20 mt-12 max-w-[1400px]  flex mx-auto justify-center '>

                {EmpState.map((index) => (
                    <CardTeam key={index}
                              herfFacebook={index.herfFacebook}
                              herfLinkedIn={index.herfLinkedIn}
                              herfGithub={index.herfGithub}
                              name={index.name}
                              work={index.work}
                              image={index.image}
                              Pos={index.Pos}
                              isMaintainer={index.isMaintainer}

                    />

                ))}

                <div>
                    <div className='mt-6  mx-12 sm:mx-0  sm:mt-10 sm:flex  justify-left sm:space-x-6 text-sm'>
                        <Link legacyBehavior style={{fontFamily: "dragons"}}
                              href={"/Team"}
                              passHref>
                            <div
                                className='select-none font-bold max-w-sm   mt-4 sm:mt-0 shadow-md  hover:shadow-gray-500/50
                                 ring-2  ring-slate-900 hover:bg-purple-300/10 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2
                                  active:scale-95 duration-100 0  text-gray-200  h-12 px-3  sm:px-16 rounded-lg w-full flex items-center
                                  justify-center sm:w-auto highlight-white/20 '
                            >
                                See All

                            </div>
                        </Link>
                    </div>
                </div>

            </div>
            {" "}

            <div className="relative pt-20 ">
                <div className="absolute right-2 -top-[50px]  sepia-0 backdrop-opacity-95 ">
                    <Image
                        className='relative z-20   bounce-2 box2  '
                        src={"/images/dragon2.png"}
                        alt='Header Image'
                        height='160'
                        width='240'
                        placeholder='blur'
                        blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
                        priority
                    />

                </div>

                <TracksSection/>
                <div className={"backdrop-blur-xl  w-full  h-full bg-gray-700/5"}
                     style={{

                         boxSizing: "border-box",
                         filter: "drop-shadow(0px 0px 10px , #000000)",
                     }}>

                    <Sec2Summary
                        MainPTexe='Dragons is a Bootcamp and activity program, that helps people to take their first step toward their career,
              Listen from people of the same age, speakers working in top companies and people can help you grow as a person.'
                        MainText={[
                            "Give People ",
                            <span key='coloredText' className=' header text-red-400'>
                  Hope and Trust
                </span>,
                            "  ,and See What Happens🚀",
                        ]}
                        ActionButton='Join Us Now'
                        action='/Join'

                    />
                </div>

            </div>
        </div>
    );
}
