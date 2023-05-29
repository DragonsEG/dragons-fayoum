import React from 'react'
import Styles from "../styles/Team.module.css";


import Image from "next/image"
import FoundersCard from './FoundersCard';
import foundersArr from "./JSON/founders"

function founders() {
    return (
        <div>
            <div class='grid overflow-hidden mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>


                <div className={"relative w-full grid "}>
                    <div style={{fontFamily: "interV"}}
                         className="text-6xl    content-center   max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	">
                        <h1 className={"z-20"}><span className={"text-yellow-400"}>Founders</span> & High Board</h1>

                    </div>
                    <p style={{fontFamily: "interV"}}
                       className="text-lg flex pt-6 relative z-10 text-purple-300/50 justify-center m-auto">Never miss a
                        note, idea or connection.
                    </p>


                    <div>
                    </div>
                    <div
                        className="grid pl-3 md:pl-0 grid-flow-col gap-5 overflow-x-auto max-w-7xl mb-20 place-items-start  relative overflow-hidden  mt-12">
                        {foundersArr.map((index) => (
                            <FoundersCard key={index}
                                          name={index.name}
                                          image={index.image}
                                          Pos={index.Pos}
                            />

                        ))}
                    </div>
                </div>

            </div>
        </div>


    )
}

export default founders