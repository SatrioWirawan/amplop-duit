import Image from 'next/image';
import Social from '../../../components/Social';

import { FaGooglePlay } from "react-icons/fa6";
import { GrAppleAppStore } from "react-icons/gr";

import heroImage from '../../../../public/img/logo800x800.png';
import backgroundImg from '../../../../public/img/bg.png';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative bg-cover bg-center min-h-screen lg:min-h-[600px]" style={{ backgroundImage: `url(${backgroundImg.src})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative max-w-screen-lg mx-auto w-11/12 lg:w-9/12 p-6 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
                <div className="text-center lg:text-start py-24 lg:py-48 h-full flex flex-col justify-center col-span-1">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        <span className='font-medium'>Selamat Datang di</span> Amplop Duit!
                    </h2>
                    <p className='text-lg md:text-xl py-2 text-white'>
                        Aplikasi Management Keuangan & Financial Coach No. 1 di Indonesia!
                    </p>
                    <div className='flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mt-4'>
                        <Link href="" target="_blank">
                            <button className="bg-transparent border-solid border-2 border-white text-white rounded-xl px-2 py-1 w-40 flex items-center justify-center space-x-3 hover:bg-gray-400 hover:text-black" style={{ cursor: 'pointer' }}>
                                <FaGooglePlay className='w-6' />
                                <span>Google Play</span>
                            </button>
                        </Link>
                        <Link href="" target="_blank">
                            <button className="bg-transparent border-solid border-2 border-white text-white rounded-xl px-2 py-1 w-40 flex items-center justify-center space-x-3 hover:bg-gray-400 hover:text-black" style={{ cursor: 'pointer' }}>
                                <GrAppleAppStore className='w-6' />
                                <span>App Store</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-center mt-4 lg:mt-0">
                    <Image src={heroImage} width={400} height={400} alt='hero image' />
                </div>
            </div>
        </section>
    )
}
