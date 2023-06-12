import Image from "next/image";
import Instagram from '../../../assets/instagram.png'

export default function Pengantin() {
    return (
        <>
            <div className={"container mx-auto hidden md:block"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <div className={"flex items-center justify-center"}>
                            <img
                                className={"rounded-full bg-auto h-[200px] w-[200px]"}
                                src="women.jpg"
                                alt=""/>
                        </div>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 "}>-
                            Tara
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>Tara Ameliawati</h1>
                        <br/>
                        <p className={"text-white"}>
                            Putri kelima <br/><span className={"font-bold"}> Bpk. Muheri & Ibu Umayyah (Almh)

                    </span>
                        </p>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <div className={"flex items-center justify-center"}>
                            <img
                                className={"rounded-full  w-[200px] h-[200px]"}
                                src="men.jpg"
                                alt=""/>
                        </div>

                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5"}>-
                            Fajrul
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>Muhammad Fajrul Amin</h1>
                        <br/>
                        <p className={"text-white mb-5 md:mb-0"}>
                            Putra Kedua <br/> <span className={"font-bold"}>Bpk. Mulyadi & Ibu Syawali Erena</span>
                        </p>
                    </div>


                </div>
            </div>
            {/*Mobile*/}
            <div className={"container mx-auto md:hidden"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                    <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 "}>-
                            Tara
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>Tara Ameliawati</h1>
                        <br/>
                        <p className={"text-white"}>
                            Putri kelima <br/><span className={"font-bold"}> Bpk. Muheri & Ibu Umayyah (Almh)

                    </span>
                        </p>

                    </div>
                    <div className={"flex items-center w-full justify-center pt-8"}>
                        <img
                            className={"rounded-full mr-10 w-[150px] h-[150px]"}
                            src="/women.jpg"
                            alt=""/>
                        <img
                            className={"rounded-full bg-auto h-[150px] w-[150px]"}
                            src="/men.jpg"
                            alt=""/>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                    <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5"}>-
                            Fajrul
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>Muhammad Fajrul Amin</h1>
                        <br/>
                        <p className={"text-white mb-5 md:mb-0"}>
                            Putra Kedua <br/> <span className={"font-bold"}>Bpk. Mulyadi & Ibu Syawali Erena</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
