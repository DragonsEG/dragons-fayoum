import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide,} from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper'

SwiperCore.use([Autoplay])
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import {EffectCoverflow, Pagination} from "swiper";
import Image from "next/image";

export default function App() {

    const ImagesArray = [
        {
            id: 1,
            src: "/slider/WEBP/eventImage.webp",
            alt: "some of of our work",

        }
        ,
        {
            id: 2,
            src: "/slider/WEBP/webp.webp",
            alt: "some of of our work",


        }
        ,
        {
            id: 3,
            src: "/slider/WEBP/photography.webp",
            alt: "some of of our work",

        }
        ,
        {
            id: 4,
            src: "/slider/WEBP/boda.webp",
            alt: "some of of our work",

        }
        ,
        {
            id: 5,
            src: "/slider/WEBP/people.webp",
            alt: "some of of our work",
        }

    ]

    return (
        <div className={" shadow-[inset_0_10px_204px_rgba(3,0,20,0.1)] relative w-full"}>
            <Swiper type="text/partytown"
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 10,
                        depth: 100,
                        modifier: 2,

                        slideShadows: true,

                    }}


                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,

                    }
                    }


                    lazy="true"
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper shadow-none  backdrop-blur-2xl max-w-7xl z-40 md:h-[600px] h-[500px] relative"
            >
                {
                    ImagesArray.map((item, index) => {
                            return (
                                <SwiperSlide key={item.id}
                                             className={"max-h-[600px] z-40 max-w-[600px] rounded-3xl relative"}>
                                    <Image src={item.src} alt="some of of our work" width={600} height={600}
                                           className={"rounded-3xl  relative shadow-none content-center"}/>
                                </SwiperSlide>

                            )
                        }
                    )
                }
            </Swiper>
        </div>
    );
}
