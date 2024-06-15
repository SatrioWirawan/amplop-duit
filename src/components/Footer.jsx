import Image from "next/image";
import Social from "./Social";
import logo from '../../public/img/logo.png';

export default function Footer() {
  return (
    <footer className="bg-neutral-100 p-4 lg:p-8">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="mx-auto lg:mx-0 flex justify-center lg:justify-start items-center">
          <Image src={logo} className="w-[50%] lg:w-[40%]" alt="logo" />
        </div>
        <div className="mx-auto lg:col-span-2 mt-6 lg:mt-20 flex flex-col items-center">
          <h3 className="text-center font-medium mb-4">Amplop Duit Social Media:</h3>
          <Social className='mx-auto' />
        </div>
        <div className="col-span-1 lg:col-span-3 mt-6">
          <hr className="border-t border-gray-300 mb-4" />
          <h4 className="text-center">Satrio Wirawan &#169; 2024.</h4>
        </div>
      </div>
    </footer>
  )
}