import VideoPlayer from "@/components/Player";
import Link from "next/link";

export default function Product() {
    return (
        <section
            className="h-auto p-4 md:p-8 lg:p-12 m-4 md:m-8 lg:m-20 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4"
            style={{ backgroundColor: '#f5f5f7' }}
        >
            <div id="player" className="col-span-1 m-auto grid place-items-center">
                <VideoPlayer />
            </div>
            <div className="col-span-2 p-4 md:p-8 lg:p-20 grid place-items-center">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mt-4 md:mt-8 lg:mt-16">
                        Apa Itu <span className="font-extrabold">Amplop Duit</span>?
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl font-light mt-4 mb-8 mx-4 md:mx-8 lg:mx-40">
                        <span className="font-semibold">Amplop Duit </span>merupakan aplikasi manajemen keuangan. Tidak hanya itu, Amplop Duit juga merupakan aplikasi edukasi keuangan. 
                        Aplikasi ini tidak hanya berguna untuk mencatat pemasukan dan pengeluaran uang kamu, lebih dari itu kami juga memberikan layanan personal financial coach.
                    </p>
                    <Link href='/product' className='bg-black text-white hover:bg-gray-400 border rounded-lg p-2 md:p-4 mb-8 md:mb-16'>
                        Pelajari Lebih Lanjut..
                    </Link>
                </div>
            </div>
        </section>
    );
}