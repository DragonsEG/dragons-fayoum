import Image from "next/image";
import Trusted from "./Trusted";
import SliderTrusted from "./SliderTrustedImages";

export const TrustedSection = () => {

    return (
        <>
            <div className={"relative px-2"}>


                <div className={"relative z-10 saturate-50 contrast-150 opacity-50  overflow-clip  w-full"}>

                
                    <SliderTrusted/>

                    <div className={"z-40  relative"}>
                        <Trusted/>

                    </div>
                </div>

            </div>
        </>
    );
};
