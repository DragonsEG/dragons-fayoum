import Image from "next/image";

export const VideoSection = () => {
    // @ts-ignore

    return (
        <>
            <div className={"relative"}>
                <div className={"z-10   flex opacity-5 absolute  w-full h-auto  justify-center m-auto "}>
                    <Image src={"/Random/waterfall.png"} alt={"hart"}
                           width={1000}
                           height={1000}
                    />
                </div>

                <div className={"z-20 pt-[70px]"}>
                    <div className="mt-28 mb-6 p-2 flex justify-center ">
                        <div>
                            <div
                                className="flex active:scale-95 duration-200  gap-1 text-md bg-purple-400/10 shadow-gray-200/20 shadow-inner px-4  py-2 rounded-full min-w-[30px]">

                                <span
                                    className="text-purple-400/70 hover:underline duration-300  grid place-content-center">We Will Push and give it 120% together </span>

                            </div>


                        </div>

                    </div>


                    <div style={{fontFamily: "interV"}}
                         className="text-5xl opacity-25 blur-sm  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-purple-900-200/20     font-semibold	">
                        <h1 className={"text-purple-900 "}> Ready For a <span
                            className={"text-yellow-400/20 "}>Sprint ? </span></h1>
                    </div>
                    <div style={{fontFamily: "interV"}}
                         className="text-5xl -mt-6  md:-mt-16  content-center  max-w-4xl text-center md:text-7xl   z-10 flex justify-center m-auto relative  mb-3 text-purple-400 grayscale    font-semibold	">
                        <h1> Ready For a <span className={"text-purple-400  "}>Sprint ? </span></h1>
                    </div>

                </div>
            </div>

            <div
                className={"justify-center border-4 m-2 border-amber-50/20 relative flex max-w-7xl rounded-3xl overflow-clip aspect-video m-auto "}>


                <div data-allowfullscreen="true"
                     data-autoplay="true"
                     className={"absolute z-20 pb-4  px-7 font-thin hover:animate-pulse select-none bg-amber-50/20 rounded-b-full cursor-pointer"}>Don&apos;t
                    Speak Arabic?
                </div>
                <iframe data-allowfullscreen="true"
                        className={"z-10 h-full w-full"}
                        style={{border: "none", overflow: "hidden"}}
                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDragons.Egypt%2Fvideos%2F229997402815626%2F&show_text=false&width=560&t=0&mute=0&autoplay=0"
                        width="560" height="314"
                        data-lazy={true}
                        allowFullScreen={true}
                        allow="clipboard-write; encrypted-media; picture-in-picture; "
                >


                </iframe>

                
            </div>
        </>
    );
};
