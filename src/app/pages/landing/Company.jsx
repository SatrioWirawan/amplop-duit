import Image from 'next/image';
import img from '../../../../public/img/section-5.png';

export default function CompanyOv() {
    return (
        <section className="h-fit p-4 md:p-8 lg:p-12 m-4 md:m-12 lg:m-20 rounded-xl">
            <div className="m-4 md:m-8 lg:m-10 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-8 lg:mb-10">Our Company</h2>
                <p className="text-base md:text-lg lg:text-xl">
                    <span className="font-extrabold">PT. Media Literasi Nusantara</span> didirikan dengan visi untuk meningkatkan literasi keuangan di seluruh Indonesia. Menyadari kebutuhan akan pendidikan keuangan yang mudah diakses dan sederhana, kami mengembangkan <span className="font-extrabold">Amplop Duit</span>, sebuah produk yang dirancang untuk membantu individu mengelola uang mereka dengan efektif.
                </p>
            </div>
            <div className="flex justify-center m-4 md:m-8 lg:m-10">
                <Image src={img} className="w-full md:w-1/2 lg:w-2/5" alt="section 4 image" />
            </div>
        </section>
    );
}