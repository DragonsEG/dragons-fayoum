import React from 'react';
import Styles from './Trusted.module.css';
import Image from "next/image";


const Trusted = () => {
const SVG_Brands= [
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

]
    return (
       <div className={"absolute bottom-0  w-full"}>
           <section className={Styles.sec3}>
               <div className= {Styles.sec3_main_container_title}>Trusted by 30+ Partners</div>
               <div className={Styles.boujee_text }>
                   <p>Thank You For Trusted Us</p>
               </div>
               <div className={Styles.sec3_main_container}>

                   <div  className=" flex p-3 gap-7 text-purple-50  ">
                       {SVG_Brands.map((brand) => (
                           <div  className={"flex"}>
                               <Image key={brand.id} className={"svg_property"} src={brand.img} alt={brand.name} width={100} height={100} />
                           </div>
                       ))}
                   </div>
               </div>
           </section>
       </div>
    );
};

export default Trusted;