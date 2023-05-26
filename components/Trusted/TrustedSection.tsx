import Image from "next/image";
import Trusted from "./Trusted";

export const TrustedSection = () => {

    return (
<>
    <div className={"relative px-2"}>


        <div className={"relative z-10 saturate-50 contrast-150 opacity-50  overflow-clip  w-full"} >
            <div className={"bg-[#030014]/10 overflow-hidden h-full z-30  absolute w-full"}>

            </div>
            <Image className={"z-10  flex rounded-t-3xl justify-center m-auto "}  src={"/images/eventImagel.png"} alt={"Trusted by Section"}
                   width={1000}
                   height={1000}
            />
            <Trusted/>

        </div>

    </div>
</>
    );
};
