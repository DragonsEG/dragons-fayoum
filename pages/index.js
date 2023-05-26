import styles from "../styles/Home.module.css";
import Sec2Summary from "../components/WhatWeDo";
import Styles from "../styles/Team.module.css";
import teamData from "../components/JSON/teamData"
import CardTeam from "../components/CardTeam";
import {useState, useEffect} from "react";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import Founders from './../components/Founders';
import Link from 'next/link';
import Hero from "../components/Hero/Hero";
import TechStack from "../components/TechStack/TechStack";
import Trusted from "../components/Trusted/Trusted";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import {VideoSection} from "../components/VideoSection/VideoSection";
import {TrustedSection} from "../components/Trusted/TrustedSection";

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

    ), [])

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


            <div className='-pt-20  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
                <Founders/>
                <div className='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
                    <p className={`${"z-20 "}${Styles.pHeaderTeam}`}>
                        <span style={{fontFamily: "dragons"}} className={Styles.SpanHeaderTeam}>Our Team </span>
                    </p></div>
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
                    />

                ))}

                <div>
                    <div className='mt-6  mx-12 sm:mx-0  sm:mt-10 sm:flex  justify-left sm:space-x-6 text-sm'>
                        <Link legacyBehavior style={{fontFamily: "dragons"}}
                              href={"/Team"}
                              passHref>
                            <div
                                className='select-none font-bold max-w-sm  bg-white mt-4 sm:mt-0 shadow-md  hover:shadow-red-500/50
                                 ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2
                                  active:scale-95 duration-100 0  text-gray-900  h-12 px-3  sm:px-16 rounded-lg w-full flex items-center
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


                <div className={"w-full flex justify-center"}>
                    <div>
                        <div className="mt-28 mb-6 p-2 flex justify-center ">
                            <div>


                                <div
                                    className="flex active:scale-95 duration-200  gap-1 text-md bg-purple-400/10 shadow-gray-200/20 shadow-inner px-4  py-2 rounded-full min-w-[30px]">
                                    <div className="grid place-content-center ">
                                        <Image style={{fontFamily: "interV"}} src="/SVG/Stars.svg" alt="f" width={30}
                                               height={30}/>
                                    </div>
                                    <span
                                        className="text-purple-400/70 hover:underline duration-300  grid place-content-center">Find your passion with us  </span>

                                </div>


                            </div>

                        </div>


                        <div style={{fontFamily: "interV"}}
                             className="text-6xl  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	">
                            <h1> Our Bootcamp Prepare You To <span
                                className={"text-yellow-400 "}>Succeed In Tech.</span></h1>
                        </div>

                        <p style={{fontFamily: "interV"}}
                           className="text-lg flex mb-28 relative z-10 text-purple-300/50 justify-center m-auto">Technical
                            tracks will push you to learn, Non-technical tracks Will simulates the real work
                            environment.</p>

                        <WhatWeDo
                            hrefWebdev='/Services/Webdevelopment'
                            hrefUiux='Services/UiUXDesign'
                            hrefAppdev='/Services/Appdevelopment'
                            hrefHiredev='Hire'
                        />
                    </div>
                </div>


                <div
                    style={{
                        backgroundColor: "#090e1a",
                        boxSizing: "border-box",
                        filter: "drop-shadow(0px 0px 10px #121245)",
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
