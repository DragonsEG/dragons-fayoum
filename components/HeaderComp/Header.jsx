import Image from "next/image";
import Link from "next/link";

function Header(props) {
    return (
        <div
            style={{
                border: "1px solid rgb(255,255,255,0.05)"
            }}


            className={`${"text-amber-50  h-[88px] z-50   bg-[#030014]/40 z-50 grid-cols-1  md:grid-cols-3 place-items-center grid fixed w-full backdrop-blur-3xl"} ${"select-none"}`}
        >
            <div className={`${"Mobol_Logo "} ${"  md:hidden block py-2 "}`}>
            <span>
                <Image
                    src="/Identity/logotext.png"
                    alt="logo"
                    className={`${" h-[20px] "}`}
                    priority={true}
                    width={100}
                    height={20}
                    
                />
              </span>
            </div>
            <div className={` ${"hidden md:block "}`}>
                <Link className={`${"flex relative"}`} href="/">
                    <div className={`${"grid place-items-center"}`}>
                        {" "}
                        <Image
                            src="/Identity/test.svg"
                            alt="logo"
                            width={35}
                            height={35}
                            className={`${"w-[35px] h-[35px] "}`}
                        />
                    </div>
                    <span
                        className={`${" pt-[6px] text-xl text-gray-200 "}${"select-none"}`}
                    >
              <span className={`${"text-amber-50 uppercase "}`}>
                <Image
                    src="/Identity/logotext.png"
                    alt="logo"
                    className={`${" h-[20px] "}`}

                    width={100}
                    height={20}
                />
              </span>
            </span>
                </Link>
            </div>
            <div
                className={`${"max-w-[400px] min-w-[350px]   grid   h-[44px] rounded-full bg-gray-400/5 border-[0.01rem] border-gray-200/10 "} ${"select-none"}`}
            >
                <ul
                    className={`${"flex justify-around place-items-center gap-5 px-3 "}${" font-light text-gray-200 hover:text-white"}${" select-none cursor-pointer"}`}
                >
                    {
                        props.nav_links.map((nav_link) => (
                            <li key={nav_link.id}>
                                <Link href={nav_link.link}>
                            <span style={{fontFamily: "interV"}}
                                  className={`${"text-amber-50 text-sm md:text-lg capitalize "}`}>
                                {nav_link.name}
                            </span>
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
            <div>
                <button
                    className={`${"w-[100px] md:grid hidden place-items-center  h-[44px] "}${" shadow-inner shadow-3xl shadow-purple-700 hover:shadow-purple-400 duration-500 rounded-full bg-purple-900/5 "}${"select-none"}`}
                >
                    {props.Join.map((Join) => (
                        <Link key={Join.id} href={Join.link}>
                        <span style={{fontFamily: "interV"}} className={`${" text-amber-50 capitalize "}`}>
                            {Join.name}
                        </span>
                        </Link>
                    ))
                    }
                </button>
            </div>
        </div>
    );
}

export default Header