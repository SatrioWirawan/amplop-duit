import PricingCard from "@/components/product/PricingCard";
import TestimoniesCarousel from "@/components/testimony/TestimonyCarousel";

export default function ProductPage() {
    return (
        <main>
            <section className="p-6 md:p-12 mx-4 md:mx-20">
                <h1 className="text-3xl md:text-6xl text-center font-extrabold mt-10">Our Product</h1>
            </section>
            <section className="p-6 md:p-12 mx-4 md:mx-20 mt-4 rounded-xl bg-gray-100">
                <h2 className="text-2xl md:text-4xl text-center font-extrabold mb-10">Amplop Duit Financial Planner</h2>
                <p className="mx-4 md:mx-10">Salah satu fitur unggulan dari Amplop Duit adalah Personal Financial Planner. Fitur ini dirancang untuk memberikan pengalaman perencanaan keuangan yang personal dan disesuaikan dengan kebutuhan individu, melalui bantuan langsung dari profesional financial planner.</p>
                <h4 className="font-extrabold mx-4 md:mx-10 mt-6">Keunggulan Fitur Personal Financial Planner:</h4>
                <div className="flex flex-wrap justify-center gap-6 mx-4 md:mx-10 lg:mx-60 mt-10">
                    <div className="p-6 md:p-12 w-full md:w-80 rounded-xl bg-white flex flex-col items-center text-center min-h-[340px]">
                        <span className="font-extrabold">Konsultasi Pribadi:</span>
                        <br />
                        Anda akan mendapatkan kesempatan untuk berkonsultasi langsung dengan ahli keuangan yang berpengalaman.
                    </div>
                    <div className="p-6 md:p-12 w-full md:w-80 rounded-xl bg-white flex flex-col items-center text-center mt-6 lg:mt-0">
                        <span className="font-extrabold">Rencana Keuangan yang Disesuaikan:</span>
                        <br />
                        Ahli keuangan akan membantu Anda menyusun rencana keuangan yang terperinci, mencakup penganggaran, tabungan, investasi, dan manajemen utang.
                    </div>
                    <div className="p-6 md:p-12 w-full md:w-80 rounded-xl bg-white flex flex-col items-center text-center mt-6 lg:mt-0">
                        <span className="font-extrabold">Pemantauan dan Evaluasi Berkala:</span>
                        <br />
                        Setelah rencana keuangan disusun, ahli keuangan akan terus memantau perkembangan keuangan Anda dan melakukan evaluasi berkala.
                    </div>
                    <div className="p-6 md:p-12 w-full md:w-80 rounded-xl bg-white flex flex-col items-center text-center mt-6 lg:mt-0">
                        <span className="font-extrabold">Edukasi Berkelanjutan:</span>
                        <br />
                        Selain memberikan rencana keuangan, ahli keuangan juga akan memberikan edukasi berkelanjutan tentang berbagai aspek keuangan.
                    </div>
                    <div className="p-6 md:p-12 w-full md:w-80 rounded-xl bg-white flex flex-col items-center text-center mt-6 lg:mt-0">
                        <span className="font-extrabold">Akses ke Sumber Daya Tambahan:</span>
                        <br />
                        Sebagai pengguna layanan Personal Financial Planner, Anda akan mendapatkan akses eksklusif ke berbagai sumber daya tambahan, seperti artikel, video, dan alat bantu keuangan lainnya yang dapat mendukung perjalanan keuangan Anda.
                    </div>
                </div>
                <p className="mx-4 md:mx-10 mt-6">Dengan fitur Personal Financial Planner dari Amplop Duit, Anda tidak hanya mendapatkan rencana keuangan yang komprehensif, tetapi juga dukungan berkelanjutan dari ahli keuangan yang berdedikasi untuk membantu Anda mencapai tujuan keuangan Anda.</p>
            </section>
            <section className="p-6 md:p-12 mx-4 md:mx-20 my-4 rounded-xl">
                <h2 className="text-2xl md:text-4xl text-center font-extrabold mb-10">Amplop Duit Premium</h2>
                <PricingCard />
            </section>
            <section className="p-6 md:p-12 mx-4 md:mx-20 my-4 rounded-xl">
                <h2 className="text-2xl md:text-4xl text-center font-extrabold mb-10">Testimoni Pengguna</h2>
                <TestimoniesCarousel />
            </section>
        </main>
    )
}
