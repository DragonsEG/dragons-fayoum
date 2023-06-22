import React from 'react';
// @ts-ignore
import Styles from './Trusted.module.css';
import Image from "next/image";


const Trusted = () => {
    const SVG_Brands = [
        {
            id: 1,
            name: "DigitalOcean",
            img: "/Brands/DigitalOcean.svg"
        },

        {
            id: 3,
            name: "GDSC",
            img: "/Brands/GDSC.svg"
        },
        {
            id: 4,
            name: "JetBrains",
            img: "/Brands/JetBreans.svg"
        },
        {
            id: 5,
            name: "Vercel",
            img: "/Brands/Vercel.svg"
        },
        {
            id: 6,
            name: "WP",
            img: "/Brands/WP-2.svg"
        },
        {
            id: 7,
            name: "udacity",
            img: "/Brands/udacity.svg"
        }
        ,
        {
            id: 8,
            name: "Namecheap",
            img: "/Brands/Namecheap.svg"

        }

    ]
    return (
        <div className={"absolute bottom-0 z-30 md:bg-gray-50/0 bg-gray-700/90 backdrop-blur-3xlxl  w-full"}>

            <section className={Styles.sec3}>
                <div className={Styles.sec3_main_container_title}>Trusted by 30+ Partners</div>
                <div className={Styles.boujee_text}>
                    <p>Thank You For Trusting Us</p>
                </div>
                <div className={Styles.sec3_main_container}>

                    <div className=" flex p-3 gap-7 text-purple-50  ">
                        {SVG_Brands.map((brand) => (
                            <div key={brand.id} className={"flex"}>
                                <Image className={"svg_property"} src={brand.img} alt={brand.name}
                                       width={400} height={400}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Trusted;
