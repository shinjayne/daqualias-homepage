'use client'

import Link from "next/link";
import useWindowDimensions from "@/hook/useWindowDimensions";

export default function Home() {

    const {width} = useWindowDimensions()
    if (width < 1000) {
        return (
            <>
                <div className={'flex flex-col justify-center items-center h-screen'}>

                    <img src={'/assets/logo-w.svg'} className={'w-[90vw] h-auto'}/>

                    <div className={'text-white text-center mt-2 mb-6 p-4'}>We make something for those who love all the
                        creativity and
                        culture.
                    </div>
                    <Link
                        className={'border-white border-[1px] p-2 cursor-pointer hover:bg-white hover:text-black mb-12'}
                        href={'https://instagram.com/daqualias'}>instagram</Link>


                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={'flex flex-col justify-center items-center'}>
                    <img src={'/assets/logo-w.svg'} className={'h-[20vh] w-fit'}/>
                    <img src={'/assets/logo-w.svg'} className={'h-[20vh] w-fit'}/>
                    <img src={'/assets/logo-w.svg'} className={'h-[20vh] w-fit'}/>
                    <div className={'text-white text-center mt-6 mb-6'}>We make something for those who love all the
                        creativity and
                        culture.
                    </div>
                    <Link
                        className={'border-white border-[1px] p-2 cursor-pointer hover:bg-white hover:text-black mb-12'}
                        href={'https://instagram.com/daqualias'}>instagram</Link>
                    <img src={'/assets/logo-w.svg'} className={'h-[20vh] w-fit'}/>
                    <img src={'/assets/logo-w.svg'} className={'h-[20vh] w-fit'}/>
                    <img src={'/assets/logo-w.svg'} className={'h-[20vh] w-fit'}/>

                </div>
            </>
        );
    }

}
