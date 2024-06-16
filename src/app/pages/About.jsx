import AboutCard from "@/components/about/AboutCard";

export default function AboutUs(){
    return (
        <main className="p-4 md:p-12 bg-neutral-100">
            <h1 className="text-5xl text-center font-extrabold mt-10">(PT) Media Literasi Nusantara</h1>
            <section className="h-auto p-4 md:p-8 lg:p-12 mx-1 my-4 md:m-8 lg:mx-20 lg:my-12 rounded-xl bg-white">
                <h2 className="text-center text-4xl font-extrabold mb-8">Sejarah</h2>
                <p className="text-center text-lg font-medium m-4 md:w-3/6 md:m-auto">Pada tahun 2018, PT Media Literasi Nusantara didirikan dengan visi untuk meningkatkan literasi keuangan di seluruh Indonesia. Menyadari kebutuhan akan pendidikan keuangan yang mudah diakses dan sederhana, kami mengembangkan Amplop Duit, sebuah produk yang dirancang untuk membantu individu mengelola uang mereka dengan efektif.</p>
            </section>
            <section className="h-auto p-4 md:p-8 lg:p-12 mx-1 my-4 md:m-8 lg:mx-20 lg:my-12 rounded-xl bg-white">
                <h2 className="text-center text-4xl font-extrabold mb-8">Layanan</h2>
                <p className="text-center text-lg font-medium mt-4">Melalui Amplop Duit, kami menawarkan berbagai layanan yang bertujuan untuk memberdayakan masyarakat dengan pengetahuan keuangan:</p>
                <ul className="sm:m-20">
                    <AboutCard/>
                </ul>
            </section>
            <section className="h-auto p-4 md:p-8 lg:p-12 mx-1 my-4 md:m-8 lg:mx-20 lg:my-12 rounded-xl bg-white">
                <h2 className="text-center text-4xl font-extrabold mb-8">Misi & Visi</h2>
                <p className="text-center text-lg font-medium m-4 md:w-3/6 md:m-auto">Misi kami adalah mendidik dan memberdayakan individu untuk mengendalikan masa depan keuangan mereka. Kami membayangkan dunia di mana setiap orang, terlepas dari latar belakang mereka, memiliki pengetahuan dan alat untuk membuat keputusan keuangan yang tepat.</p>
            </section>
            <section className="h-auto p-4 md:p-8 lg:p-12 mx-1 my-4 md:m-8 lg:mx-20 lg:my-12 rounded-xl bg-white">
                <h2 className="text-center text-4xl font-extrabold mb-8">Pencapaian</h2>
                <ul className="flex flex-col items-center space-y-4 text-center">
                    <li className="flex flex-col items-center">
                        <h3 className="font-semibold text-xl mb-2">Program Pemenang Penghargaan</h3>
                        <p className="text-gray-700 text-lg">Workshop edukasi kami telah diakui karena dampak dan efektivitasnya.</p>
                    </li>
                    <li className="flex flex-col items-center">
                        <h3 className="font-semibold text-xl mb-2">Kemitraan</h3>
                        <p className="text-gray-700 text-lg">Kolaborasi dengan sekolah, organisasi komunitas, dan institusi keuangan untuk memperluas jangkauan kami.</p>
                    </li>
                    <li className="flex flex-col items-center">
                        <h3 className="font-semibold text-xl mb-2">Pertumbuhan</h3>
                        <p className="text-gray-700 text-lg">Basis pengguna yang berkembang pesat, dengan ribuan individu yang mendapatkan manfaat dari layanan kami.</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}